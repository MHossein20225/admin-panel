export default function Pagination({totalPages, setCurrentPage, currentPage}){
    return (
        <div className="flex justify-center items-center gap-2 mt-6">

            <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
                className="px-4 py-2 rounded border disabled:opacity-40"
            >
                قبلی
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`px-4 py-2 rounded border ${
                        currentPage === index + 1
                            ? "bg-black text-white"
                            : ""
                    }`}
                >
                    {index + 1}
                </button>
            ))}

            <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
                className="px-4 py-2 rounded border disabled:opacity-40"
            >
                بعدی
            </button>

        </div>
    )
}