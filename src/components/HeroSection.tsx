import { Badge } from "./ui/badge";
import { Users, Rocket, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-secondary/[0.05]"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          
          <div className="mt-12">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-6 bg-gradient-to-r from-primary/30 via-primary/10 to-secondary/30 rounded-3xl blur-3xl opacity-50"></div>
              
              {/* Main image */}
              <div className="relative">
                <ImageWithFallback
                  src="https://katayama502.github.io/GLOBIS-Tech-Guild_img/images/GLOBIS%20Tech%20Guild.png"
                  alt="Modern tech workspace"
                  className="rounded-3xl shadow-2xl w-full h-[400px] md:h-[500px] object-cover border border-white/20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}