"use client";

import { useState } from "react";
import MobileBottomNav from "@/components/MobileBottomNav";
import { Camera, CheckCircle2, ChevronRight, File, FileText, ImageIcon, Loader2, Map, CreditCard, Wallet, Sparkles } from "lucide-react";

export default function ScannerPage() {
    const [activeDocument, setActiveDocument] = useState<string>("Aadhaar");

    const documentTypes = [
        { id: "Aadhaar", name: "आधार कार्ड", sub: "Aadhaar", icon: <CreditCard size={20} /> },
        { id: "Income", name: "आय प्रमाण", sub: "Income", icon: <Wallet size={20} /> },
        { id: "Ration", name: "राशन कार्ड", sub: "Ration Card", icon: <FileText size={20} /> },
        { id: "Land", name: "भूमि दस्तावेज़", sub: "Land Docs", icon: <Map size={20} /> },
    ];

    return (
        <div className="flex min-h-[100dvh] flex-col bg-[#f8fafc] pb-24 font-sans">
            {/* Header */}
            <header className="bg-[#e65100] px-5 py-4 text-white shrink-0">
                <h1 className="text-[22px] font-bold tracking-wide">दस्तावेज़ स्कैनर</h1>
                <p className="text-sm text-orange-100 mt-1">आसान डॉक्यूमेंट अपलोड</p>
            </header>

            <main className="flex-1 p-4 flex flex-col gap-6 w-full">

                {/* Camera Viewfinder Area */}
                <div className="flex flex-col gap-3 max-w-lg mx-auto w-full">
                    <div className="relative w-full aspect-[4/3] bg-[#0f172a] rounded-xl flex flex-col items-center justify-center p-6 border-4 border-slate-800 shadow-inner overflow-hidden">
                        {/* Corner Brackets */}
                        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/50 rounded-tl-lg"></div>
                        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/50 rounded-tr-lg"></div>
                        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/50 rounded-bl-lg"></div>
                        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/50 rounded-br-lg"></div>

                        <div className="text-white/80 flex flex-col items-center gap-3">
                            <CreditCard size={32} strokeWidth={1.5} className="opacity-80" />
                            <div className="text-center">
                                <p className="font-bold text-white text-sm">Place document in frame</p>
                                <p className="text-xs text-slate-400 mt-1">Align all corners clearly</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <button className="bg-[#e65100] hover:bg-orange-700 text-white py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-sm">
                            <Camera size={18} />
                            कैमरा स्कैन
                        </button>
                        <button className="bg-[#1549D1] hover:bg-blue-700 text-white py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-sm">
                            <ImageIcon size={18} />
                            गैलरी से चुनें
                        </button>
                    </div>
                </div>

                {/* Select Document Type */}
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200">
                    <h3 className="flex items-center gap-2 font-bold text-slate-800 mb-4 text-sm">
                        <FileText size={16} className="text-[#e65100]" /> Select Document Type
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                        {documentTypes.map((doc) => (
                            <button
                                key={doc.id}
                                onClick={() => setActiveDocument(doc.id)}
                                className={`flex flex-col items-center justify-center py-4 px-2 rounded-xl border text-center transition-all ${activeDocument === doc.id
                                    ? "border-[#1549D1] bg-blue-50/50"
                                    : "border-slate-200 hover:border-slate-300 bg-white"
                                    }`}
                            >
                                <div className={`w-8 h-8 mb-2 rounded-lg flex items-center justify-center ${activeDocument === doc.id ? "bg-[#1549D1] text-white" : "bg-slate-100 text-slate-600"
                                    }`}>
                                    {doc.icon}
                                </div>
                                <span className="font-bold text-slate-800 text-[13px]">{doc.name}</span>
                                <span className="text-[10px] text-slate-500">{doc.sub}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Uploaded Documents List */}
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="flex items-center gap-2 font-bold text-slate-800 text-sm">
                            <CheckCircle2 size={16} className="text-green-600" /> अपलोड किए गए दस्तावेज़
                        </h3>
                        <span className="text-[11px] font-medium text-slate-500">1/4 सत्यापित</span>
                    </div>

                    <div className="flex flex-col gap-3">
                        {/* Verified Card */}
                        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                                    <CreditCard size={18} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 text-sm">Aadhaar Card</h4>
                                    <p className="text-[11px] text-emerald-700">Verified</p>
                                </div>
                            </div>
                            <CheckCircle2 size={20} className="text-emerald-500" />
                        </div>

                        {/* Pending Card */}
                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                                    <Wallet size={18} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 text-sm">Income Certificate</h4>
                                    <p className="text-[11px] text-amber-700">Under Review</p>
                                </div>
                            </div>
                            <Loader2 size={18} className="text-amber-500 animate-spin" />
                        </div>

                        {/* Required Card 1 */}
                        <div className="bg-white border border-slate-200 rounded-xl p-3 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                                    <FileText size={18} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 text-sm">Ration Card</h4>
                                    <p className="text-[11px] text-slate-500">Upload Required</p>
                                </div>
                            </div>
                            <button className="text-[11px] font-bold text-[#1549D1]">अपलोड करें</button>
                        </div>

                        {/* Required Card 2 */}
                        <div className="bg-white border border-slate-200 rounded-xl p-3 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                                    <Map size={18} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 text-sm">Land Documents</h4>
                                    <p className="text-[11px] text-slate-500">Upload Required</p>
                                </div>
                            </div>
                            <button className="text-[11px] font-bold text-[#1549D1]">अपलोड करें</button>
                        </div>
                    </div>
                </div>

                {/* AI Auto-Fill */}
                <div className="bg-[#f5f3ff] border border-[#d8b4fe] rounded-2xl p-4 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200/50 rounded-full blur-2xl -mt-10 -mr-10"></div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white shrink-0">
                                <Sparkles size={14} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800 text-[15px]">AI Auto-Fill</h3>
                                <p className="text-[11px] text-slate-600">Automatically fills your information</p>
                            </div>
                        </div>

                        <div className="space-y-2 bg-white/60 rounded-xl p-3">
                            <div className="flex justify-between items-center bg-white p-2 rounded-lg text-[13px]">
                                <span className="text-slate-500">Name:</span>
                                <span className="font-bold text-slate-800">Ramesh Kumar</span>
                            </div>
                            <div className="flex justify-between items-center bg-white p-2 rounded-lg text-[13px]">
                                <span className="text-slate-500">Aadhaar:</span>
                                <span className="font-bold text-slate-800">XXXX-XXXX-1234</span>
                            </div>
                            <div className="flex justify-between items-center bg-white p-2 rounded-lg text-[13px]">
                                <span className="text-slate-500">Address:</span>
                                <span className="font-bold text-slate-800 text-right max-w-[150px] truncate">Patna, Bihar</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tips */}
                <div className="text-xs text-[#1549D1]">
                    <h4 className="font-bold mb-2">Tips:</h4>
                    <ul className="list-disc pl-4 space-y-1">
                        <li>Use good lighting for clear scans</li>
                        <li>Keep all corners visible</li>
                        <li>Use original documents</li>
                        <li>Avoid shadows and glare</li>
                    </ul>
                </div>

            </main>

            <MobileBottomNav activeTab="home" />
        </div>
    );
}
