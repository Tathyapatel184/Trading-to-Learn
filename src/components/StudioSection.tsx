import React from 'react';
import { MapPin, Compass, Building, Cpu } from 'lucide-react';

export const StudioSection: React.FC = () => {
  return (
    <section id="studio" className="py-24 border-b border-neutral-800/80 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Studio Manifesto / Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-5">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
              Studio Philosophy
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance leading-tight">
              Permanence over novelty. Precision over ornament.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6 text-neutral-300 text-sm sm:text-base leading-relaxed">
            <p>
              Founded in 2018 across Zurich, Tokyo, and San Francisco, KRONA was conceived to challenge 
              the disposable nature of modern construction. We reject superficial stylistic trends in favor 
              of monolithic permanence: structures sculpted from raw basalt, post-tensioned granite, and 
              renewable mass timber frameworks.
            </p>
            <p className="text-neutral-400">
              Every detail—from the acoustic decay of a 20-meter museum vault down to the knurled tactile 
              resistance of a titanium door latch—originates within our computational labs and CNC workshops. 
              We operate not as disconnected decorators, but as master builders armed with advanced BIM algorithms.
            </p>
          </div>
        </div>

        {/* 3 Physical Studio Hubs */}
        <div className="pt-12 border-t border-neutral-800">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-8">
            Global Atelier Network
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Zurich */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-2">
                  <MapPin className="w-3.5 h-3.5 text-neutral-300" />
                  <span>Switzerland</span>
                </div>
                <h3 className="text-lg font-bold text-white">Zurich Atelier</h3>
                <p className="text-xs text-neutral-400 font-mono mt-1">Rämistrasse 42 · 8001 Zürich</p>
                
                <p className="text-xs text-neutral-300 mt-4 leading-relaxed">
                  Headquarters for civil engineering, mass timber structural modeling, and European municipal entitlements.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800 text-[11px] text-neutral-400 flex items-center justify-between font-mono">
                <span>Specialization</span>
                <span className="text-white">Timber & Masonry</span>
              </div>
            </div>

            {/* Tokyo */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-2">
                  <Cpu className="w-3.5 h-3.5 text-neutral-300" />
                  <span>Japan</span>
                </div>
                <h3 className="text-lg font-bold text-white">Tokyo Prototyping Workshop</h3>
                <p className="text-xs text-neutral-400 font-mono mt-1">Minami-Aoyama 5-Chome · Minato-ku</p>
                
                <p className="text-xs text-neutral-300 mt-4 leading-relaxed">
                  Dedicated 5-axis CNC machining, titanium hardware development, and acoustic telemetry sensor fabrication.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800 text-[11px] text-neutral-400 flex items-center justify-between font-mono">
                <span>Specialization</span>
                <span className="text-white">Industrial Machining</span>
              </div>
            </div>

            {/* San Francisco */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-2">
                  <Compass className="w-3.5 h-3.5 text-neutral-300" />
                  <span>United States</span>
                </div>
                <h3 className="text-lg font-bold text-white">San Francisco Computational Lab</h3>
                <p className="text-xs text-neutral-400 font-mono mt-1">Pier 9, The Embarcadero · San Francisco</p>
                
                <p className="text-xs text-neutral-300 mt-4 leading-relaxed">
                  High-exposure coastal engineering, California Title 24 net-zero envelope modeling, and seismic research.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800 text-[11px] text-neutral-400 flex items-center justify-between font-mono">
                <span>Specialization</span>
                <span className="text-white">Seismic & Coastal BIM</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
