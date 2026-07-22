import { useState } from 'react';
import { AddProductIcon, SearchIcon } from "../assets/icons/IconComponents.jsx";
import { formatPrice } from "../utilities/HelperFunctions.jsx";
import Pagination from "../components/Pagination.jsx";
import CustomerTable from "../components/CustomerTable.jsx";


const CUSTOMERS_DATA = [
    {
        id: 1,
        name: "سارا محمدی",
        phone: "09123456789",
        email: "sara@example.com",
        orders: 12,
        totalSpent: 5200000,
        status: "active",
        date: "1402/12/15"
    },
    {
        id: 2,
        name: "علی رضایی",
        phone: "09365432198",
        email: "ali@example.com",
        orders: 8,
        totalSpent: 3100000,
        status: "active",
        date: "1402/11/20"
    },
    {
        id: 3,
        name: "مریم احمدی",
        phone: "09187654321",
        email: "maryam@example.com",
        orders: 15,
        totalSpent: 8900000,
        status: "vip",
        date: "1402/10/05"
    },
    {
        id: 4,
        name: "حسین کریمی",
        phone: "09012345678",
        email: "hossein@example.com",
        orders: 3,
        totalSpent: 1200000,
        status: "inactive",
        date: "1402/09/18"
    },
    {
        id: 5,
        name: "زهرا حسینی",
        phone: "09125678901",
        email: "zahra@example.com",
        orders: 21,
        totalSpent: 15600000,
        status: "vip",
        date: "1402/08/22"
    },
    {
        id: 6,
        name: "محمد تقوی",
        phone: "09301122334",
        email: "mohammad@example.com",
        orders: 6,
        totalSpent: 2800000,
        status: "active",
        date: "1402/07/10"
    },
];


export default function Customer() {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('all');

    return (
        <div className="flex flex-col w-full h-auto">
            <div className="bg-(--bg-secondary) w-full p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row items-start justify-between gap-4">
                <div className="w-full md:w-auto">
                    <p className="text-(--text-secondary) text-xs sm:text-sm">عملیات فروشگاه / مشتریان</p>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-(--text)">مدیریت مشتریان</h1>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
                    <button className="flex items-center justify-center gap-2 border border-(--border-color) rounded-xl bg-black hover:bg-gray-800 transition-colors duration-200 size-10 sm:size-auto sm:px-5 sm:py-2.5">
                        <AddProductIcon size={20} color="white" strokeWidth={2}/>
                        <span className="text-white text-sm hidden md:block">افزودن مشتری</span>
                    </button>

                    <div className="flex items-center gap-2 border border-(--border-color) rounded-xl w-full sm:w-48 md:w-56 h-10 px-3 focus-within:border-(--primary) transition-colors duration-200">
                        <SearchIcon size={20} color="#53606F" strokeWidth={1}/>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full h-full outline-none text-sm bg-transparent placeholder:text-gray-400"
                            placeholder="جستجو..."
                            aria-label="جستجوی مشتریان"
                        />
                    </div>
                </div>
            </div>

            <div className="w-full p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <div className="w-40 h-10 border border-(--border-color) rounded-xl overflow-hidden">
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full h-full px-3 outline-none text-sm bg-white cursor-pointer"
                    >
                        <option value="all">همه مشتریان</option>
                        <option value="active">فعال</option>
                        <option value="inactive">غیرفعال</option>
                        <option value="vip">VIP</option>
                    </select>
                </div>
            </div>

            <div className="w-full p-4">
                <div className="border border-(--border-color) rounded-2xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <CustomerTable data={CUSTOMERS_DATA}/>
                    </div>

                    {CUSTOMERS_DATA.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-(--text-secondary)">هیچ مشتری یافت نشد</p>
                        </div>
                    )}
                </div>
            </div>


            <Pagination data={CUSTOMERS_DATA}/>
        </div>
    );
}