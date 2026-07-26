export default function Modal({title, description, onOpen, onClose, children}) {

    if (!onOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
            onClick={onClose}
        >
            <div
                className="w-full max-w-xl rounded-3xl bg-white shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >

                <div className="flex items-start justify-between border-b p-6">

                    <div>
                        <h2 className="text-2xl font-bold">
                            {title}
                        </h2>

                        {description && (
                            <p className="mt-1 text-sm text-gray-500">
                                {description}
                            </p>
                        )}
                    </div>

                    <button
                        onClick={onClose}
                        className="flex h-10 w-10 items-center justify-center rounded-xl hover:bg-gray-100 transition"
                    >
                        ✕
                    </button>

                </div>

                <div className="max-h-[75vh] overflow-y-auto p-6">
                    {children}
                </div>

            </div>
        </div>
    );
}