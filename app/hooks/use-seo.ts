import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { useEffect } from 'react';

interface UseSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function useSEO({
  title,
  description,
  keywords,
  image = '/og-image.jpg',
  url,
  type = 'website',
}: UseSEOProps) {
  const t = useTranslations();
  const locale = useLocale();

  const defaultTitle = t('title');
  const defaultDescription = t('core.desc');
  const defaultKeywords = t('core.keywords');

  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;
  const finalUrl = url || `https://companyscore.net/${locale}`;

  useEffect(() => {
    // Update document title
    document.title = finalTitle;

    // Update meta tags
    const updateMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(
        `meta[name="${name}"]`,
      ) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    const updatePropertyMetaTag = (property: string, content: string) => {
      let meta = document.querySelector(
        `meta[property="${property}"]`,
      ) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Update basic meta tags
    updateMetaTag('description', finalDescription);
    updateMetaTag('keywords', finalKeywords);
    updateMetaTag('language', locale);

    // Update Open Graph meta tags
    updatePropertyMetaTag('og:title', finalTitle);
    updatePropertyMetaTag('og:description', finalDescription);
    updatePropertyMetaTag('og:type', type);
    updatePropertyMetaTag('og:url', finalUrl);
    updatePropertyMetaTag('og:image', image);
    updatePropertyMetaTag('og:locale', locale);
    updatePropertyMetaTag('og:locale:alternate', locale === 'en' ? 'ru' : 'en');

    // Update Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', finalTitle);
    updateMetaTag('twitter:description', finalDescription);
    updateMetaTag('twitter:image', image);

    // Update canonical URL
    let canonical = document.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = finalUrl;

    // Update alternate language links
    const updateAlternateLink = (hreflang: string, href: string) => {
      let link = document.querySelector(
        `link[rel="alternate"][hreflang="${hreflang}"]`,
      ) as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'alternate';
        link.hreflang = hreflang;
        document.head.appendChild(link);
      }
      link.href = href;
    };

    updateAlternateLink(
      'en',
      `https://companyscore.net/en${url?.replace(/^\/[a-z]{2}/, '') || ''}`,
    );
    updateAlternateLink(
      'ru',
      `https://companyscore.net/ru${url?.replace(/^\/[a-z]{2}/, '') || ''}`,
    );
    updateAlternateLink(
      'x-default',
      `https://companyscore.net/en${url?.replace(/^\/[a-z]{2}/, '') || ''}`,
    );
  }, [
    finalTitle,
    finalDescription,
    finalKeywords,
    finalUrl,
    image,
    type,
    locale,
    url,
  ]);

  return {
    title: finalTitle,
    description: finalDescription,
    keywords: finalKeywords,
    url: finalUrl,
    locale,
  };
}
