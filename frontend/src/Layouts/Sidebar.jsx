export default function Sidebar() {
    return (
        <aside className="w-64 min-h-screen bg-white flex flex-col shadow-black shadow-md">

            <div className="flex items-center gap-3 p-6">
                <div className="w-12 h-12 rounded-lg bg-gray-200 flex items-center justify-center">
                    Icon
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

                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-(--bg-secondary) text-(--text) font-bold hover:text-white transition">
                    <span>📊</span>
                    <span className=" ">داشبورد</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-(--bg-secondary) text-(--text) font-bold hover:text-white transition">
                    <span>📊</span>
                    <span className=" ">داشبورد</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-(--bg-secondary) text-(--text) font-bold hover:text-white transition">
                    <span>📊</span>
                    <span className=" ">داشبورد</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-(--bg-secondary) text-(--text) font-bold hover:text-white transition">
                    <span>📊</span>
                    <span className=" ">داشبورد</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-(--bg-secondary) text-(--text) font-bold hover:text-white transition">
                    <span>📊</span>
                    <span className=" ">داشبورد</span>
                </button>

            </nav>

        </aside>
    );
}