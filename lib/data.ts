export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type TechAsset = {
  name: string;
  icon: string;
};

export type SkillGroup = {
  title: string;
  items: TechAsset[];
};

export type Project = {
  title: string;
  role: string;
  place: string;
  period: string;
  image: string;
  summary: string;
  participation: string[];
  technologies: TechAsset[];
  repositoryUrl: string;
};

export type Certificate = {
  title: string;
  issuer: string;
  period: string;
  image: string;
  description: string;
  details: string[];
};

export type ContactItem = {
  label: string;
  value: string;
  href?: string;
};

export const cvPath = "/cv/Hoja_de_Vida_Bryan_Oviedo.pdf";

export const profile = {
  name: "Bryan Steven Oviedo Sánchez",
  shortName: "Bryan Oviedo",
  role: "Ingeniero de Software",
  location: "Ambato, Ecuador",
  phone: "+593 959 564 825",
  email: "bryanoviedogt@gmail.com",
  portfolio: "bryanoviedo4550.vercel.app",
  linkedin: "linkedin.com/in/bryan-oviedo-sánchez-323795152",
  headline:
    "Desarrollo soluciones Full Stack y experiencias inmersivas en Realidad Virtual.",
  summary:
    "Ingeniero de Software Full Stack enfocado en construir aplicaciones escalables, intuitivas y de alto rendimiento. Conecto el desarrollo web y arquitecturas backend con proyectos de Realidad Virtual aplicados a la educación y la salud."
};


export const heroBadges = [
  "Frontend",
  "Backend",
  "Realidad Virtual",
  "Unity",
  "UX"
];

export const heroStats = [
  {
    value: "1+",
    label: "Experiencias"
  },
  {
    value: "5",
    label: "Áreas técnicas"
  },
  {
    value: "VR",
    label: "Innovación"
  },
  {
    value: "2026",
    label: "Graduación"
  }
];

export const navItems: NavItem[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Certificados", href: "#certificados" },
  { label: "Contacto", href: "#contacto" }
];

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/bryan-oviedo-sánchez-323795152"
  },
  {
    label: "Portafolio",
    href: "https://bryanoviedo4550.vercel.app"
  },
  {
    label: "Email",
    href: "mailto:bryanoviedogt@gmail.com"
  }
];

export const techIcons = {
  javascript: { name: "JavaScript", icon: "/images/skills/javascript.svg" },
  html5: { name: "HTML5", icon: "/images/skills/html5.svg" },
  css3: { name: "CSS3", icon: "/images/skills/css3.svg" },
  typescript: { name: "TypeScript", icon: "/images/skills/typescript.svg" },
  python: { name: "Python", icon: "/images/skills/python.svg" },
  java: { name: "Java", icon: "/images/skills/java.svg" },
  csharp: { name: "C#", icon: "/images/skills/csharp.svg" },
  node: { name: "Node.js", icon: "/images/skills/nodejs.svg" },
  django: { name: "Django", icon: "/images/skills/django.svg" },
  react: { name: "React.js", icon: "/images/skills/react.svg" },
  reactNative: { name: "React Native", icon: "/images/skills/react-native.svg" },
  angular: { name: "Angular", icon: "/images/skills/angular.svg" },
  mysql: { name: "MySQL", icon: "/images/skills/mysql.svg" },
  postgresql: { name: "PostgreSQL", icon: "/images/skills/postgresql.svg" },
  mongodb: { name: "MongoDB", icon: "/images/skills/mongodb.svg" },
  firebase: { name: "Firebase", icon: "/images/skills/firebase.svg" },
  supabase: { name: "Supabase", icon: "/images/skills/supabase.svg" },
  sonarqube: { name: "SonarQube", icon: "/images/skills/sonarqube.svg" },
  postman: { name: "Postman", icon: "/images/skills/postman.svg" },
  git: { name: "Git", icon: "/images/skills/git.svg" },
  github: { name: "GitHub", icon: "/images/skills/github.svg" },
  docker: { name: "Docker", icon: "/images/skills/docker.svg" },
  nest: { name: "NestJS", icon: "/images/skills/nestjs.svg" },
  socket: { name: "Socket.io", icon: "/images/skills/socketio.svg" },
  jwt: { name: "JWT", icon: "/images/skills/jwt.svg" },
  unity: { name: "Unity", icon: "/images/skills/unity.svg" },
  metaQuest: { name: "Meta Quest 3", icon: "/images/skills/meta-quest.svg" },
  vuejs: { name: "Vue.js", icon: "/images/skills/vuejs.svg" },
  php: { name: "PHP", icon: "/images/skills/php.svg" },
  kotlin: { name: "Kotlin", icon: "/images/skills/kotlin.svg" },
  dart: { name: "Dart", icon: "/images/skills/dart.svg" },
  astro: { name: "Astro", icon: "/images/skills/astro.svg" },
  bootstrap: { name: "Bootstrap", icon: "/images/skills/bootstrap.svg" },
  springboot: { name: "Spring Boot", icon: "/images/skills/springboot.svg" },
  laravel: { name: "Laravel", icon: "/images/skills/laravel.svg" },
  mariadb: { name: "MariaDB", icon: "/images/skills/mariadb.svg" },
  selenium: { name: "Selenium", icon: "/images/skills/selenium.svg" },
  jmeter: { name: "JMeter", icon: "/images/skills/jmeter.svg" },
  soapui: { name: "SoapUI", icon: "/images/skills/soapui.svg" },
  figma: { name: "Figma", icon: "/images/skills/figma.svg" },
  slack: { name: "Slack", icon: "/images/skills/slack.svg" },
  flutter: { name: "Flutter", icon: "/images/skills/flutter.svg" },
  androidStudio: { name: "Android Studio", icon: "/images/skills/android-studio.png" },
  vercel: { name: "Vercel", icon: "/images/skills/vercel.svg" },
  api: { name: "API", icon: "/images/skills/api.svg" },
  chatgpt: { name: "ChatGPT", icon: "/images/skills/openai.svg" },
  gemini: { name: "Gemini IA", icon: "/images/skills/gemini.svg" }
} satisfies Record<string, TechAsset>;

