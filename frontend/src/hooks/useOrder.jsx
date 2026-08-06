import {useMutation, useQuery} from "@tanstack/react-query";
import {queryClient} from "../main.jsx";
import {errorToast, successToast} from "../utils/toasts.jsx";
import {createOrder, deleteOrder, editOrder, getOrder, getOrders} from "../api/orderApi.jsx";

export function useOrders() {
    return useQuery({
        queryKey: ["orders"],
        queryFn: getOrders,
        retry: false
    });
}

export function useOrder(id) {
    return useQuery({
        queryKey: ["orders", id],
        queryFn: () => getOrder(id),
        enabled: !!id,
    });
}

export function useCreateOrder() {
    return useMutation({
        mutationFn: order => createOrder(order),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["orders"],
            });
            successToast("سفارش اضافه شد")
        },
        onError: () => {
            errorToast("سفارش اضافه نشد")
        }
    });
}

export function useEditOrder() {
    return useMutation({
        mutationFn: ({id, order}) => editOrder(id, order),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["orders"],
            });
            successToast("سفارش ویرایش شد")
        },
        onError: () => {
            errorToast("سفارش ویرایش نشد")
        }
    });
}

export function useDeleteOrder() {
    return useMutation({
        mutationFn: (id) => deleteOrder(id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["orders"],
            });
            successToast("سفارش حذف شد")
        },
        onError: () => {
            errorToast("سفارش حذف نشد")
        }
    });
}