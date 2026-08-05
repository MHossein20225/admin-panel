import Spinner from "../../components/ui/Loader.jsx";
import {useEditOrder} from "../../hooks/useOrder.jsx";

export default function EditOrderForm({id, customerName, trackingNumber}) {

    const editOrder = useEditOrder();

    function handelSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(formData.get("customerName"))
        editOrder.mutate({
            id, order: {
                customerName: formData.get("customerName"),
                trackingNumber: formData.get("trackingNumber"),
            }
        })
    }



    return (
        <form onSubmit={e => handelSubmit(e)} method="post" className="space-y-5">
            <input type="text"
                   name="id"
                   defaultValue={id}
                   className="w-full rounded-xl border border-(--border-color) px-4 py-3 outline-none focus:border-blue-500 transition"
            />
            <div>
                <label className="mb-2 block text-sm font-medium text-(--text)">
                    نام مشتری
                </label>
                <input
                    defaultValue={customerName}
                    name="customerName"
                    type="text"
                    required
                    className="w-full rounded-xl border border-(--border-color) px-4 py-3 outline-none focus:border-blue-500 transition"
                />
            </div>

            <div>
                <label className="mb-2 block text-sm font-medium text-(--text)">
                    شماره پیگیری
                </label>
                <input
                    defaultValue={trackingNumber}
                    name="trackingNumber"
                    type="number"
                    className="w-full resize-none rounded-xl border border-(--border-color) px-4 py-3 outline-none focus:border-blue-500 transition"
                />
            </div>



            <div className="flex justify-end gap-3 pt-5 border-t border-(--border-color)">
                <button
                    type="submit"
                    className="rounded-xl bg-black px-6 py-3 text-white hover:bg-gray-800 transition"
                >
                    {editOrder.isPending ? <Spinner/> : "ذخیره تغییرات"}
                </button>
            </div>
        </form>
    );
}