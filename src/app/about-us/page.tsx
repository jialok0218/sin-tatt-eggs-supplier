import React from 'react'
import { AboutHero } from './sections/AboutHero';
import { CompanyProfile } from './sections/CompanyProfile'
import { StoryLine } from './sections/StoryLine'
import CompanyVideo from './sections/CompanyVideo'
import { VisionMissionValues } from './sections/VisionMissionValues'
const page = () => {
  return (
    <>
      <AboutHero />
      <CompanyProfile />
      <StoryLine />
      <CompanyVideo />
      <VisionMissionValues />
    </>
  )
}

export default page