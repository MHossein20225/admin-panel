import WeeklySalesChart from '../components/WeeklySalesChart.jsx';
import {NotificationIcon, OrderIcon, ProductIcon, SearchIcon, UserIcon} from "../assets/icons/IconComponents.jsx";
import StateCard from "../components/StateCard.jsx";
import RecentOrderCard from "../components/RecentOrderCard.jsx";

const stateData = [
    {title: "محصولات", value: "1000", icon: ProductIcon },
    {title: "سفارشات", value: "2500000", icon: OrderIcon },
    {title: "کاربران", value: "50000", icon: UserIcon },
];
const recentOrders = [
    {id: 1, name: "اصغر", status: "done" },
    {id: 2, name: "احمد", status: "pending" },
    {id: 3, name: "علی", status: "sending" },
];
export default function Dashboard() {
    return (
        <div className="flex flex-col items-center w-full h-auto">
            <div className="bg-(--bg-secondary) w-full p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row items-start justify-between gap-4 h-32">
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
                <div className="flex flex-wrap gap-12 justify-center">
                    {stateData.map((stat) => (
                        <StateCard key={stat.id} {...stat} />
                    ))}
                </div>
            </div>






            <div className="flex flex-col lg:flex-row gap-4 w-full p-4">
                <div className="w-full lg:w-1/3 border border-(--border-color) rounded-2xl p-4 sm:p-6 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl sm:text-2xl font-bold text-(--text)">آخرین سفارشات</h2>
                        <button className="text-sm text-(--primary) hover:underline">مشاهده همه</button>
                    </div>
                    <div className="flex flex-col gap-3 overflow-y-auto max-h-125">
                        {recentOrders.length > 0 ? (
                            recentOrders.map((order) => (
                                <RecentOrderCard key={order.id} {...order} />
                            ))
                        ) : (
                            <p className="text-center text-(--text-secondary) py-8">
                                سفارشی یافت نشد
                            </p>
                        )}
                    </div>
                </div>

                <div className="w-full lg:w-2/3 border border-(--border-color) rounded-2xl p-4 sm:p-6 flex flex-col gap-4 min-h-80">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                            <h3 className="text-lg sm:text-xl font-bold text-(--text)">روند فروش هفتگی</h3>
                            <p className="text-sm text-(--text-secondary) mt-1">مقایسه درآمد، سفارش و بازگشت کالا</p>
                        </div>

                        {/* اختیاری: دکمه‌های فیلتر */}
                        <div className="flex gap-2">
                            <button className="px-3 py-1 text-xs rounded-lg bg-(--bg-primary) text-(--text)">هفتگی</button>
                            <button className="px-3 py-1 text-xs rounded-lg hover:bg-(--bg) text-(--text-secondary)">ماهانه</button>
                        </div>
                    </div>

                    <div className="flex-1 w-full min-h-75">
                        <WeeklySalesChart />
                    </div>
                </div>
            </div>
        </div>
    );
}