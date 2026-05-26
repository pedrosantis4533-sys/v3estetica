/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Differentials } from './components/Differentials';
import { Gallery } from './components/Gallery';
import { Faq } from './components/FAQ';
import { Footer } from './components/Footer';

export default function App() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <main className="min-h-screen bg-v3-dark text-white selection:bg-v3-gold/30 selection:text-white">
      <Hero />
      <Services />
      <Differentials />
      <Gallery />
      <Faq />
      <Footer />
    </main>
  );
}
