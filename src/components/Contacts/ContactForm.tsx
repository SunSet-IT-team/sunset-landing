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
    const onSubmit = (data: IContactData) => {
        console.log(data);
        setIsSuccess(true);
    };
    return (
        <>
            <AnimatePresence>
                {!isSuccess && (
                    <motion.form
                        className="flex flex-col gap-10 w-3/4 mt-10 pl-28"
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
                                <Textarea {...field} label="Готовы обсудить проект?" rows={5} />
                            )}
                        />

                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) => (
                                <Field
                                    {...field}
                                    label="Как вас зовут?"
                                    className=" px-3 py-2"
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
                                    className=" px-3 py-2"
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
                                    label="Ваша почта"
                                    className=" px-3 py-2"
                                    isValid={!errors.email?.message}
                                    error={errors.email?.message}
                                />
                            )}
                        />
                        <Button className="text-orange" type="submit">
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
