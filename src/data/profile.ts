export const hero = {
  name: "Toka",
  greeting: "Hello, I'm",
  tagline: "Developer & Creator",
  avatar: "https://avatars.githubusercontent.com/u/64892129?v=4",
};

export const about = {
  paragraphs: [
    "自然言語処理を専門としている大学院生です。",
    "他にも、フロントエンド開発やバックエンド開発も行っています。",
  ],
  stats: [
    { number: "6+", label: "Years Experience" },
    { number: "5+", label: "Technologies" },
  ],
};

export const affiliation = {
  org: "奈良先端科学技術大学院大学 先端科学技術研究科",
  role: "修士課程 / 自然言語学研究室",
  detail: "自然言語処理分野の研究に従事。深層学習をテーマに取り組んでいます。",
};

export const education = [
  { period: "2026.04 —", org: "奈良先端科学技術大学院大学", detail: "修士課程", current: true },
  { period: "2024.04 — 2026.03", org: "久留米工業高等専門学校 専攻科", detail: "機械・電気システム工学専攻 卒業", current: false },
  { period: "2019.04 — 2024.03", org: "久留米工業高等専門学校 本科", detail: "制御情報工学科 卒業", current: false },
];

export const internships = [
  {
    period: "2025.06 — ",
    org: "株式会社エムケイシステム",
    role: "ソフトウェアエンジニア",
    detail: "フロントエンド開発とバックエンド開発を担当。",
    techs: ["TypeScript", "React", "Kotlin"],
  },
  {
    period: "2024.08 — 2025.02",
    org: "TinaSystems合同会社",
    role: "フロントエンドエンジニア",
    detail: "フロントエンド開発を担当。Reactを使用してユーザーインターフェースの構築に従事。",
    techs: ["React", "TypeScript"],
  },
    {
    period: "2021.08 — 2023.03",
    org: "株式会社HxS",
    role: "フロントエンドエンジニア",
    detail: "主にフロントエンド開発を担当。React Nativeを使用したアプリケーションの構築に従事。",
    techs: ["React", "TypeScript"],
  },
];

export const skills = [
  { name: "TypeScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 85 },
  { name: "Python", level: 75 },
  { name: "Kotlin", level: 25 },
];

export const contacts = [
  { label: "GitHub", href: "https://github.com/veluriy", external: true },
  { label: "Email", href: "mailto:ptlx@outlook.com", external: false },
];
