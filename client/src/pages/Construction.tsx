import seuLogo from "@assets/lojo_1756235615959.png";

export default function Construction() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: '#0A1F44' }}>
      <div className="text-center max-w-4xl mx-auto">
        {/* SEU Logo */}
        <div className="mb-12">
          <img 
            src={seuLogo} 
            alt="Security Events Unlimited Logo" 
            className="w-80 md:w-96 h-auto mx-auto"
            data-testid="img-seu-logo"
          />
        </div>
        
        {/* Construction Message */}
        <div className="space-y-6">
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            style={{ color: '#C8A13E' }}
            data-testid="text-construction-title"
          >
            Site Under Construction
          </h1>
          <p 
            className="text-xl md:text-2xl lg:text-3xl font-semibold mb-8"
            style={{ color: '#C8A13E' }}
            data-testid="text-construction-subtitle"
          >
            We're working hard to bring you something amazing.
          </p>
          <p 
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: '#C8A13E' }}
            data-testid="text-construction-message"
          >
            Our new website is currently under development. 
            Check back soon for the complete Security Events Unlimited experience.
          </p>
        </div>
        
        {/* Contact Info */}
        <div className="mt-16 pt-8 border-t" style={{ borderColor: '#C8A13E' }}>
          <p 
            className="text-base md:text-lg"
            style={{ color: '#C8A13E' }}
            data-testid="text-contact-info"
          >
            For immediate assistance, please contact us directly
          </p>
        </div>
      </div>
    </div>
  );
}