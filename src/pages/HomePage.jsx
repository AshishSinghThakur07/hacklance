import React from 'react';
import Hero from '../components/home/Hero';
import MetricsBar from '../components/home/MetricsBar';
import WhatWeDo from '../components/home/WhatWeDo';
import FeaturedEvents from '../components/home/FeaturedEvents';
import FeaturedProjects from '../components/home/FeaturedProjects';
import CommunityValues from '../components/home/CommunityValues';
import ResourcesPreview from '../components/home/ResourcesPreview';
import FinalCTA from '../components/home/FinalCTA';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <MetricsBar />
      <WhatWeDo />
      <FeaturedEvents />
      <FeaturedProjects />
      <CommunityValues />
      <ResourcesPreview />
      <FinalCTA />
    </div>
  );
}
