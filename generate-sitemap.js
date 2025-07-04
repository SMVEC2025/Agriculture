// generate-sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const sitemap = new SitemapStream({ hostname: 'https://agri.smvec.ac.in' });

const writeStream = createWriteStream('./public/sitemap.xml');
sitemap.pipe(writeStream);

[
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/about-us', changefreq: 'monthly', priority: 0.8 },
  { url: '/history', changefreq: 'monthly', priority: 0.8 },
  { url: '/gallery', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/faculty-list', changefreq: 'monthly', priority: 0.8 },
  { url: '/courses-detail-agriculture', changefreq: 'monthly', priority: 0.8 },
  { url: '/campus-life', changefreq: 'monthly', priority: 0.8 },
  { url: '/event', changefreq: 'monthly', priority: 0.8 },
  { url: '/all-india-tour', changefreq: 'monthly', priority: 0.8 },
  { url: '/admission', changefreq: 'monthly', priority: 0.8 },

  // Add more routes dynamically
].forEach((route) => sitemap.write(route));

sitemap.end();

streamToPromise(sitemap).then(() => {
  console.log('✅ sitemap.xml generated');
});
