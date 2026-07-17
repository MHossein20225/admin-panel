import search from "../assets/icons/search.svg";
import notification from "../assets/icons/notification.svg";

export default function Dashboard() {
    return (
        <div className="bg-(--bg-secondary) w-full p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row items-start justify-between gap-4 sm:gap-6 h-32">
            <div className="w-full md:w-auto">
                <p className="text-(--bg) text-xs sm:text-sm">
                    عملیات فروشگاه / امروز
                </p>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold truncate">
                    داشبورد مدیریت فروش
                </h1>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
                <button
                    className="flex items-center justify-center border border-(--border-color) rounded-xl size-10 sm:size-12 shrink-0 hover:bg-(--bg-hover) transition-colors duration-200"
                    aria-label="اعلان‌ها"
                >
                    <img
                        src={notification}
                        alt="اعلان‌ها"
                        className="size-5 sm:size-6"
                        loading="lazy"
                    />
                </button>

                <div className="flex items-center gap-2 border border-(--border-color) rounded-xl w-full sm:w-48 md:w-56 h-10 px-3 focus-within:border-(--primary) transition-colors duration-200">
                    <img
                        src={search}
                        alt="جستجو"
                        className="size-5 sm:size-6 shrink-0 opacity-60"
                        loading="lazy"
                    />
                    <input
                        type="text"
                        className="w-full h-full outline-none text-sm bg-transparent"
                        placeholder="جستجو در سفارش‌ها..."
                        aria-label="جستجوی سفارش‌ها"
                    />
                </div>
            </div>
        </div>
    );
}