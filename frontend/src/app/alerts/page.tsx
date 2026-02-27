"use client";

import { useEffect, useState } from "react";
import MobileBottomNav from "@/components/MobileBottomNav";
import { Check, Clock, Heart, Building, ChevronRight, Stethoscope } from "lucide-react";

export default function AlertsPage() {
    const [activeFilter, setActiveFilter] = useState("All (6)");

    const filters = [
        { name: "All (6)", icon: null },
        { name: "Deadlines", icon: <Clock size={14} className="mr-1.5" /> },
        { name: "Health", icon: <Heart size={14} className="mr-1.5" /> },
        { name: "Government", icon: <Building size={14} className="mr-1.5" /> },
    ];

    return (
        <div className="flex min-h-[100dvh] flex-col bg-[#f8fafc] pb-20 font-sans">
            {/* Header */}
            <header className="bg-white px-5 pt-8 pb-4 flex items-center justify-between border-b border-slate-100 shrink-0">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Notifications</h1>
                    <p className="text-sm text-slate-500 mt-0.5">6 new notifications</p>
                </div>
                <button className="text-sm font-medium text-[#1549D1] hover:text-blue-700 transition-colors">
                    Mark all read
                </button>
            </header>

            {/* Filter Pills */}
            <div className="bg-white px-5 py-3 border-b border-slate-100 flex gap-3 overflow-x-auto no-scrollbar shrink-0">
                {filters.map((filter) => (
                    <button
                        key={filter.name}
                        onClick={() => setActiveFilter(filter.name)}
                        className={`flex items-center whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === filter.name
                            ? "bg-[#1549D1] text-white shadow-sm"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                            }`}
                    >
                        {filter.icon}
                        {filter.name}
                    </button>
                ))}
            </div>

            {/* Notifications List */}
            <main className="flex-1 p-4 flex flex-col gap-3">

                {/* URGENT Notification */}
                <div className="bg-white border border-[#d32f2f] rounded-xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                    {/* Red Urgent Header */}
                    <div className="bg-[#da1e28] text-white text-[12px] font-bold px-4 py-2 tracking-wide flex items-center gap-1.5">
                        <div className="w-3.5 h-3.5 rounded-full border-[1.5px] border-white flex items-center justify-center text-[10px] pb-[1px]">!</div>
                        अत्यावश्यक • URGENT
                    </div>
                    {/* Card Content */}
                    <div className="p-4 flex gap-4 pr-12 relative bg-white">
                        <div className="shrink-0 w-11 h-11 rounded-full bg-[#ffebee] flex items-center justify-center text-[#d32f2f]">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                        </div>
                        <div className="w-full">
                            <h3 className="font-bold text-slate-800 text-[15px] mb-0.5">योजना समय सीमा</h3>
                            <p className="text-slate-600 text-[13px] mb-0.5" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>PM-KISAN आवेदन की अंतिम तिथि 15 मार्च है</p>
                            <p className="text-slate-400 text-[12px] italic mb-3">PM-KISAN deadline is March 15</p>
                            <div className="flex items-center text-slate-400 text-[11px] font-medium gap-1">
                                <Clock size={12} />
                                2 घंटे पहले
                            </div>
                        </div>
                        {/* Unread dot / action */}
                        <div className="absolute right-4 top-4 flex flex-col items-end gap-12">
                            <div className="w-2 h-2 rounded-full bg-[#1e88e5]"></div>
                            <button className="text-[11px] font-bold text-[#1e88e5] hover:text-blue-700 whitespace-nowrap pt-2">View Now →</button>
                        </div>
                    </div>
                </div>

                {/* Normal Notification 1 */}
                <div className="bg-white border border-slate-200 rounded-xl p-4 flex gap-4 pr-12 relative shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:border-blue-200 transition-colors">
                    <div className="shrink-0 w-11 h-11 rounded-full bg-[#e8f5e9] flex items-center justify-center text-[#2e7d32]">
                        <Stethoscope size={22} />
                    </div>
                    <div className="w-full">
                        <h3 className="font-bold text-slate-800 text-[15px] mb-0.5">स्वास्थ्य अलर्ट</h3>
                        <p className="text-slate-600 text-[13px] mb-0.5" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>आपके क्षेत्र में मुफ्त टीकाकरण शिविर - 20 फरवरी</p>
                        <p className="text-slate-400 text-[12px] italic mb-3">Free vaccination camp in your area - Feb 20</p>
                        <div className="flex items-center text-slate-400 text-[11px] font-medium gap-1">
                            <Clock size={12} />
                            5 घंटे पहले
                        </div>
                    </div>
                    <div className="absolute right-4 top-4">
                        <div className="w-2 h-2 rounded-full bg-[#1e88e5]"></div>
                    </div>
                </div>

                {/* Normal Notification 2 */}
                <div className="bg-white border border-slate-200 rounded-xl p-4 flex gap-4 pr-12 relative shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:border-blue-200 transition-colors">
                    <div className="shrink-0 w-11 h-11 rounded-full bg-[#e8eaf6] flex items-center justify-center text-[#3f51b5]">
                        {/* using placeholder Megaphone equivalent */}
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M11 20H8.381c-.534 0-.967-.433-.967-.967V17h3.586v3zm-8-3.084V8.084A1 1 0 0 1 4 7.084h2v9H4a1 1 0 0 1-1-1.001zM10 16H8V7h2l6-4v18l-6-4z" /><path d="M19 11.5a4.5 4.5 0 0 0-2-3.74v7.48a4.5 4.5 0 0 0 2-3.74z" /></svg>
                    </div>
                    <div className="w-full">
                        <h3 className="font-bold text-slate-800 text-[15px] mb-0.5">सरकारी अपडेट</h3>
                        <p className="text-slate-600 text-[13px] mb-0.5" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>नई छात्रवृत्ति योजना शुरू - अभी आवेदन करें</p>
                        <p className="text-slate-400 text-[12px] italic mb-3">New scholarship scheme launched - Apply now</p>
                        <div className="flex items-center text-slate-400 text-[11px] font-medium gap-1">
                            <Clock size={12} />
                            1 दिन पहले
                        </div>
                    </div>
                    <div className="absolute right-4 top-4">
                        <div className="w-2 h-2 rounded-full bg-[#1e88e5]"></div>
                    </div>
                </div>

            </main>

            {/* Notification settings footer block */}
            <div className="px-4 pb-6 mt-2">
                <div className="bg-[#f8faff] border border-[#e2e8f0] rounded-xl p-4 text-center">
                    <h4 className="font-bold text-slate-800 text-sm mb-1 text-left">Notification Settings</h4>
                    <p className="text-slate-500 text-xs text-left mb-4">Choose alerts based on your preferences</p>
                    <button className="w-full bg-[#1549D1] text-white rounded-lg py-2.5 text-sm font-semibold hover:bg-blue-700 transition-colors">
                        Open Settings
                    </button>
                </div>
            </div>

            <MobileBottomNav activeTab="alerts" />
        </div>
    );
}
