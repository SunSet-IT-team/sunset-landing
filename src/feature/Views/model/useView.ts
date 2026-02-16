import { useState, useEffect } from 'react';
import ViewsAPI from '../api';
import { markView, shouldCountView } from './viewStorage';

interface useViewParams {
    initialViews: number;
    postId: number;
}

/**
 * Хук для просмотра записи
 */
export const useView = ({ initialViews, postId }: useViewParams) => {
    const [views, setViews] = useState<number>(initialViews);

    useEffect(() => {
        const f = async () => {
            if (!shouldCountView(postId)) return;

            const data = await ViewsAPI.postView(postId);

            markView(postId);

            setViews(data.views);
        };

        f();
    }, [postId]);

    return views;
};
