import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, Mic, Users, Wrench, Code, Share2, TrendingUp, UserCheck, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ActivitiesSection() {
  const activities = [
    {
      icon: Mic,
      title: "LT（ライトニングトーク）イベント",
      description: "5分間の短時間で技術的な発見や学びを共有",
      image: "https://images.unsplash.com/photo-1559146820-a75deba24b58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzZW50YXRpb24lMjBzbGlkZXMlMjBzY3JlZW4lMjB0ZWNofGVufDF8fHx8MTc1OTI1NDA5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-orange-500/10 to-red-500/10"
    },
    {
      icon: Users,
      title: "パネルディスカッション",
      description: "業界のエキスパートによる深い議論と知識共有",
      image: "https://images.unsplash.com/photo-1697059361461-b81d0e98c3af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwcm9vbSUyMGRpc2N1c3Npb24lMjBzZXR1cHxlbnwxfHx8fDE3NTkyNTQwOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-blue-500/10 to-purple-500/10"
    },
    {
      icon: Wrench,
      title: "ワークイベント",
      description: "実践的なスキル向上のためのハンズオンワークショップ",
      image: "https://images.unsplash.com/photo-1554306274-f23873d9a26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc2hvcCUyMHByb2dyYW1taW5nJTIwc2V0dXB8ZW58MXx8fHwxNzU5MjU0MTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      icon: Code,
      title: "プロダクト開発（予定）",
      description: "コミュニティメンバーによる共同プロダクト開発",
      image: "https://images.unsplash.com/photo-1625459201773-9b2386f53ca2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29tcHV0ZXIlMjBjb2RlfGVufDF8fHx8MTc1OTI1NDE5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-purple-500/10 to-pink-500/10"
    }
  ];

  const sharingTopics = [
    { 
      icon: Share2, 
      title: "ツールシェア", 
      description: "開発効率を上げるツールの共有",
      color: "text-blue-600",
      bg: "bg-blue-500/10"
    },
    { 
      icon: Code, 
      title: "プロダクト開発ノウハウ", 
      description: "実践的な開発手法の共有",
      color: "text-green-600",
      bg: "bg-green-500/10"
    },
    { 
      icon: TrendingUp, 
      title: "グロースハック", 
      description: "プロダクト成長のための戦略",
      color: "text-purple-600",
      bg: "bg-purple-500/10"
    },
    { 
      icon: UserCheck, 
      title: "チームマネジメント", 
      description: "効果的なチーム運営手法",
      color: "text-orange-600",
      bg: "bg-orange-500/10"
    }
  ];

  return (
    <section id="activities" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/[0.02] to-background"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center space-y-6 mb-20">
          <Badge variant="outline" className="w-fit mx-auto px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30 backdrop-blur-sm">
            <Calendar className="w-4 h-4 mr-2 text-primary" />
            Activities
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-foreground to-secondary bg-clip-text text-transparent">
            活動内容
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            多様なイベントと情報共有を通じて、エンジニアのスキルアップとネットワーク構築をサポートします。
          </p>
        </div>

        {/* Information Sharing Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
              エンジニア同士の情報共有
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              日々の開発で得た知見やツールを共有し、コミュニティ全体のスキル向上を図ります
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {sharingTopics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card via-card to-muted/10 group border border-border/20 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 mx-auto ${topic.bg} rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 border border-white/20`}>
                      <Icon className={`w-8 h-8 ${topic.color}`} />
                    </div>
                    <CardTitle className="text-lg">{topic.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">{topic.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Events Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
              イベント活動
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              定期的なイベントを通じて、学習と交流の機会を提供します
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <Card key={index} className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-card via-card to-muted/10 hover:shadow-2xl transition-all duration-500 group border border-border/20 backdrop-blur-sm">
                  <div className="aspect-video relative overflow-hidden">
                    <ImageWithFallback
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    
                    {/* Floating icon */}
                    <div className="absolute top-6 left-6">
                      <div className={`w-12 h-12 bg-gradient-to-br ${activity.gradient} backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/30 shadow-xl`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    {/* Coming soon badge for future events */}
                    {activity.title.includes("予定") && (
                      <div className="absolute top-6 right-6">
                        <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
                          Coming Soon
                        </Badge>
                      </div>
                    )}
                  </div>
                  
                  <CardHeader className="space-y-3">
                    <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                      {activity.title}
                    </CardTitle>
                    <CardDescription className="leading-relaxed text-base">
                      {activity.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex items-center text-primary hover:text-primary/80 transition-colors cursor-pointer">
                      <span className="text-sm font-medium">詳細を見る</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}