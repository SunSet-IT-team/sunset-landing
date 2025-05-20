'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatePresence, motion } from 'framer-motion';
import { FC, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { IContactData } from './contactData.type';
import FormSuccess from './FormSuccess';
import Lines from './Lines';
import { contactSchema } from './validationSchema';
import Button from '../ui/Button';
import Field from '../ui/Field';
import Textarea from '../ui/Textarea';

/**
 * Форма обратной связи
 */
const ContactForm: FC = () => {
    const [isSuccess, setIsSuccess] = useState<boolean>(false);

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

    const onSubmit = (data: IContactData) => {
        console.log(data);
        setIsSuccess(true);
    };
    return (
        <>
            <AnimatePresence>
                {!isSuccess && (
                    <motion.form
                        className="flex flex-col gap-5 pl-2 lg:pl-0 mt-6 lg:mt-7 lg:max-w-[650px] lg:mx-auto lg:gap-6"
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
                            name="message"
                            control={control}
                            render={({ field }) => (
                                <Textarea
                                    {...field}
                                    label="Готовы обсудить проект?"
                                    rows={5}
                                    className="tracking-wider"
                                />
                            )}
                        />

                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) => (
                                <Field
                                    {...field}
                                    label="Как вас зовут?"
                                    className=" px-3 py-2 tracking-wider"
                                    isValid={!errors.name?.message}
                                    error={errors.name?.message}
                                />
                            )}
                        />
                        <Controller
                            name="phone"
                            control={control}
                            render={({ field }) => (
                                <Field
                                    {...field}
                                    label="Ваш телефон"
                                    className=" px-3 py-2 tracking-wider"
                                    isValid={!errors.phone?.message}
                                    error={errors.phone?.message}
                                />
                            )}
                        />
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <Field
                                    {...field}
                                    label="Email"
                                    className=" px-3 py-2 tracking-wider"
                                    isValid={!errors.email?.message}
                                    error={errors.email?.message}
                                />
                            )}
                        />

                        <Button
                            className={`text-orange transition-all duration-300 ${
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
