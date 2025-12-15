import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingCallButton from '../ui/FloatingCallButton';
import SEO from '../SEO';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title, description }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={title || "Vivienda Rural La Monería"}
        description={description || "Vivienda rural de lujo para 8 personas junto al Río Tinto. Piscina, jardín, chimenea. Ubicada en Las Delgadas, Minas de Riotinto (Huelva)."}
      />
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
}