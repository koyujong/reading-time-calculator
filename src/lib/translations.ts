export type Language = 'ko' | 'en' | 'es';

export const translations = {
  ko: {
    title: "Speech & Presentation Reading Time Calculator",
    subtitle: "블로그, 기사 등의 텍스트를 붙여넣으세요. 평균 읽기 속도를 기준으로 시간을 예측합니다.",
    placeholder: "여기에 텍스트를 입력하거나 붙여넣으세요...",
    clear: "지우기",
    resultTitle: "이 글을 읽는 데 걸리는 시간",
    minutes: "분",
    seconds: "초",
    gaugeLabel: "게이지 (Max: 20분 기준)",
    statWithSpace: "공백 포함",
    statWithoutSpace: "공백 제외",
    statWords: "단어 수",
    unitChar: "자",
    unitWord: "단어",
    seoTitle: "Speech & Presentation Reading Time Calculator",
    seoDesc: "블로그, 기사 등의 텍스트를 읽는 데 걸리는 시간을 한국어 평균 읽기 속도 기준으로 직관적으로 산출해 주는 도구입니다.",
    whyTitle: "읽기 시간 계산기를 왜 써야 하나요?",
    whyContent: "방문자가 글을 읽기 전에 대략적인 소요 시간을 알게 되면 심리적 부담이 줄어들어 체류 시간이 증가하는 효과가 있습니다. 블로그 포스팅 최상단에 '이 글을 읽는 데 O분 O초가 걸립니다'라는 안내 문구를 추가해 보세요. 독자의 이탈률을 낮추고 끝까지 읽게 만드는 훌륭한 전략이 될 수 있습니다.",
    faqTitle: "자주 묻는 질문(FAQ)",
    faqs: [
      {
        q: "읽기 시간은 어떤 기준으로 계산되나요?",
        a: "한국 성인 평균 읽기 속도인 '1분에 약 250~300자(공백 제외)'를 기준으로, 정밀하게 초 단위까지 변환하여 계산됩니다."
      },
      {
        q: "영어 글의 읽기 시간도 정확하게 계산되나요?",
        a: "현재 로직은 한국어 평균 타이핑 및 독서 속도에 최적화되어 있습니다. 다만, 영어 텍스트라도 '작성된 글자의 길이' 자체를 기반으로 계산되므로 대체로 비슷한 수준의 유의미한 시간이 산출됩니다."
      },
      {
        q: "입력한 텍스트 데이터는 저장되나요?",
        a: "아니요. 모든 계산은 브라우저 상에서 즉시(Client-side) 이루어지며, 입력하신 텍스트는 어떠한 서버로도 전송되거나 저장되지 않습니다. 안심하고 사용하셔도 됩니다."
      },
      { q: "WPM 슬라이더는 어떻게 활용하나요?", a: "WPM(Words Per Minute)은 분당 읽는 단어 수를 뜻합니다. 슬라이더를 50~600 사이에서 조절하면 읽기 시간이 실시간으로 바뀝니다. '느린 독자(100)', '평균(200)', '빠른 독자(300)', '전문가(450)' 프리셋 버튼을 눌러 빠르게 설정할 수도 있습니다." },
      { q: "텔레프롬프터 기능은 어떻게 사용하나요?", a: "텍스트를 입력한 뒤 '텔레프롬프터 모드로 연습하기' 버튼을 클릭하세요. 계산된 읽기 시간에 정확히 맞춰 텍스트가 자동 스크롤됩니다. Space 키로 일시정지, Esc로 종료, 속도 버튼(0.75×~1.5×)으로 빠르기를 조절할 수 있습니다." },
      { q: "가독성 점수(Readability Score)는 무엇인가요?", a: "Flesch Reading Ease 알고리즘을 기반으로, 문장 길이와 단어 음절 수를 분석해 0~100 사이의 점수를 매깁니다. 점수가 높을수록 읽기 쉬운 글이며, 60~80점이 일반 블로그 SEO에 가장 이상적인 구간입니다." },
      { q: "블로그 글 길이는 얼마가 SEO에 좋은가요?", a: "일반 정보성 블로그 포스팅은 7~12분 읽기 분량(약 1,400~2,400단어)이 구글 상위 노출에 유리합니다. 단, 가장 중요한 것은 단어 수보다 독자의 검색 의도에 맞는 내용과 구조입니다. 이 계산기로 목표 읽기 시간을 설정하고 그에 맞게 글을 쓰는 것을 권장합니다." },
      { q: "모바일에서도 사용할 수 있나요?", a: "네, 완전한 반응형 디자인으로 스마트폰과 태블릿에서도 동일하게 작동합니다. 텔레프롬프터 모드도 모바일 풀스크린을 지원합니다." },
    ],
  },
  en: {
    title: "Speech & Presentation Reading Time Calculator",
    subtitle: "Paste your blog post or article text. We estimate the reading time based on average reading speed.",
    placeholder: "Type or paste your text here...",
    clear: "Clear",
    resultTitle: "Estimated Reading Time",
    minutes: "min",
    seconds: "sec",
    gaugeLabel: "Gauge (Max: 20 mins)",
    statWithSpace: "Characters (with spaces)",
    statWithoutSpace: "Characters (no spaces)",
    statWords: "Word Count",
    unitChar: "chars",
    unitWord: "words",
    seoTitle: "Speech & Presentation Reading Time Calculator",
    seoDesc: "Easily calculate the estimated reading time of any text, article, or blog post to improve user engagement and retention.",
    whyTitle: "Why use a Reading Time Calculator?",
    whyContent: "When visitors know the approximate reading time before starting an article, their psychological burden decreases, leading to higher retention rates. Try adding an 'Estimated reading time: X mins' notice to the top of your blog posts to reduce bounce rates and encourage reading to the end.",
    faqTitle: "Frequently Asked Questions",
    faqs: [
      {
        q: "How is the reading time calculated?",
        a: "It is calculated based on the average adult reading speed of about 250 characters per minute (excluding spaces), precisely converted down to seconds."
      },
      {
        q: "Does it work well for non-Korean texts?",
        a: "While optimized for Korean average reading speeds, the logic uses the raw character length, so it provides a very reasonable estimate for English and other languages as well."
      },
      {
        q: "Is my text data saved anywhere?",
        a: "No. All calculations are performed instantly on your device (Client-side). The text you input is never sent to or stored on any server."
      },
      { q: "How does the WPM slider work?", a: "WPM stands for Words Per Minute — how many words you read in one minute. Drag the slider between 50 and 600 to see your reading time update instantly. Use the preset buttons (Slow 100 / Average 200 / Fast 300 / Expert 450) for quick settings." },
      { q: "How do I use the Teleprompter mode?", a: "Enter your text, then click 'Practice with Teleprompter'. Your text will auto-scroll at exactly the pace of your calculated reading time. Press Space to pause/resume, Esc to exit, and use the speed buttons (0.75×–1.5×) to adjust the scroll rate." },
      { q: "What is the Readability Score?", a: "The Readability Score uses the Flesch Reading Ease algorithm — it analyzes average sentence length and syllables per word to produce a score from 0 to 100. Higher scores mean easier reading. A score of 60–80 is generally considered the sweet spot for SEO-friendly blog content." },
      { q: "What blog post length is best for SEO?", a: "For informational blog posts, 7–12 minutes of reading time (roughly 1,400–2,400 words) tends to perform best in Google search rankings. However, what matters most is matching the reader's search intent — not word count alone. Use this calculator to set a target reading time and write to fit it." },
      { q: "Does it work on mobile devices?", a: "Yes — the tool is fully responsive and works seamlessly on smartphones and tablets. The Teleprompter mode also supports mobile full-screen." },
    ],
  },
  es: {
    title: "Speech & Presentation Reading Time Calculator",
    subtitle: "Pega el texto de tu blog o artículo. Estimamos el tiempo de lectura basándonos en la velocidad de lectura promedio.",
    placeholder: "Escribe o pega tu texto aquí...",
    clear: "Borrar",
    resultTitle: "Tiempo Estimado de Lectura",
    minutes: "min",
    seconds: "seg",
    gaugeLabel: "Medidor (Máx: 20 min)",
    statWithSpace: "Caracteres (con espacios)",
    statWithoutSpace: "Caracteres (sin espacios)",
    statWords: "Número de palabras",
    unitChar: "caract",
    unitWord: "palabras",
    seoTitle: "Speech & Presentation Reading Time Calculator",
    seoDesc: "Calcula fácilmente el tiempo estimado de lectura de cualquier texto, artículo o entrada de blog para mejorar la participación del usuario.",
    whyTitle: "¿Por qué usar una calculadora de tiempo de lectura?",
    whyContent: "Cuando los visitantes conocen el tiempo aproximado de lectura antes de comenzar un artículo, su carga psicológica disminuye, lo que conduce a mayores tasas de retención. Intenta agregar un aviso de 'Tiempo estimado de lectura: X min' en la parte superior de tus publicaciones para reducir la tasa de rebote.",
    faqTitle: "Preguntas Frecuentes",
    faqs: [
      {
        q: "¿Cómo se calcula el tiempo de lectura?",
        a: "Se calcula según la velocidad de lectura promedio de los adultos de aproximadamente 250 caracteres por minuto (excluyendo espacios), convertido con precisión a segundos."
      },
      {
        q: "¿Funciona bien para textos que no están en coreano?",
        a: "Aunque está optimizada para las velocidades de lectura promedio en coreano, la lógica utiliza la longitud de los caracteres sin procesar, por lo que también proporciona una estimación razonable para inglés, español y otros idiomas."
      },
      {
        q: "¿Se guardan los datos de mi texto en algún lugar?",
        a: "No. Todos los cálculos se realizan instantáneamente en su dispositivo (del lado del cliente). El texto que ingresa nunca se envía ni se almacena en ningún servidor."
      },
      { q: "¿Cómo funciona el deslizador de WPM?", a: "WPM significa palabras por minuto. Arrastra el deslizador entre 50 y 600 para ver cómo cambia el tiempo de lectura en tiempo real. También puedes usar los botones de preajuste: Lento (100), Promedio (200), Rápido (300) y Experto (450)." },
      { q: "¿Cómo uso el modo Teleprompter?", a: "Ingresa tu texto y haz clic en 'Practicar en Modo Teleprompter'. El texto se desplazará automáticamente al ritmo de tu tiempo de lectura calculado. Presiona la barra espaciadora para pausar, Esc para salir y usa los botones de velocidad (0.75×–1.5×) para ajustar el ritmo." },
      { q: "¿Qué es la Puntuación de Legibilidad?", a: "La Puntuación de Legibilidad utiliza el algoritmo Flesch Reading Ease: analiza la longitud promedio de las frases y las sílabas por palabra para dar una puntuación de 0 a 100. Mayor puntuación = texto más fácil de leer. Entre 60 y 80 es el rango ideal para el SEO de blogs." },
      { q: "¿Qué longitud de publicación es mejor para el SEO?", a: "Para publicaciones informativas, un tiempo de lectura de 7 a 12 minutos (aproximadamente 1.400 a 2.400 palabras) tiende a rendir mejor en las búsquedas de Google. Lo más importante es responder la intención de búsqueda del lector, no solo alcanzar un número de palabras." },
      { q: "¿Funciona en dispositivos móviles?", a: "Sí, la herramienta es totalmente responsiva y funciona perfectamente en smartphones y tablets. El modo Teleprompter también es compatible con pantalla completa en móvil." },
    ],
  }
};
