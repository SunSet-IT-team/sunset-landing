'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatePresence, motion } from 'framer-motion';
import { FC, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { IContactData } from './contactData.type';
import FormSuccess from './FormSuccess';
import Lines from './Lines';
import { contactSchema } from './validationSchema';
import { metrika, MetrikGoal } from '@/src/feature/Metrika/MetrikSender';
import Field from '@/src/share/ui/Field';
import Button from '@/src/share/ui/Button';
import PhoneInput from '@/src/share/ui/PhoneInput';
import FullHeightTextarea from './FullHeightTextarea';
import { twMerge } from 'tailwind-merge';

const urlLink =
    'https://api.telegram.org/bot8170983542:AAF_mUheHm7MH6p5hzfxqiIwo0AzC1gJSAc/sendMessage?chat_id=-1002582530760&parse_mode=html&text=';

/**
 * Форма обратной связи
 */
const ContactForm: FC = () => {
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [isTextareaFocused, setIsTextareaFocused] = useState<boolean>(false);

    const {
        handleSubmit,
        formState: { errors },
        reset,
        register,
        control,
    } = useForm<IContactData>({
        defaultValues: {
            name: '',
            phone: '',
            message: '',
            email: '',
        },
        resolver: zodResolver(contactSchema),
        mode: 'onChange',
    });

    const errorMessages = Object.values(errors).map((error) => error.message);

    const onSubmit = async (data: IContactData) => {
        const text = encodeURIComponent(`<b>Новая заявка с сайта:</b>
        <b>Имя:</b> ${data.name.trim()}
        <b>Телефон:</b> ${data.phone.trim()}
        <b>Почта:</b> ${data.email.trim()}
        <b>Информация:</b> ${data.message ? data.message : 'отсутствует'}`);

        await fetch(urlLink + text);

        metrika(MetrikGoal.SEND_FORM);

        setIsSuccess(true);
    };
    return (
        <>
            <AnimatePresence>
                {!isSuccess && (
                    <motion.form
                        className="flex flex-col pl-2 lg:pl-0 mt-6 lg:mt-7 lg:max-w-[650px] lg:mx-auto max-h-[532px] h-[410px] sm:h-[435px] lg:h-[532px] relative"
                        onSubmit={handleSubmit(onSubmit)}
                        initial={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.5 + 1,
                        }}>
                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) => (
                                <div
                                    className={twMerge(
                                        'transition-all duration-300 ease',
                                        isTextareaFocused
                                            ? 'opacity-0 h-0 delay-0 mb-0 lg:mb-0'
                                            : 'mb-5 lg:mb-6',
                                    )}>
                                    <Field
                                        {...field}
                                        label="Как вас зовут?"
                                        className=" px-3 py-2 tracking-wider"
                                        isValid={!errors.name?.message}
                                        error={errors.name?.message}
                                    />
                                </div>
                            )}
                        />
                        <Controller
                            name="phone"
                            control={control}
                            render={({ field }) => (
                                <div
                                    className={twMerge(
                                        'transition-all duration-300 ease',
                                        isTextareaFocused
                                            ? 'opacity-0 h-0 delay-0 mb-0 lg:mb-0'
                                            : 'mb-5 lg:mb-6',
                                    )}>
                                    <PhoneInput
                                        {...field}
                                        label="Ваш телефон"
                                        className=" px-3 py-2 tracking-wider"
                                        isValid={!errors.phone?.message}
                                        error={errors.phone?.message}
                                    />
                                </div>
                            )}
                        />
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <div
                                    className={twMerge(
                                        'transition-all duration-300 ease',
                                        isTextareaFocused
                                            ? 'opacity-0 h-0 delay-0 mb-0 lg:mb-0'
                                            : 'mb-5 lg:mb-6',
                                    )}>
                                    <Field
                                        {...field}
                                        label="Email"
                                        className=" px-3 py-2 tracking-wider"
                                        isValid={!errors.email?.message}
                                        error={errors.email?.message}
                                    />
                                </div>
                            )}
                        />

                        <Controller
                            name="message"
                            control={control}
                            render={({ field }) => (
                                <FullHeightTextarea
                                    {...field}
                                    label="Пару слов о Вашем проекте"
                                    rows={5}
                                    className="tracking-wider"
                                    isFullHeight={isTextareaFocused}
                                    onFocus={() => setIsTextareaFocused(true)}
                                    onBlur={() => setIsTextareaFocused(false)}
                                />
                            )}
                        />

                        <Button
                            className={`text-orange transition-all duration-300 mt-auto cursor-target ${
                                errorMessages.length ? 'opacity-0' : ''
                            }`}
                            disabled={errorMessages.length > 0}
                            type="submit">
                            Отправить
                        </Button>
                    </motion.form>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {isSuccess && (
                    <>
                        <Lines />
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{
                                delay: 0.5 + 1.1,
                                duration: 0.5,
                            }}>
                            <FormSuccess />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default ContactForm;