export const skillGroups: SkillGroup[] = [
  {
    title: "Lenguajes de programación",
    items: [
      techIcons.javascript,
      techIcons.html5,
      techIcons.css3,
      techIcons.typescript,
      techIcons.python,
      techIcons.java,
      techIcons.csharp,
      techIcons.php,
      techIcons.kotlin,
      techIcons.dart
    ]
  },
  {
    title: "Backend",
    items: [techIcons.node, techIcons.nest, techIcons.django, techIcons.springboot, techIcons.laravel]
  },
  {
    title: "Frontend",
    items: [
      techIcons.html5,
      techIcons.css3,
      techIcons.react,
      techIcons.reactNative,
      techIcons.angular,
      techIcons.vuejs,
      techIcons.astro,
      techIcons.bootstrap
    ]
  },
  {
    title: "Base de datos",
    items: [
      techIcons.mysql,
      techIcons.postgresql,
      techIcons.mongodb,
      techIcons.firebase,
      techIcons.supabase,
      techIcons.mariadb
    ]
  },
  {
    title: "QA y herramientas",
    items: [
      techIcons.sonarqube,
      techIcons.postman,
      techIcons.git,
      techIcons.github,
      techIcons.docker,
      techIcons.socket,
      techIcons.jwt,
      techIcons.unity,
      techIcons.metaQuest,
      techIcons.selenium,
      techIcons.jmeter
    ]
  }
];

