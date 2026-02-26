import React from 'react';
import { User, Plus, Lock, Settings2 } from 'lucide-react';
import Link from 'next/link';

const FAMILY_MEMBERS = [
  { name: "Ramesh", role: "Primary", color: "bg-blue-500", locked: true },
  { name: "Rupa", role: "Wife", color: "bg-amber-500", locked: true },
  { name: "Ranjit", role: "Son", color: "bg-red-500", locked: true },
  { name: "Rani", role: "Mother", color: "bg-emerald-600", locked: false },
];

export default function FamilySelection() {
  return (
    // Changed background to light slate
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col items-center justify-center p-6 font-sans">
      
      {/* Title - Darker text for white theme */}
      <h1 className="text-3xl md:text-5xl font-semibold mb-12 tracking-tight text-slate-800">
        Family Members
      </h1>

      {/* Profiles Grid - Exactly the same block structure */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12">
        {FAMILY_MEMBERS.map((member) => (
          <Link href="/" key={member.name} className="group flex flex-col items-center gap-4">
            
            {/* The Square Block */}
            <div className={`relative w-28 h-28 md:w-40 md:h-40 rounded-md ${member.color} 
              flex items-center justify-center transition-all duration-300 
              group-hover:ring-4 group-hover:ring-blue-600 group-hover:scale-105 shadow-md overflow-hidden`}>
              
              {/* Profile Icon instead of Smiley */}
              <div className="relative flex flex-col items-center">
                 <User className="w-16 h-16 md:w-24 md:h-24 text-white opacity-90" strokeWidth={1.5} />
              </div>

              {/* Role Overlay */}
              <div className="absolute bottom-0 w-full bg-black/10 py-1 text-center">
                <span className="text-[10px] text-white font-bold uppercase tracking-tighter opacity-90">
                    {member.role}
                </span>
              </div>
            </div>

            {/* Name & Status - Slate colors for readability */}
            <div className="flex flex-col items-center gap-1">
              <span className="text-slate-500 group-hover:text-blue-600 font-medium text-lg transition-colors">
                {member.name}
              </span>
              {member.locked && (
                <Lock size={14} className="text-slate-400" />
              )}
            </div>
          </Link>
        ))}

        {/* Add Member Block */}
        <div className="group flex flex-col items-center gap-4 cursor-pointer">
          <div className="w-28 h-28 md:w-40 md:h-40 rounded-md border-2 border-dashed border-slate-300 
            flex items-center justify-center transition-all duration-300 
            group-hover:bg-white group-hover:border-blue-500">
            <Plus size={48} className="text-slate-300 group-hover:text-blue-500" />
          </div>
          <span className="text-slate-400 group-hover:text-blue-600 text-lg font-medium">Add Member</span>
        </div>
      </div>

      {/* Manage Button - Refined for light theme */}
      <button className="mt-8 px-8 py-2 border border-slate-300 text-slate-500 uppercase tracking-widest text-sm
        hover:border-blue-600 hover:text-blue-600 transition-all flex items-center gap-2 rounded-sm font-medium">
        <Settings2 size={16} />
        Manage Profiles
      </button>
    </div>
  );
}