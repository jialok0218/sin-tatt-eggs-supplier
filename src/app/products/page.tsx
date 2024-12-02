import React from 'react'
import { ProductHero } from './sections/ProductHero'
import { ProductGrid } from './sections/ProductGrid'
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Products',
  };
}

const page = () => {
  return (
    <>
      <ProductHero />
      <ProductGrid />
    </>
  )
}

export default page