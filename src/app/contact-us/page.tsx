import React from 'react'
import { ContactHero } from './sections/ContactHero';
import { ContactInfo } from './sections/ContactInfo';
import { CompanyMap } from './sections/CompanyMap';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Contact Us',
  };
}

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