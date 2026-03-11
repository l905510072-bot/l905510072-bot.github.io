import { Film, Users, Lightbulb, Award, Calendar, MapPin, Mail } from "lucide-react";

/**
 * LGFF Promo Site - Modern Religious Art + Cinema Aesthetic
 * Design System: Deep Blue (#1a3a52) + Gold (#f4d9a6) + Dark Background (#0f1419)
 * Typography: Playfair Display (titles) + Lato (body)
 * Layout: Non-symmetric, poster-style hero section
 */

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663286619585/HpBToCsyiUUeGfMJ.jpg";
const POSTER_URL = "https://private-us-east-1.manuscdn.com/sessionFile/xwOJYriOllabhN4pyZGXPW/sandbox/UEplEJ728DdVehmlikp6AT-img-1_1770043239000_na1fn_bGlnaHRob3VzZS1oZXJvLWJn.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-lg">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="LFF Logo" className="h-12 w-auto" />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-accent" style={{ fontFamily: "'Playfair Display', serif" }}>LFF</h1>
              <p className="text-xs text-gray-400">灯塔影展</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a href="#vision" className="text-sm text-gray-300 hover:text-accent transition-colors">
              异象
            </a>
            <a href="#requirements" className="text-sm text-gray-300 hover:text-accent transition-colors">
              资格
            </a>
            <a href="#awards" className="text-sm text-gray-300 hover:text-accent transition-colors">
              奖项
            </a>
            <a href="#contact" className="text-sm text-gray-300 hover:text-accent transition-colors">
              联系
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
          <div className="space-y-8">
            <div>
              <div className="gold-divider mb-6"></div>
              <h1 className="text-5xl md:text-6xl font-bold text-accent leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Lighthouse<br />
                Film Festival
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                灯塔影展
              </h2>
              <p className="text-xl text-accent mt-4 font-semibold">Where Faith Becomes Story</p>
            </div>

            <p className="text-lg text-gray-200 max-w-lg">
              全球基督徒青年劇情片創作平台。當信仰進入故事，故事便成為光。當創作回應呼召，影像便成為見證。
            </p>

            <div className="pt-4 border-t border-gray-600">
              <p className="text-sm text-gray-400">
                <span className="text-accent font-semibold">報名截止：</span> 2026年7月31日 23:59 (GMT+8)
              </p>
            </div>
          </div>

          {/* Right side - Logo */}
          <div className="hidden md:flex justify-center items-center">
            <img
              src={LOGO_URL}
              alt="LFF Logo"
              className="w-full max-w-md drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="section-padding bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="gold-divider mb-6"></div>
            <h2 className="text-4xl font-bold text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>異象與使命</h2>

            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                <span className="text-accent font-bold">點燃 — 讓信仰成為故事</span>
              </p>

              <p>
                在影像成為當代世代主要語言的時代，福音如何被看見？信仰如何被聽見？基督徒青年如何以創作回應呼召？
              </p>

              <p>
                燈塔影展由臺北基督學院發起，旨在建立一個屬於全球基督徒青年（45 歲以下）的福音影像創作平台。
              </p>

              <div className="bg-background p-6 rounded-lg border border-gray-700 mt-6">
                <p className="text-accent font-semibold mb-4">我們相信：</p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>當信仰進入故事，故事便成為光</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>當創作回應呼召，影像便成為見證</span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="bg-background p-4 rounded-lg border border-gray-700">
                  <p className="text-accent font-semibold mb-2">創作焦點：</p>
                  <ul className="space-y-2 text-sm">
                    <li>• 盼望與救贖</li>
                    <li>• 信仰與掙扎</li>
                    <li>• 和好與更新</li>
                    <li>• 當代處境中的福音回應</li>
                  </ul>
                </div>
                <div className="bg-background p-4 rounded-lg border border-gray-700">
                  <p className="text-accent font-semibold mb-2">徵件主題：</p>
                  <ul className="space-y-2 text-sm">
                    <li>• 基督教信仰核心價值</li>
                    <li>• 福音精神與生命見證</li>
                    <li>• 基督徒回應當代社會</li>
                    <li>• 神學思考與人文關懷</li>
                  </ul>
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
                <h3 className="text-xl font-semibold text-accent mb-4">參賽者要求</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>全球各地之基督徒青年（45 週歲及以下）</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>報名時須提供學生身分證明文件</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>個人或團隊皆可報名</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-accent mb-4">作品規範</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>類型：劇情片（Narrative Film）</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>片長：20–90 分鐘</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>製作年份：2023 年 1 月 1 日後完成之作品</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>語言不限，非英文影片須附英文字幕</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>作品須確保音樂、肖像及相關智慧財產權合法使用</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Section */}
      <section className="section-padding bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="gold-divider mb-6"></div>
            <h2 className="text-4xl font-bold text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>徵件方式</h2>

            <div className="space-y-6 text-gray-300">
              <p>採線上報名與數位收件方式，繳交資料包括：</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "影片連結", desc: "線上觀看連結（Google Drive）" },
                  { title: "劇情簡介", desc: "中英文版本" },
                  { title: "創作理念", desc: "創作理念說明" },
                  { title: "導演簡歷", desc: "導演簡歷及背景" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-background p-4 rounded-lg border border-gray-700">
                    <p className="text-accent font-semibold mb-2">{item.title}</p>
                    <p className="text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-background p-6 rounded-lg border-2 border-accent mt-8">
                <p className="text-lg font-semibold text-white mb-2">報名截止日期</p>
                <p className="text-2xl text-accent font-bold">2026 年 7 月 31 日 23:59 (GMT+8)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evaluation Section */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="gold-divider mb-6"></div>
            <h2 className="text-4xl font-bold text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>評選方式</h2>

            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-accent mb-4">評選流程</h3>
                <div className="space-y-3">
                  <div className="flex gap-4">
                    <div className="text-accent font-bold text-lg">①</div>
                    <div>
                      <p className="font-semibold">初選</p>
                      <p className="text-sm">由校內教師與專業顧問組成評審團</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-accent font-bold text-lg">②</div>
                    <div>
                      <p className="font-semibold">決選</p>
                      <p className="text-sm">專業評審進行最終評定</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-accent font-bold text-lg">③</div>
                    <div>
                      <p className="font-semibold">公告</p>
                      <p className="text-sm">評選結果於 2026 年 9 月 30 日公告</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-accent mb-4">評選標準</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>信仰內涵與神學深度</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>敘事完整性</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>影像語言與創作成熟度</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>當代議題回應能力</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="section-padding bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="gold-divider mb-6"></div>
            <h2 className="text-4xl font-bold text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>競賽獎項</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { rank: "首獎", name: "第一名", prize: "新臺幣 30,000 元", icon: "🥇" },
                { rank: "優選獎", name: "第二名", prize: "新臺幣 20,000 元", icon: "🥈" },
                { rank: "佳作獎", name: "第三名", prize: "新臺幣 10,000 元", icon: "🥉" },
                { rank: "入圍獎", name: "三名", prize: "新臺幣 5,000 元", icon: "⭐" },
              ].map((award, idx) => (
                <div key={idx} className="bg-background p-6 rounded-lg border border-gray-700 hover:border-accent transition-colors">
                  <div className="text-4xl mb-3">{award.icon}</div>
                  <p className="text-accent font-semibold mb-1">{award.rank}</p>
                  <p className="text-sm text-gray-400 mb-3">{award.name}</p>
                  <p className="text-lg font-bold text-white">{award.prize}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-400 mt-8 text-center">
              主辦單位得視作品水準調整獎項
            </p>
          </div>
        </div>
      </section>

      {/* October Event Section */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="gold-divider mb-6"></div>
            <h2 className="text-4xl font-bold text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>十月主場活動</h2>

            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border border-gray-700">
                <div className="flex gap-4 mb-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-accent font-semibold">地點</p>
                    <p className="text-gray-300">臺北基督學院禮拜堂</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Calendar className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-accent font-semibold">時間</p>
                    <p className="text-gray-300">2026 年 10 月 31 日</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-accent mb-4">活動內容</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>國際導演線上論壇</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>入圍影片實體放映</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>頒獎典禮</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>電視頻道播映啟動儀式</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-400 mt-4">入圍導演將以線上方式參與</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-accent mb-4">電視頻道播映</h3>
                <p className="text-gray-300 mb-4">
                  入圍及得獎作品經授權後，將於 2026 年 10 月於靖天電視頻道播映。
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>原版播映或經授權剪輯電視版本</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>加入燈塔影展識別片頭</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authorization Section */}
      <section className="section-padding bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="gold-divider mb-6"></div>
            <h2 className="text-4xl font-bold text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>授權與義務</h2>

            <div className="space-y-4 text-gray-300">
              <div className="flex gap-4">
                <span className="text-accent font-bold text-lg">①</span>
                <p>入圍作品須簽署播映授權書</p>
              </div>
              <div className="flex gap-4">
                <span className="text-accent font-bold text-lg">②</span>
                <p>授權範圍包括影展放映、電視頻道播映及宣傳使用</p>
              </div>
              <div className="flex gap-4">
                <span className="text-accent font-bold text-lg">③</span>
                <p>主辦單位得使用入圍作品之劇照與片段作為宣傳素材</p>
              </div>
              <div className="flex gap-4">
                <span className="text-accent font-bold text-lg">④</span>
                <p>得獎者依法須依規定扣繳所得稅</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div>
              <div className="gold-divider mx-auto mb-6"></div>
              <h2 className="text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                聯絡方式
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border border-gray-700">
                <p className="text-gray-300 mb-2">燈塔影展工作小組</p>
                <div className="flex items-center justify-center gap-2 text-accent font-semibold">
                  <Mail className="w-5 h-5" />
                  <a href="mailto:lff@cct.edu.tw" className="hover:text-accent/80 transition-colors">
                    lff@cct.edu.tw
                  </a>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-gray-700">
                <p className="text-gray-300 mb-2">官方網站</p>
                <a href="https://lff2026.com" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:text-accent/80 transition-colors">
                  lff2026.com
                </a>
              </div>

              <div className="bg-card p-6 rounded-lg border border-gray-700">
                <p className="text-gray-300 mb-2">主辦單位</p>
                <p className="text-accent font-semibold">臺北基督學院</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm pt-8 border-t border-gray-700">
              影展主持人：沈湘燕 教授 | 合作媒體：靖天電視 | 產學合作：承業法律事務所
            </p>
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
                燈塔影展由臺北基督學院發起，致力於培育新世代以影像作見證的創作者。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-accent mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>快速連結</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#vision" className="hover:text-accent transition-colors">異象與使命</a></li>
                <li><a href="#requirements" className="hover:text-accent transition-colors">參賽資格</a></li>
                <li><a href="#awards" className="hover:text-accent transition-colors">競賽獎項</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">聯絡方式</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-accent mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>信息</h3>
              <p className="text-gray-400 text-sm">
                報名截止：2026年7月31日<br />
                結果公告：2026年9月30日<br />
                主場活動：2026年10月31日
              </p>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2026 Lighthouse Film Festival. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
