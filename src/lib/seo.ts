import { SITE_METADATA } from './constants';

export interface SeoConfig {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: 'website' | 'article';
  image?: string;
}

export function constructSeo(config: SeoConfig = {}) {
  const title = config.title
    ? `${config.title} · ${SITE_METADATA.author}`
    : SITE_METADATA.title;
  const description = config.description || SITE_METADATA.description;
  const canonical = config.canonical || SITE_METADATA.url;
  const image = config.image || `${SITE_METADATA.url}/og-image.png`;

  return {
    title,
    description,
    canonical,
    ogType: config.ogType || 'website',
    image,
  };
}

export function getPersonJsonLd() {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Nitya Parmar',
    alternateName: '守 Nitya Parmar',
    url: SITE_METADATA.url,
    email: SITE_METADATA.email,
    jobTitle: 'Full-Stack Developer & Systems Builder',
    worksFor: {
      '@type': 'EducationalOrganization',
      name: 'ITM (SLS) Baroda University',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'ITM (SLS) Baroda University',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Vadodara',
      addressRegion: 'Gujarat',
      addressCountry: 'India',
    },
    sameAs: [
      'https://github.com/NityaParmar',
      'https://www.linkedin.com/in/nityaparmar-dev',
      'https://x.com/NityaParmar007',
      'https://www.youtube.com/@NITYA_was_HERE',
      'https://nityawashere.blogspot.com/',
      'https://open.spotify.com/user/31o2npvntb6pjo356ztnls5l4c4i',
      'https://doi.org/10.5281/zenodo.22026899',
    ],
  });
}
