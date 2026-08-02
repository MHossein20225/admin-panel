import Spinner from "../../components/ui/Loader.jsx";
import {useEditCustomer} from "../../hooks/useCustomer.jsx";

export default function EditCustomerForm({id, name, email, phone, status}) {

    const editCustomer = useEditCustomer();

    function handelSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        editCustomer.mutate({
            id, product: {
                name: formData.get("name"),
                email: formData.get("email"),
                phone: formData.get("phone"),
                status: formData.get("status")
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
                    defaultValue={name}
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-xl border border-(--border-color) px-4 py-3 outline-none focus:border-blue-500 transition"
                />
            </div>

            <div>
                <label className="mb-2 block text-sm font-medium text-(--text)">
                    ایمیل
                </label>
                <input
                    defaultValue={email}
                    name="email"
                    className="w-full resize-none rounded-xl border border-(--border-color) px-4 py-3 outline-none focus:border-blue-500 transition"
                />
            </div>

            <div>
                <label className="mb-2 block text-sm font-medium text-(--text)">
                    موبایل
                </label>
                <input
                    defaultValue={phone}
                    name="phone"
                    className="w-full resize-none rounded-xl border border-(--border-color) px-4 py-3 outline-none focus:border-blue-500 transition"
                />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="mb-2 block text-sm font-medium text-(--text)">
                        وضعیت
                    </label>
                    <input
                        defaultValue={status}
                        type="number"
                        name="status"
                        className="w-full rounded-xl border border-(--border-color) px-4 py-3 outline-none focus:border-blue-500 transition"
                    />
                </div>
            </div>


            <div className="flex justify-end gap-3 pt-5 border-t border-(--border-color)">
                <button
                    type="submit"
                    className="rounded-xl bg-black px-6 py-3 text-white hover:bg-gray-800 transition"
                >
                    {editCustomer.isPending ? <Spinner/> : "ذخیره تغییرات"}
                </button>
            </div>
        </form>
    );
}