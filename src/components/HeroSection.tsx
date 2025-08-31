import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import cosmicHeadImage from "@/assets/cosmic-head.jpg";
import starIcon from "@/assets/star-icon.svg";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-cosmic-light via-background to-wellness-blue-light">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Your Mental
                <br />
                Health{" "}
                <span className="inline-flex items-center gap-2">
                  Matters
                  <img src={starIcon} alt="star" className="w-8 h-8" />
                </span>
              </h1>
            </div>

            {/* Subtext */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                You <span className="font-semibold text-foreground">don't</span> have
                <br />
                to <span className="font-semibold text-foreground">struggle</span> in
                <br />
                silence!
              </p>
              
              <Button variant="wellness-ghost" className="text-sm font-medium">
                LEARN MORE
              </Button>
            </div>

            {/* Audio Player */}
            <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-2xl p-4 w-fit">
              <Button size="icon" variant="default" className="rounded-full bg-foreground hover:bg-foreground/90">
                <Play className="w-4 h-4 fill-white" />
              </Button>
              <div className="flex space-x-1">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-1 rounded-full transition-all duration-300 ${
                      i < 6 ? 'bg-foreground h-6' : 'bg-muted h-3'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Cosmic Head */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={cosmicHeadImage} 
                alt="Cosmic head with meditation imagery" 
                className="w-full max-w-lg mx-auto"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-1/4 right-0 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-cosmic-dark rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">😊</span>
                </div>
                <div>
                  <p className="text-sm font-medium">There's hope when</p>
                  <p className="text-sm text-muted-foreground">your brain tells</p>
                  <p className="text-sm text-muted-foreground">you there isn't</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-1/4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
              <h3 className="text-lg font-bold text-foreground">Grief <span className="text-muted-foreground font-normal">/ grit /</span></h3>
              <p className="text-sm text-muted-foreground mt-1">
                Each day we learn of the
              </p>
              <p className="text-sm text-muted-foreground">
                griefs and tribulations
              </p>
              <p className="text-sm text-muted-foreground">
                which affect our
              </p>
              <p className="text-sm text-muted-foreground">
                constituents or ourselves.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;