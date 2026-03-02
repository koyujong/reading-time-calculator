"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDownIcon, ClockIcon } from "lucide-react";

type Lang = "en" | "ko" | "es";

const langLabels: Record<Lang, string> = {
    en: "🇺🇸 English",
    ko: "🇰🇷 한국어",
    es: "🇪🇸 Español",
};

interface BlogNavProps {
    activePage?: "home" | "blog";
    translations?: Record<string, string>;
    currentLang?: string;
    onLangChange?: (lang: Lang) => void;
}

export default function BlogNav({ activePage = "blog", translations, currentLang, onLangChange }: BlogNavProps) {
    const [lang, setLang] = useState<Lang>((currentLang as Lang) || "en");
    const router = useRouter();

    const handleLangChange = (newLang: Lang) => {
        setLang(newLang);

        if (onLangChange) {
            onLangChange(newLang);
            return;
        }

        if (translations && translations[newLang]) {
            router.push(`/blog/${translations[newLang]}`);
        }
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg">
                        <ClockIcon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-lg hidden sm:block tracking-tight text-slate-900 dark:text-white">
                        Reading Time Calculator
                    </span>
                </Link>

                <div className="flex items-center gap-6">
                    <Link
                        href="/"
                        className={`text-sm font-semibold transition-colors ${activePage === "home" ? "text-indigo-600 dark:text-indigo-400 font-bold" : "text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400"}`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/blog"
                        className={`text-sm font-semibold transition-colors ${activePage === "blog" ? "text-indigo-600 dark:text-indigo-400 font-bold" : "text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400"}`}
                    >
                        Blog
                    </Link>

                    {/* Language Selector */}
                    <div className="relative group">
                        <button className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-white dark:hover:bg-slate-800 transition-all text-sm font-medium text-slate-700 dark:text-slate-200">
                            <span>{langLabels[lang]}</span>
                            <ChevronDownIcon className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                        </button>
                        <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden divide-y divide-slate-100 dark:divide-slate-700">
                            {(Object.keys(langLabels) as Lang[]).map((l) => (
                                <button
                                    key={l}
                                    onClick={() => handleLangChange(l)}
                                    className={`w-full px-4 py-2.5 text-left text-sm transition-colors ${l === lang ? "bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 font-bold" : "text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-slate-700 hover:text-indigo-600 dark:hover:text-indigo-400"}`}
                                >
                                    {langLabels[l]}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
