import {AddProductIcon, SearchIcon} from "../assets/icons/IconComponents.jsx";
import ProductTable from "../components/ProductTable.jsx";
import {useEffect, useState} from "react";
import AddProductForm from "../features/products/AddProductForm.jsx";
import Modal from "../components/ui/Modal.jsx";
import api from "../api/api.jsx";
import {useQuery} from "@tanstack/react-query";
import {queryClient} from "../main.jsx";
import {useActionData} from "react-router-dom";


export default function Product() {
    const [openAddProductSection, setOpenAddProductSection] = useState(false);
    const actionData = useActionData()
    const {data: products, isLoading} = useQuery({
        queryKey: ["product"],
        queryFn: () => api.get("/products"),
    });
    useEffect(() => {
        if (actionData?.success) {
            setOpenAddProductSection(false)
        }
    }, [actionData]);

    return (
        <div className="flex flex-col items-center w-full h-auto">
            <div
                className="bg-(--bg-secondary) w-full p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row items-start justify-between gap-4 h-32">
                <div className="w-full md:w-auto">
                    <p className="text-(--bg) text-xs sm:text-sm">
                        عملیات فروشگاه / محصولات
                    </p>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold truncate">
                        مدیریت محصولات
                    </h1>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
                    <button
                        className="flex items-center justify-center gap-2 border border-(--border-color) rounded-xl bg-black hover:bg-gray-800 transition-colors duration-200
                                   size-10 sm:size-auto sm:px-5 sm:py-2.5"
                        aria-label="افزودن محصول"
                        onClick={() => {
                            setOpenAddProductSection(true)
                        }}
                    >
                        <AddProductIcon size={20} color="white" strokeWidth={2}/>
                        <span className="text-white text-sm hidden md:block">افزودن محصول</span>
                    </button>

                    <div
                        className="flex items-center gap-2 border border-(--border-color) rounded-xl w-full sm:w-48 md:w-56 h-10 px-3 focus-within:border-(--primary) transition-colors duration-200">
                        <SearchIcon size={20} color={"#53606F"} strokeWidth={1}/>
                        <input
                            type="text"
                            className="w-full h-full outline-none text-sm bg-transparent"
                            placeholder="جستجو در سفارش‌ها..."
                            aria-label="جستجوی سفارش‌ها"
                        />
                    </div>
                </div>
            </div>

            <Modal
                onOpen={openAddProductSection}
                onClose={() => setOpenAddProductSection(false)}
                title="افزودن محصول"
                description="اطلاعات محصول جدید را وارد کنید."
            >
                <AddProductForm/>
            </Modal>

            <div className="w-full p-4">
                <div className="w-32 h-8 border border-(--border-color)) rounded-2xl">
                    <select className="outline-none">
                        <option>دسته بندی ها</option>
                    </select>
                </div>
            </div>

            <div className="w-full flex flex-wrap p-4">
                {isLoading ? "در حال بارگذاری ..." : <ProductTable data={products.data}/>}
            </div>
        </div>
    )
}

export async function action({ request }) {
    const formData = await request.formData();

    if (formData.get("submit") === "edit"){
        await api.put(`/products/${formData.get("id")}`, {
            title: formData.get("title"),
            description: formData.get("description"),
            price: formData.get("price"),
            off: formData.get("off"),
            category: formData.get("category"),
        });
    }else if(formData.get("submit") === "add"){
        await api.post("/products", {
            title: formData.get("title"),
            description: formData.get("description"),
            price: formData.get("price"),
            off: formData.get("off"),
            category: formData.get("category"),
        });
    }

    await queryClient.invalidateQueries({
        queryKey: ["product"],
    })
    return { success: true };
}