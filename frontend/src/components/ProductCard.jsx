import {formatPrice} from "../utilities/HelperFunctions.jsx";

export default function ProductCard({image, name, price, off = 0}) {
    const discountedPrice = price - price * (off / 100);
    const hasOff = off > 0;

    return (
        <div
            className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)] border border-(--border-color) rounded-2xl p-3 sm:p-4 relative group hover:shadow-lg transition-all duration-200">
            {hasOff && (
                <span
                    className="absolute flex items-center justify-center size-8 sm:size-10 rounded-full bg-red-500 text-white text-xs sm:text-sm font-medium top-2 left-2 z-10 shadow-md">
                    {off}%
                </span>
            )}
            <div className="w-full aspect-square bg-(--bg-secondary) rounded-xl overflow-hidden mb-3">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                />
            </div>
            <div className="space-y-1.5">
                <h3 className="text-sm sm:text-base font-medium text-(--text) truncate">
                    {name}
                </h3>
                <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base font-bold text-(--text)">
                    {formatPrice(discountedPrice)}
                </span>
                    {hasOff && (
                        <span className="text-xs sm:text-sm text-gray-400 line-through">
                            {formatPrice(price)}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}