import { useState, useEffect } from 'react';
import { Button } from '@/components/UI/button';
import { X } from 'lucide-react';

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            // Show banner after a small delay
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur shadow-lg border-t border-border animate-in slide-in-from-bottom-full duration-500">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex-1 text-sm text-foreground/90">
                    <p>
                        Utilizamos cookies propias y de terceros para mejorar su experiencia y nuestros servicios.
                        Si continúa navegando, consideramos que acepta su uso. Puede obtener más información en nuestra{' '}
                        <a href="/legal/cookies" className="underline hover:text-primary">
                            Política de Cookies
                        </a>.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm" onClick={() => setIsVisible(false)} className="hidden sm:flex">
                        <X className="h-4 w-4 mr-2" />
                        Cerrar
                    </Button>
                    <Button onClick={acceptCookies} className="whitespace-nowrap">
                        Aceptar Cookies
                    </Button>
                </div>
            </div>
        </div>
    );
}
