import { NextResponse } from 'next/server';

const BASE_URL = 'https://sunset-it.agency/';
const WP_API = 'https://your-wordpress-site.com/wp-json/wp/v2/pages?per_page=100';

export async function GET() {
    // Получаем страницы из WordPress
    //   const res = await fetch(WP_API);
    //   const pages = await res.json();

    const pages = [
        {
            slug: '',
            date: '2025-10-21',
            priority: '1.0',
        },
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
      .map(
          (page: any) => `
    <url>
      <loc>${BASE_URL}/${page.slug}</loc>
      <lastmod>${new Date(page.date).toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${page.priority || '0.8'}</priority>
    </url>`,
      )
      .join('')}
</urlset>`;

    return new NextResponse(sitemap, {
        headers: { 'Content-Type': 'application/xml' },
    });
}
