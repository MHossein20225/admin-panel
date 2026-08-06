export default function ErrorState({title, retry}) {
    return (
        <div className="w-full flex flex-col items-center justify-center h-96 gap-4">
            <h2 className="text-2xl font-bold text-red-500">
                {title}
            </h2>

            <button
                onClick={retry}
                className="px-5 py-2 rounded-xl bg-black text-white"
            >
                تلاش مجدد
            </button>
        </div>
    );
}