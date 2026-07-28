import {Form} from "react-router-dom";
import {useNavigation} from "react-router-dom";
import Spinner from "../../components/ui/Loader.jsx";

export default function AddProductForm() {
    const navigation = useNavigation()
    return (
        <Form method="post" className="space-y-5">
            <div>
                <label className="mb-2 block text-sm font-medium">
                    نام محصول
                </label>

                <input
                    name="title"
                    type="text"
                    className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
                />
            </div>

            <div>
                <label className="mb-2 block text-sm font-medium">
                    توضیحات
                </label>

                <textarea
                    rows={4}
                    name="description"
                    className="w-full resize-none rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
                />
            </div>

            <div className="grid grid-cols-2 gap-4">

                <div>
                    <label className="mb-2 block text-sm font-medium">
                        قیمت
                    </label>

                    <input
                        type="number"
                        name="price"
                        className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium">
                        تخفیف (%)
                    </label>

                    <input
                        type="number"
                        min="0"
                        max="100"
                        name="off"
                        className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
                    />
                </div>

            </div>

            <div>
                <label className="mb-2 block text-sm font-medium">
                    دسته‌بندی
                </label>

                <select name="category"
                        className="w-full rounded-xl border border-(--border-color) px-4 py-3 outline-none focus:border-blue-500 transition">
                    <option value="عطر و ادکلن">عطر و ادکلن</option>
                    <option value="مراقبت پوست">مراقبت پوست</option>
                    <option value="مراقبت مو">مراقبت مو</option>
                    <option value="لوازم آرایشی">لوازم آرایشی</option>
                </select>
            </div>

            <div>
                <label className="mb-2 block text-sm font-medium">
                    تصویر
                </label>

                <input
                    type="file"
                    name="image"
                    className="w-full rounded-xl border p-3"
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
                {navigation.state === "submitting" ? <Spinner/> : "افزودن محصول"}

                </button>
            </div>
        </Form>
    );
}