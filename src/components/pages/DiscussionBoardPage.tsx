import React, { useState } from 'react';
import { DiscussionPost, DiscussionComment } from '../../types';
import { INITIAL_DISCUSSIONS } from '../../data/discussionsData';
import { MessageSquare, ThumbsUp, Tag, Plus, Search, CheckCircle, ShieldCheck, Calendar, Filter, Send, User } from 'lucide-react';

export const DiscussionBoardPage: React.FC = () => {
  const [discussions, setDiscussions] = useState<DiscussionPost[]>(INITIAL_DISCUSSIONS);
  const [selectedTopic, setSelectedTopic] = useState<string>('All Topics');
  const [selectedDay, setSelectedDay] = useState<string>('All Days');
  const [searchQuery, setSearchQuery] = useState('');
  
  // New post modal state
  const [isCreatingPost, setIsCreatingPost] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newUniversity, setNewUniversity] = useState('');
  const [newTopic, setNewTopic] = useState<DiscussionPost['topic']>('AI & Semiconductor Trade');
  const [newDay, setNewDay] = useState('Monday');
  const [newTickers, setNewTickers] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newClassCredit, setNewClassCredit] = useState(true);

  // Active expanded comments map (postId -> boolean)
  const [expandedComments, setExpandedComments] = useState<{ [postId: string]: boolean }>({
    'disc-01': true,
    'disc-03': true
  });
  const [commentInputs, setCommentInputs] = useState<{ [postId: string]: string }>({});

  const topicsList = [
    'All Topics',
    'AI & Semiconductor Trade',
    'Space Economy & Defense',
    'Macro & Interest Rates',
    'Algo & Execution Latency',
    'Weekly Trade Post-Mortem',
    'Course Class Discussion'
  ];

  const daysList = ['All Days', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const filteredDiscussions = discussions.filter((post) => {
    const matchesTopic = selectedTopic === 'All Topics' || post.topic === selectedTopic;
    const matchesDay = selectedDay === 'All Days' || post.dayLabel === selectedDay;
    const matchesSearch =
      !searchQuery.trim() ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.taggedTickers.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      post.authorUniversity.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTopic && matchesDay && matchesSearch;
  });

  const handleUpvote = (postId: string) => {
    setDiscussions((prev) =>
      prev.map((p) => (p.id === postId ? { ...p, upvotes: p.upvotes + 1 } : p))
    );
  };

  const handleToggleComments = (postId: string) => {
    setExpandedComments((prev) => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const handleAddComment = (postId: string) => {
    const text = commentInputs[postId]?.trim();
    if (!text) return;

    const newComment: DiscussionComment = {
      id: `c-${Date.now()}`,
      authorName: 'Student Contributor',
      authorUniversity: 'Participating University',
      authorRole: 'Student Trader',
      date: new Date().toISOString().split('T')[0],
      content: text,
      upvotes: 0
    };

    setDiscussions((prev) =>
      prev.map((p) =>
        p.id === postId
          ? { ...p, comments: [...p.comments, newComment] }
          : p
      )
    );

    setCommentInputs((prev) => ({ ...prev, [postId]: '' }));
    setExpandedComments((prev) => ({ ...prev, [postId]: true }));
  };

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim() || !newAuthor.trim()) return;

    const tickers = newTickers
      .split(',')
      .map((t) => t.trim().toUpperCase().replace('$', ''))
      .filter(Boolean);

    const post: DiscussionPost = {
      id: `disc-${Date.now()}`,
      title: newTitle,
      authorName: newAuthor,
      authorUniversity: newUniversity || 'Collegiate Participant',
      authorRole: 'Student Portfolio Manager',
      date: new Date().toISOString().split('T')[0],
      dayLabel: newDay,
      topic: newTopic,
      taggedTickers: tickers.length > 0 ? tickers : ['SPY'],
      content: newContent,
      upvotes: 1,
      classCreditVerified: newClassCredit,
      comments: []
    };

    setDiscussions([post, ...discussions]);
    setIsCreatingPost(false);
    setNewTitle('');
    setNewContent('');
    setNewTickers('');
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-800 pb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 tracking-wider uppercase mb-2">
            <span>TradeToLearn Academic Forum</span>
            <span aria-hidden="true">·</span>
            <span>Course Credit Verified</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            Financial Discussion Board & Trade Post-Mortems.
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-3xl leading-relaxed">
            Where students defend investment theses, dissect execution latency, and debate thematic sector trends 
            (Space Economy, AI Compute, Macro Yields) to earn course discussion credit.
          </p>
        </div>

        <button
          onClick={() => setIsCreatingPost(true)}
          className="px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-white rounded-md hover:bg-neutral-200 transition-colors flex items-center gap-2 cursor-pointer whitespace-nowrap self-start md:self-auto shrink-0 shadow-sm"
        >
          <Plus className="w-4 h-4" />
          <span>New Trade Discussion</span>
        </button>
      </div>

      {/* Classroom Credit Notice */}
      <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/50 flex items-start gap-3 text-xs text-neutral-300">
        <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-white block">Course Participation Requirement:</span>
          <span className="text-neutral-400 leading-relaxed block mt-0.5">
            Finance 301 / 450 students: Remember to post your team's weekly trade rationale and reply to at least one peer thesis before each Friday rebalance to receive full lab discussion credit.
          </span>
        </div>
      </div>

      {/* Filters & Search Toolbar */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search discussions or tickers ($NVDA, $RKLB)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-md bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600"
            />
          </div>

          {/* Day of Week Filter */}
          <div className="flex items-center gap-1 p-1 bg-neutral-900 border border-neutral-800 rounded-lg overflow-x-auto max-w-full text-xs">
            {daysList.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  selectedDay === day
                    ? 'bg-neutral-800 text-white font-medium shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

        </div>

        {/* Topic Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          <span className="text-neutral-500 font-mono text-[11px] uppercase whitespace-nowrap">
            Topic:
          </span>
          {topicsList.map((topic) => (
            <button
              key={topic}
              onClick={() => setSelectedTopic(topic)}
              className={`px-3 py-1 rounded-full border transition-all whitespace-nowrap cursor-pointer ${
                selectedTopic === topic
                  ? 'border-emerald-500/50 bg-emerald-950/60 text-emerald-300 font-medium'
                  : 'border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:text-white hover:border-neutral-700'
              }`}
            >
              {topic}
            </button>
          ))}
        </div>
      </div>

      {/* Discussion Posts Feed */}
      <div className="space-y-6">
        {filteredDiscussions.length === 0 ? (
          <div className="text-center py-16 rounded-xl border border-neutral-800 bg-neutral-900/20 text-neutral-400 text-xs">
            No discussions found for current filter criteria. Be the first to start a thread!
          </div>
        ) : (
          filteredDiscussions.map((post) => {
            const isCommentsOpen = !!expandedComments[post.id];
            return (
              <article
                key={post.id}
                className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 sm:p-7 space-y-4 hover:border-neutral-700 transition-colors"
              >
                {/* Meta line */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-neutral-950 border border-neutral-800 text-neutral-300 font-mono text-[11px]">
                      {post.topic}
                    </span>
                    <span className="text-neutral-400 font-mono text-[11px]">
                      {post.dayLabel} · {post.date}
                    </span>
                    {post.classCreditVerified && (
                      <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium font-mono">
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>Verified Course Credit</span>
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5">
                    {post.taggedTickers.map((ticker) => (
                      <span
                        key={ticker}
                        className="px-2 py-0.5 rounded font-mono font-bold text-[11px] bg-neutral-950 border border-neutral-800 text-sky-400"
                      >
                        ${ticker}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Post Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                  {post.title}
                </h3>

                {/* Author Info */}
                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <div className="w-6 h-6 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-white text-[10px] font-bold">
                    {post.authorName.charAt(0)}
                  </div>
                  <div>
                    <span className="text-white font-medium">{post.authorName}</span>
                    <span aria-hidden="true" className="text-neutral-600 mx-1.5">·</span>
                    <span>{post.authorUniversity}</span>
                    <span aria-hidden="true" className="text-neutral-600 mx-1.5">·</span>
                    <span className="text-neutral-500">{post.authorRole}</span>
                  </div>
                </div>

                {/* Post Body */}
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed whitespace-pre-line">
                  {post.content}
                </p>

                {/* Footer Controls (Upvote & Comments toggle) */}
                <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleUpvote(post.id)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-neutral-950 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors cursor-pointer"
                    >
                      <ThumbsUp className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="font-mono font-semibold">{post.upvotes}</span>
                      <span className="hidden sm:inline text-neutral-500">Upvotes</span>
                    </button>

                    <button
                      onClick={() => handleToggleComments(post.id)}
                      className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>{post.comments.length} Comments</span>
                    </button>
                  </div>

                  <span className="text-[11px] font-mono text-neutral-500">
                    TradeToLearn Peer Review Thread
                  </span>
                </div>

                {/* Comments Drawer */}
                {isCommentsOpen && (
                  <div className="mt-4 pt-4 border-t border-neutral-800/60 space-y-4">
                    {post.comments.map((comment) => (
                      <div
                        key={comment.id}
                        className="p-3.5 rounded-lg bg-neutral-950/80 border border-neutral-800 text-xs space-y-1.5"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-white">{comment.authorName}</span>
                            <span className="text-neutral-500 font-mono text-[10px]">
                              {comment.authorUniversity} ({comment.authorRole})
                            </span>
                          </div>
                          <span className="text-neutral-500 font-mono text-[10px]">{comment.date}</span>
                        </div>
                        <p className="text-neutral-300 leading-relaxed">{comment.content}</p>
                      </div>
                    ))}

                    {/* New comment input */}
                    <div className="flex items-center gap-2 pt-2">
                      <input
                        type="text"
                        placeholder="Contribute to this discussion / add your team's trade counter-thesis..."
                        value={commentInputs[post.id] || ''}
                        onChange={(e) =>
                          setCommentInputs({ ...commentInputs, [post.id]: e.target.value })
                        }
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            handleAddComment(post.id);
                          }
                        }}
                        className="flex-grow px-3 py-2 text-xs rounded bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600"
                      />
                      <button
                        onClick={() => handleAddComment(post.id)}
                        className="px-4 py-2 text-xs font-semibold text-neutral-950 bg-white rounded hover:bg-neutral-200 transition-colors cursor-pointer flex items-center gap-1.5"
                      >
                        <Send className="w-3 h-3" />
                        <span>Reply</span>
                      </button>
                    </div>
                  </div>
                )}
              </article>
            );
          })
        )}
      </div>

      {/* New Post Modal */}
      {isCreatingPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl border border-neutral-800 bg-neutral-950 text-neutral-100 p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="border-b border-neutral-800 pb-3">
              <h3 className="text-xl font-bold text-white">Create New Trade Discussion</h3>
              <p className="text-xs text-neutral-400 mt-1">
                Post your trade rationale, sector thesis, or execution analysis for class peer review.
              </p>
            </div>

            <form onSubmit={handleCreatePost} className="space-y-4 text-xs">
              <div>
                <label className="block text-neutral-300 font-medium mb-1">Discussion Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Space Economy: Why we initiated a position in $RKLB following commercial contract awards"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-neutral-600"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-300 font-medium mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maya Lindqvist"
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    className="w-full px-3 py-2 rounded bg-neutral-900 border border-neutral-800 text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-neutral-300 font-medium mb-1">University / Department</label>
                  <input
                    type="text"
                    placeholder="e.g. MIT Sloan"
                    value={newUniversity}
                    onChange={(e) => setNewUniversity(e.target.value)}
                    className="w-full px-3 py-2 rounded bg-neutral-900 border border-neutral-800 text-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-neutral-300 font-medium mb-1">Discussion Topic</label>
                  <select
                    value={newTopic}
                    onChange={(e) => setNewTopic(e.target.value as any)}
                    className="w-full px-3 py-2 rounded bg-neutral-900 border border-neutral-800 text-white focus:outline-none"
                  >
                    <option value="AI & Semiconductor Trade">AI & Semiconductor Trade</option>
                    <option value="Space Economy & Defense">Space Economy & Defense</option>
                    <option value="Macro & Interest Rates">Macro & Interest Rates</option>
                    <option value="Algo & Execution Latency">Algo & Execution Latency</option>
                    <option value="Weekly Trade Post-Mortem">Weekly Trade Post-Mortem</option>
                    <option value="Course Class Discussion">Course Class Discussion</option>
                  </select>
                </div>

                <div>
                  <label className="block text-neutral-300 font-medium mb-1">Day of Week</label>
                  <select
                    value={newDay}
                    onChange={(e) => setNewDay(e.target.value)}
                    className="w-full px-3 py-2 rounded bg-neutral-900 border border-neutral-800 text-white focus:outline-none"
                  >
                    <option value="Monday">Monday (Market Open)</option>
                    <option value="Tuesday">Tuesday (Macro)</option>
                    <option value="Wednesday">Wednesday (Mid-Week)</option>
                    <option value="Thursday">Thursday (Earnings)</option>
                    <option value="Friday">Friday (Rebalance)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-neutral-300 font-medium mb-1">Tickers (comma separated)</label>
                  <input
                    type="text"
                    placeholder="NVDA, RKLB, SPY"
                    value={newTickers}
                    onChange={(e) => setNewTickers(e.target.value)}
                    className="w-full px-3 py-2 rounded bg-neutral-900 border border-neutral-800 text-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-neutral-300 font-medium mb-1">
                  Investment Thesis & Trade Post-Mortem Rationale *
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Detail your valuation framework, factor risks, why you entered/exited, and how you managed the 15% position ceiling..."
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  className="w-full px-3 py-2 rounded bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-neutral-600"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="credit-checkbox"
                  checked={newClassCredit}
                  onChange={(e) => setNewClassCredit(e.target.checked)}
                  className="accent-emerald-400 rounded cursor-pointer"
                />
                <label htmlFor="credit-checkbox" className="text-neutral-300 cursor-pointer">
                  Submit this thread for Finance Course Class Discussion Credit
                </label>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsCreatingPost(false)}
                  className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-semibold text-neutral-950 bg-white rounded hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  Publish Discussion Thread
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
