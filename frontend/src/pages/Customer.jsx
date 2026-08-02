import {useState} from 'react';
import {AddProductIcon, SearchIcon} from "../assets/icons/IconComponents.jsx";
import Table from "../components/ui/Table.jsx";
import {CUSTOMER_COLUMNS} from "../data/customers.js";
import EditProductForm from "../features/products/EditProductForm.jsx";
import ProductRow from "../features/products/ProductRow.jsx";
import CustomerRow from "../features/customers/CustomerRow.jsx";
import {deleteProduct} from "../api/productApi.jsx";
import {useCustomers, useDeleteCustomer} from "../hooks/useCustomer.jsx";
import Modal from "../components/ui/Modal.jsx";
import AddProductForm from "../features/products/AddProductForm.jsx";
import AddCustomerForm from "../features/customers/AddCustomerForm.jsx";
import EditCustomerForm from "../features/customers/EditCustomrForm.jsx";

export default function Customer() {
    const [searchTerm, setSearchTerm] = useState('');
    const [openAddCustomerModal, setOpenAddCustomerModal] = useState(false);
    const { data: customers = [], isLoading } = useCustomers()
    const deleteCustomer = useDeleteCustomer()

    const filteredCustomers = customers.filter(customer =>
        customer.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
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
                        onClick={() => setOpenAddCustomerModal(true)}
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

            <Modal
                onOpen={openAddCustomerModal}
                onClose={() => setOpenAddCustomerModal(false)}
                title="افزودن کاربر"
                description="اطلاعات کاربر جدید را وارد کنید."
            >
                <AddCustomerForm />
            </Modal>

            <div className="w-full flex flex-wrap p-4">
                {isLoading ? (
                    "در حال بارگذاری ..."
                ) : (
                    <Table
                        columns={CUSTOMER_COLUMNS}
                        values={filteredCustomers ?? customers}
                        editModal={(customer) => (
                            <EditCustomerForm
                                id={customer.id}
                                name={customer.name}
                                email={customer.email}
                                phone={customer.phone}
                                status={customer.status}
                            />
                        )}
                        rowRender={(customer, actions) => (
                            <CustomerRow
                                customer={customer}
                                actions={actions}
                                deleteMutation={deleteCustomer}
                            />
                        )}
                    />
                )}
            </div>
        </div>
    );
}