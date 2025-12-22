import type { MetadataRoute } from 'next';
import { DOMAIN, routeData } from '../core/route';
import ServiceAPI from '../entities/service/api';
import CaseAPI from '../entities/case/api';
import PostAPI from '../entities/post/api';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const routes: MetadataRoute.Sitemap = [];

    // 1. Главная страница
    routes.push({
        url: `https://${DOMAIN}${routeData.main.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
    });

    // 2. Статические страницы: услуги, кейсы, блог
    const staticPages = [routeData.services, routeData.cases, routeData.blog];
    for (const page of staticPages) {
        routes.push({
            url: `https://${DOMAIN}${page.slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        });
    }

    // 3. Динамические подстраницы

    // Услуги
    const serviceData = await ServiceAPI.getServicesData(['slug', 'modified']);
    serviceData.forEach((s) => {
        routes.push({
            url: `https://${DOMAIN}/services/${s.slug}`,
            lastModified: s.modified,
            changeFrequency: 'monthly',
            priority: 0.7,
        });
    });

    // Кейсы
    const caseData = await CaseAPI.getCasesData(['slug', 'modified']);
    caseData.forEach((c) => {
        routes.push({
            url: `https://${DOMAIN}/cases/${c.slug}`,
            lastModified: c.modified,
            changeFrequency: 'monthly',
            priority: 0.7,
        });
    });

    // Блог
    const blogData = await PostAPI.getPostsData(['slug', 'modified']);
    blogData.forEach((b) => {
        routes.push({
            url: `https://${DOMAIN}/blog/${b.slug}`,
            lastModified: b.modified,
            changeFrequency: 'weekly',
            priority: 0.6,
        });
    });

    return routes;
}
