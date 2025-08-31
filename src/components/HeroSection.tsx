import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import cosmicHeadImage from "@/assets/cosmic-head.jpg";
import starIcon from "@/assets/star-icon.svg";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="relative">
          {/* Main Heading - Centered */}
          <div className="text-center mb-16">
            <h1 className="text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Your Mental{" "}
              <span className="inline-flex items-center gap-3">
                Health Matters
                <img src={starIcon} alt="star" className="w-10 h-10" />
              </span>
            </h1>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-lg text-foreground">
                  You <span className="font-semibold">don't</span> have
                  <br />
                  to <span className="font-semibold">struggle</span> in
                  <br />
                  silence!
                </p>
                
                <Button variant="link" className="text-sm font-medium p-0 h-auto text-muted-foreground hover:text-foreground underline">
                  LEARN MORE
                </Button>
              </div>

              {/* Audio Player */}
              <div className="flex items-center space-x-4 bg-white rounded-2xl p-4 w-fit shadow-sm">
                <Button size="icon" variant="default" className="rounded-full bg-cosmic-dark hover:bg-cosmic-dark/90">
                  <Play className="w-4 h-4 fill-white" />
                </Button>
                <div className="flex space-x-1">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-1 rounded-full transition-all duration-300 ${
                        i < 6 ? 'bg-cosmic-dark h-6' : 'bg-muted h-3'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Center Content - Cosmic Head */}
            <div className="relative flex justify-center">
              <img 
                src={cosmicHeadImage} 
                alt="Cosmic head with meditation imagery" 
                className="w-full max-w-md"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              {/* Hope Message */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-wellness-blue-light rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🌙</span>
                  </div>
                  <div>
                    <p className="text-sm text-foreground leading-relaxed">
                      There's <span className="font-semibold">hope</span> when
                      <br />
                      your brain tells
                      <br />
                      you there isn't
                    </p>
                  </div>
                </div>
              </div>

              {/* Grief Definition */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Grief <span className="text-muted-foreground font-normal text-lg">/ grɪf /</span>
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Each day we learn of the
                  <br />
                  griefs and tribulations
                  <br />
                  which affect our
                  <br />
                  constituents or ourselves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;