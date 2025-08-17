'use client';

import { useTranslations } from 'next-intl';
import { useSEO } from '@/src/hooks/use-seo';

export default function HomePage() {
  const t = useTranslations();

  // SEO optimization
  useSEO({});

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600 mb-8">{t('core.desc')}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">
                {t('nav.companies')}
              </h3>
              <p className="text-gray-600">{t('common.view')}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">{t('nav.users')}</h3>
              <p className="text-gray-600">{t('common.view')}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">
                {t('nav.comments')}
              </h3>
              <p className="text-gray-600">{t('common.view')}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">{t('nav.blog')}</h3>
              <p className="text-gray-600">{t('common.view')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
