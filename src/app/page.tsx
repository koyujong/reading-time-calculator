"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import CountdownOverlay from "@/components/CountdownOverlay";
import { calculateReadingTime } from "../utils/calculator";
import { analyzeReadability } from "../utils/readability";
import { Clock, FileText, Type, BarChart2, MonitorPlay, BookOpen } from "lucide-react";
import { Language, translations } from "@/lib/translations";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdBanner from "@/components/AdBanner";
import QaSection from "@/components/QaSection";
import TeleprompterModal from "@/components/TeleprompterModal";

export default function Home() {
  const [lang, setLang] = useState<Language>("en");
  const t = translations[lang];

  const [text, setText] = useState("");
  const [stats, setStats] = useState(calculateReadingTime(""));
  const [showTeleprompter, setShowTeleprompter] = useState(false);
  const [wpm, setWpm] = useState(200);

  // Detailed Analysis States
  const [showDetailed, setShowDetailed] = useState(false);
  const [isCountdown, setIsCountdown] = useState(false);

  const handleDetailedClick = () => {
    setIsCountdown(true);
  };

  const handleCountdownComplete = useCallback(() => {
    setShowDetailed(true);
    setIsCountdown(false);
  }, []);

  // Total reading seconds for teleprompter
  const totalReadingSeconds = stats.minutes * 60 + stats.seconds;

  // Readability analysis (memoized for performance)
  const readability = useMemo(() => analyzeReadability(text, lang), [text, lang]);

  // Max reading time considered for 100% on the progress bar (e.g., 20 minutes)
  const MAX_GAUGE_MINUTES = 20;

  useEffect(() => {
    setStats(calculateReadingTime(text, { wpm }));
  }, [text, wpm]);

  const handleClear = () => {
    setText("");
  };

  // Dynamic SEO Title based on language
  useEffect(() => {
    document.title = t.seoTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", t.seoDesc);
    }
  }, [t.seoTitle, t.seoDesc]);

  // Calculate progress percentage (cap at 100%)
  const progressPercentage = Math.min(
    (stats.minutes / MAX_GAUGE_MINUTES) * 100,
    100
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-indigo-500/30 transition-colors duration-300 flex flex-col">
      <Header lang={lang} setLang={setLang} title={t.title} />

      <main className="flex-grow pt-24 pb-20 px-4 max-w-7xl mx-auto w-full flex flex-col">
        
        {/* AdSense Upper Banner - 계산기 상단 */}
        <div className="mb-10 max-w-4xl mx-auto w-full">
          <AdBanner slot="9302830848" />
        </div>

        {/* Title & Intro Section (Centered) */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight leading-tight flex items-center justify-center gap-3">
            <Clock className="w-10 h-10 text-indigo-500" />
            {t.title}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Core Application Grid */}
        <div className="flex flex-col lg:flex-row gap-8 w-full">
          {/* Left: Input Section */}
          <section className="flex-1 flex flex-col relative focus-within:ring-2 focus-within:ring-indigo-500/50 rounded-3xl transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50 min-h-[500px]">
            <textarea
              className="w-full h-full bg-transparent resize-none outline-none text-slate-800 dark:text-slate-200 placeholder-slate-400 p-8 text-lg leading-relaxed"
              placeholder={t.placeholder}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            {text.length > 0 && (
              <button
                onClick={handleClear}
                className="absolute bottom-6 right-6 px-5 py-2.5 bg-slate-100 dark:bg-slate-800 text-sm font-semibold text-slate-600 dark:text-slate-300 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition shadow-sm active:scale-95"
              >
                {t.clear}
              </button>
            )}
          </section>

          {/* Right: Output/Result Dashboard */}
          <section className="w-full lg:w-[450px] flex flex-col gap-6">
            {/* Main Reading Time Card */}
            <div className="glass-panel rounded-3xl p-10 flex flex-col items-center justify-center text-center relative overflow-hidden group min-h-[250px] shadow-[0_20px_50px_rgba(79,70,229,0.05)] border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
              {/* background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition duration-700"></div>
              
              <h2 className="text-lg font-bold text-slate-500 dark:text-slate-400 mb-4 relative z-10 tracking-wide uppercase">
                {t.resultTitle}
              </h2>
              
              <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 relative z-10 mb-8 tracking-tighter drop-shadow-sm">
                {stats.minutes > 0 ? `${stats.minutes}${t.minutes} ` : ""}{stats.seconds}{t.seconds}
              </div>

              {/* WPM Slider */}
              <div className="w-full relative z-10 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {lang === "ko" ? "읽기 속도" : lang === "es" ? "Velocidad" : "Reading Speed"}
                  </span>
                  <span className="text-sm font-black text-indigo-600 dark:text-indigo-400 tabular-nums">
                    {wpm} <span className="text-xs font-semibold text-slate-400">WPM</span>
                  </span>
                </div>
                <input
                  type="range"
                  min={50}
                  max={600}
                  step={10}
                  value={wpm}
                  onChange={(e) => setWpm(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none bg-slate-100 dark:bg-slate-800 accent-indigo-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-medium mt-1.5 px-0.5">
                  <span>{lang === "ko" ? "느림" : lang === "es" ? "Lento" : "Slow"}</span>
                  <span className="hidden sm:inline">
                    {lang === "ko" ? "평균 (200)" : lang === "es" ? "Promedio (200)" : "Average (200)"}
                  </span>
                  <span>{lang === "ko" ? "빠름" : lang === "es" ? "Rápido" : "Fast"}</span>
                </div>
                {/* Speed label chips */}
                <div className="flex gap-1.5 mt-3 flex-wrap justify-center">
                  {[
                    { label: lang === "ko" ? "느린 독자" : lang === "es" ? "Lector lento" : "Slow reader", val: 100 },
                    { label: lang === "ko" ? "평균" : lang === "es" ? "Promedio" : "Average", val: 200 },
                    { label: lang === "ko" ? "빠른 독자" : lang === "es" ? "Rápido" : "Fast reader", val: 300 },
                    { label: lang === "ko" ? "전문가" : lang === "es" ? "Experto" : "Expert", val: 450 },
                  ].map(({ label, val }) => (
                    <button
                      key={val}
                      onClick={() => setWpm(val)}
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition border ${
                        wpm === val
                          ? "bg-indigo-600 text-white border-indigo-600"
                          : "bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-indigo-400 hover:text-indigo-600"
                      }`}
                    >
                      {label} ({val})
                    </button>
                  ))}
                </div>
              </div>

              {/* Progress Bar Gauge */}
              <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden relative z-10 ring-1 ring-inset ring-slate-200 dark:ring-slate-700">
                <div 
                  className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-700 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <p className="text-xs font-medium text-slate-400 mt-4 relative z-10 text-left w-full pl-1">
                {t.gaugeLabel}
              </p>
            </div>

            {/* Teleprompter Button */}
            <button
              onClick={() => setShowTeleprompter(true)}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold text-base shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
            >
              <MonitorPlay className="w-5 h-5" />
              {lang === "ko" ? "텔레프롬프터 모드로 연습하기" : lang === "es" ? "Practicar en Modo Teleprompter" : "Practice with Teleprompter"}
            </button>

            {/* Detailed Analysis Button or Results */}
            {!showDetailed ? (
              <button
                onClick={handleDetailedClick}
                disabled={isCountdown || !text.trim()}
                className="w-full py-4 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-indigo-500/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <BarChart2 className="w-5 h-5" />
                {lang === "ko" ? "상세 분석 보기" : lang === "es" ? "Ver Análisis Detallado" : "View Detailed Analysis"}
              </button>
            ) : (
              <>
                {/* Detailed Stats Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <StatCard 
                    icon={<Type className="w-5 h-5 text-blue-500" />} 
                    label={t.statWithSpace} 
                    value={stats.charCountWithSpaces.toLocaleString()} 
                    unit={t.unitChar} 
                  />
                  <StatCard 
                    icon={<FileText className="w-5 h-5 text-teal-500" />} 
                    label={t.statWithoutSpace} 
                    value={stats.charCountWithoutSpaces.toLocaleString()} 
                    unit={t.unitChar} 
                  />
                  <StatCard 
                    icon={<BarChart2 className="w-5 h-5 text-orange-500" />} 
                    label={t.statWords} 
                    value={stats.wordCount.toLocaleString()} 
                    unit={t.unitWord}
                    className="col-span-2"
                  />
                </div>

                {/* ── Readability Score Card ── */}
                <div className={`rounded-2xl p-6 border ring-1 transition-all duration-500 ${readability ? `${readability.bg} ${readability.ring}` : "bg-white dark:bg-slate-900 ring-slate-200 dark:ring-slate-700 border-slate-100 dark:border-slate-800"}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className={`w-5 h-5 ${readability ? readability.color : "text-slate-400"}`} />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {lang === "ko" ? "가독성 분석" : lang === "es" ? "Análisis de Legibilidad" : "Readability Score"}
                    </span>
                  </div>

                  {readability ? (
                    <>
                      {/* Badge */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xl">{readability.emoji}</span>
                        <span className={`text-base font-black ${readability.color}`}>{readability.label}</span>
                        <span className={`ml-auto text-2xl font-black tabular-nums ${readability.color}`}>{readability.score}</span>
                      </div>

                      {/* Score bar */}
                      <div className="w-full h-2 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden mb-3">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-red-500 via-yellow-400 via-teal-400 to-emerald-500 transition-all duration-700"
                          style={{ width: `${readability.score}%` }}
                        />
                      </div>

                      <p className={`text-xs leading-relaxed font-medium ${readability.color} opacity-90`}>
                        {readability.description}
                      </p>

                      {/* Mini stats row */}
                      <div className="flex gap-4 mt-4 text-[11px] text-slate-400 font-medium">
                        <span>{lang === "ko" ? "문장" : lang === "es" ? "Oraciones" : "Sentences"}: <strong className="text-slate-600 dark:text-slate-300">{readability.sentences}</strong></span>
                        <span>{lang === "ko" ? "문장당 단어" : lang === "es" ? "Palabras/oración" : "Words/sentence"}: <strong className="text-slate-600 dark:text-slate-300">{readability.avgWordsPerSentence}</strong></span>
                      </div>
                    </>
                  ) : (
                    <p className="text-sm text-slate-400 dark:text-slate-500">
                      {lang === "ko" ? "텍스트를 입력하면 가독성을 분석합니다." : lang === "es" ? "Ingresa texto para analizar la legibilidad." : "Enter text to analyze readability."}
                    </p>
                  )}
                </div>
              </>
            )}
          </section>
        </div>

        {/* ── Feature Intro Section ── */}
        <section className="mt-20 max-w-4xl mx-auto w-full">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">
              {lang === "ko"
                ? "📋 이런 기능들을 사용할 수 있어요"
                : lang === "es"
                ? "📋 Funciones Disponibles"
                : "📋 What You Can Do Here"}
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-base">
              {lang === "ko"
                ? "블로거, 마케터, 발표자를 위한 올인원 글쓰기 분석 도구"
                : lang === "es"
                ? "Una herramienta de análisis de escritura todo en uno para bloggers, marketers y presentadores"
                : "An all-in-one writing analysis tool for bloggers, marketers, and presenters"}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {/* Feature 1: Reading Time */}
            <div className="group bg-white dark:bg-slate-900 rounded-2xl p-7 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-950 flex items-center justify-center mb-5 text-2xl group-hover:scale-110 transition-transform">
                ⏱️
              </div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">
                {lang === "ko" ? "읽기 시간 자동 계산" : lang === "es" ? "Cálculo Automático del Tiempo" : "Instant Reading Time"}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {lang === "ko"
                  ? "블로그 글이나 발표 원고를 붙여넣으면, 평균 읽기 속도를 기준으로 예상 읽기 시간을 즉시 계산합니다. 글자 수, 단어 수, 공백 포함/제외 통계도 함께 확인하세요."
                  : lang === "es"
                  ? "Pega tu texto y obtén al instante el tiempo estimado de lectura basado en la velocidad promedio. También muestra el conteo de caracteres y palabras."
                  : "Paste your blog post or article and instantly get the estimated reading time based on average adult reading speed. Includes character and word count stats."}
              </p>
            </div>

            {/* Feature 2: WPM Slider */}
            <div className="group bg-white dark:bg-slate-900 rounded-2xl p-7 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-950 flex items-center justify-center mb-5 text-2xl group-hover:scale-110 transition-transform">
                🎚️
              </div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">
                {lang === "ko" ? "WPM 읽기 속도 슬라이더" : lang === "es" ? "Ajuste Manual de WPM" : "Custom WPM Speed Slider"}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {lang === "ko"
                  ? "\"나는 말이 좀 빠른 편인데?\" 슬라이더를 움직여 분당 단어 수(WPM)를 50~600까지 직접 조절하세요. 조절할 때마다 읽기 시간이 실시간으로 바뀝니다. 느린 독자·평균·빠른 독자·전문가 프리셋도 제공합니다."
                  : lang === "es"
                  ? "¿Lees más rápido que el promedio? Ajusta el deslizador de WPM de 50 a 600 y el tiempo de lectura se actualiza en tiempo real. Incluye preajustes: lento, promedio, rápido, experto."
                  : "Read faster than average? Drag the WPM slider from 50 to 600 and watch the reading time update in real time. Preset buttons for Slow, Average, Fast, and Expert readers included."}
              </p>
            </div>

            {/* Feature 3: Teleprompter */}
            <div className="group bg-white dark:bg-slate-900 rounded-2xl p-7 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-950 flex items-center justify-center mb-5 text-2xl group-hover:scale-110 transition-transform">
                📺
              </div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">
                {lang === "ko" ? "텔레프롬프터 발표 연습" : lang === "es" ? "Modo Teleprompter" : "Teleprompter Practice Mode"}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {lang === "ko"
                  ? "계산된 읽기 시간에 딱 맞춰 텍스트가 뉴스 앵커 대본처럼 자동 스크롤됩니다. 발표 연습에 완벽한 풀스크린 모드. 속도(0.75×~1.5×) 조절, Space로 일시정지, Esc로 종료할 수 있습니다."
                  : lang === "es"
                  ? "El texto se desplaza automáticamente al ritmo exacto de tu tiempo de lectura, como en un teleprómpter profesional. Modo pantalla completa con control de velocidad y atajos de teclado."
                  : "Your text auto-scrolls at the exact pace of your reading time — just like a news anchor's teleprompter. Full-screen mode with speed control (0.75×–1.5×), Space to pause, Esc to exit."}
              </p>
            </div>

            {/* Feature 4: Readability */}
            <div className="group bg-white dark:bg-slate-900 rounded-2xl p-7 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center mb-5 text-2xl group-hover:scale-110 transition-transform">
                📖
              </div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">
                {lang === "ko" ? "가독성 분석 (Readability Score)" : lang === "es" ? "Análisis de Legibilidad" : "Readability Score Analysis"}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {lang === "ko"
                  ? "Flesch Reading Ease 알고리즘으로 글의 난이도를 분석합니다. '초등학생도 읽을 수 있는 쉬운 글'부터 '전문 논문 수준'까지 7단계 뱃지로 바로 확인하세요. SEO에 맞는 글인지 점검하기에 최고입니다."
                  : lang === "es"
                  ? "Analiza la dificultad de tu texto con el algoritmo Flesch Reading Ease. Obtén un nivel de 7 grados, desde 'Muy Fácil' hasta 'Muy Difícil (Experto)', ideal para optimizar tu contenido SEO."
                  : "Uses the Flesch Reading Ease algorithm to score your text from 0–100. Get a 7-level badge — from 'Very Easy' to 'Expert/Academic' — and instantly know if your content is SEO-friendly."}
              </p>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}

        <section className="mt-20 max-w-4xl mx-auto w-full prose prose-slate dark:prose-invert max-w-none">
          <div className="bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:shadow-md">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-indigo-600 rounded-full"></span>
              {t.whyTitle}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-0">
              {t.whyContent}
            </p>
          </div>
        </section>

        {/* AdSense Lower Banner - 계산기 하단 */}
        <div className="mt-16 max-w-4xl mx-auto w-full">
          <AdBanner slot="5123984021" />
        </div>

        <QaSection lang={lang} />

      </main>

      <Footer lang={lang} />

      {/* Teleprompter Modal */}
      {showTeleprompter && (
        <TeleprompterModal
          text={text}
          totalSeconds={totalReadingSeconds}
          onClose={() => setShowTeleprompter(false)}
          lang={lang}
        />
      )}
      {/* Countdown Overlay */}
      {isCountdown && (
        <CountdownOverlay
          duration={10}
          onComplete={handleCountdownComplete}
          lang={lang}
        />
      )}
    </div>
  );
}

function StatCard({ icon, label, value, unit, className = "" }: { icon: React.ReactNode, label: string, value: string | number, unit: string, className?: string }) {
  return (
    <div className={`bg-white dark:bg-slate-900 rounded-2xl p-6 flex flex-col items-start gap-3 ${className} hover:-translate-y-1 transition-transform border border-slate-100 dark:border-slate-800 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-none`}>
      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-semibold text-sm">
        {icon}
        <span>{label}</span>
      </div>
      <div className="text-3xl font-black text-slate-800 dark:text-white tracking-tight">
        {value} <span className="text-base font-medium text-slate-400 ml-1">{unit}</span>
      </div>
    </div>
  );
}
