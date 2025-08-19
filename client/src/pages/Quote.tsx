import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertQuoteRequestSchema, type InsertQuoteRequest } from "@shared/schema";
import { FileText, CheckCircle, Clock, Users, MapPin, Calendar, Shield, Award } from "lucide-react";

export default function Quote() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertQuoteRequest>({
    resolver: zodResolver(insertQuoteRequestSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      eventLocation: "",
      expectedAttendance: "",
      eventDuration: "",
      additionalDetails: "",
    },
  });

  const quoteMutation = useMutation({
    mutationFn: async (data: InsertQuoteRequest) => {
      const response = await apiRequest("POST", "/api/quote", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Quote Request Submitted!",
        description: "We'll send you a detailed quote within 24 hours.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Failed to Submit Quote Request",
        description: "Please try again or contact us directly at (805) 555-SAFE",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertQuoteRequest) => {
    quoteMutation.mutate(data);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-seu-navy/90 to-seu-navy/60">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800" 
            alt="Professional planning and documentation" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Request Your Quote
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Get a customized security solution and pricing for your event. Our detailed quotes include everything you need for comprehensive protection.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-seu-navy mb-6">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-seu-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="text-seu-navy text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-seu-navy mb-2">1. Submit Details</h3>
                <p className="text-gray-600">Provide your event information and security requirements</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-seu-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-seu-navy text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-seu-navy mb-2">2. We Analyze</h3>
                <p className="text-gray-600">Our experts review your needs and create a custom plan</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-seu-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-seu-navy text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-seu-navy mb-2">3. Get Your Quote</h3>
                <p className="text-gray-600">Receive detailed pricing within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-8">
                  <Shield className="text-seu-gold mr-3 w-8 h-8" />
                  <div>
                    <h2 className="text-3xl font-bold text-seu-navy">Event Security Quote Request</h2>
                    <p className="text-gray-600 mt-1">All fields marked with * are required</p>
                  </div>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    {/* Contact Information */}
                    <div>
                      <h3 className="text-xl font-semibold text-seu-navy mb-4">Contact Information</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name *</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name *</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address *</FormLabel>
                              <FormControl>
                                <Input type="email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number *</FormLabel>
                              <FormControl>
                                <Input type="tel" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Event Details */}
                    <div>
                      <h3 className="text-xl font-semibold text-seu-navy mb-4">Event Details</h3>
                      <div className="space-y-6">
                        <FormField
                          control={form.control}
                          name="eventType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Event Type *</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select Event Type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Concert/Music Festival">Concert/Music Festival</SelectItem>
                                  <SelectItem value="Sports Event">Sports Event</SelectItem>
                                  <SelectItem value="Community Festival">Community Festival</SelectItem>
                                  <SelectItem value="Corporate Event">Corporate Event</SelectItem>
                                  <SelectItem value="Wedding/Private Party">Wedding/Private Party</SelectItem>
                                  <SelectItem value="Trade Show/Conference">Trade Show/Conference</SelectItem>
                                  <SelectItem value="School Event">School Event</SelectItem>
                                  <SelectItem value="Other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="eventDate"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Event Date *</FormLabel>
                                <FormControl>
                                  <Input type="date" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="eventDuration"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Event Duration</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value || ""}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select Duration" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="2-4 hours">2-4 hours</SelectItem>
                                    <SelectItem value="4-8 hours">4-8 hours</SelectItem>
                                    <SelectItem value="8-12 hours">8-12 hours</SelectItem>
                                    <SelectItem value="1 day">1 day</SelectItem>
                                    <SelectItem value="2-3 days">2-3 days</SelectItem>
                                    <SelectItem value="Multiple days">Multiple days</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="eventLocation"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Event Location *</FormLabel>
                              <FormControl>
                                <Input placeholder="Full venue address (City, State, Venue Name)" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="expectedAttendance"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Expected Attendance *</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select Expected Attendance" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Under 50">Under 50</SelectItem>
                                  <SelectItem value="50-100">50-100</SelectItem>
                                  <SelectItem value="100-250">100-250</SelectItem>
                                  <SelectItem value="250-500">250-500</SelectItem>
                                  <SelectItem value="500-1,000">500-1,000</SelectItem>
                                  <SelectItem value="1,000-2,500">1,000-2,500</SelectItem>
                                  <SelectItem value="2,500-5,000">2,500-5,000</SelectItem>
                                  <SelectItem value="5,000-10,000">5,000-10,000</SelectItem>
                                  <SelectItem value="10,000+">10,000+</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div>
                      <h3 className="text-xl font-semibold text-seu-navy mb-4">Additional Information</h3>
                      <FormField
                        control={form.control}
                        name="additionalDetails"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Special Requirements or Concerns</FormLabel>
                            <FormControl>
                              <Textarea 
                                rows={6} 
                                placeholder="Please describe any specific security concerns, special requirements, VIP protection needs, or other details that would help us provide an accurate quote..."
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-seu-navy mb-3">What's Included in Your Quote:</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <CheckCircle className="text-seu-gold mr-2 w-4 h-4" />
                          Personnel recommendations
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="text-seu-gold mr-2 w-4 h-4" />
                          Equipment and technology needs
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="text-seu-gold mr-2 w-4 h-4" />
                          Detailed cost breakdown
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="text-seu-gold mr-2 w-4 h-4" />
                          Emergency response procedures
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="text-seu-gold mr-2 w-4 h-4" />
                          Insurance and liability coverage
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="text-seu-gold mr-2 w-4 h-4" />
                          Customized security plan
                        </div>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg"
                      className="w-full bg-seu-gold text-seu-navy hover:bg-yellow-500 py-6 text-xl font-semibold"
                      disabled={quoteMutation.isPending}
                    >
                      {quoteMutation.isPending ? "Submitting..." : "Get My Free Quote"}
                    </Button>

                    <p className="text-sm text-gray-600 text-center">
                      By submitting this form, you agree to be contacted by our security experts. We respect your privacy and will never share your information.
                    </p>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-seu-navy mb-12 text-center">Why Choose SEU for Your Event Security?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Award className="text-seu-gold w-12 h-12 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-seu-navy mb-3">Licensed Professionals</h4>
                  <p className="text-gray-600">All personnel are state-licensed, bonded, and fully insured with ongoing training.</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Users className="text-seu-gold w-12 h-12 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-seu-navy mb-3">Local Expertise</h4>
                  <p className="text-gray-600">Deep knowledge of Central Coast venues and community expectations.</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <CheckCircle className="text-seu-gold w-12 h-12 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-seu-navy mb-3">Proven Track Record</h4>
                  <p className="text-gray-600">500+ successful events with zero major incidents and 100% client satisfaction.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