export const projects: Project[] = [
  {
    title: "Gestión de Inventario - Web",
    role: "Desarrollador Frontend",
    place: "Facultad de Ingeniería en Sistemas, Electrónica e Industrial - FISEI",
    period: "Proyecto académico",
    image: "/images/projects/01-inventory-web.png",
    summary:
      "Aplicación web enfocada en la gestión de inventario dentro de la facultad FISEI, orientada al control y administración de activos como computadores, cámaras y licencias de software.",
    participation: [
      "Desarrollo del frontend de la aplicación web utilizando Angular.",
      "Construcción de pantallas para registro, consulta y administración de activos.",
      "Implementación de una interfaz clara para facilitar el seguimiento del inventario institucional."
    ],
    technologies: [
      techIcons.angular,
      techIcons.typescript,
      techIcons.html5,
      techIcons.css3
    ],
    repositoryUrl: "https://github.com/"
  },
  {
    title: "Gestión de Inventario - Mobile",
    role: "Desarrollador Frontend Mobile",
    place: "Facultad de Ingeniería en Sistemas, Electrónica e Industrial - FISEI",
    period: "Proyecto académico",
    image: "/images/projects/02-inventory-mobile.png",
    summary:
      "Aplicación móvil para la gestión de inventario dentro de la facultad FISEI, incorporando códigos QR para rastrear y administrar computadores de manera eficiente.",
    participation: [
      "Desarrollo del frontend de la aplicación móvil utilizando Flutter.",
      "Consumo de servicios backend desarrollados en Django.",
      "Implementación de flujos para lectura de códigos QR y consulta de información de activos."
    ],
    technologies: [
      techIcons.flutter,
      techIcons.dart,
      techIcons.django,
      techIcons.python,
      techIcons.api
    ],
    repositoryUrl: "https://github.com/"
  },
  {
    title: "Gestión de Proyectos - Web",
    role: "Desarrollador Frontend",
    place: "Proyecto académico",
    period: "Proyecto académico",
    image: "/images/projects/03-project-management-web.png",
    summary:
      "Aplicación web diseñada para el seguimiento de proyectos, administración de tareas y control de actividades, utilizando Angular para una interfaz dinámica y MongoDB para almacenamiento flexible.",
    participation: [
      "Desarrollo del frontend de la aplicación web utilizando Angular.",
      "Integración de endpoints API para operaciones CRUD.",
      "Construcción de interfaces para crear, actualizar, consultar y gestionar proyectos y tareas."
    ],
    technologies: [
      techIcons.angular,
      techIcons.typescript,
      techIcons.mongodb,
      techIcons.api
    ],
    repositoryUrl: "https://github.com/"
  },
  {
    title: "Tienda Online de Dispositivos Móviles - Web",
    role: "Desarrollador Frontend",
    place: "Proyecto académico",
    period: "Proyecto académico",
    image: "/images/projects/04-store-mobiles-web.png",
    summary:
      "Tienda online desarrollada con Angular, enfocada en ofrecer una interfaz dinámica y responsive para explorar productos, agregar artículos al carrito y gestionar una experiencia básica de compra.",
    participation: [
      "Participación en el desarrollo de la interfaz de usuario.",
      "Implementación de la funcionalidad del carrito de compras.",
      "Diseño de vistas responsive para mejorar la experiencia del usuario en diferentes dispositivos."
    ],
    technologies: [
      techIcons.angular,
      techIcons.typescript,
      techIcons.mongodb,
      techIcons.html5,
      techIcons.css3
    ],
    repositoryUrl: "https://github.com/"
  },
  {
    title: "Tienda de Ropa - Mobile",
    role: "Desarrollador Mobile",
    place: "Proyecto académico",
    period: "Proyecto académico",
    image: "/images/projects/05-store-clothes-mobile.png",
    summary:
      "Aplicación móvil de tienda de ropa que permite explorar productos, agregarlos al carrito y completar compras de forma segura, incluyendo autenticación de usuarios y seguimiento de pedidos.",
    participation: [
      "Desarrollo de la aplicación móvil utilizando Android Studio.",
      "Implementación de autenticación de usuarios.",
      "Participación en el desarrollo del seguimiento de pedidos y flujo de compra."
    ],
    technologies: [
      techIcons.androidStudio,
      techIcons.firebase,
      techIcons.java
    ],
    repositoryUrl: "https://github.com/"
  },
  {
    title: "Sistema de Iluminación LED EP-EMA",
    role: "Pasante · Desarrollador Frontend",
    place: "EP-EMA Empresa Pública Empresa Municipal Mercado Mayorista",
    period: "Abril 2024 – Julio 2024",
    image: "/images/projects/06-led-epema.png",
    summary:
      "Implementación de una aplicación para la activación automática, control y supervisión del sistema de iluminación LED, orientada a mejorar la administración operativa del sistema.",
    participation: [
      "Investigación de temas técnicos y artículos científicos relacionados con redes, bases de datos y sistemas de control.",
      "Participación como responsable de pruebas, documentación y manuales de usuario.",
      "Apoyo en la integración de la interfaz con servicios backend mediante APIs REST.",
      "Colaboración en la supervisión del sistema mediante comunicación en tiempo real."
    ],
    technologies: [
      techIcons.react,
      techIcons.node,
      techIcons.nest,
      techIcons.socket,
      techIcons.jwt,
      techIcons.postman
    ],
    repositoryUrl: "https://github.com/"
  },
  {
    title: "Agente de Investigación en Realidad Virtual para la UTA",
    role: "Investigador · Practicante",
    place: "Facultad de Ciencias de la Salud · Universidad Técnica de Ambato",
    period: "Enero 2024 – Mayo 2025",
    image: "/images/projects/07-vr-uta.png",
    summary:
      "Proyecto de realidad virtual diseñado como guía para personas sin conocimientos médicos, ofreciendo una experiencia inmersiva para aprender sobre instrumentos quirúrgicos y procedimientos médicos.",
    participation: [
      "Investigación de artículos científicos y recopilación de información relevante.",
      "Gestión del área de modelado de instrumentos quirúrgicos.",
      "Apoyo en la definición de contenido educativo para usuarios sin conocimientos médicos.",
      "Colaboración en iniciativas académicas relacionadas con simulación, innovación y experiencia de usuario."
    ],
    technologies: [
      techIcons.unity,
      techIcons.csharp,
      techIcons.metaQuest,
      techIcons.git,
      techIcons.github
    ],
    repositoryUrl: "https://github.com/"
  },
  {
    title: "Simulación VR con IA para Diálogos Médicos",
    role: "Desarrollador Full Stack / VR",
    place: "Proyecto especializado para consultorio médico",
    period: "Proyecto especializado",
    image: "/images/projects/08-vr-medconsult.png",
    summary:
      "Aplicación especializada con realidad virtual para simular diálogos con pacientes mediante inteligencia artificial, orientada a prácticas médicas y entrenamiento en escenarios clínicos. Incluye una plataforma web tipo dashboard para registrar el progreso de los usuarios.",
    participation: [
      "Desarrollo de una experiencia inmersiva en Unity para Meta Quest.",
      "Integración de inteligencia artificial mediante ChatGPT y Gemini IA para simular conversaciones con pacientes.",
      "Construcción de una parte web con React para visualizar registros, avances y progreso de los usuarios.",
      "Implementación de APIs mediante route.ts para conectar el dashboard, la base de datos y los servicios de IA.",
      "Uso de MongoDB para almacenamiento de datos y Vercel para despliegue de la plataforma web."
    ],
    technologies: [
      techIcons.unity,
      techIcons.csharp,
      techIcons.metaQuest,
      techIcons.react,
      techIcons.mongodb,
      techIcons.vercel,
      techIcons.chatgpt,
      techIcons.gemini,
      techIcons.api
    ],
    repositoryUrl: "https://github.com/"
  }
];

