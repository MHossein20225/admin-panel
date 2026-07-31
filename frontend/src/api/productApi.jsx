import api from "./api.jsx";

export async function getProducts() {
    const { data } = await api.get("/products");
    return data;
}
export async function getProduct(id) {
    const { data } = await api.get(`/products/${id}`);
    return data;
}
export async function createProduct(product) {
    const { data } = await api.post("/products", product);
    return data;
}
export async function editProduct(id, product) {
    const { data } = await api.put(`/products/${id}`, product);
    return data;
}
export async function deleteProduct(id) {
    const { data } = await api.delete(`/products/${id}`);
    return data;
}
