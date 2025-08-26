import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Construction from "@/pages/Construction";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import About from "@/pages/About";
import CaseStudies from "@/pages/CaseStudies";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import Quote from "@/pages/Quote";
import Initiative from "@/pages/Initiative";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Construction} />
      {/* Temporarily commenting out other routes while under construction */}
      {/* 
      <Layout>
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/about" component={About} />
        <Route path="/case-studies" component={CaseStudies} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/quote" component={Quote} />
        <Route path="/805-safe" component={Initiative} />
        <Route component={NotFound} />
      </Layout>
      */}
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
