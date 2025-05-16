import localFont from 'next/font/local';

/**
 * Удобная работа со шрифтами
 */

export const akony = localFont({
    src: './akony.woff',
    variable: '--font-akony',
    weight: '700',
});

export const arodoraPro = localFont({
    src: './ArodoraPro-Light.otf',
    variable: '--font-arodora-pro',
    weight: '300',
});
