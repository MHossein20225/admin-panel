import api from "./api.jsx";

export async function getOrders() {
    const {data} = await api.get("/orders");
    return data;
}

export async function getOrder(id) {
    const {data} = await api.get(`/orders/${id}`);
    return data;
}

export async function createOrder(order) {
    const {data} = await api.post("/orders", order);
    return data;
}

export async function editOrder(id, order) {
    const {data} = await api.put(`/orders/${id}`, order);
    return data;
}

export async function deleteOrder(id) {
    const {data} = await api.delete(`/orders/${id}`);
    return data;
}
