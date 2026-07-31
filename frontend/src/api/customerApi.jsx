import api from "./api.jsx";

export async function getCustomers() {
    const { data } = await api.get("/Customers");
    return data;
}
export async function getCustomer(id) {
    const { data } = await api.get(`/Customers/${id}`);
    return data;
}
export async function createCustomer(product) {
    const { data } = await api.post("/Customers", product);
    return data;
}
export async function editCustomer(id, product) {
    const { data } = await api.put(`/Customers/${id}`, product);
    return data;
}
export async function deleteCustomer(id) {
    const { data } = await api.delete(`/Customers/${id}`);
    return data;
}
