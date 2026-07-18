
import {NotificationIcon, OrderIcon, ProductIcon, SearchIcon, UserIcon} from "../assets/icons/IconComponents.jsx";
import StateCard from "../components/StateCard.jsx";

export default function Dashboard() {
    const stateData = [
        {title: "محصولات", value: "1000", icon: ProductIcon },
        {title: "سفارشات", value: "2500000", icon: OrderIcon },
        {title: "کاربران", value: "50000", icon: UserIcon },
    ];
    return (
        <div className="flex flex-col items-center w-full h-auto">
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
                        className="grid place-items-center border border-(--border-color) rounded-xl size-10 sm:size-12 hover:bg-(--bg-hover) transition-colors duration-200"
                        aria-label="اعلان‌ها"
                    >
                        <NotificationIcon size={24} color={"#53606F"} strokeWidth={1} />
                    </button>

                    <div className="flex items-center gap-2 border border-(--border-color) rounded-xl w-full sm:w-48 md:w-56 h-10 px-3 focus-within:border-(--primary) transition-colors duration-200">
                        <SearchIcon size={20} color={"#53606F"} strokeWidth={1}/>
                        <input
                            type="text"
                            className="w-full h-full outline-none text-sm bg-transparent"
                            placeholder="جستجو در سفارش‌ها..."
                            aria-label="جستجوی سفارش‌ها"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-(--bg-secondary) p-4 sm:p-6 mt-6">
                <div className="flex flex-wrap gap-4 justify-center lg:justify-between">
                    {stateData.map((stat) => (
                        <StateCard key={stat.id} {...stat} />
                    ))}
                </div>
            </div>
        </div>
    );
}