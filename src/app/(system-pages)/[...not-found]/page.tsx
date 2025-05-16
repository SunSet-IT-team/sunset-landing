import CubesModelWithLight from '@/src/components/Models/CubesModel/CubesModelWithLight';
import { Metadata } from 'next';
import { FC } from 'react';

export const metadata: Metadata = {
    title: 'Страница не найдена',
    description: 'Что-то пошло не так, страница не найдена',
};

const Custom404: FC = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center h-full relative z-10">
                <p className="text-7xl">404</p>
                <p className="font-arodora-pro">Что-то пошло не так!</p>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-55">
                {/* <div className='absolute w-full h-full left-0 right-0 top-0 bottom-0 bg-black z-20 bg-opacity-55'></div> */}
                <CubesModelWithLight />
            </div>
        </>
    );
};

export default Custom404;
