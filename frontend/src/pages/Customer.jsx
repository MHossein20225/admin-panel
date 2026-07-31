import {useState} from 'react';
import {AddProductIcon, SearchIcon} from "../assets/icons/IconComponents.jsx";
import Table from "../components/ui/Table.jsx";
import {CUSTOMER_COLUMNS} from "../data/customers.js";
import EditProductForm from "../features/products/EditProductForm.jsx";
import ProductRow from "../components/ProductRow.jsx";
import CustomerRow from "../components/CustomerRow.jsx";
import {deleteProduct} from "../api/productApi.jsx";
import {useCustomers, useDeleteCustomer} from "../hooks/useCustomer.jsx";

export default function Customer() {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('all');
    const { data: customers, isLoading } = useCustomers()
    const deleteCustomer = useDeleteCustomer()

    return (
        <div className="flex flex-col w-full h-auto">
            <div
                className="bg-(--bg-secondary) w-full p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row items-start justify-between gap-4">
                <div className="w-full md:w-auto">
                    <p className="text-(--bg) text-xs sm:text-sm">
                        عملیات فروشگاه / مشتریان
                    </p>

                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold truncate">
                        مدیریت مشتریان
                    </h1>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
                    <button
                        className="flex items-center justify-center gap-2 border border-(--border-color) rounded-xl bg-black hover:bg-gray-800 transition-colors duration-200 size-10 sm:size-auto sm:px-5 sm:py-2.5">
                        <AddProductIcon size={20} color="white" strokeWidth={2}/>
                        <span className="text-white text-sm hidden md:block">افزودن مشتری</span>
                    </button>

                    <div
                        className="flex items-center gap-2 border border-(--border-color) rounded-xl w-full sm:w-48 md:w-56 h-10 px-3 focus-within:border-(--primary) transition-colors duration-200">
                        <SearchIcon size={20} color="#53606F" strokeWidth={1}/>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full h-full outline-none text-sm bg-transparent placeholder:text-gray-400"
                            placeholder="جستجو..."
                            aria-label="جستجوی مشتریان"
                        />
                    </div>
                </div>
            </div>

            <div className="w-full p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <div className="w-40 h-10 border border-(--border-color) rounded-xl overflow-hidden">
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full h-full px-3 outline-none text-sm bg-white cursor-pointer"
                    >
                        <option value="all">همه مشتریان</option>
                        <option value="active">فعال</option>
                        <option value="inactive">غیرفعال</option>
                        <option value="vip">VIP</option>
                    </select>
                </div>
            </div>

            <div className="w-full p-4">
                <div className="border border-(--border-color) rounded-2xl overflow-hidden">
                    <div className="overflow-x-auto">
                        {isLoading ? (
                            "در حال بارگذاری ..."
                        ) : (
                            <Table
                                columns={CUSTOMER_COLUMNS}
                                values={customers}
                                editModal={(customer) => (
                                    <EditProductForm
                                        id={customer.id}
                                        title={customer.title}
                                        description={customer.description}
                                        price={customer.price}
                                        off={customer.off}
                                        category={customer.category}
                                        stock={customer.stock}
                                    />
                                )}
                                rowRender={(customer, actions) => (
                                    <CustomerRow
                                        product={customer}
                                        actions={actions}
                                        deleteMutation={deleteCustomer}
                                    />
                                )}
                            />
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}