"use client";

import { useMemo, useState } from "react";
import { BookOpen, Grid3X3, Leaf, Sprout, Wheat } from "lucide-react";
import MobileBottomNav from "@/components/MobileBottomNav";
import SchemeCard from "@/components/SchemeCard";

type FilterKey = "all" | "agriculture" | "education" | "livelihood" | "welfare";

type SchemeItem = {
  id: string;
  filter: Exclude<FilterKey, "all">;
  name: string;
  subtitle: string;
  category: string;
  score: number;
  tags: string[];
  benefit: string;
  deadline: string;
  daysLeft: number;
  documentsMissing?: boolean;
  urgencyAlert?: string;
};

const schemes: SchemeItem[] = [
  {
    id: "pm-kisan",
    filter: "agriculture",
    name: "PM Kisan Samman Nidhi",
    subtitle: "PM-KISAN",
    category: "Agriculture Support",
    score: 92,
    tags: ["Income Eligible", "Land Owner"],
    benefit: "INR 6,000 per year",
    deadline: "15 Mar 2026",
    daysLeft: 17,
  },
  {
    id: "soil-health",
    filter: "agriculture",
    name: "Soil Health Card",
    subtitle: "Agriculture Mission",
    category: "Farm Productivity",
    score: 47,
    tags: ["More documents needed", "Farmer ID Pending"],
    benefit: "Free soil testing",
    deadline: "03 Mar 2026",
    daysLeft: 5,
    documentsMissing: true,
    urgencyAlert: "तुरंत दस्तावेज जमा करें | Submit documents before deadline",
  },
  {
    id: "scholarship",
    filter: "education",
    name: "National Scholarship",
    subtitle: "NSP",
    category: "Education",
    score: 86,
    tags: ["Student Verified", "Income Eligible"],
    benefit: "INR 12,000 per year",
    deadline: "25 Apr 2026",
    daysLeft: 58,
  },
  {
    id: "livelihood",
    filter: "livelihood",
    name: "PMEGP Loan Support",
    subtitle: "PMEGP",
    category: "Self Employment",
    score: 63,
    tags: ["Aadhaar Verified", "Bank details needed"],
    benefit: "Up to INR 2L subsidy",
    deadline: "20 Mar 2026",
    daysLeft: 22,
    documentsMissing: true,
  },
];

const filters: { key: FilterKey; label: string; icon: JSX.Element }[] = [
  { key: "all", label: "All (7)", icon: <Grid3X3 size={14} /> },
  { key: "agriculture", label: "Agriculture", icon: <Wheat size={14} /> },
  { key: "education", label: "Education", icon: <BookOpen size={14} /> },
  { key: "livelihood", label: "Livelihood", icon: <Leaf size={14} /> },
  { key: "welfare", label: "Welfare", icon: <Sprout size={14} /> },
];

const iconByFilter: Record<Exclude<FilterKey, "all">, JSX.Element> = {
  agriculture: <Wheat size={20} />,
  education: <BookOpen size={20} />,
  livelihood: <Leaf size={20} />,
  welfare: <Sprout size={20} />,
};

export default function SchemesPage() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const visibleSchemes = useMemo(() => {
    if (activeFilter === "all") return schemes;
    return schemes.filter((scheme) => scheme.filter === activeFilter);
  }, [activeFilter]);

  return (
    <main className="min-h-screen bg-slate-50 pb-28">
      <div className="mx-auto w-full max-w-6xl">
        <header className="bg-white px-4 pb-4 pt-6 shadow-sm sm:px-6">
          <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">Schemes for You</h1>
          <p className="mt-1 text-sm text-slate-600 md:text-base">Personalized recommendations</p>
        </header>

        <section className="sticky top-0 z-10 border-b border-slate-200 bg-slate-50 px-4 py-3 sm:px-6">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.key;
              return (
                <button
                  key={filter.key}
                  type="button"
                  onClick={() => setActiveFilter(filter.key)}
                  className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold transition-colors ${
                    isActive
                      ? "bg-[#1549D1] text-white"
                      : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                  }`}
                >
                  {filter.icon}
                  {filter.label}
                </button>
              );
            })}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-4 px-4 py-4 sm:px-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleSchemes.map((scheme) => (
            <SchemeCard
              key={scheme.id}
              icon={iconByFilter[scheme.filter]}
              name={scheme.name}
              subtitle={scheme.subtitle}
              category={scheme.category}
              score={scheme.score}
              tags={scheme.tags}
              benefit={scheme.benefit}
              deadline={scheme.deadline}
              daysLeft={scheme.daysLeft}
              documentsMissing={scheme.documentsMissing}
              urgencyAlert={scheme.urgencyAlert}
            />
          ))}
        </section>
      </div>

      <MobileBottomNav activeTab="schemes" />
    </main>
  );
}
