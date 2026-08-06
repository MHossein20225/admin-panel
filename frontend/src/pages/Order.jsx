import {SearchIcon} from "../assets/icons/IconComponents.jsx";
import Table from "../components/ui/Table.jsx";
import Pagination from "../components/ui/Pagination.jsx";
import {useDataFilter} from "../hooks/useDataFilter.jsx";
import {useDeleteOrder, useOrders} from "../hooks/useOrder.jsx";
import EditOrderForm from "../features/orders/EditOrderForm.jsx";
import OrderRow from "../features/orders/OrderRow.jsx";
import {ORDER_COLUMNS} from "../data/order.js";
import ErrorState from "../components/error/ErrorState.jsx";



export default function Order() {
    const {data: orders = [], isLoading, isError, error, refetch} = useOrders();
    const deleteOrder = useDeleteOrder();

    const {
        data,
        totalPages,
        currentPage,
        handleSearch,
        handleSort,
        handlePageChange,
        getSortArrow,
    } = useDataFilter(orders, {
        searchKey: "trackingNumber",
        itemsPerPage: 10,
    });
    if (isError) {
        return (
            <ErrorState
                title="خطا در دریافت سفارشات"
                retry={refetch}
            />
        );
    }

    return (
        <div className="flex flex-col items-center w-full h-auto">
            <div className="bg-(--bg-secondary) w-full p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row items-start justify-between gap-4 h-32">
                <div className="w-full md:w-auto">
                    <p className="text-(--bg) text-xs sm:text-sm">عملیات فروشگاه / سفارشات</p>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold truncate">مدیریت سفارشات</h1>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
                    <div className="flex items-center gap-2 border border-(--border-color) rounded-xl w-full sm:w-48 md:w-56 h-10 px-3 focus-within:border-(--primary) transition-colors duration-200">
                        <SearchIcon size={20} color="#53606F" strokeWidth={1} />
                        <input
                            onChange={e => handleSearch(e.target.value)}
                            type="text"
                            className="w-full h-full outline-none text-sm bg-transparent"
                            placeholder="جستجو در سفارشات..."
                            aria-label="جستجوی سفارشات"
                        />
                    </div>
                </div>
            </div>


            <div className="w-full p-4">
                <div className="flex gap-4 w-full h-8 items-center">
                    <button onClick={() => handleSort('id')}>
                        بر اساس شناسه{getSortArrow('id')}
                    </button>
                    <button onClick={() => handleSort('customerName')}>
                        بر اساس نام مشتری{getSortArrow('customerName')}
                    </button>
                    <button onClick={() => handleSort('trackingNumber')}>
                        بر اساس شماره پیگیری{getSortArrow('trackingNumber')}
                    </button>
                </div>
            </div>

            <div className="w-full flex flex-wrap p-4">
                {isLoading ? (
                    "در حال بارگذاری ..."
                ) : (
                    <Table
                        columns={ORDER_COLUMNS}
                        values={data}
                        editModal={(order) => (
                            <EditOrderForm
                                id={order.id}
                                customerName={order.customerName}
                                trackingNumber={order.trackingNumber}
                            />
                        )}
                        rowRender={(order, actions) => (
                            <OrderRow
                                order={order}
                                actions={actions}
                                deleteMutation={deleteOrder}
                            />
                        )}
                    />
                )}
            </div>

            <Pagination
                currentPage={currentPage}
                setCurrentPage={handlePageChange}
                totalPages={totalPages}
            />
        </div>
    );
}