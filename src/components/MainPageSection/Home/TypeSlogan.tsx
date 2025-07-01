'use client';

import { useState, useEffect } from 'react';

const TYPING_SPEED = 100;
const DELETING_SPEED = 50;
const DELAY_BEFORE_DELETE = 1500;

/**
 * Типо слоган печатают
 */
const TypeSlogan = () => {
    const phrases = ['digital-команда', 'двигатель', 'делаем сайты', 'делаем приложения'];
    const [index, setIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentPhrase = phrases[index];
        let timer: NodeJS.Timeout;

        if (isDeleting) {
            timer = setTimeout(() => {
                setText((prev) => prev.slice(0, -1));
            }, DELETING_SPEED);
        } else {
            timer = setTimeout(() => {
                setText((prev) => currentPhrase.slice(0, prev.length + 1));
            }, TYPING_SPEED);
        }

        if (!isDeleting && text === currentPhrase) {
            timer = setTimeout(() => setIsDeleting(true), DELAY_BEFORE_DELETE);
        }

        if (isDeleting && text === '') {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % phrases.length);
        }

        return () => clearTimeout(timer);
    }, [text, isDeleting, index]);

    return (
        <h1 className="heading">
            <strong className="text-orange">SunSet IT</strong> —<br />
            <strong className="text-blue-200">{text}</strong>
            <span className="blinking-cursor" aria-hidden="true">
                |
            </span>{' '}
            для вашего бизнеса
        </h1>
    );
};

export default TypeSlogan;
