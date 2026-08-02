import {DeleteIcon, EditIcon} from "../../assets/icons/IconComponents.jsx";
import {useDeleteCustomer} from "../../hooks/useCustomer.jsx";

export default function CustomerRow({customer, actions}) {
    const deleteCustomer = useDeleteCustomer();
    return (
        <tr
            key={customer.id}
            className="hover:bg-(--bg-hover) transition-colors"
        >
            <td className="p-3 sm:p-4 text-sm text-(--text-secondary)">
                {customer.id}
            </td>

            <td className="p-3 sm:p-4">
                <div className="flex items-center gap-3">
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-(--text)">
                            {customer.name}
                        </span>
                    </div>
                </div>
            </td>

            <td className="p-3 sm:p-4">
                <div className="flex flex-col">
                    <span className="text-sm font-medium text-(--text)">
                        {customer.email}
                    </span>
                </div>
            </td>

            <td className="p-3 sm:p-4 text-sm text-(--text) hidden md:table-cell">
                {customer.phone}
            </td>

            <td className="p-3 sm:p-4 text-sm text-(--text) hidden lg:table-cell">
                {customer.status}
            </td>
            <td className="p-3 sm:p-4 text-sm text-(--text) hidden lg:table-cell">
                {customer.logged_at}
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
                                deleteCustomer.mutate(customer.id);
                        }}
                        disabled={deleteCustomer.isPending}
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