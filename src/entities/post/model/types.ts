import { PostContent } from '@/src/share/types/share';
import { FAQItem } from '@/src/share/ui/FAQ';

/**
 * Объект записи
 */
export type Post = PostContent & {
    faqs: FAQItem[];
    views: number;
};
