import { useState, useEffect } from 'react';
import mainIcon from '../assets/icons/mainIcon.svg';
import { DashboardIcon, OrderIcon, ProductIcon, UserIcon } from "../assets/icons/IconComponents.jsx";
import {useNavigate} from "react-router";

const menuItems = [
    {icon: DashboardIcon, label: 'داشبورد', slug: 'dashboard'},
    {icon: OrderIcon, label: 'سفارشات', slug: 'orders'},
    {icon: ProductIcon, label: 'محصولات', slug: 'products'},
    {icon: UserIcon, label: 'مشتری ها', slug: 'customers'},
];
export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 969);
    const Navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 969;
            setIsMobile(mobile);
            if (!mobile) setIsOpen(false);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = (isMobile && isOpen) ? 'hidden' : '';

        if (isMobile && isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isOpen, isMobile]);


    function handleNavClick(slug) {
        Navigate(`/${slug}`);
    }

    return (
        <>
            {isMobile && (
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="fixed top-4 right-4 z-50 p-2.5 rounded-xl bg-white border border-(--border-color) shadow-lg hover:shadow-xl hover:bg-(--bg-hover) transition-all duration-200"
                    aria-expanded={isOpen}
                    aria-label="منوی ناوبری"
                >
                    <svg
                        className="size-5 text-(--text)"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            )}

            {isMobile && (
                <div
                    className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
                        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                    onClick={() => setIsOpen(false)}
                />
            )}

            <aside
                className={`
                    w-72 min-h-screen bg-white flex flex-col border-l border-(--border-color)
                    transition-all duration-300 ease-in-out
                    ${isMobile 
                        ? 'fixed top-0 right-0 z-40 shadow-2xl'
                        : 'relative'
                    }
                    ${isMobile && !isOpen ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'}
                `}
            >
                <div className="flex items-center gap-3 p-6 border-b border-(--border-color)">
                    <div className="w-12 h-12 rounded-lg bg-(--bg) flex items-center justify-center shrink-0">
                        <img className="size-8" src={mainIcon} alt="لوگو" />
                    </div>
                    <div>
                        <h1 className="font-bold text-lg text-(--text)">پنل فروشگاه</h1>
                        <p className="text-sm text-gray-500">مدیریت عملیات روزانه</p>
                    </div>
                </div>

                <nav className="flex-1 p-4 space-y-1">
                    {menuItems.map(({icon: Icon, label, slug}) => (
                        <button
                            onClick={() => handleNavClick(slug)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-(--bg)`}
                        >
                            <Icon size={18} color="currentColor" strokeWidth={2} />
                            <span className="font-medium">{label}</span>
                        </button>
                    ))}
                </nav>
            </aside>
        </>
    );
}