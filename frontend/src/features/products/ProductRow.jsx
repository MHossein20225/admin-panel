import {DeleteIcon, EditIcon} from "../../assets/icons/IconComponents.jsx";
import {formatPrice} from "../../utils/HelperFunctions.jsx";
import noProductImage from "../../assets/Images/Products/noProductImage.jpg";
import {useDeleteProduct} from "../../hooks/useProduct.jsx";

export default function ProductRow({product, actions}) {
    const discountedPrice = product.price - product.price * ((product.off || 0) / 100);
    const deleteProduct = useDeleteProduct();
    return (
        <tr
            key={product.id}
            className="hover:bg-(--bg-hover) transition-colors"
        >
            <td className="p-3 sm:p-4 text-sm text-(--text-secondary)">
                {product.id}
            </td>

            <td className="p-3 sm:p-4">
                <div className="flex items-center gap-3">
                    <img
                        src={noProductImage}
                        alt={product.title}
                        className="size-8 sm:size-10 rounded-lg object-cover"
                    />

                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-(--text)">
                            {product.title}
                        </span>

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
                    <span className="text-red-500 font-medium">
                        %{product.off}
                    </span>
                ) : (
                    <span className="text-(--text-secondary)">-</span>
                )}
            </td>

            <td className="p-3 sm:p-4 text-sm text-(--text) hidden lg:table-cell">
                {product.stock}
            </td>

            <td className="p-3 sm:p-4">
                <div className="flex items-center gap-1">
                    <button
                        onClick={actions.onEdit}
                        className="p-1.5 hover:bg-blue-50 rounded-lg transition"
                    >
                        <EditIcon
                            size={20}
                            color="blue"
                            strokeWidth={2}
                        />
                    </button>

                    <button
                        onClick={() => {
                            if (confirm("آیا از حذف این کالا مطمعن هستید"))
                                deleteProduct.mutate(product.id);
                        }}
                        disabled={deleteProduct.isPending}
                        className="p-1.5 hover:bg-red-50 rounded-lg transition"
                    >
                        <DeleteIcon
                            size={20}
                            color="red"
                            strokeWidth={2}
                        />
                    </button>
                </div>
            </td>
        </tr>
    )
}