import React from 'react';
import { FileText, Download, FileSpreadsheet, ShieldCheck, Check } from 'lucide-react';

export const OfficialDocuments: React.FC = () => {
  const downloadDocument = (type: 'syllabus' | 'faculty' | 'memo' | 'csv') => {
    let filename = '';
    let content = '';

    if (type === 'syllabus') {
      filename = 'TradingToLearn_Spring_2026_Official_Syllabus.txt';
      content = `================================================================================
TRADINGTOLEARN COLLEGIATE TRADING & PORTFOLIO MANAGEMENT CHALLENGE
Official Competition Syllabus & Course Guide · Academic Year 2026
================================================================================

1. COURSE & COMPETITION OVERVIEW
TradingToLearn is an independent intercollegiate academic simulation designed to 
teach university student teams institutional portfolio construction, quantitative 
risk budgeting, and factor attribution without exposing participants to real financial risk.

2. VIRTUAL PAPER PORTFOLIO MANDATE
- Initial Capital Allocation: $1,000,000.00 USD (Paper Equity)
- Account Classification: Reg-T Cash Simulation (No Margin / Naked Shorting / No Stocks < $5)
- Single Position Concentration Cap: 10.0% of Total Portfolio NAV (Rule 2.3)
- Minimum Invested Requirement: ≥ 90.0% Invested after Week 2 (Rule 2.2)
- Mandatory Trade Notes: 2–3 sentence rationale required per trade (Rule 4.1)
- Maximum Gross Portfolio Leverage: 1.0x

3. ELIGIBLE ASSET UNIVERSE
- Major US Listed Equities (NYSE, NASDAQ) with Market Cap > $1.0B and Price >= $5.00.
- Liquid Broad-Market & Fixed Income Exchange-Traded Funds (SPY, QQQ, TLT, IWM, etc.).
- Margin borrowing, short selling, and stocks priced under $5 are strictly prohibited.

4. OFFICIAL SCHEDULE & CALENDAR
- January 15: Registration Opens (Teams of 3–5 with 1 Faculty Advisor)
- February 01: Competition Starts (Market open, $1,000,000 cash funded)
- April 30: Final Trading Day (Market close, portfolios locked)
- May 15: Results & Awards (Faculty scoring finalized)

5. EVALUATION CRITERIA (70 / 30 SCORING MODEL)
- 70% Portfolio Return Relative to S&P 500 Total Return Benchmark
- 30% Quality of Mandatory Trade Notes and Weekly Educational Reflections

Issued by the TradingToLearn Academic Steering Committee
Governing Inquiries: governance@tradingtolearn.org
================================================================================`;
    } else if (type === 'faculty') {
      filename = 'TradingToLearn_Faculty_Advisor_Verification_Form.txt';
      content = `================================================================================
TRADINGTOLEARN COLLEGIATE TRADING CHALLENGE
OFFICIAL FACULTY ADVISOR VERIFICATION & SPONSORSHIP FORM
================================================================================

INSTRUCTIONS FOR FACULTY ADVISORS:
Please review and affirm your student team's participation in the TradingToLearn 
Collegiate Challenge. Completed forms should be retained in the department archive 
and submitted via the faculty portal.

INSTITUTIONAL INFORMATION:
University / College Name: __________________________________________________
Academic Department: _______________________________________________________
Campus Location / Office: __________________________________________________

FACULTY SPONSOR DETAILS:
Faculty Advisor Name: ______________________________________________________
Academic Title / Position: _________________________________________________
Institutional Email (.edu): ________________________________________________
Office Phone Number: _______________________________________________________

STUDENT TEAM PARTICULARS:
Team Name: _________________________________________________________________
Division: [ ] Undergraduate   [ ] Master of Finance / MBA
Designated Student Team Lead: _______________________________________________
Team Lead Student ID & Email: ______________________________________________

ACADEMIC INTEGRITY PLEDGE:
"As Faculty Advisor, I verify that the registered student members are actively enrolled 
in good academic standing at our institution. I acknowledge that TradingToLearn is an 
independent educational simulation requiring strict adherence to collegiate honor codes, 
fiduciary single-stock concentration caps (10.0%), 90% invested constraint, and mandatory 
2–3 sentence trade rationales for all executions."

Faculty Advisor Signature: ___________________________ Date: ________________

Please upload digital copy to: governance@tradingtolearn.org
================================================================================`;
    } else if (type === 'memo') {
      filename = 'TradingToLearn_5_Page_Investment_Committee_Memo_Template.txt';
      content = `================================================================================
TRADINGTOLEARN COLLEGIATE CHALLENGE
5-PAGE INVESTMENT COMMITTEE STRATEGY MEMORANDUM TEMPLATE
================================================================================

TEAM ID: [e.g. TTL-SPR26-4821]
TEAM NAME: [e.g. Alpha Variance Quantitative]
UNIVERSITY: [e.g. Massachusetts Institute of Technology]
DIVISION: [Undergraduate / Graduate]
DATE OF SUBMISSION: [Month Day, 2026]

--------------------------------------------------------------------------------
SECTION 1: EXECUTIVE SUMMARY & STRATEGY MANDATE (1 PAGE)
--------------------------------------------------------------------------------
- Summary of portfolio philosophy (Fundamental, Quantitative, Macro, or Multi-Strategy).
- Inception NAV ($1,000,000) vs Final NAV and Total Return achieved.
- Official Sharpe Ratio, Sortino Ratio, and Alpha vs S&P 500 TR Benchmark.
- High-level explanation of principal alpha drivers.

--------------------------------------------------------------------------------
SECTION 2: MACROECONOMIC REGIME & FACTOR ALLOCATION (1 PAGE)
--------------------------------------------------------------------------------
- Top-down macroeconomic thesis (interest rate expectations, inflation, yield curve posture).
- Factor tilts deployed (Value, Momentum, Quality, Low-Volatility, Size).
- Sector exposure distribution table (verifying no sector exceeded 35% concentration).

--------------------------------------------------------------------------------
SECTION 3: PORTFOLIO HOLDINGS & ATTRIBUTION DECOMPOSITION (1.5 PAGES)
--------------------------------------------------------------------------------
- Deep-dive into top 3 winning positions and bottom 2 detractors.
- Specific fundamental catalysts or quantitative signals that led to entry and exit.
- Valuation framework used (DCF, EV/EBITDA, peer multiple compression, P/E to growth).

--------------------------------------------------------------------------------
SECTION 4: RISK MANAGEMENT & RULE COMPLIANCE AUDIT (1 PAGE)
--------------------------------------------------------------------------------
- Explanation of adherence to Rule 2.2 (15% maximum single-stock ceiling).
- Peak-to-trough drawdown analysis and protective stop-loss triggers executed.
- Minimum cash reserve maintenance (2% unencumbered liquidity preservation).

--------------------------------------------------------------------------------
SECTION 5: POST-MORTEM & PEDAGOGICAL LEARNINGS (0.5 PAGES)
--------------------------------------------------------------------------------
- Key lessons in market psychology, liquidity slippage, and behavioral risk control.
- How this simulation prepared student members for institutional careers.

================================================================================`;
    } else if (type === 'csv') {
      filename = 'TradingToLearn_Weekly_Portfolio_Audit_Worksheet.csv';
      content = `Ticker,Security Name,Sector,Shares,Purchase Price,Current Market Price,Total Position Value,Portfolio NAV Weight (%),Rule 2.2 Compliance (<15%),Unrealized Profit/Loss ($),Unrealized Return (%)
MSFT,Microsoft Corporation,Technology,250,420.00,438.60,109650.00,10.97%,PASS,4650.00,4.43%
JPM,JPMorgan Chase & Co.,Financials,350,205.00,218.40,76440.00,7.64%,PASS,4690.00,6.54%
SPY,SPDR S&P 500 ETF,Broad Market ETF,220,570.00,582.40,128128.00,12.81%,PASS,2728.00,2.17%
NVDA,NVIDIA Corporation,Technology,200,124.00,132.80,26560.00,2.66%,PASS,1760.00,7.10%
USD_CASH,Unencumbered Cash Buffer,Liquidity,659222,1.00,1.00,659222.00,65.92%,PASS (>=2%),0.00,0.00%
,,,,,,1000000.00,100.00%,COMPLIANT,13828.00,1.38%`;
    }

    const blob = new Blob([content], {
      type: type === 'csv' ? 'text/csv;charset=utf-8' : 'text/plain;charset=utf-8'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 sm:p-8 space-y-6">
      <div>
        <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
          Official Competition Materials
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Official Documents & Faculty Packets
        </h3>
        <p className="text-xs text-neutral-400 mt-1">
          Download standardized templates, verification forms, and audit worksheets utilized across campus chapters.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Document 1: Syllabus */}
        <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-800 flex flex-col justify-between space-y-3">
          <div>
            <div className="w-8 h-8 rounded bg-neutral-900 border border-neutral-700 flex items-center justify-center text-emerald-400 mb-2">
              <FileText className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-white">Competition Syllabus</h4>
            <p className="text-[11px] text-neutral-400 mt-1 leading-snug">
              Complete calendar, scoring weights, trading hours, and universe rules.
            </p>
          </div>
          <button
            onClick={() => downloadDocument('syllabus')}
            className="w-full py-1.5 px-3 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 rounded flex items-center justify-center gap-1.5 cursor-pointer hover:bg-neutral-800 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Syllabus (.txt)</span>
          </button>
        </div>

        {/* Document 2: Faculty Form */}
        <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-800 flex flex-col justify-between space-y-3">
          <div>
            <div className="w-8 h-8 rounded bg-neutral-900 border border-neutral-700 flex items-center justify-center text-sky-400 mb-2">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-white">Faculty Verification Form</h4>
            <p className="text-[11px] text-neutral-400 mt-1 leading-snug">
              Official institutional sponsorship & student eligibility sign-off sheet.
            </p>
          </div>
          <button
            onClick={() => downloadDocument('faculty')}
            className="w-full py-1.5 px-3 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 rounded flex items-center justify-center gap-1.5 cursor-pointer hover:bg-neutral-800 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Form (.txt)</span>
          </button>
        </div>

        {/* Document 3: Memo Template */}
        <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-800 flex flex-col justify-between space-y-3">
          <div>
            <div className="w-8 h-8 rounded bg-neutral-900 border border-neutral-700 flex items-center justify-center text-purple-400 mb-2">
              <FileText className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-white">5-Page Memo Template</h4>
            <p className="text-[11px] text-neutral-400 mt-1 leading-snug">
              Standardized formatting for the final Investment Committee Strategy Memo.
            </p>
          </div>
          <button
            onClick={() => downloadDocument('memo')}
            className="w-full py-1.5 px-3 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 rounded flex items-center justify-center gap-1.5 cursor-pointer hover:bg-neutral-800 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Template (.txt)</span>
          </button>
        </div>

        {/* Document 4: Audit CSV */}
        <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-800 flex flex-col justify-between space-y-3">
          <div>
            <div className="w-8 h-8 rounded bg-neutral-900 border border-neutral-700 flex items-center justify-center text-amber-400 mb-2">
              <FileSpreadsheet className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-white">Weekly Audit Worksheet</h4>
            <p className="text-[11px] text-neutral-400 mt-1 leading-snug">
              Pre-built spreadsheet to calculate weights and verify Rule 2.2 adherence.
            </p>
          </div>
          <button
            onClick={() => downloadDocument('csv')}
            className="w-full py-1.5 px-3 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 rounded flex items-center justify-center gap-1.5 cursor-pointer hover:bg-neutral-800 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download CSV (.csv)</span>
          </button>
        </div>

      </div>
    </div>
  );
};
