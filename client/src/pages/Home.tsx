import { Button } from "@/components/ui/button";
import { ArrowRight, Film, Users, Calendar, Lightbulb } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * LGFF Promo Site - Modern Religious Art + Cinema Aesthetic
 * Design System: Deep Blue (#1a3a52) + Gold (#f4d9a6) + Dark Background (#0f1419)
 * Typography: Playfair Display (titles) + Lato (body)
 * Layout: Non-symmetric, poster-style hero section
 */

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663286619585/HpBToCsyiUUeGfMJ.jpg";
const POSTER_URL = "https://private-us-east-1.manuscdn.com/sessionFile/xwOJYriOllabhN4pyZGXPW/sandbox/UEplEJ728DdVehmlikp6AT-img-1_1770043239000_na1fn_bGlnaHRob3VzZS1oZXJvLWJn.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="LGFF Logo" className="h-12 w-auto" />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-accent" style={{ fontFamily: "'Playfair Display', serif" }}>LFF</h1>
              <p className="text-xs text-gray-400">灯塔影展</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a href="#about" className="text-sm text-gray-300 hover:text-accent transition-colors">
              关于
            </a>
            <a href="#requirements" className="text-sm text-gray-300 hover:text-accent transition-colors">
              参赛资格
            </a>
            <a href="#deadline" className="text-sm text-gray-300 hover:text-accent transition-colors">
              截止日期
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('${POSTER_URL}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <div className="gold-divider mb-6"></div>
              <h1 className="text-5xl md:text-6xl font-bold text-accent leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Lighthouse<br />
                Film Festival
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                灯塔影展
              </h2>
            </div>

            <p className="text-lg text-gray-200 max-w-lg">
              由臺北基督學院發起，聚焦全球基督徒學生的福音影像創作。我們邀請以劇情敘事呈現信仰、盼望、救贖與生命更新的故事。
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-cta flex items-center justify-center gap-2">
                立即報名
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded-lg transition-all duration-300 hover:bg-accent/10">
                了解更多
              </button>
            </div>

            <div className="pt-4 border-t border-gray-600">
              <p className="text-sm text-gray-400">
                <span className="text-accent font-semibold">截止日期：</span> 2026年3月31日 23:59 (GMT+8)
              </p>
            </div>
          </div>

          {/* Right side - Logo */}
          <div className="hidden md:flex justify-center items-center">
            <img
              src={LOGO_URL}
              alt="LGFF Logo"
              className="w-full max-w-md drop-shadow-2xl animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="gold-divider mb-6"></div>
            <h2 className="text-4xl font-bold text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>關於影展</h2>

            <div className="space-y-6 text-gray-300">
              <p>
                <strong className="text-accent">燈塔影展（LFF）</strong>由臺北基督學院發起，是一個全球性的平台，致力於展示由基督徒學生創作的福音中心敘事故事片。
              </p>

              <p>
                我們邀請具有信仰、希望、救贖和生命轉變的故事，並透過作品交流與策展實踐，培育新世代以影像作見證的創作者。
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-600">
                <div className="space-y-3">
                  <Film className="w-8 h-8 text-accent" />
                  <h3 className="text-lg font-semibold text-white">劇情片</h3>
                  <p className="text-sm text-gray-400">20–90 分鐘的劇情長片</p>
                </div>
                <div className="space-y-3">
                  <Users className="w-8 h-8 text-accent" />
                  <h3 className="text-lg font-semibold text-white">學生創作</h3>
                  <p className="text-sm text-gray-400">限學生身分參賽</p>
                </div>
                <div className="space-y-3">
                  <Lightbulb className="w-8 h-8 text-accent" />
                  <h3 className="text-lg font-semibold text-white">福音中心</h3>
                  <p className="text-sm text-gray-400">以福音為核心的創作</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section id="requirements" className="section-padding bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="gold-divider mb-6"></div>
            <h2 className="text-4xl font-bold text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>參賽資格</h2>

            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-accent mb-4">學生身分要求</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>報名者須為在學學生（大學、研究所、神學院或同等教育/訓練機構皆可）</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>可個人或團隊報名；若為團隊，導演或主要創作者須具學生身分</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>參賽者需可提供有效學生身分證明（學生證、在學證明或註冊證明等）</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-accent mb-4">作品規範</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>類別：劇情片/劇情長片（Narrative Feature Film）</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>片長：20–90 分鐘</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>須提供英文字幕（English Subtitles Required）</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>不收：紀錄片、動畫、MV、實驗片</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section className="section-padding bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="gold-divider mb-6"></div>
            <h2 className="text-4xl font-bold text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>作品主題方向</h2>

            <p className="text-gray-300 mb-8">
              本影展鼓勵作品以福音為核心，呈現以下方向之一或多項：
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "信仰敘事、生命見證、呼召與回應",
                "盼望、赦免、重建、愛與真理",
                "青年信仰處境、關係修復、傷痛與醫治",
                "以基督信仰價值回應世界議題（家庭、正義、饒恕、良善、誠實等）",
              ].map((theme, idx) => (
                <div key={idx} className="bg-background p-4 rounded-lg border border-gray-700 hover:border-accent transition-colors">
                  <p className="text-gray-300">{theme}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deadline Section */}
      <section id="deadline" className="section-padding bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="gold-divider mx-auto mb-6"></div>
            <h2 className="text-4xl font-bold text-accent mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>徵件截止</h2>

            <div className="bg-card p-12 rounded-lg border-2 border-accent">
              <p className="text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>3月31日</p>
              <p className="text-2xl text-gray-300 mb-2">2026年</p>
              <p className="text-lg text-gray-400">23:59 (GMT+8)</p>
            </div>

            <p className="text-gray-400 mt-8 text-sm">
              報名費用：免費 | 影片上傳方式：YouTube/Vimeo 私密連結 或 Google Drive 連結
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              準備好分享您的故事了嗎？
            </h2>
            <p className="text-lg text-gray-300">
              無論您是獨立創作者還是創意團隊，我們都期待看到您以影像見證信仰的力量。
            </p>
            <button className="btn-cta mx-auto flex items-center justify-center gap-2">
              立即報名參賽
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-gray-700 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-accent mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>關於</h3>
              <p className="text-gray-400 text-sm">
                燈塔福音影展由臺北基督學院發起，致力於培育新世代以影像作見證的創作者。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-accent mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>快速連結</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-accent transition-colors">關於影展</a></li>
                <li><a href="#requirements" className="hover:text-accent transition-colors">參賽資格</a></li>
                <li><a href="#deadline" className="hover:text-accent transition-colors">截止日期</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-accent mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>聯絡方式</h3>
              <p className="text-gray-400 text-sm">
                主辦單位：臺北基督學院<br />
                Lighthouse Film Festival (LFF)
              </p>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2026 Lighthouse Gospel Film Festival. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
