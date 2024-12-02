import type { Metadata } from 'next';
import React from 'react';
import { AboutHero } from './sections/AboutHero';
import { CompanyProfile } from './sections/CompanyProfile';
import { StoryLine } from './sections/StoryLine';
import { VisionMissionValues } from './sections/VisionMissionValues';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'About Us',
  };
}

const page = () => {
  return (
    <>
      <AboutHero />
      <CompanyProfile />
      <StoryLine />
      <VisionMissionValues />
    </>
  );
}

export default page;