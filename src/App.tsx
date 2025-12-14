import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const Alojamiento = lazy(() => import("./pages/Alojamiento"));
const Servicios = lazy(() => import("./pages/Servicios"));
const Entorno = lazy(() => import("./pages/Entorno"));
const Contacto = lazy(() => import("./pages/Contacto"));
const Galeria = lazy(() => import("./pages/Galeria"));
const ComoLlegar = lazy(() => import("./pages/ComoLlegar"));
const AvisoLegal = lazy(() => import("./pages/legal/AvisoLegal"));
const Privacidad = lazy(() => import("./pages/legal/Privacidad"));
const Cookies = lazy(() => import("./pages/legal/Cookies"));
const NotFound = lazy(() => import("./pages/NotFound"));

// GDPR
import CookieBanner from "@/components/GDPR/CookieBanner";

const queryClient = new QueryClient();

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CookieBanner />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/alojamiento" element={<Alojamiento />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/entorno" element={<Entorno />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/como-llegar" element={<ComoLlegar />} />
            <Route path="/legal/aviso-legal" element={<AvisoLegal />} />
            <Route path="/legal/privacidad" element={<Privacidad />} />
            <Route path="/legal/cookies" element={<Cookies />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
