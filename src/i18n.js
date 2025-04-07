// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector) // 自动检测用户语言
  .use(initReactI18next) // 将 i18n 绑定到 react-i18next
  .init({
    resources: {
      en: {
        translation: {
          welcome_title: "AI Robot Platform (Company Name TBD)",
          description: "Here is the introduction of the AI robot system...",
          try_now: "Try Now",
          login: "Login",
          support: "Support",
          store: "Store",
        },
      },
      zh: {
        translation: {
          welcome_title: "AI机器人平台（公司名待定）",
          description: "这里是AI机器人系统的介绍内容...",
          try_now: "立即体验",
          login: "登录",
          support: "支持",
          store: "商城",
        },
      },
    },
    fallbackLng: "en", // 默认语言
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
