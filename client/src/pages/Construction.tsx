import seuLogo from "@assets/lojo_1756235615959.png";
import bannerImage from "@assets/Button_1756236057523.png";

export default function Construction() {
  return (
    <div 
      className="min-h-screen relative flex items-center justify-center px-4"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-navy/80 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* SEU Logo */}
        <div className="mb-16">
          <img 
            src={seuLogo} 
            alt="Security Events Unlimited Logo" 
            className="w-96 h-auto mx-auto drop-shadow-2xl filter brightness-110"
            data-testid="img-seu-logo"
          />
        </div>
        
        {/* Construction Message */}
        <div className="space-y-8">
          <h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg"
            data-testid="text-construction-title"
          >
            Site Under Construction
          </h1>
          <p 
            className="text-2xl md:text-3xl text-gold font-semibold drop-shadow-md"
            data-testid="text-construction-subtitle"
          >
            We're working hard to bring you something amazing.
          </p>
          <p 
            className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-sm"
            data-testid="text-construction-message"
          >
            Our new website is currently under development. 
            Check back soon for the complete Security Events Unlimited experience.
          </p>
        </div>
        
        {/* Contact Info */}
        <div className="mt-20 pt-8 border-t border-gold/50">
          <p 
            className="text-white/80 text-lg font-medium drop-shadow-sm"
            data-testid="text-contact-info"
          >
            For immediate assistance, please contact us directly
          </p>
        </div>
      </div>
    </div>
  );
}