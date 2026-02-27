import type { ReactNode } from "react";

type AuthShellProps = {
  children: ReactNode;
};

export default function AuthShell({ children }: AuthShellProps) {
  return (
    <main className="min-h-screen bg-[#1549D1] font-sans">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col items-center text-center text-white md:mb-8">
          <div className="mb-3 rounded-xl bg-white px-6 py-2 text-lg font-bold text-[#1549D1] shadow-sm md:px-8 md:py-2.5">
            IN
          </div>
          <h1 className="text-3xl font-bold md:text-4xl">SahayakAI</h1>
          <p className="mt-1 text-sm text-white/90 md:text-base">Your Government Assistant</p>
        </div>

        <section className="mx-auto w-full max-w-md rounded-3xl bg-white p-5 shadow-xl sm:max-w-xl md:p-6">
          {children}
          <p className="mt-6 text-center text-xs text-slate-500 md:text-sm">
            Your data is secure and protected
          </p>
        </section>

        <p className="mt-6 text-center text-xs text-white/90 md:mt-8 md:text-sm">
          An initiative of Government of India
        </p>
      </div>
    </main>
  );
}
