interface GradientCircleProps {
    className?: string;
}

/**
 * Круг градиента. Используется для заднего фона
 */
const GradientCircle = ({ className = '' }: GradientCircleProps) => {
    return (
        <div
            className={`absolute transition-all origin-center duration-700 haspect-square opacity-45 ${className}`}
            style={{
                background:
                    'radial-gradient(ellipse at center, rgba(239, 215, 176, 0.48) 0%, rgba(239, 215, 176, 0) 70%, transparent 100%',
            }}
        />
    );
};

export default GradientCircle;
