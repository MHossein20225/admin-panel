import Spinner from "../../components/ui/Loader.jsx";
import {useEditProduct} from "../../hooks/useProduct.jsx";

export default function EditProductForm({id, title, description, price, off, category}) {

    const editProduct = useEditProduct();

    function handelSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        editProduct.mutate({
            id, product: {
                title: formData.get("title"),
                description: formData.get("description"),
                price: formData.get("price"),
                off: formData.get("off"),
                category: formData.get("category"),
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
                    نام محصول
                </label>
                <input
                    defaultValue={title}
                    name="title"
                    type="text"
                    required
                    className="w-full rounded-xl border border-(--border-color) px-4 py-3 outline-none focus:border-blue-500 transition"
                />
            </div>

            <div>
                <label className="mb-2 block text-sm font-medium text-(--text)">
                    توضیحات
                </label>
                <textarea
                    defaultValue={description}
                    rows={4}
                    name="description"
                    className="w-full resize-none rounded-xl border border-(--border-color) px-4 py-3 outline-none focus:border-blue-500 transition"
                />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="mb-2 block text-sm font-medium text-(--text)">
                        قیمت (تومان)
                    </label>
                    <input
                        defaultValue={price}
                        type="number"
                        name="price"
                        required
                        min="0"
                        className="w-full rounded-xl border border-(--border-color) px-4 py-3 outline-none focus:border-blue-500 transition"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-(--text)">
                        تخفیف (%)
                    </label>
                    <input
                        defaultValue={off}
                        type="number"
                        min="0"
                        max="100"
                        name="off"
                        className="w-full rounded-xl border border-(--border-color) px-4 py-3 outline-none focus:border-blue-500 transition"
                    />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="mb-2 block text-sm font-medium text-(--text)">
                        دسته‌بندی
                    </label>
                    <select defaultValue={category} name="category"
                            className="w-full rounded-xl border border-(--border-color) px-4 py-3 outline-none focus:border-blue-500 transition">
                        <option value="عطر و ادکلن">عطر و ادکلن</option>
                        <option value="مراقبت پوست">مراقبت پوست</option>
                        <option value="مراقبت مو">مراقبت مو</option>
                        <option value="لوازم آرایشی">لوازم آرایشی</option>
                    </select>
                </div>
            </div>

            {/*<div>*/}
            {/*    <label className="mb-2 block text-sm font-medium text-(--text)">*/}
            {/*        تصویر جدید (اختیاری)*/}
            {/*    </label>*/}
            {/*    <input*/}
            {/*        type="file"*/}
            {/*        name="image"*/}
            {/*        accept="image/*"*/}
            {/*        className="w-full rounded-xl border border-(--border-color) p-3 file:border-0 "*/}
            {/*    />*/}
            {/*</div>*/}

            <div className="flex justify-end gap-3 pt-5 border-t border-(--border-color)">
                <button
                    type="submit"
                    className="rounded-xl bg-black px-6 py-3 text-white hover:bg-gray-800 transition"
                >
                    {editProduct.isPending ? <Spinner/> : "ذخیره تغییرات"}
                </button>
            </div>
        </form>
    );
}