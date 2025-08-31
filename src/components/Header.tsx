import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-cosmic-dark rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-wellness-orange rounded-sm transform rotate-45"></div>
            </div>
            <span className="text-xl font-bold text-foreground">Raft</span>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              ABOUT US
            </a>
            <a href="#work" className="text-muted-foreground hover:text-foreground transition-colors">
              WORK WITH US
            </a>
            <a href="#events" className="text-muted-foreground hover:text-foreground transition-colors">
              EVENTS
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              CONTACT US
            </a>
          </div>

          {/* CTA Button */}
          <Button variant="wellness-outline" className="rounded-full px-6">
            GET STARTED →
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;