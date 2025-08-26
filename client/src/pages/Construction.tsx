import seuLogo from "@assets/lojo_1756235615959.png";

export default function Construction() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy via-navy/95 to-navy/90 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* SEU Logo */}
        <div className="mb-12">
          <img 
            src={seuLogo} 
            alt="Security Events Unlimited Logo" 
            className="w-80 h-auto mx-auto drop-shadow-2xl"
            data-testid="img-seu-logo"
          />
        </div>
        
        {/* Construction Message */}
        <div className="space-y-6">
          <h1 
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            data-testid="text-construction-title"
          >
            Site Under Construction
          </h1>
          <p 
            className="text-xl md:text-2xl text-gold/90 font-medium"
            data-testid="text-construction-subtitle"
          >
            We're working hard to bring you something amazing.
          </p>
          <p 
            className="text-lg text-white/80 max-w-lg mx-auto leading-relaxed"
            data-testid="text-construction-message"
          >
            Our new website is currently under development. 
            Check back soon for the complete Security Events Unlimited experience.
          </p>
        </div>
        
        {/* Contact Info */}
        <div className="mt-16 pt-8 border-t border-gold/30">
          <p 
            className="text-white/70 text-sm"
            data-testid="text-contact-info"
          >
            For immediate assistance, please contact us directly
          </p>
        </div>
      </div>
    </div>
  );
}