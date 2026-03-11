/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DualMarquee from './components/DualMarquee';
import ProductCarousel from './components/ProductCarousel';
import GiantKhakraFeature from './components/GiantKhakraFeature';
import TrustGrid from './components/TrustGrid';
import LadduLoveFeature from './components/LadduLoveFeature';
import IngredientWall from './components/IngredientWall';
import FoundersTable from './components/FoundersTable';
import ProcessStrip from './components/ProcessStrip';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-cream min-h-screen font-body text-night selection:bg-rust selection:text-cream">
      <Navbar />
      <Hero />
      <DualMarquee />
      <ProductCarousel />
      <GiantKhakraFeature />
      <TrustGrid />
      <LadduLoveFeature />
      <IngredientWall />
      <FoundersTable />
      <ProcessStrip />
      <SocialProof />
      <Footer />
    </div>
  );
}




