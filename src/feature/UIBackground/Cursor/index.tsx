'use client';

import TargetCursor from '@/components/TargetCursor';
import { useMediaQuery } from '@/src/hooks/useMediaQuery';

const Cursor = () => {
    const isMobile = useMediaQuery('(max-width: 767px)');

    if (isMobile) return <></>;

    return <TargetCursor />;
};

export default Cursor;
