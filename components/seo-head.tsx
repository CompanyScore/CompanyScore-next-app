'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SEOHead({
  title,
  description,
  keywords,
  image = '/og-image.jpg',
  url,
  type = 'website',
}: SEOHeadProps) {
  const t = useTranslations();
  const locale = useLocale();

  const defaultTitle = t('title');
  const defaultDescription = t('core.desc');
  const defaultKeywords = t('core.keywords');

  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;
  const finalUrl = url || `https://companyscore.net/${locale}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content="CompanyScore" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content={locale} />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="CompanyScore" />
      <meta property="og:locale" content={locale} />
      <meta
        property="og:locale:alternate"
        content={locale === 'en' ? 'ru' : 'en'}
      />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@companyscore" />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#3B82F6" />
      <meta name="msapplication-TileColor" content="#3B82F6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="CompanyScore" />

      {/* Canonical URL */}
      <link rel="canonical" href={finalUrl} />

      {/* Alternate Language Links */}
      <link
        rel="alternate"
        hrefLang="en"
        href={`https://companyscore.net/en${url?.replace(/^\/[a-z]{2}/, '') || ''}`}
      />
      <link
        rel="alternate"
        hrefLang="ru"
        href={`https://companyscore.net/ru${url?.replace(/^\/[a-z]{2}/, '') || ''}`}
      />
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`https://companyscore.net/en${url?.replace(/^\/[a-z]{2}/, '') || ''}`}
      />

      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'CompanyScore',
            description: finalDescription,
            url: 'https://companyscore.net',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://companyscore.net/search?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
            inLanguage: locale,
            alternateName: locale === 'en' ? 'CompanyScore' : 'CompanyScore',
          }),
        }}
      />
    </Head>
  );
}
