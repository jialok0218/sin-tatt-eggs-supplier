import React from 'react'
import { ContactHero } from './sections/ContactHero';
import { ContactInfo } from './sections/ContactInfo';
import { CompanyMap } from './sections/CompanyMap';

const page = () => {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <CompanyMap />
    </>
  )
}

export default page