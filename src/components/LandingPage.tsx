import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Globe, User } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function LandingPage() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [showLang, setShowLang] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* 顶部导航栏 */}
      <header className="flex justify-between items-center p-4 border-b border-gray-800">
        <div className="text-xl font-bold">AI Robot</div>
        <nav className="flex items-center space-x-4">
          <Button variant="ghost" className="text-white">
            {t("support")}
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            {t("store")}
          </Button>
          <div className="relative">
            <button onClick={() => setShowLang(!showLang)}>
              <Globe className="w-5 h-5" />
            </button>
            {showLang && (
              <div className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded">
                <button
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => i18n.changeLanguage("en")}
                >
                  English
                </button>
                <button
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => i18n.changeLanguage("zh")}
                >
                  中文
                </button>
              </div>
            )}
          </div>
          <Button onClick={() => navigate("/login")}>{t("login")}</Button>
        </nav>
      </header>

      {/* 内容卡片 */}
      <main className="flex-grow flex items-center justify-center px-4">
        <Card className="w-full max-w-2xl p-10 rounded-xl shadow-lg bg-zinc-900 text-white text-center">
          <h1 className="text-4xl font-bold mb-6">{t("welcome_title")}</h1>
          <p className="text-lg mb-6">{t("description")}</p>
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-lg px-6 py-3"
            onClick={() => navigate("/login")}
          >
            立即体验
          </Button>

          {/* LOGO */}
          <div className="mt-10">
            <img
              src="/logo-placeholder.png"
              alt="公司 Logo"
              className="w-32 h-32 md:w-48 md:h-48 mx-auto animate-pulse"
            />
          </div>
        </Card>
      </main>

      {/* 页脚 */}
      <footer className="text-center text-gray-500 text-sm p-4">
        &copy; 2025 AI Robot 公司名待定
      </footer>
    </div>
  );
}
