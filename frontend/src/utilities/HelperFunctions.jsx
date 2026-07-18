export function FormatPrice(price) {
        return Number(price).toLocaleString('fa-IR').replace(/٬/g, ',');
}