export const certificates: Certificate[] = [
  {
    title: "Javascript Essentials Course 1",
    issuer: "Curso de JavaScript",
    period: "Septiembre 2024 – Noviembre 2024",
    image: "/images/certificates/JAVA1.png",
    description:
      "Formación base en fundamentos de JavaScript, estructuras principales y lógica de programación.",
    details: [
      "Refuerzo de sintaxis, variables, estructuras condicionales y funciones.",
      "Práctica de lógica para desarrollo web.",
      "Base técnica para avanzar hacia frontend moderno."
    ]
  },
  {
    title: "Javascript Essentials Course 2",
    issuer: "Curso de JavaScript",
    period: "Noviembre 2024 – Enero 2025",
    image: "/images/certificates/JAVA2.png",
    description:
      "Continuación del aprendizaje en JavaScript con enfoque en conceptos aplicables al desarrollo de interfaces.",
    details: [
      "Profundización en programación con JavaScript.",
      "Aplicación de conceptos en ejercicios prácticos.",
      "Preparación para proyectos frontend con React y frameworks modernos."
    ]
  },
  {
    title: "Hatun Soft Programming Contest",
    issuer: "Concurso de programación",
    period: "Junio 2023",
    image: "/images/certificates/HATUN.png",
    description:
      "Participación en concurso de programación orientado a resolución de problemas y pensamiento lógico.",
    details: [
      "Resolución de problemas bajo restricciones de tiempo.",
      "Aplicación de lógica, análisis y estructuras de programación.",
      "Experiencia en competencia académica de software."
    ]
  },
  {
    title: "IV Conference on Computer Science, Electronics",
    issuer: "Conferencia académica",
    period: "Junio 2021 – Agosto 2021",
    image: "/images/certificates/RED.png",
    description:
      "Participación en conferencia relacionada con ciencias de la computación, electrónica e innovación tecnológica.",
    details: [
      "Actualización académica en temas de computación y electrónica.",
      "Participación en espacios de innovación tecnológica.",
      "Fortalecimiento de criterio técnico para proyectos de software."
    ]
  }
];

export const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`
  },
  {
    label: "Teléfono",
    value: profile.phone,
    href: "tel:+593959564825"
  },
  {
    label: "Ubicación",
    value: profile.location
  }
];
