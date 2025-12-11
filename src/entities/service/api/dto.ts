import { WordPressFeaturedMediaDTO } from "@/src/share/types/api";

/**
 * DTO услуги
 */
export interface ServiceDTO {
    id: number;
    date: string;
    date_gmt: string;
    guid: {
        rendered: string;
    };
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
        protected: boolean;
    };
    excerpt: {
        rendered: string;
        protected: boolean;
    };
    featured_media: number;
    template: string;
    meta: {
        _acf_changed: boolean;
    };
    class_list: string[];

    _embedded?: {
        'wp:featuredmedia': WordPressFeaturedMediaDTO[];
    };
}
