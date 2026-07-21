import {formatPrice} from "../utilities/HelperFunctions.jsx";
export default function StateCard({ title, value, icon: Icon }){
    return (
        <div className="w-full sm:w-[calc(50%-1rem)] lg:w-72 h-52 bg-(--color-white) border border-(--border-color) rounded-2xl p-4">
            <div className="flex items-center justify-between">
                <p className="text-(--text) text-sm sm:text-base">{title}</p>
                <div className="size-10 sm:size-12 bg-(--bg-primary) rounded-xl grid place-items-center">
                    <Icon size={24} color="#0F8F88" strokeWidth={1} />
                </div>
            </div>
            <div className="mt-5">
                <p className="text-3xl sm:text-4xl">{formatPrice(value)}</p>
            </div>
        </div>
    );
}