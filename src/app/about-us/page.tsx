import React from 'react'
import { AboutHero } from './sections/AboutHero';
import { CompanyProfile } from './sections/CompanyProfile'
import { StoryLine } from './sections/StoryLine'
import { VisionMissionValues } from './sections/VisionMissionValues'
const page = () => {
  return (
    <>
      <AboutHero />
      <CompanyProfile />
      <StoryLine />
      <VisionMissionValues />
    </>
  )
}

export default page