import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FloatingCallButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 lg:hidden">
      <Button
        asChild
        className="btn-hero w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Llamar para reservar"
      >
        <a href="tel:654873176">
          <Phone className="h-6 w-6" />
        </a>
      </Button>
    </div>
  );
}