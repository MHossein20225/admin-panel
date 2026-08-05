import {useMutation, useQuery} from "@tanstack/react-query";
import {queryClient} from "../main.jsx";
import {createCustomer, deleteCustomer, editCustomer, getCustomer, getCustomers} from "../api/customerApi.jsx";
import {errorToast, successToast} from "../utils/toasts.jsx";

export function useCustomers() {
    return useQuery({
        queryKey: ["customers"],
        queryFn: getCustomers,
    });
}

export function useCustomer(id) {
    return useQuery({
        queryKey: ["customers", id],
        queryFn: () => getCustomer(id),
        enabled: !!id,
    });
}

export function useCreateCustomer() {
    return useMutation({
        mutationFn: customer => createCustomer(customer),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["customers"],
            });
            successToast("مشتری اضافه شد")
        },
        onError: () => {
            errorToast("مشتری اضافه نشد")
        }
    });
}

export function useEditCustomer() {
    return useMutation({
        mutationFn: ({id, product}) => editCustomer(id, product),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["customers"],
            });
            successToast("مشتری ویرایش شد")
        },
        onError: () => {
            errorToast("مشتری ویرایش نشد")
        }
    });
}

export function useDeleteCustomer() {
    return useMutation({
        mutationFn: (id) => deleteCustomer(id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["customers"],
            });
            successToast("مشتری حذف شد")
        },
        onError: () => {
            errorToast("مشتری حذف نشد")
        }
    });
}