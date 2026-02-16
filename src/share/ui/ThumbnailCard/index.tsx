import { twMerge } from 'tailwind-merge';

interface ThumbnailCardProps {
    className?: string;
    src: string;
    width?: number;
    height?: number;
    alt?: string;
}

/**
 * Превью статьи
 */
const ThumbnailCard = ({ className, src, width, height, alt }: ThumbnailCardProps) => {
    return (
        <div className={twMerge('rounded-lg overflow-hidden', className)}>
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
                width={width}
                height={height}
            />
        </div>
    );
};

export default ThumbnailCard;
