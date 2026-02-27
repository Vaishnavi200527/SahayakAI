import { ExternalLink, FileWarning, CalendarDays } from "lucide-react";
import type { ReactNode } from "react";

type SchemeCardProps = {
  icon: ReactNode;
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

export default function SchemeCard({
  icon,
  name,
  subtitle,
  category,
  score,
  tags,
  benefit,
  deadline,
  daysLeft,
  documentsMissing = false,
  urgencyAlert,
}: SchemeCardProps) {
  const progressColor = score > 80 ? "bg-green-500" : score < 50 ? "bg-orange-500" : "bg-blue-500";
  const buttonClass = documentsMissing ? "bg-orange-500 hover:bg-orange-600" : "bg-[#1549D1] hover:bg-[#103cb2]";
  const buttonLabel = documentsMissing ? "Complete Documents" : "Apply Now";
  const ButtonIcon = documentsMissing ? FileWarning : ExternalLink;

  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
      <div className="space-y-4 p-4">
        <div className="flex items-start gap-3">
          <div className="rounded-xl bg-blue-50 p-2 text-[#1549D1]">{icon}</div>
          <div className="min-w-0">
            <h3 className="truncate text-base font-bold text-slate-900">{name}</h3>
            <p className="text-xs font-medium text-slate-500">{subtitle}</p>
            <p className="mt-1 text-xs text-slate-600">{category}</p>
          </div>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-medium text-slate-700">Eligibility Score</span>
            <span className="font-bold text-slate-900">{score}%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-slate-200">
            <div className={`h-2 rounded-full ${progressColor}`} style={{ width: `${score}%` }} />
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-[11px] font-medium text-blue-700">
              {tag}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-green-50 p-3">
            <p className="text-[11px] text-green-700">Benefit</p>
            <p className="mt-1 text-sm font-semibold text-green-900">{benefit}</p>
          </div>
          <div className="rounded-xl bg-red-50 p-3">
            <p className="text-[11px] text-red-700">Deadline</p>
            <p className="mt-1 text-sm font-semibold text-red-900">{deadline}</p>
            <p className="mt-1 flex items-center gap-1 text-xs font-medium text-red-700">
              <CalendarDays size={13} />
              {daysLeft} days left
            </p>
          </div>
        </div>

        <button
          type="button"
          className={`flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white transition-colors ${buttonClass}`}
        >
          <ButtonIcon size={16} />
          {buttonLabel}
        </button>
      </div>

      {urgencyAlert ? (
        <div className="bg-red-600 px-4 py-2 text-xs font-semibold text-white">{urgencyAlert}</div>
      ) : null}
    </article>
  );
}
