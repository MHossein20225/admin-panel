import {Form} from "react-router-dom";
import {useNavigation} from "react-router-dom";

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
                    type="submit"
                    className="rounded-xl bg-(--bg) px-6 py-3 text-white hover:opacity-90 transition"
                >
                {navigation.state === "submitting" ? (
                    <div role="status" className="flex flex-col items-center mt-6">
                        <svg xmlns="http://www.w3.org/2000/svg"
                             className="size-8 animate-[spin_0.8s_linear_infinite] fill-(--bg) dark:fill-blue-500"
                             viewBox="0 0 24 24"
                             aria-hidden="true">
                            <path
                                d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"
                                data-original="#000000"/>
                        </svg>
                    </div>
                )
                : "افزودن محصول"

                }

                </button>
            </div>
        </Form>
    );
}