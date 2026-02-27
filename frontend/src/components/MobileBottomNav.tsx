import Link from "next/link";
import { Bell, BookOpen, Home, LayoutGrid, Mic } from "lucide-react";

type TabKey = "home" | "schemes" | "education" | "alerts";

type MobileBottomNavProps = {
  activeTab: TabKey;
};

const tabClass = (active: boolean) =>
  `flex flex-col items-center gap-1 ${active ? "text-[#1549D1]" : "text-slate-400"}`;

export default function MobileBottomNav({ activeTab }: MobileBottomNavProps) {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-100 bg-white px-4 py-3 sm:px-6">
      <div className="mx-auto flex w-full max-w-4xl items-center justify-between">
        <Link href="/family/profile" className={tabClass(activeTab === "home")}>
          <Home size={22} />
          <span className="text-[10px]">Home</span>
        </Link>

        <Link href="/schemes" className={tabClass(activeTab === "schemes")}>
          <LayoutGrid size={22} />
          <span className="text-[10px]">Schemes</span>
        </Link>

        <button
          type="button"
          aria-label="Assistant"
          className="relative -top-8 rounded-full border-4 border-slate-50 bg-[#1549D1] p-4 text-white shadow-lg shadow-blue-200"
        >
          <Mic size={24} />
        </button>

        <Link href="/education" className={tabClass(activeTab === "education")}>
          <BookOpen size={22} />
          <span className="text-[10px]">Education</span>
        </Link>

        <button type="button" className={tabClass(activeTab === "alerts")} aria-label="Alerts">
          <Bell size={22} />
          <span className="text-[10px]">Alerts</span>
        </button>
      </div>
    </footer>
  );
}
