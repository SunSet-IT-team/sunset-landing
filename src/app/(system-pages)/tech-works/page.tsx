import HelmetModelWithLight from '@/src/share/models/HelmetModel/HelmetModelWithLight';
import { View } from '@react-three/drei';
import { FC, Suspense } from 'react';

// export const metadata: Metadata = {
// 	title: 'Тех.работы',
// 	description: 'Извините, но сейчас идут технические работы',
// }

const TechWorks: FC = () => {
    return (
        <div className="flex flex-col px-20 h-full">
            <p className="font-arodora-pro w-48 mt-auto">
                Прямо сейчас ведутся технические работы. Просим вас немного подождать и мы станем
                ещё лучше!
            </p>

            <h1 className="text-8xl mt-auto">
                Тех.
                <br />
                работы
            </h1>
        </div>
    );
};

export default TechWorks;
