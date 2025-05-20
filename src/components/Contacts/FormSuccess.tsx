'use client';
import { FC } from 'react';

const FormSuccess: FC = () => {
    return (
        <div className="relative flex flex-col md:flex-col-reverse gap-24 md:min-h-[60vh] justify-center items-center text-center mx-auto pt-24">
            <p className="text">
                Вы обратились по адресу! <br />
                Скоро по вашим контактам свяжутся
            </p>

            <p className="heading text-[20px]  md:text-3xl">
                Ваша заявка
                <br />
                <span className="block text-orange text-[24px] pt-4 lg:text-3xl">принята</span>
            </p>
        </div>
    );
};

export default FormSuccess;
