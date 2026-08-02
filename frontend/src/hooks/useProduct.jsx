import {useMutation, useQuery} from "@tanstack/react-query";
import {createProduct, deleteProduct, editProduct, getProduct, getProducts,} from "../api/productApi.jsx";
import {queryClient} from "../main.jsx";

export function useProducts() {
    return useQuery({
        queryKey: ["products"],
        queryFn: getProducts,
    });
}

export function useProduct(id) {
    return useQuery({
        queryKey: ["products", id],
        queryFn: () => getProduct(id),
        enabled: !!id,
    });
}

export function useCreateProduct() {
    return useMutation({
        mutationFn: (product) => createProduct(product),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
        },
    });
}

export function useEditProduct() {
    return useMutation({
        mutationFn: ({id, product}) => editProduct(id, product),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
        },
    });
}

export function useDeleteProduct() {
    return useMutation({
        mutationFn: (id) => deleteProduct(id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
        },
    });
}