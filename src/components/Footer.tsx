import { type MouseEvent } from "react";
import DevelopersGuildIcon from "../assets/DevelopersGuild.svg";

export function Footer() {
  const handleSmoothScroll = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 60; // ヘッダーの高さ分のオフセット
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="border-t border-border/40 bg-gradient-to-b from-muted/20 to-muted/40 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img src={DevelopersGuildIcon} alt="GLOBIS Tech Guild" className="h-7 w-7" />
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur opacity-75"></div>
              </div>
              <span className="font-semibold text-lg bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                GLOBIS Tech Guild
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              MBA × エンジニアのコミュニティ
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">ナビゲーション</h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: "#about", label: "About" },
                { href: "#activities", label: "Activities" }
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className="text-muted-foreground hover:text-primary transition-all duration-200 hover:translate-x-1 inline-block cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">活動内容</h4>
            <ul className="space-y-3 text-sm">
              {[
                "LTイベント",
                "パネルディスカッション", 
                "ワークショップ",
                "プロダクト開発"
              ].map((activity) => (
                <li key={activity} className="text-muted-foreground">
                  {activity}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">コミュニティ</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              経営視点を持つエンジニアが集まり、共に成長するコミュニティです。
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 GLOBIS Tech Guild. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}