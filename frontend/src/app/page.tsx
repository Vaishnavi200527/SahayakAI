import Link from "next/link";
import { Globe, Mic, Smartphone } from "lucide-react";
import AuthShell from "@/components/AuthShell";

const LANGUAGES = [
  { region: "IN", nativeName: "हिन्दी", englishName: "Hindi", active: true },
  { region: "IN", nativeName: "मराठी", englishName: "Marathi", active: false },
  { region: "IN", nativeName: "বাংলা", englishName: "Bengali", active: false },
  { region: "IN", nativeName: "ગુજરાતી", englishName: "Gujarati", active: false },
  { region: "IN", nativeName: "தமிழ்", englishName: "Tamil", active: false },
  { region: "IN", nativeName: "తెలుగు", englishName: "Telugu", active: false },
];

export default function LoginPage() {
  return (
    <AuthShell>
      <div className="space-y-5 md:space-y-6">
        <div>
          <h2 className="flex items-center gap-2 text-base font-semibold text-slate-900 md:text-lg">
            <Globe size={18} className="text-[#1549D1]" />
            Select Language
          </h2>
          <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-3">
            {LANGUAGES.map((language) => (
              <button
                key={language.nativeName}
                type="button"
                className={`rounded-2xl border px-3 py-3 text-left transition-colors ${
                  language.active
                    ? "border-[#1549D1] bg-blue-50"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <p className="text-[11px] font-semibold text-slate-500">{language.region}</p>
                <p className="text-sm font-semibold text-slate-900 sm:text-base">{language.nativeName}</p>
                <p className="text-xs text-slate-600">{language.englishName}</p>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-slate-900 md:text-2xl">Login</h3>
          <div className="mt-3 flex items-center overflow-hidden rounded-2xl border border-slate-300 focus-within:border-[#1549D1] focus-within:ring-2 focus-within:ring-blue-200">
            <button
              type="button"
              className="border-r border-slate-300 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700"
            >
              +91
            </button>
            <input
              type="tel"
              placeholder="Enter phone number"
              className="w-full px-3 py-3 text-sm text-slate-900 outline-none"
            />
          </div>
        </div>

        <div className="space-y-3">
          <Link
            href="/family"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#1549D1] px-4 py-3 text-sm font-semibold text-white"
          >
            <Smartphone size={18} />
            Send OTP
          </Link>
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#16A34A] px-4 py-3 text-sm font-semibold text-white"
          >
            <Mic size={18} />
            Voice Login
          </button>
        </div>

        <p className="text-center text-sm text-slate-600">
          New user?{" "}
          <Link href="/signup" className="font-semibold text-[#1549D1] hover:underline">
            Create account
          </Link>
        </p>
      </div>
    </AuthShell>
  );
}
