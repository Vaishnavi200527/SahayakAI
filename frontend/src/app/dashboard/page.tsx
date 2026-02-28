import React from 'react';
import Link from 'next/link';
import { User, Plus, Settings } from 'lucide-react';
import {
  Bell, MapPin, IndianRupee, Stars, ScanLine, Home as HomeIcon, BookOpen, LayoutGrid,
  Mic, MessageSquare
} from 'lucide-react';
import MobileBottomNav from '@/components/MobileBottomNav';

const SchemeItem = ({ title, sub }: { title: string, sub: string }) => (
  <div className="flex items-center">
    <div className="w-10 h-10 bg-slate-100 rounded-lg"></div>
    <div className="ml-3">
      <p className="font-semibold text-sm text-slate-700">{title}</p>
      <p className="text-xs text-slate-400">{sub}</p>
    </div>
    <div className="ml-auto text-slate-400">
      &gt;
    </div>
  </div>
);

const NavItem = ({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) => (
  <div className={`flex flex-col items-center gap-1 ${active ? 'text-blue-600' : 'text-slate-400'}`}>
    {icon}
    <span className="text-[10px]">{label}</span>
  </div>
);

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50 pb-24 font-sans">
      {/*Top Header*/}
      <div className="bg-blue-600 text-white p-6 rounded-b-[2rem] shadow-lg">
        <div className='flex justify-between items-center mb-6'>
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <Link href="/family"
                className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white/30 hover:bg-blue-400 transition-colors">
                <User size={24} className="text-white" />
              </Link>
              Hello User!
            </h1>
            <p className='text-blue-100 text-sm'>Your Dashboard</p>
          </div>
          <div className="relative p-2 bg-blue-500 rounded-xl">
            <Bell size={24} />
            <span className='absolute top-1 right-1 bg-red-500 text-[10px] w-4 h-4 flex items-center justify-center rounded-full border-2 border-blue-600'>3</span>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-4'>
          <div className='bg-blue-500/30 backdrop-blur-md p-3 rounded-xl border border-white/10'>
            <div className='flex items-center gap-2 text-xs text-blue-100 mb-1'>
              <MapPin size={14} /> Location
            </div>
            <p className='font-semibold text-sm'>Maharashtra, Mumbai</p>
          </div>
          <div className='bg-blue-500/30 backdrop-blur-md p-3 rounded-xl border border-white/10'>
            <div className='flex items-center gap-2 text-xs text-blue-100 mb-1'>
              <IndianRupee size={14} /> Annual Income
            </div>
            <p className='font-semibold text-sm'>₹2,40,000</p>
          </div>
        </div>
      </div>

      <div className="px-4 -mt-4">
        {/* --- SCHEMES SECTION --- */}
        <section className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
          <div className="flex items-center gap-2 mb-1">
            <div className="p-1.5 bg-purple-600 rounded-lg text-white">
              <Stars size={18} />
            </div>
            <h2 className="font-bold text-slate-800">Schemes for You</h2>
          </div>
          <p className="text-xs text-slate-400 mb-4 ml-9">AI found 7 new schemes for your family</p>

          <div className="space-y-3">
            <SchemeItem title="PM Kisan Scheme" sub="Agriculture" />
            <SchemeItem title="Scholarship Program" sub="Education" />
            <SchemeItem title="Healthcare" sub="Medical" />
          </div>

          <button className="w-full mt-6 bg-purple-600 text-white py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 text-sm">
            View All Schemes →
          </button>
        </section>

        {/* --- ACTION CARDS --- */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-3xl flex flex-col items-center text-center">
            <div className="bg-emerald-500 p-3 rounded-full text-white mb-3">
              <MessageSquare size={24} />
            </div>
            <p className="font-bold text-sm text-slate-800 leading-tight">Ask AI Assistant</p>
            <p className="text-[10px] text-slate-500">Get answers</p>
          </div>
          <Link href="/scanner" className="bg-blue-50 border border-blue-100 p-6 rounded-3xl flex flex-col items-center text-center">
            <div className="bg-blue-600 p-3 rounded-full text-white mb-3">
              <ScanLine size={24} />
            </div>
            <p className="font-bold text-sm text-slate-800 leading-tight">Scan Documents</p>
            <p className="text-[10px] text-slate-500">Upload docs</p>
          </Link>
        </div>

        {/* --- FAMILY MEMBERS SECTION --- */}
        <section className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100 mt-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-slate-800">Family Members</h2>
            <Link href="/family" className="text-blue-600 text-sm font-medium flex items-center gap-1">
              <Settings size={16} />
              Manage
            </Link>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <User size={20} className="text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-slate-800">Ramesh Kumar</p>
                  <p className="text-xs text-slate-500">Head of Family, 45 years</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white text-xs font-medium rounded-lg hover:bg-blue-700 transition-colors">
                View
              </button>
            </div>

            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <User size={20} className="text-amber-600" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-slate-800">Sunita Devi</p>
                  <p className="text-xs text-slate-500">Spouse, 40 years</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white text-xs font-medium rounded-lg hover:bg-blue-700 transition-colors">
                View
              </button>
            </div>

            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <User size={20} className="text-red-600" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-slate-800">Raj Kumar</p>
                  <p className="text-xs text-slate-500">Son, 18 years</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white text-xs font-medium rounded-lg hover:bg-blue-700 transition-colors">
                View
              </button>
            </div>

            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <User size={20} className="text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-slate-800">Priya Kumari</p>
                  <p className="text-xs text-slate-500">Daughter, 15 years</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white text-xs font-medium rounded-lg hover:bg-blue-700 transition-colors">
                View
              </button>
            </div>
          </div>

          <Link href="/family/profile" className="w-full mt-4 bg-blue-600 text-white py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 text-sm hover:bg-blue-700 transition-colors">
            <Plus size={18} />
            Add Member
          </Link>
        </section>
      </div>

      <MobileBottomNav activeTab="home" />
    </div>
  );
}
