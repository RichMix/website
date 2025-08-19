import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Calendar, MapPin, Star } from "lucide-react";

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Central Coast Music Festival 2024",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      challenge: "Managing security for 8,000+ attendees over 3 days with multiple stages, vendor areas, and camping facilities.",
      solution: "Deployed 25 security personnel, 3 mobile command units, and implemented comprehensive crowd management protocols.",
      results: [
        "Zero major incidents reported",
        "95% attendee satisfaction rating",
        "Successful emergency medical responses: 12",
        "Lost & found items returned: 150+"
      ],
      attendees: "8,000+",
      duration: "3 days",
      location: "Paso Robles",
      clientQuote: "SEU's professional team made our largest festival yet feel completely secure. Their proactive approach prevented issues before they could develop.",
      clientName: "Maria Santos",
      clientTitle: "Festival Director"
    },
    {
      title: "High School Championship Game",
      image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      challenge: "Ensuring safety for emotional high-stakes game with rival schools, packed stadium, and media presence.",
      solution: "Strategic positioning of security personnel, coordination with local law enforcement, and pre-event safety briefings.",
      results: [
        "Peaceful event with no ejections",
        "Smooth crowd flow management",
        "Positive feedback from both schools",
        "Media coverage highlighted safety measures"
      ],
      attendees: "15,000",
      duration: "4 hours",
      location: "San Luis Obispo",
      clientQuote: "The rivalry between these schools runs deep, but SEU's presence kept everything respectful and safe. Parents felt comfortable bringing their families.",
      clientName: "David Rodriguez",
      clientTitle: "Athletic Director"
    },
    {
      title: "Downtown Wine Walk",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      challenge: "Managing public event across multiple venues with alcohol service and street closures in busy downtown area.",
      solution: "Mobile patrol units, coordination with local businesses, and discrete crowd monitoring to maintain the relaxed atmosphere.",
      results: [
        "Seamless multi-venue coordination",
        "No alcohol-related incidents",
        "Positive business owner feedback",
        "Increased participation year-over-year"
      ],
      attendees: "3,500",
      duration: "6 hours",
      location: "Downtown SLO",
      clientQuote: "SEU understood that heavy-handed security would ruin the experience. Their team was visible enough to provide safety but discrete enough to maintain the fun atmosphere.",
      clientName: "Jennifer Kim",
      clientTitle: "Event Coordinator"
    },
    {
      title: "Community Health Fair",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      challenge: "Family-friendly event requiring gentle security approach while managing large crowds and valuable medical equipment.",
      solution: "Family-trained security personnel, kid-friendly interaction protocols, and specialized equipment protection measures.",
      results: [
        "100% family satisfaction rating",
        "Zero equipment theft or damage",
        "Successful health screenings: 500+",
        "Smooth registration and flow"
      ],
      attendees: "2,000",
      duration: "8 hours",
      location: "Morro Bay",
      clientQuote: "Our security team was amazing with the kids and families. They made everyone feel welcome while keeping our expensive medical equipment completely secure.",
      clientName: "Dr. Michael Chen",
      clientTitle: "Health Fair Director"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-seu-navy/90 to-seu-navy/60">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800" 
            alt="Community event with security" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Real examples of how our security expertise has helped create safe, successful events across the Central Coast.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <Card key={index} className="shadow-lg overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative">
                    <img 
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover min-h-[400px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-seu-navy/70 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {study.attendees} attendees
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {study.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {study.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-seu-navy mb-3">Challenge</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-seu-navy mb-3">Our Solution</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-seu-navy mb-3">Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-start">
                              <CheckCircle className="text-seu-gold mr-3 w-5 h-5 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex items-start mb-4">
                          <div className="flex text-seu-gold mr-3">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                          </div>
                        </div>
                        <blockquote className="text-gray-700 italic mb-4">
                          "{study.clientQuote}"
                        </blockquote>
                        <div className="text-sm">
                          <p className="font-semibold text-seu-navy">{study.clientName}</p>
                          <p className="text-gray-600">{study.clientTitle}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-seu-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-12">By the Numbers</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-seu-gold mb-2">500+</div>
                <p className="text-white text-lg">Events Secured</p>
                <p className="text-gray-300 text-sm">Successfully completed</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-seu-gold mb-2">100%</div>
                <p className="text-white text-lg">Client Satisfaction</p>
                <p className="text-gray-300 text-sm">Repeat customer rate</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-seu-gold mb-2">0</div>
                <p className="text-white text-lg">Major Incidents</p>
                <p className="text-gray-300 text-sm">Perfect safety record</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-seu-gold mb-2">2M+</div>
                <p className="text-white text-lg">People Protected</p>
                <p className="text-gray-300 text-sm">Total attendees secured</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-seu-navy mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us help you create a safe, successful event that your attendees will remember for all the right reasons.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-seu-gold text-seu-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition-colors">
              Get Your Free Consultation
            </button>
            <button className="border-2 border-seu-navy text-seu-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-seu-navy hover:text-white transition-colors">
              View Our Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
