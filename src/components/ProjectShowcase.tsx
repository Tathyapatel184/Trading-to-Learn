import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/projects';
import { ArrowUpRight, X, ShieldCheck, Ruler, Leaf, Award } from 'lucide-react';

interface ProjectShowcaseProps {
  onInquireProject: (projectTitle: string) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onInquireProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'residential' | 'civic' | 'industrial'>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 border-b border-neutral-800/80 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
              Selected Works
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
              Architectural monoliths & precision systems.
            </h2>
          </div>

          {/* Filter Segmented Control */}
          <div className="flex items-center gap-1 p-1 bg-neutral-900 border border-neutral-800 rounded-lg shrink-0 overflow-x-auto max-w-full">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Typologies ({PROJECTS.length})
            </button>
            <button
              onClick={() => setSelectedCategory('residential')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'residential'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Residential Monoliths
            </button>
            <button
              onClick={() => setSelectedCategory('civic')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'civic'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Civic & Cultural
            </button>
            <button
              onClick={() => setSelectedCategory('industrial')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'industrial'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Industrial Hardware
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group flex flex-col justify-between rounded-xl border border-neutral-800 bg-neutral-900/60 overflow-hidden hover:border-neutral-700 transition-all cursor-pointer"
            >
              {/* Media Slot */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute top-4 right-4 p-2.5 rounded-full bg-neutral-950/80 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Card Meta & Content */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  {/* Clean Zero-Pill Metadata */}
                  <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono mb-2">
                    <span>{project.location}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.year}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.area}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-neutral-200 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-neutral-400 font-medium mt-1">
                    {project.subtitle}
                  </p>

                  <p className="text-sm text-neutral-300 mt-3 leading-relaxed line-clamp-2">
                    {project.summary}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                  <div className="text-neutral-400">
                    <span className="text-neutral-500">Metric: </span>
                    <span className="text-neutral-300 font-mono font-medium">{project.carbonMetric}</span>
                  </div>
                  <span className="text-white font-medium group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                    <span>View Specifications</span>
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {activeProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setActiveProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl border border-neutral-800 bg-neutral-950 text-neutral-100 p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-6 right-6 p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="max-w-2xl pr-8">
              <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono mb-2">
                <span>{activeProject.location}</span>
                <span aria-hidden="true">·</span>
                <span>{activeProject.year}</span>
                <span aria-hidden="true">·</span>
                <span>{activeProject.area}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {activeProject.title}
              </h3>
              <p className="text-sm text-neutral-400 mt-1">
                {activeProject.subtitle}
              </p>
            </div>

            {/* Modal Image */}
            <div className="mt-6 rounded-lg overflow-hidden border border-neutral-800 aspect-[16/9] w-full bg-neutral-900">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Technical Specification Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-8 border-t border-neutral-800">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-2">
                  <Ruler className="w-3.5 h-3.5 text-neutral-300" />
                  <span>Program & Envelope</span>
                </h4>
                <div className="space-y-3 text-sm text-neutral-300">
                  <div>
                    <p className="text-xs text-neutral-500">Spatial Program</p>
                    <p className="font-medium mt-0.5">{activeProject.details.program}</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500">Façade Envelope System</p>
                    <p className="font-medium mt-0.5">{activeProject.details.envelope}</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500">Primary Structural Materials</p>
                    <p className="font-medium mt-0.5">{activeProject.materials.join(' · ')}</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-2">
                  <Leaf className="w-3.5 h-3.5 text-neutral-300" />
                  <span>Sustainability & Engineering</span>
                </h4>
                <div className="space-y-3 text-sm text-neutral-300">
                  <div>
                    <p className="text-xs text-neutral-500">Energy & Performance Standard</p>
                    <p className="font-medium mt-0.5">{activeProject.details.energyStandard}</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500">Carbon & Material Profile</p>
                    <p className="font-medium mt-0.5 text-white">{activeProject.carbonMetric}</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500">Structural Engineering Partner</p>
                    <p className="font-medium mt-0.5">{activeProject.structuralPartner}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accolades & Challenge Solved */}
            <div className="mt-6 pt-6 border-t border-neutral-800 space-y-4">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-neutral-300" />
                  <span>Engineering Challenges Overcome</span>
                </h4>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {activeProject.details.challengesSolved}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-neutral-300" />
                  <span>Recognitions & Monograph Citations</span>
                </h4>
                <p className="text-sm text-neutral-400 font-medium">
                  {activeProject.details.accolades}
                </p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-neutral-400">
                Detailed CAD, BIM schemas, and physical samples available upon direct request.
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    const title = activeProject.title;
                    setActiveProject(null);
                    onInquireProject(title);
                  }}
                  className="px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-white rounded-md hover:bg-neutral-200 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Inquire About Similar Project
                </button>
                <button
                  onClick={() => setActiveProject(null)}
                  className="px-4 py-2.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 rounded-md transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
