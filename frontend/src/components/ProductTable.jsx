import { formatPrice } from "../utilities/HelperFunctions.jsx";


export default function ProductTable({ data }) {
    return (
        <table className="w-full">
            <thead>
            <tr className="bg-(--bg-secondary) border-b border-(--border-color)">
                <th className="text-right p-3 sm:p-4 text-sm font-medium text-(--text-secondary)">#</th>
                <th className="text-right p-3 sm:p-4 text-sm font-medium text-(--text-secondary)">نام محصول</th>
                <th className="text-right p-3 sm:p-4 text-sm font-medium text-(--text-secondary) hidden sm:table-cell">دسته‌بندی</th>
                <th className="text-right p-3 sm:p-4 text-sm font-medium text-(--text-secondary)">قیمت</th>
                <th className="text-right p-3 sm:p-4 text-sm font-medium text-(--text-secondary) hidden md:table-cell">تخفیف</th>
                <th className="text-right p-3 sm:p-4 text-sm font-medium text-(--text-secondary) hidden lg:table-cell">موجودی</th>
                <th className="text-right p-3 sm:p-4 text-sm font-medium text-(--text-secondary)">وضعیت</th>
            </tr>
            </thead>
            <tbody className="divide-y divide-(--border-color)">
            {data.map((product) => {
                const discountedPrice = product.price - product.price * ((product.off || 0) / 100);

                return (
                    <tr key={product.id} className="hover:bg-(--bg-hover) transition-colors">
                        <td className="p-3 sm:p-4 text-sm text-(--text-secondary)">{product.id}</td>
                        <td className="p-3 sm:p-4">
                            <div className="flex items-center gap-3">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="size-8 sm:size-10 rounded-lg object-cover"
                                />
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium text-(--text)">{product.name}</span>
                                    <span className="text-xs text-(--text-secondary) sm:hidden">
                                        {product.category}
                                    </span>
                                </div>
                            </div>
                        </td>
                        <td className="p-3 sm:p-4 text-sm text-(--text) hidden sm:table-cell">
                            {product.category}
                        </td>
                        <td className="p-3 sm:p-4">
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-(--text)">
                                    {formatPrice(discountedPrice)}
                                </span>
                                {product.off > 0 && (
                                    <span className="text-xs text-gray-400 line-through">
                                        {formatPrice(product.price)}
                                    </span>
                                )}
                            </div>
                        </td>
                        <td className="p-3 sm:p-4 text-sm text-(--text) hidden md:table-cell">
                            {product.off > 0 ? (
                                <span className="text-red-500 font-medium">%{product.off}</span>
                            ) : (
                                <span className="text-(--text-secondary)">-</span>
                            )}
                        </td>
                        <td className="p-3 sm:p-4 text-sm text-(--text) hidden lg:table-cell">
                            {product.stock}
                        </td>
                        <td className="p-3 sm:p-4">
                            <span className={`px-2.5 py-1 rounded-full text-xs font-medium`}>

                            </span>
                        </td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}