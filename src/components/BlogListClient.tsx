"use client";

import Link from "next/link";
import { useState } from "react";
import { BlogPost } from "@/lib/blogData";
import { Language } from "@/lib/translations";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdBanner from "@/components/AdBanner";

const labels: Record<Language, { title: string; subtitle: string; readMore: string; noPost: string }> = {
  ko: {
    title: "읽기 & 콘텐츠 블로그",
    subtitle: "블로그 체류 시간, 읽기 과학, 콘텐츠 마케팅에 관한 최신 인사이트를 만나보세요.",
    readMore: "더 읽기",
    noPost: "이 언어로 작성된 글이 없습니다.",
  },
  en: {
    title: "Reading & Content Blog",
    subtitle: "The latest insights on blog dwell time, reading science, and content marketing.",
    readMore: "Read More",
    noPost: "No posts available in this language.",
  },
  es: {
    title: "Blog de Lectura y Contenido",
    subtitle: "Los últimos conocimientos sobre el tiempo de permanencia en blogs, la ciencia de la lectura y el marketing de contenidos.",
    readMore: "Leer Más",
    noPost: "No hay publicaciones disponibles en este idioma.",
  },
};

export default function BlogListClient({ allPosts }: { allPosts: BlogPost[] }) {
  const [lang, setLang] = useState<Language>("en");
  const t = labels[lang];

  const filteredPosts = allPosts.filter((post) => post.language === lang);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col">
      <Header lang={lang} setLang={setLang} />

      <main className="flex-grow pt-32 pb-20 px-4 max-w-7xl mx-auto w-full">
        <div className="mb-10 max-w-4xl mx-auto">
          <AdBanner slot="6780266694" />
        </div>

        <header className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            {t.title}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </header>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 text-slate-400 dark:text-slate-500 font-medium text-lg">{t.noPost}</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <div key={post.slug} className="contents">
                {index === 3 && (
                  <div className="col-span-1 md:col-span-2 lg:col-span-3 mb-4">
                    <AdBanner slot="7907422200" />
                  </div>
                )}
                <Link
                  href={`/blog/${post.slug}`}
                  className="group bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl dark:hover:shadow-slate-900/50 transition-all hover:-translate-y-1 duration-300"
                >
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-bold uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="ml-3 text-xs text-slate-400 font-medium">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                  <div className="mt-6 flex items-center text-indigo-600 dark:text-indigo-400 font-bold text-sm">
                    {t.readMore}
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}

        <div className="mt-16 mb-8 max-w-4xl mx-auto">
          <AdBanner slot="4221082772" />
        </div>
      </main>

      <Footer lang={lang} />
    </div>
  );
}
