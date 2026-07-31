import {useMutation, useQuery} from "@tanstack/react-query";
import {queryClient} from "../main.jsx";
import {createCustomer, deleteCustomer, editCustomer, getCustomer, getCustomers} from "../api/customerApi.jsx";

export function useCustomers() {
    return useQuery({
        queryKey: ["Customers"],
        queryFn: getCustomers,
    });
}

export function useCustomer(id) {
    return useQuery({
        queryKey: ["Customers", id],
        queryFn: () => getCustomer(id),
        enabled: !!id,
    });
}

export function useCreateCustomer() {
    return useMutation({
        mutationFn: createCustomer,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["Customers"],
            });
        },
    });
}

export function useEditCustomer() {
    return useMutation({
        mutationFn: ({id, product}) => editCustomer(id, product),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["Customers"],
            });
        },
    });
}

export function useDeleteCustomer() {
    return useMutation({
        mutationFn: (id) => deleteCustomer(id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["Customers"],
            });
        },
    });
}