import {AddProductIcon, SearchIcon} from "../assets/icons/IconComponents.jsx";
import noProductImage from "../assets/Images/Products/noProductImage.jpg";
import ProductCard from "../components/ProductCard.jsx";

export const PRODUCT_DATA = [
    {
        name: "خط چشم دیور",
        price: 120000,
        off: 20,
        image: noProductImage,
    },
    {
        name: "رژ لب مک",
        price: 850000,
        off: 15,
        image: noProductImage,
    },
    {
        name: "کرم پودر استی لادر",
        price: 2400000,
        off: 10,
        image: noProductImage,
    },
    {
        name: "عطر ورساچه",
        price: 5600000,
        off: 0,
        image: noProductImage,
    },
    {
        name: "شامپو کراتین",
        price: 450000,
        off: 30,
        image: noProductImage,
    },
    {
        name: "سرم ویتامین C",
        price: 980000,
        off: 25,
        image: noProductImage,
    },
    {
        name: "ماسک صورت",
        price: 320000,
        off: 0,
        image: noProductImage,
    },
    {
        name: "اسپری مو",
        price: 180000,
        off: 40,
        image: noProductImage,
    },
    {
        name: "ضد آفتاب لاروش",
        price: 1500000,
        off: 15,
        image: noProductImage,
    },
    {
        name: "پالت سایه چشم",
        price: 720000,
        off: 20,
        image: noProductImage,
    },
    {
        name: "ژل شستشو صورت",
        price: 290000,
        off: 5,
        image: noProductImage,
    },
    {
        name: "کرم مرطوب کننده",
        price: 410000,
        off: 35,
        image: noProductImage,
    },
];
export default function Product() {
    return (
        <div className="flex flex-col items-center w-full h-auto">
            <div className="bg-(--bg-secondary) w-full p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row items-start justify-between gap-4 h-32">
                <div className="w-full md:w-auto">
                    <p className="text-(--bg) text-xs sm:text-sm">
                        عملیات فروشگاه / محصولات
                    </p>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold truncate">
                        مدیریت محصولات
                    </h1>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
                    <button
                        className="flex items-center justify-center gap-2 border border-(--border-color) rounded-xl bg-black hover:bg-gray-800 transition-colors duration-200
                                   size-10 sm:size-auto sm:px-5 sm:py-2.5"
                        aria-label="افزودن محصول"
                    >
                        <AddProductIcon size={20} color="white" strokeWidth={2}/>
                        <span className="text-white text-sm hidden md:block">افزودن محصول</span>
                    </button>

                    <div className="flex items-center gap-2 border border-(--border-color) rounded-xl w-full sm:w-48 md:w-56 h-10 px-3 focus-within:border-(--primary) transition-colors duration-200">
                        <SearchIcon size={20} color={"#53606F"} strokeWidth={1}/>
                        <input
                            type="text"
                            className="w-full h-full outline-none text-sm bg-transparent"
                            placeholder="جستجو در سفارش‌ها..."
                            aria-label="جستجوی سفارش‌ها"
                        />
                    </div>
                </div>
            </div>

            <div className="w-full p-4">
                <div className="w-32 h-8 border border-(--border-color)) rounded-2xl">
                    <select className="outline-none">
                        <option>دسته بندی ها</option>
                    </select>
                </div>
            </div>

            <div className="w-full flex flex-wrap p-4">
                {PRODUCT_DATA.map((product) => (
                    <ProductCard image={product.image} name={product.name} off={product.off} price={product.price}/>
                ))}
            </div>
        </div>
    )
}