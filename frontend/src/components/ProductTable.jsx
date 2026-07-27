import {formatPrice} from "../utilities/HelperFunctions.jsx";
import {DeleteIcon, EditIcon} from "../assets/icons/IconComponents.jsx";
import {useState} from "react";
import Modal from "./ui/Modal.jsx";
import EditProductForm from "../features/products/EditProductForm.jsx";
import noProductImage from "../assets/Images/Products/noProductImage.jpg"

export default function ProductTable({data}) {
    const [modalState, setModalState] = useState({
        open: false,
        product: null,
    });

    const handleEdit = (product) => {
        setModalState({open: true, product});
    };

    const handleClose = () => {
        setModalState({open: false, product: null});
    };
    return (
        <>
            <table className="w-full">
                <thead>
                <tr className="bg-(--bg-secondary) border-b border-(--border-color)">
                    <th className="text-right p-3 sm:p-4 text-sm font-medium text-(--text-secondary)">#</th>
                    <th className="text-right p-3 sm:p-4 text-sm font-medium text-(--text-secondary)">نام محصول</th>
                    <th className="text-right p-3 sm:p-4 text-sm font-medium text-(--text-secondary) hidden sm:table-cell">دسته‌بندی</th>
                    <th className="text-right p-3 sm:p-4 text-sm font-medium text-(--text-secondary)">قیمت</th>
                    <th className="text-right p-3 sm:p-4 text-sm font-medium text-(--text-secondary) hidden md:table-cell">تخفیف</th>
                    <th className="text-right p-3 sm:p-4 text-sm font-medium text-(--text-secondary) hidden lg:table-cell">موجودی</th>
                    <th className="text-right p-3 sm:p-4 text-sm font-medium text-(--text-secondary)">عملیات</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-(--border-color)">
                {data.map((product) => {
                    const discountedPrice = product.price - product.price * ((product.off || 0) / 100);

                    return (
                        <tr key={product.id} className="hover:bg-(--bg-hover) transition-colors">
                            <td className="p-3 sm:p-4 text-sm text-(--text-secondary)">{product.id}</td>
                            <td className="p-3 sm:p-4">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={noProductImage}
                                        alt={product.name}
                                        className="size-8 sm:size-10 rounded-lg object-cover"
                                    />
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-(--text)">{product.name}</span>
                                        <span className="text-xs text-(--text-secondary) sm:hidden">
                                        {product.category}
                                    </span>
                                    </div>
                                </div>
                            </td>
                            <td className="p-3 sm:p-4 text-sm text-(--text) hidden sm:table-cell">
                                {product.category}
                            </td>
                            <td className="p-3 sm:p-4">
                                <div className="flex flex-col">
                              <span className="text-sm font-medium text-(--text)">
                                {formatPrice(discountedPrice)}
                              </span>
                                    {product.off > 0 && (
                                        <span className="text-xs text-gray-400 line-through">
                                      {formatPrice(product.price)}
                                  </span>
                                    )}
                                </div>
                            </td>
                            <td className="p-3 sm:p-4 text-sm text-(--text) hidden md:table-cell">
                                {product.off > 0 ? (
                                    <span className="text-red-500 font-medium">%{product.off}</span>
                                ) : (
                                    <span className="text-(--text-secondary)">-</span>
                                )}
                            </td>
                            <td className="p-3 sm:p-4 text-sm text-(--text) hidden lg:table-cell">
                                {product.stock}
                            </td>
                            <td className="p-3 sm:p-4">
                                <div className="flex items-center gap-1">
                                    <button
                                        onClick={() => handleEdit(product)}
                                        className="p-1.5 hover:bg-blue-50 rounded-lg transition"
                                    >
                                        <EditIcon size={20} color="blue" strokeWidth={2}/>
                                    </button>
                                    <button
                                        onClick={() => console.log('Delete:', product.id)}
                                        className="p-1.5 hover:bg-red-50 rounded-lg transition"
                                    >
                                        <DeleteIcon size={20} color="red" strokeWidth={2}/>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>

            <Modal
                title="ویرایش محصول"
                onOpen={modalState.open}
                onClose={handleClose}
            >
                {modalState.product && (
                    <EditProductForm
                        id={modalState.product.id}
                        title={modalState.product.name}
                        description={modalState.product.description}
                        price={modalState.product.price}
                        off={modalState.product.off}
                        category={modalState.product.category}
                        stock={modalState.product.stock}
                        image={modalState.product.image}
                        onClose={handleClose}
                    />
                )}
            </Modal>
        </>
    );
}