import dashboard from '../assets/icons/dashboard.svg';
import order from '../assets/icons/order.svg';
import product from '../assets/icons/product.svg';
import user from '../assets/icons/user.svg';
import mainIcon from '../assets/icons/mainIcon.svg';
export default function Sidebar() {
    return (
        <aside className="w-80 min-h-screen bg-white flex flex-col border-l border-(--border-color)">

            <div className="flex items-center gap-3 p-6">
                <div className="w-12 h-12 rounded-lg bg-(--bg) flex items-center justify-center">
                    <img className="size-8 " src={mainIcon} alt=""/>
                </div>

                <div>
                    <h1 className="font-bold text-lg">
                        پنل فروشگاه
                    </h1>

                    <p className="text-sm text-gray-500">
                        مدیریت عملیات روزانه
                    </p>
                </div>
            </div>

            <nav className="flex-1 p-4 space-y-2">

                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-(--bg) text-(--text) hover:text-white transition">
                    <span className="size-5"><img src={dashboard} alt=""/></span>
                    <span className="">داشبورد</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-(--bg) text-(--text) hover:text-white transition">
                    <span className="size-5"><img src={order} alt=""/></span>
                    <span className="">سفارشات</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-(--bg) text-(--text) hover:text-white transition">
                    <span className="size-5"><img src={product} alt=""/></span>
                    <span className="">محصولات</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-(--bg) text-(--text) hover:text-white transition">
                    <span className="size-5"><img src={user} alt=""/></span>
                    <span className="">مشتری ها</span>
                </button>


            </nav>

        </aside>
    );
}