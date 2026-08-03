import {AddProductIcon, SearchIcon} from "../assets/icons/IconComponents.jsx";
import {useState} from "react";
import AddProductForm from "../features/products/AddProductForm.jsx";
import Modal from "../components/ui/Modal.jsx";
import Table from "../components/ui/Table.jsx";
import EditProductForm from "../features/products/EditProductForm.jsx";
import {useDeleteProduct, useProducts} from "../hooks/useProduct.jsx";
import ProductRow from "../features/products/ProductRow.jsx";
import {PRODUCT_COLUMNS} from "../data/products.js";
import Pagination from "../components/ui/Pagination.jsx";

export default function Product() {
    const [openAddProductSection, setOpenAddProductSection] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const {data: products = [], isLoading} = useProducts()
    const deleteProduct = useDeleteProduct()

    const itemsPerPage = 10;

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);


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
                        className="flex items-center justify-center gap-2 border border-(--border-color) rounded-xl bg-black hover:bg-gray-800 transition-colors duration-200 size-10 sm:size-auto sm:px-5 sm:py-2.5"
                        aria-label="افزودن محصول"
                        onClick={() => setOpenAddProductSection(true)}
                    >
                        <AddProductIcon
                            size={20}
                            color="white"
                            strokeWidth={2}
                        />

                        <span className="text-white text-sm hidden md:block">
                            افزودن محصول
                        </span>
                    </button>

                    <div
                        className="flex items-center gap-2 border border-(--border-color) rounded-xl w-full sm:w-48 md:w-56 h-10 px-3 focus-within:border-(--primary) transition-colors duration-200">
                        <SearchIcon
                            size={20}
                            color="#53606F"
                            strokeWidth={1}
                        />

                        <input
                            onChange={e => {
                                setSearchTerm(e.target.value)
                            }}
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
                <div className="w-32 h-8 border border-(--border-color) rounded-2xl">
                    <select className="outline-none">
                        <option>دسته بندی ها</option>
                    </select>
                </div>
            </div>


            <div className="w-full flex flex-wrap p-4">
                {isLoading ? (
                    "در حال بارگذاری ..."
                ) : (
                    <Table
                        columns={PRODUCT_COLUMNS}
                        values={paginatedProducts}
                        editModal={(product) => (
                            <EditProductForm
                                id={product.id}
                                title={product.title}
                                description={product.description}
                                price={product.price}
                                off={product.off}
                                category={product.category}
                            />
                        )}
                        rowRender={(product, actions) => (
                            <ProductRow
                                product={product}
                                actions={actions}
                                deleteMutation={deleteProduct}
                            />
                        )}
                    />
                )}
            </div>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
        </div>
    );
}
