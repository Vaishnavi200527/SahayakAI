import Link from "next/link";
import { Bell, BookOpen, Home, LayoutGrid, Mic } from "lucide-react";

type TabKey = "home" | "schemes" | "assistant" | "education" | "alerts";

type MobileBottomNavProps = {
  activeTab: TabKey;
};

const tabClass = (active: boolean) =>
  `flex flex-col items-center gap-1 transition-colors ${active ? "text-[#1549D1]" : "text-slate-400 hover:text-slate-600"}`;

export default function MobileBottomNav({ activeTab }: MobileBottomNavProps) {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-100 bg-white px-4 py-3 sm:px-6">
      <div className="mx-auto flex w-full max-w-4xl items-center justify-between">
        <Link href="/dashboard" className={tabClass(activeTab === "home")}>
          <Home size={22} />
          <span className="text-[10px]">Home</span>
        </Link>

        <Link href="/schemes" className={tabClass(activeTab === "schemes")}>
          <LayoutGrid size={22} />
          <span className="text-[10px]">Schemes</span>
        </Link>

        <Link href="/assistant" className={tabClass(activeTab === "assistant")} aria-label="Assistant">
          <div className={`rounded-full p-1 ${activeTab === "assistant" ? "bg-[#1549D1] text-white" : ""}`}>
            <Mic size={22} />
          </div>
          <span className="text-[10px]">Assistant</span>
        </Link>

        <Link href="/education" className={tabClass(activeTab === "education")}>
          <BookOpen size={22} />
          <span className="text-[10px]">Education</span>
        </Link>

        <Link href="/alerts" className={tabClass(activeTab === "alerts")} aria-label="Alerts">
          <Bell size={22} />
          <span className="text-[10px]">Alerts</span>
        </Link>
      </div>
    </footer>
  );
}
