'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatePresence, motion } from 'framer-motion';
import { FC, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { IContactData } from './contactData.type';
import { contactSchema } from './validationSchema';
import Field from '@/src/share/ui/Input/Field';
import PhoneInput from '@/src/share/ui/Input/PhoneInput';
import FullHeightTextarea from './FullHeightTextarea';
import Button from '@/src/share/ui/Button';
import FormSuccess from './FormSuccess';
import Lines from './Lines';
import { twMerge } from 'tailwind-merge';
import { metrika, MetrikGoal } from '@/src/feature/Metrika/MetrikSender';
import { getRecaptchaToken } from '@/src/feature/Forms/model/recaptcha';
import FormsAPI from '@/src/feature/Forms/api';

const ContactForm: FC = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isTextareaFocused, setIsTextareaFocused] = useState(false);
    const [serverError, setServerError] = useState('');
    const [nameWarningShown, setNameWarningShown] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const {
        handleSubmit,
        control,
        register,
        reset,
        setError,
        formState: { errors },
    } = useForm<IContactData>({
        defaultValues: {
            name: '',
            phone: '',
            email: '',
            message: '',
        },
        resolver: zodResolver(contactSchema),
        mode: 'onChange',
    });

    const onSubmit = async (data: IContactData) => {
        // Проверка имени
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
            // Получаем токен reCAPTCHA v3
            const recaptchaToken = await getRecaptchaToken('contact_form_submit');

            // Отправка данных на сервер
            await FormsAPI.sendLead({
                name: data.name?.trim() || '«Извините»',
                phone: data.phone,
                email: data.email,
                comment: data.message,
                pageUrl: window.location.href,
                recaptchaToken,
                action: 'contact_form_submit',
            });

            metrika(MetrikGoal.SEND_FORM);

            setIsSuccess(true);
            reset();
            setNameWarningShown(false);
        } catch (err) {
            console.error(err);
            setServerError('Не удалось отправить форму. Попробуйте позже.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="max-w-[650px] mx-auto">
            <AnimatePresence>
                {!isSuccess && (
                    <motion.form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col pl-2 lg:pl-0 mt-6 lg:mt-4 xl:mt-7 relative"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        layout>
                        {['name', 'phone', 'email'].map((fieldName) => {
                            const fieldProps = { name: fieldName as keyof IContactData, control };
                            const errorMessage = errors[fieldName as keyof IContactData]?.message;

                            return (
                                <Controller
                                    key={fieldName}
                                    {...fieldProps}
                                    render={({ field }) => (
                                        <motion.div
                                            layout
                                            initial={{
                                                opacity: 1,
                                                height: 'auto',
                                                marginBottom: '1.25rem',
                                            }}
                                            animate={
                                                isTextareaFocused
                                                    ? { opacity: 0, height: 0, marginBottom: 0 }
                                                    : {
                                                          opacity: 1,
                                                          height: 'auto',
                                                          marginBottom: '1.25rem',
                                                      }
                                            }
                                            transition={{ duration: 0.5, ease: 'easeInOut' }}>
                                            {fieldName === 'phone' ? (
                                                <PhoneInput
                                                    {...field}
                                                    label="Ваш телефон"
                                                    className="px-3 py-2 tracking-wider"
                                                    isValid={!errorMessage}
                                                    error={errorMessage}
                                                />
                                            ) : (
                                                <Field
                                                    {...field}
                                                    label={
                                                        fieldName === 'name'
                                                            ? 'Как вас зовут?'
                                                            : 'Email'
                                                    }
                                                    className="px-3 py-2 tracking-wider"
                                                    isValid={!errorMessage}
                                                    error={errorMessage}
                                                />
                                            )}
                                        </motion.div>
                                    )}
                                />
                            );
                        })}

                        <Controller
                            name="message"
                            control={control}
                            render={({ field }) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 1 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}>
                                    <FullHeightTextarea
                                        {...field}
                                        label="Пару слов о Вашем проекте"
                                        rows={5}
                                        className="tracking-wider"
                                        isFullHeight={isTextareaFocused}
                                        onFocus={() => setIsTextareaFocused(true)}
                                        onBlur={() => setIsTextareaFocused(false)}
                                    />
                                </motion.div>
                            )}
                        />

                        {serverError && <p className="text text-orange">{serverError}</p>}

                        <motion.div
                            initial={{ opacity: 1 }}
                            animate={{ opacity: isTextareaFocused ? 0 : 1 }}
                            transition={{ duration: 0.5 }}
                            className="flex justify-center">
                            <Button
                                className="text-orange mt-auto cursor-target mx-auto"
                                disabled={isLoading}
                                type="submit">
                                {isLoading ? 'Отправка...' : 'Отправить'}
                            </Button>
                        </motion.div>
                    </motion.form>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isSuccess && (
                    <>
                        <Lines />
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.6, duration: 0.5 }}>
                            <FormSuccess />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ContactForm;
