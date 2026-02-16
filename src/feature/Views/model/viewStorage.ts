const PREFIX = 'viewed_post_';
const TTL = 24 * 60 * 60 * 1000; // 24 часа

interface StoredView {
    timestamp: number;
}

export function shouldCountView(postId: number): boolean {
    if (typeof window === 'undefined') return false;

    const key = PREFIX + postId;
    const raw = localStorage.getItem(key);

    if (!raw) return true;

    try {
        const data: StoredView = JSON.parse(raw);

        const now = Date.now();

        return now - data.timestamp > TTL;
    } catch {
        return true;
    }
}

export function markView(postId: number) {
    if (typeof window === 'undefined') return;

    const key = PREFIX + postId;

    const data: StoredView = {
        timestamp: Date.now(),
    };

    localStorage.setItem(key, JSON.stringify(data));
}
