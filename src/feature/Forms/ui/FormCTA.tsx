'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import FormsAPI from '../api';
import { formLeadSchema } from '../model/schema';
import { getRecaptchaToken } from '../model/recaptcha';
import { FormLeadData } from '../model/types';
import { metrika, MetrikGoal } from '@/src/feature/Metrika/MetrikSender';
import Button from '@/src/share/ui/Button';
import Field from '@/src/share/ui/Input/Field';
import PhoneInput from '@/src/share/ui/Input/PhoneInput';
import Textarea from '@/src/share/ui/Input/Textarea';
import OrangeNotification from '@/src/share/ui/Notifications/OrangeNotification';
import { FaTelegramPlane } from 'react-icons/fa';

/**
 * Форма захвата
 */
const FormCTA = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [serverError, setServerError] = useState('');

    // UX-идея с заполнением имени
    const [nameWarningShown, setNameWarningShown] = useState(false);

    // Открытие всплывашки
    const [fastContact, setFastContact] = useState(false);

    const {
        handleSubmit,
        control,
        register,
        reset,
        setError,
        formState: { errors },
    } = useForm<FormLeadData>({
        defaultValues: {
            name: '',
            phone: '',
            comment: '',
        },
        resolver: zodResolver(formLeadSchema),
        mode: 'onChange',
    });

    const onSubmit = async (data: FormLeadData) => {
        // Если имя пустое и предупреждение ещё не показывали
        if (!data.name?.trim() && !nameWarningShown) {
            setNameWarningShown(true);

            setError('name', {
                type: 'manual',
                message: 'Если Вы не укажите имя — мы будем обращаться к Вам как «Извините».',
            });

            return;
        }

        setIsLoading(true);
        setServerError('');

        try {
            const recaptchaToken = await getRecaptchaToken('form_cta_submit');

            const res = await FormsAPI.sendLead({
                ...data,
                name: data.name?.trim() || '«Извините»',
                pageUrl: window.location.href,
                recaptchaToken,
            });

            metrika(MetrikGoal.SEND_FORM);
            setIsSuccess(true);
            reset();
            setNameWarningShown(false);
        } catch {
            setServerError('Не удалось отправить форму. Попробуйте позже.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="mb-8 rounded-xl border-2 border-orange p-4 md:p-6">
            {isSuccess ? (
                <p className="heading text-center">Спасибо! Заявка отправлена</p>
            ) : (
                <>
                    <h2 className="heading mb-2">Хотите обсудить проект?</h2>
                    <p className="text mb-4">
                        Оставьте контакты, мы свяжемся с вами.{' '}
                        <span
                            onClick={() => setFastContact(true)}
                            className="text-orange cursor-pointer underline">
                            Либо сделайте первый шаг.
                        </span>
                    </p>
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) => (
                                <Field
                                    {...field}
                                    label="Имя"
                                    className="px-3 py-2 tracking-wider"
                                    isValid={!errors.name?.message}
                                    error={errors.name?.message}
                                />
                            )}
                        />

                        <Controller
                            name="phone"
                            control={control}
                            render={({ field }) => (
                                <PhoneInput
                                    {...field}
                                    label="Телефон"
                                    className="px-3 py-2 tracking-wider"
                                    isValid={!errors.phone?.message}
                                    error={errors.phone?.message}
                                />
                            )}
                        />

                        <Textarea
                            label="Комментарий"
                            rows={4}
                            className="px-3 py-2 tracking-wider"
                            {...register('comment')}
                        />

                        {serverError && <p className="text text-orange">{serverError}</p>}

                        <Button
                            className="self-start disabled:opacity-50 transition bg-orange w-full rounded hover:opacity-90"
                            type="submit"
                            disabled={isLoading}>
                            {isLoading ? 'Отправка...' : 'Отправить'}
                        </Button>
                    </form>
                    <OrangeNotification
                        align="left"
                        title="Не хотите ждать?"
                        className="max-w-[220px] md:max-w-[340px]  mb-[-4vh] md:mb-[2vh] shadow-[0_0_12px_rgba(0,0,0,0.25)] "
                        hidden={!fastContact}
                        isOpen={fastContact}
                        setIsOpen={(open) => setFastContact(open)}>
                        <div className="flex flex-col text-descr text-[16px] gap-2">
                            <div className="flex flex-row gap-4 items-center">
                                <a
                                    href="tel:+79937287798"
                                    className="cursor-target"
                                    onClick={() => metrika(MetrikGoal.CLICK_PHONE)}>
                                    +7 993 728 77 98
                                </a>
                                <a
                                    href="https://t.me/sunset_digital_team"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => {
                                        metrika(MetrikGoal.GO_MEDIA, {
                                            type: 'Telegram',
                                        });
                                        metrika(MetrikGoal.GO_TELEGRAM);
                                    }}>
                                    <FaTelegramPlane className="w-[20px] h-[20px]" />
                                </a>
                            </div>
                            <a
                                href="mailto:manager@sunset-it.agency"
                                className="cursor-target"
                                onClick={() => metrika(MetrikGoal.CLICK_EMAIL)}>
                                manager@sunset-it.agency
                            </a>
                        </div>
                    </OrangeNotification>
                </>
            )}
        </section>
    );
};

export default FormCTA;
