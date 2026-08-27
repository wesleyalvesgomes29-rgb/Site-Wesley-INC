/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomeShowcase } from './components/HomeShowcase';
import { DevelopmentDetailPage } from './components/DevelopmentDetailPage';
import { HomeContactSection } from './components/HomeContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
      if (pathname.includes('jardim-do-sol')) return '/empreendimentos/jardim-do-sol';
      if (pathname.includes('park-espanha')) return '/empreendimentos/park-espanha';
      if (pathname.includes('unique-novo-mundo')) return '/empreendimentos/unique-novo-mundo';
      return '/';
    }
    return '/';
  });

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const pathname = window.location.pathname;
      if (pathname.includes('jardim-do-sol')) {
        setCurrentPath('/empreendimentos/jardim-do-sol');
      } else if (pathname.includes('park-espanha')) {
        setCurrentPath('/empreendimentos/park-espanha');
      } else if (pathname.includes('unique-novo-mundo')) {
        setCurrentPath('/empreendimentos/unique-novo-mundo');
      } else {
        setCurrentPath('/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Navigate to path function
  const navigateToPath = (path: string) => {
    if (path.startsWith('/#')) {
      const sectionId = path.replace('/#', '');
      setCurrentPath('/');
      window.history.pushState(null, '', '/');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
      return;
    }

    setCurrentPath(path);
    window.history.pushState(null, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    if (currentPath !== '/') {
      setCurrentPath('/');
      window.history.pushState(null, '', '/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          const navOffset = 80;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const el = document.getElementById(sectionId);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#080A0E] text-neutral-100 flex flex-col font-sans selection:bg-[#FF600B] selection:text-white">
      {/* Sticky Glass Navbar with Routing & Section Support */}
      <Navbar
        currentPath={currentPath}
        onNavigateToPath={navigateToPath}
        onNavigateToSection={scrollToSection}
      />

      {/* Main Content Router */}
      <main className="flex-grow">
        {currentPath === '/empreendimentos/jardim-do-sol' ? (
          /* Individual Page: Park Jardim do Sol */
          <DevelopmentDetailPage
            developmentId="jardim-do-sol"
            onNavigateToHome={() => navigateToPath('/')}
            onNavigateToDevelopment={(id) => navigateToPath(`/empreendimentos/${id}`)}
          />
        ) : currentPath === '/empreendimentos/park-espanha' ? (
          /* Individual Page: Park Espanha */
          <DevelopmentDetailPage
            developmentId="park-espanha"
            onNavigateToHome={() => navigateToPath('/')}
            onNavigateToDevelopment={(id) => navigateToPath(`/empreendimentos/${id}`)}
          />
        ) : currentPath === '/empreendimentos/unique-novo-mundo' ? (
          /* Individual Page: Unique Novo Mundo */
          <DevelopmentDetailPage
            developmentId="unique-novo-mundo"
            onNavigateToHome={() => navigateToPath('/')}
            onNavigateToDevelopment={(id) => navigateToPath(`/empreendimentos/${id}`)}
          />
        ) : (
          /* Home Page: Clean, Single Unified Composition */
          <>
            {/* 1. Composição Única: Chibi + Apresentação + Empreendimentos */}
            <HomeShowcase
              onSelectDevelopment={(id) => navigateToPath(`/empreendimentos/${id}`)}
            />

            {/* 2. Bloco de Contato Simples e Direto */}
            <HomeContactSection />
          </>
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigateToPath={navigateToPath}
        onNavigateToSection={scrollToSection}
      />
    </div>
  );
}
