import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve } from 'path';

const BASE_URL = 'https://vorp-ea.org';

const routes = [
  '/',
  '/donate',
  '/team',
  '/work-with-us',
  '/learn-share',
  '/partner-with-us',
  '/projects',
  '/our-work',
  '/our-impact',
  '/about',
  '/history',
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: BASE_URL });
  const writeStream = createWriteStream(resolve('public/sitemap.xml'));

  sitemap.pipe(writeStream);

  routes.forEach((route) => {
    sitemap.write({
      url: route,
      changefreq: 'weekly',
      priority: route === '/' ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    });
  });

  sitemap.end();

  await streamToPromise(sitemap);
  console.log('Sitemap generated at public/sitemap.xml');
}

generateSitemap().catch(console.error);
