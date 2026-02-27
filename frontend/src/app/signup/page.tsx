import Link from "next/link";
import { UserRound } from "lucide-react";
import AuthShell from "@/components/AuthShell";

export default function SignupPage() {
  return (
    <AuthShell>
      <div className="space-y-5 md:space-y-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900 md:text-2xl">Sign Up</h2>
          <p className="mt-1 text-sm text-slate-600 md:text-base">Create your SahayakAI account</p>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label htmlFor="fullName" className="mb-1 block text-sm font-medium text-slate-700">
              Full Name
            </label>
            <div className="flex items-center overflow-hidden rounded-2xl border border-slate-300 focus-within:border-[#1549D1] focus-within:ring-2 focus-within:ring-blue-200">
              <span className="border-r border-slate-300 bg-slate-50 px-3 py-3 text-slate-600">
                <UserRound size={18} />
              </span>
              <input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                className="w-full px-3 py-3 text-sm text-slate-900 outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phoneNumber" className="mb-1 block text-sm font-medium text-slate-700">
              Phone Number
            </label>
            <div className="flex items-center overflow-hidden rounded-2xl border border-slate-300 focus-within:border-[#1549D1] focus-within:ring-2 focus-within:ring-blue-200">
              <button
                type="button"
                className="border-r border-slate-300 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700"
              >
                +91
              </button>
              <input
                id="phoneNumber"
                type="tel"
                placeholder="Enter phone number"
                className="w-full px-3 py-3 text-sm text-slate-900 outline-none"
              />
            </div>
          </div>
        </div>

        <button type="button" className="w-full rounded-2xl bg-[#1549D1] px-4 py-3 text-sm font-semibold text-white">
          Register
        </button>

        <p className="text-center text-sm text-slate-600">
          <Link href="/" className="font-semibold text-[#1549D1] hover:underline">
            Back to Login
          </Link>
        </p>
      </div>
    </AuthShell>
  );
}
