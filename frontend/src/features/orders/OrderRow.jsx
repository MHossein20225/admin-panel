import {DeleteIcon, EditIcon} from "../../assets/icons/IconComponents.jsx";
import {useDeleteCustomer} from "../../hooks/useCustomer.jsx";
import {useDeleteOrder} from "../../hooks/useOrder.jsx";

export default function OrderRow({order, actions}) {
    const deleteOrder = useDeleteOrder();
    return (
        <tr
            key={order.id}
            className="hover:bg-(--bg-hover) transition-colors"
        >
            <td className="p-3 sm:p-4 text-sm text-(--text-secondary)">
                {order.id}
            </td>

            <td className="p-3 sm:p-4">
                <div className="flex items-center gap-3">
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-(--text)">
                            {order.customerName}
                        </span>
                    </div>
                </div>
            </td>

            <td className="p-3 sm:p-4">
                <div className="flex flex-col">
                    <span className="text-sm font-medium text-(--text)">
                        {order.trackingNumber}
                    </span>
                </div>
            </td>

            <td className="p-3 sm:p-4 text-sm text-(--text) hidden md:table-cell">
                {order.createdAt}
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
                            if (confirm("آیا از حذف این کاربر مطمعن هستید؟"))
                                deleteOrder.mutate(customer.id);
                        }}
                        disabled={deleteOrder.isPending}
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