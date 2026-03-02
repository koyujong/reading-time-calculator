import { Language } from "./translations";

export const extraTranslations: Record<Language, {
  footer: {
    tagline: string;
    privacy: string;
    terms: string;
    about: string;
    contact: string;
    rights: string;
  };
  privacy: {
    title: string;
    lastUpdated: string;
    sections: {
      title: string;
      content: string | string[];
    }[];
  };
  terms: {
    title: string;
    lastUpdated: string;
    sections: {
      title: string;
      content: string | string[];
    }[];
  };
  about: {
    title: string;
    missionTitle: string;
    missionContent: string;
    whyTitle: string;
    whyContent: string;
  };
}> = {
  ko: {
    footer: {
      tagline: "블로그, 기사 등의 콘텐츠를 독자들이 끝까지 읽을 수 있도록 체류 시간을 늘려주는 완벽한 도우미.",
      privacy: "개인정보 처리방침",
      terms: "서비스 이용약관",
      about: "소개",
      contact: "문의하기",
      rights: "All rights reserved."
    },
    privacy: {
      title: "개인정보 처리방침",
      lastUpdated: "최종 업데이트: 2026년 3월 2일",
      sections: [
        {
          title: "1. 우리가 수집하는 정보",
          content: "본 서비스(읽기 시간 계산기)는 100% 브라우저(Client-side) 상에서 동작합니다. 따라서 사용자가 입력하는 어떠한 텍스트 데이터나 글도 서버로 전송, 수집, 저장되지 않습니다."
        },
        {
          title: "2. 쿠키 및 분석 도구",
          content: "서비스 개선을 위해 Google Analytics와 같은 표준 분석 도구를 사용할 수 있습니다. 이는 접속 횟수나 지역 등 비식별화된 데이터만 측정합니다."
        },
        {
          title: "3. 광고 (Google AdSense)",
          content: "본 웹사이트는 운영을 유지하기 위해 Google AdSense 광고를 게재할 수 있습니다. Google은 사용자의 브라우저 쿠키를 기반으로 관심 기반 광고를 게재할 수 있으며, 구글 광고 설정 페이지에서 언제든 맞춤설정 광고를 거부하실 수 있습니다."
        }
      ]
    },
    terms: {
      title: "서비스 이용약관",
      lastUpdated: "최종 업데이트: 2026년 3월 2일",
      sections: [
        {
          title: "1. 이용 약관 동의",
          content: "본 웹사이트 서비스에 접속하고 이용함에 있어, 사용자는 이 이용약관에 동의하는 것으로 간주합니다."
        },
        {
          title: "2. 서비스의 성격",
          content: "본 '읽기 시간 계산기' 서비스는 무료로 제공되며, 입력된 텍스트에 대한 어떠한 권리나 책임도 위임받거나 지지 않습니다."
        },
        {
          title: "3. 면책 조항",
          content: "이 도구에서 산출되는 '읽기 시간'은 통계적인 추정치일 뿐이며, 법적 효력을 갖지 않으며 절대적인 기준이 될 수 없습니다."
        }
      ]
    },
    about: {
      title: "서비스 소개",
      missionTitle: "콘텐츠 크리에이터를 위한 도구",
      missionContent: "수많은 정보 속에서 독자들이 내 글을 끝까지 읽게 만드는 것은 모든 블로거와 기자의 숙제입니다. 우리는 직관적인 시간 산출 도구를 통해 독자의 심리적 장벽을 낮추는 솔루션을 제공합니다.",
      whyTitle: "가장 가볍고 안전한 계산기",
      whyContent: "본 서비스는 데이터베이스나 서버를 거치지 않고 오로지 기기 내부의 연산 자원만을 활용하여 순식간에 데이터를 분석합니다. 어떠한 흔적도 남지 않으니 편하게 사용하세요."
    }
  },
  en: {
    footer: {
      tagline: "The perfect helper to keep your readers engaged and increase the retention time of your content.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      about: "About Us",
      contact: "Contact us",
      rights: "All rights reserved."
    },
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: March 2, 2026",
      sections: [
        {
          title: "1. Information We Collect",
          content: "This service (Reading Time Calculator) operates 100% on the browser (Client-side). Therefore, any text data or articles you enter are never transmitted, collected, or stored on our servers."
        },
        {
          title: "2. Cookies and Analytics",
          content: "We may use standard analytics tools like Google Analytics to improve our service. This only measures depersonalized data such as the number of visits or regions."
        },
        {
          title: "3. Advertising (Google AdSense)",
          content: "This website may serve Google AdSense ads to maintain operations. Google may serve interest-based ads based on your browser cookies. You can opt out of personalized ads at any time via the Google Ad Settings page."
        }
      ]
    },
    terms: {
      title: "Terms of Service",
      lastUpdated: "Last Updated: March 2, 2026",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content: "By accessing and using this website, you are deemed to have agreed to these Terms of Use."
        },
        {
          title: "2. Nature of the Service",
          content: "This 'Reading Time Calculator' service is provided free of charge, and we do not assume or delegate any rights or responsibilities for the text entered."
        },
        {
          title: "3. Disclaimer",
          content: "The 'Reading Time' calculated by this tool is only a statistical estimate, does not have any legal effect, and cannot be an absolute standard."
        }
      ]
    },
    about: {
      title: "About Us",
      missionTitle: "A tool for Content Creators",
      missionContent: "Among countless information, making readers read your article to the end is the homework of all bloggers and journalists. We provide a solution to lower the psychological barrier of readers through an intuitive calculation tool.",
      whyTitle: "The lightest and safest calculator",
      whyContent: "This service analyzes data in an instant by utilizing only the internal computing resources of your device without going through any database or server. Leave no trace, so use it comfortably."
    }
  },
  es: {
    footer: {
      tagline: "El ayudante perfecto para mantener a sus lectores comprometidos y aumentar el tiempo de retención de su contenido.",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
      about: "Sobre Nosotros",
      contact: "Contáctenos",
      rights: "Todos los derechos reservados."
    },
    privacy: {
      title: "Política de Privacidad",
      lastUpdated: "Última Actualización: 2 de marzo de 2026",
      sections: [
        {
          title: "1. Información que recopilamos",
          content: "Este servicio (Calculadora de Tiempo de Lectura) funciona 100% en el navegador (del lado del cliente). Por lo tanto, los datos de texto o artículos que usted ingrese nunca son transmitidos, recopilados ni almacenados en nuestros servidores."
        },
        {
          title: "2. Cookies y Analítica",
          content: "Podemos utilizar herramientas de análisis estándar como Google Analytics para mejorar nuestro servicio. Esto solo mide datos despersonalizados como el número de visitas o regiones."
        },
        {
          title: "3. Publicidad (Google AdSense)",
          content: "Este sitio web puede mostrar anuncios de Google AdSense para mantener las operaciones. Google puede mostrar anuncios basados en intereses según las cookies de su navegador. Puede optar por no recibir anuncios personalizados en la página de Configuración de Anuncios de Google."
        }
      ]
    },
    terms: {
      title: "Términos de Servicio",
      lastUpdated: "Última Actualización: 2 de marzo de 2026",
      sections: [
        {
          title: "1. Aceptación de los Términos",
          content: "Al acceder y usar este sitio web, se considera que ha aceptado estos Términos de Uso."
        },
        {
          title: "2. Naturaleza del Servicio",
          content: "Este servicio de 'Calculadora de Tiempo de Lectura' se proporciona de forma gratuita, y no asumimos ni delegamos ningún derecho o responsabilidad sobre el texto ingresado."
        },
        {
          title: "3. Descargo de Responsabilidad",
          content: "El 'Tiempo de Lectura' calculado por esta herramienta es solo una estimación estadística, no tiene ningún efecto legal y no puede ser un estándar absoluto."
        }
      ]
    },
    about: {
      title: "Sobre Nosotros",
      missionTitle: "Una herramienta para Creadores de Contenido",
      missionContent: "Entre la innumerable información, lograr que los lectores lean su artículo hasta el final es la tarea de todos los blogueros y periodistas. Brindamos una solución para reducir la barrera psicológica de los lectores a través de una herramienta intuitiva de cálculo.",
      whyTitle: "La calculadora más ligera y segura",
      whyContent: "Este servicio analiza los datos en un instante utilizando únicamente los recursos informáticos internos de su dispositivo sin pasar por ninguna base de datos ni servidor. No deje rastro, así que utilícela cómodamente."
    }
  }
};
