import Spinner from "../../components/ui/Loader.jsx";
import {useCreateCustomer} from "../../hooks/useCustomer.jsx";

export default function AddCustomerForm() {
    const addCustomer = useCreateCustomer();

    function handelSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        addCustomer.mutate({
            name: formData.get("name"),
            email: formData.get("email"),
            password: formData.get("password"),
            phone: formData.get("phone"),
        })
    }
    return (
        <form onSubmit={handelSubmit} method="post" className="space-y-5">
            <div>
                <label className="mb-2 block text-sm font-medium">
                    نام مشتری
                </label>

                <input
                    type="text"
                    name="name"
                    className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
                />
            </div>

            <div className="grid grid-cols-2 gap-4">

                <div>
                    <label className="mb-2 block text-sm font-medium">
                        ایمیل
                    </label>

                    <input
                        type="text"
                        name="email"
                        className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium">
                        رمز عبور
                    </label>

                    <input
                        type="password"
                        name="password"
                        className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
                    />
                </div>

            </div>

            <div>
                <label className="mb-2 block text-sm font-medium">
                    موبایل
                </label>

                <input
                    name="phone"
                    type="text"
                    className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
                />
            </div>

            <div className="flex justify-end gap-3 pt-5">

                <button
                    type="reset"
                    className="rounded-xl border px-6 py-3 hover:bg-gray-100"
                >
                    پاک کردن
                </button>
                <button
                    name="submit"
                    value="add"
                    type="submit"
                    className="rounded-xl bg-(--bg) px-6 py-3 text-white hover:opacity-90 transition"
                >
                    {addCustomer.isPending ? <Spinner/> : "افزودن کاربر"}

                </button>
            </div>
        </form>
    );
}