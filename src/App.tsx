import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { Footer } from "@/components/layout/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import { useEffect } from "react";

// ייבוא הדפים - Home הוא כעת דף הבית הראשי
import Home from "./pages/Home";
import Cases from "./pages/Cases";
import Shop from "./pages/Shop";
import Equipment from "./pages/Equipment";
import Parents from "./pages/Parents";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// רכיב לגלילה לראש הדף במעבר בין עמודים
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// רכיב פנימי שמכיל את כל הראוטינג
function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Routes>
          {/* דף הבית הראשי הוא כעת Home */}
          <Route path="/" element={<Home />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/parents" element={<Parents />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <MobileStickyCTA />
      </div>
    </>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
