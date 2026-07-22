import {formatPrice} from "../utilities/HelperFunctions.jsx";

export default function CustomerTable({data}){
    return (
        <table className="w-full">
            <thead>
            <tr className="bg-(--bg-secondary) border-b border-(--border-color)">
                <th className="text-right p-3 sm:p-4 text-sm font-medium text-(--text-secondary)">#</th>
                <th className="text-right p-3 sm:p-4 text-sm font-medium text-(--text-secondary)">نام مشتری</th>
                <th className="text-right p-3 sm:p-4 text-sm font-medium text-(--text-secondary) hidden sm:table-cell">شماره تماس</th>
                <th className="text-right p-3 sm:p-4 text-sm font-medium text-(--text-secondary) hidden md:table-cell">ایمیل</th>
                <th className="text-right p-3 sm:p-4 text-sm font-medium text-(--text-secondary)">سفارشات</th>
                <th className="text-right p-3 sm:p-4 text-sm font-medium text-(--text-secondary) hidden lg:table-cell">مجموع خرید</th>
                <th className="text-right p-3 sm:p-4 text-sm font-medium text-(--text-secondary)">وضعیت</th>
            </tr>
            </thead>
            <tbody className="divide-y divide-(--border-color)">
            {data.map((customer) => (
                    <tr key={customer.id} className="hover:bg-(--bg-hover) transition-colors">
                        <td className="p-3 sm:p-4 text-sm text-(--text-secondary)">{customer.id}</td>
                        <td className="p-3 sm:p-4">
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-(--text)">{customer.name}</span>
                                <span className="text-xs text-(--text-secondary) sm:hidden">{customer.phone}</span>
                            </div>
                        </td>
                        <td className="p-3 sm:p-4 text-sm text-(--text) hidden sm:table-cell">{customer.phone}</td>
                        <td className="p-3 sm:p-4 text-sm text-(--text) hidden md:table-cell">{customer.email}</td>
                        <td className="p-3 sm:p-4 text-sm text-(--text)">{customer.orders}</td>
                        <td className="p-3 sm:p-4 text-sm text-(--text) hidden lg:table-cell">
                            {formatPrice(customer.totalSpent)} تومان
                        </td>
                        <td className="p-3 sm:p-4">
                            <span className={`px-2.5 py-1 rounded-full text-xs font-medium`}>

                            </span>
                        </td>
                    </tr>
                )
            )}
            </tbody>
        </table>
    )
}