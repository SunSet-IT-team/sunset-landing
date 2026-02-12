import { PostContent } from '@/src/share/types/share';
import { FAQItem } from '@/src/share/ui/FAQ';

/**
 * Объект услуги
 */
export type Service = PostContent & {
    faqs: FAQItem[];
};
