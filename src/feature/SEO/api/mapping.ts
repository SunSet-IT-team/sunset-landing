import { WordpressPostDTO } from '@/src/share/types/api';
import { PostContent } from '@/src/share/types/share';

/**
 * Переводим DTO в данные необходимные для сео
 */
export function mapSEODTO(dto: WordpressPostDTO): PostContent {
    return {
        title: dto.title.rendered,
        content: dto.content.rendered,
        excerpt: dto.excerpt.rendered,
        url: dto.link,
        id: dto.id,
        slug: dto.slug,
        thumbnail: dto._embedded?.['wp:featuredmedia']
            ? {
                  url: dto._embedded?.['wp:featuredmedia'][0].source_url,
                  height: dto._embedded?.['wp:featuredmedia'][0].media_details.height,
                  width: dto._embedded?.['wp:featuredmedia'][0].media_details.width,
              }
            : undefined,
        seo: {
            modified_time: dto.yoast_head_json.article_modified_time,
            published_time: dto.yoast_head_json.article_published_time,
            description: dto.yoast_head_json.description,
            og_description: dto.yoast_head_json.og_description,
            og_locale: dto.yoast_head_json.og_locale,
            og_title: dto.yoast_head_json.og_title,
            og_type: dto.yoast_head_json.og_type,
            og_url: dto.yoast_head_json.og_url,
            title: dto.yoast_head_json.title,
        },
    };
}
