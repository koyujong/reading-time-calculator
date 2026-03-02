"use client";

import { useState } from "react";
import Link from "next/link";
import { Language } from "@/lib/translations";
import { extraTranslations } from "@/lib/extraTranslations";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClockIcon } from "lucide-react";

export default function AboutPage() {
  const [lang, setLang] = useState<Language>("ko");
  const t = extraTranslations[lang].about;
  const title = lang === "ko" ? "읽기 시간 계산기" : lang === "es" ? "Calculadora de Tiempo de Lectura" : "Reading Time Calculator";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col">
      <Header lang={lang} setLang={setLang} title={title} />
      <main className="flex-grow pt-28 pb-20 px-4 max-w-3xl mx-auto w-full">
        <Link href="/" className="inline-flex items-center text-sm font-bold text-indigo-600 dark:text-indigo-400 mb-10 hover:translate-x-[-2px] transition-transform">
          ← Home
        </Link>

        <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl p-12 text-white text-center mb-10 shadow-2xl">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <ClockIcon className="w-9 h-9 text-white" />
          </div>
          <h1 className="text-4xl font-extrabold mb-4">{t.title}</h1>
          <p className="text-indigo-100 text-lg max-w-xl mx-auto">{t.missionContent}</p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t.whyTitle}</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{t.whyContent}</p>
        </div>
      </main>
      <Footer lang={lang} />
    </div>
  );
}
