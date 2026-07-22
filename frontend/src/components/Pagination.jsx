export default function Pagination({data}){
    return (
        <div className="w-full p-4 flex items-center justify-between">
            <p className="text-sm text-(--text-secondary)">
                نمایش 1 از {data.length} مشتری
            </p>
            <div className="flex gap-2">
                <button className="px-3 py-1.5 border border-(--border-color) rounded-lg text-sm hover:bg-(--bg) transition">
                    قبلی
                </button>
                <button className="px-3 py-1.5 bg-black text-white rounded-lg text-sm hover:bg-gray-800 transition">
                    ۱
                </button>
                <button className="px-3 py-1.5 border border-(--border-color) rounded-lg text-sm hover:bg-(--bg) transition">
                    بعدی
                </button>
            </div>
        </div>
    )
}