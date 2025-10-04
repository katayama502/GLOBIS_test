import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Target, Rocket, Users, MessageSquare } from "lucide-react";

export function AboutSection() {
  const goals = [
    {
      icon: Target,
      title: "コミュニティの価値",
      subtitle: "MBA × エンジニアの知見共有",
      items: [
        "経営×創造者の情報交換",
        "最新情報が飛び交う場"
      ],
      color: "text-blue-600",
      gradient: "from-blue-500/10 to-blue-600/5",
      bg: "bg-blue-500/5"
    },
    {
      icon: Rocket,
      title: "目指すもの",
      subtitle: "継続的な成長とイノベーション",
      items: [
        "プロダクト開発スキルの向上",
        "持続可能な開発体制"
      ],
      color: "text-emerald-600",
      gradient: "from-emerald-500/10 to-emerald-600/5",
      bg: "bg-emerald-500/5"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-primary/[0.02] via-background to-secondary/[0.02] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute top-40 left-20 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-20">
          <Badge variant="outline" className="w-fit mx-auto px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30 backdrop-blur-sm">
            <Users className="w-4 h-4 mr-2 text-primary" />
            About Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-foreground to-secondary bg-clip-text text-transparent">
            コミュニティの目的
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            経営と技術の両面を理解するエンジニアが集まり、持続可能な成長戦略を共に考えるコミュニティです。
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-20">
          {goals.map((goal, index) => {
            const Icon = goal.icon;
            return (
              <Card key={index} className="border-0 shadow-xl bg-gradient-to-br from-card via-card to-muted/10 hover:shadow-2xl transition-all duration-300 group border border-border/20 backdrop-blur-sm">
                <CardHeader className="text-center space-y-6 pb-6">
                  <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${goal.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300 border border-white/20`}>
                    <Icon className={`w-10 h-10 ${goal.color}`} />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold mb-2">{goal.title}</CardTitle>
                    <CardDescription className="text-base font-medium text-foreground/70">
                      {goal.subtitle}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 px-8 pb-8">
                  <ul className="space-y-4">
                    {goal.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-4 group">
                        <div className={`w-3 h-3 mt-1.5 ${goal.bg} border-2 border-current rounded-full flex-shrink-0 ${goal.color}`} />
                        <span className="text-foreground/80 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 bg-gradient-to-r from-primary via-primary/95 to-secondary text-primary-foreground shadow-2xl overflow-hidden relative">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-2xl transform -translate-x-24 translate-y-24"></div>
            
            <CardContent className="py-12 px-8 text-center relative z-10">
              <div className="w-16 h-16 mx-auto mb-6 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <MessageSquare className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">情報交換のハブ</h3>
              <p className="text-primary-foreground/90 text-lg leading-relaxed max-w-3xl mx-auto">
                技術トレンド、ビジネス戦略、プロダクト開発など、エンジニアとして必要な情報を共有し、共に成長していく場所です。
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}