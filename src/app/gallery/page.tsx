import { list } from '@vercel/blob';
import React from 'react'
import { GalleryHero } from './sections/GalleryHero'
import { GalleryGrid } from './sections/GalleryGrid'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Gallery',
  }
}

const Page = async () => {
  // List all blobs in the team and production folders
  const { blobs: teamBlobs } = await list({ prefix: 'team/' });
  const { blobs: productionBlobs } = await list({ prefix: 'production/' });

  // Filter out directories and transform blobs to image data
  const teamImages = teamBlobs
    .filter(blob => !blob.url.endsWith('/'))
    .map(blob => ({
      src: blob.url,
      alt: blob.pathname.split('/').pop()?.split('.')[0] || '',
      category: 'team'
    }));

  const productionImages = productionBlobs
    .filter(blob => !blob.url.endsWith('/'))
    .map(blob => ({
      src: blob.url,
      alt: blob.pathname.split('/').pop()?.split('.')[0] || '',
      category: 'production'
    }));

  const allImages = [...teamImages, ...productionImages];

  return (
    <>
      <GalleryHero />
      <GalleryGrid images={allImages} />
    </>
  )
}

export default Page