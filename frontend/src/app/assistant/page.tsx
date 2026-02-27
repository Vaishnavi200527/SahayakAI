"use client";

import { useState } from "react";
import { Bot, Mic, Volume2 } from "lucide-react";
import MobileBottomNav from "@/components/MobileBottomNav";

export default function AssistantPage() {
    const [isRecording, setIsRecording] = useState(false);

    return (
        <div className="flex min-h-[100dvh] flex-col bg-[#f8fafc] pb-20">
            {/* Header Area */}
            <header className="bg-[#0f9d45] px-4 py-4 text-white">
                <h1 className="text-xl font-bold">AI Assistant</h1>
                <p className="text-sm text-green-100 mt-0.5">Ask questions via voice or text</p>
            </header>

            {/* Main Chat Content */}
            <main className="flex-1 p-4 flex flex-col gap-6">

                {/* Bot Intro Message Bubble */}
                <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 self-start w-full md:max-w-md">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="bg-[#00a650] rounded-full flex items-center justify-center p-1.5 h-7 w-7">
                            <Bot size={16} className="text-white" />
                        </div>
                        <span className="font-bold text-sm text-slate-800">SahayakAI</span>
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed mb-3">
                        Hello! I am SahayakAI. How can I help you today?
                    </p>
                    <button className="flex items-center gap-1.5 text-[#00a650] text-sm font-semibold hover:text-green-700 transition-colors">
                        <Volume2 size={16} />
                        Listen
                    </button>
                </div>

                {/* Quick Questions Section */}
                <div className="mt-2">
                    <p className="text-sm font-medium text-slate-600 mb-3">Quick Questions:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                            "What is PM Kisan Scheme?",
                            "How to apply for scholarship?",
                            "Healthcare schemes available",
                            "How to make ration card?",
                        ].map((q) => (
                            <button
                                key={q}
                                className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-left text-slate-700 hover:border-[#1549D1] transition-all shadow-sm"
                            >
                                {q}
                            </button>
                        ))}
                    </div>
                </div>
            </main>

            {/* Voice Action Footer Area */}
            <div className="bg-white pt-6 pb-6 px-4 flex flex-col items-center justify-center w-full mt-auto">

                {/* Listening Indicator */}
                <div className={`mb-4 flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-1.5 transition-opacity duration-200 ${isRecording ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="h-2 w-2 animate-pulse rounded-full bg-[#ef4444]" />
                    <span className="text-[13px] font-medium text-green-700">सुन रहा हूँ...</span>
                </div>

                {/* Big Action Button */}
                {isRecording ? (
                    <button
                        onClick={() => setIsRecording(false)}
                        className="relative flex h-36 w-36 flex-col items-center justify-center rounded-full bg-[#ef4444] shadow-xl shadow-red-200 transition-transform active:scale-95"
                    >
                        <div className="h-9 w-9 rounded-sm bg-white mb-1.5" />
                        <span className="font-bold text-white text-lg">Stop</span>
                        <span className="text-white/90 text-[11px] mt-0.5">Stop Recording</span>
                    </button>
                ) : (
                    <button
                        onClick={() => setIsRecording(true)}
                        className="relative flex h-36 w-36 flex-col items-center justify-center rounded-full bg-[#00c853] shadow-lg shadow-green-100/50 transition-transform active:scale-95"
                    >
                        <Mic size={44} className="text-white mb-2" />
                        <span className="font-bold text-white text-lg">Speak</span>
                        <span className="text-white/90 text-[11px] mt-0.5">Tap to start</span>
                    </button>
                )}

                <p className="text-[11px] text-slate-400 mt-5 text-center">
                    Press the microphone button and speak your question
                </p>
            </div>

            <MobileBottomNav activeTab="assistant" />
        </div>
    );
}
