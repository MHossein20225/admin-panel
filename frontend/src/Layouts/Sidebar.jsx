import { useState, useEffect } from 'react';
import mainIcon from '../assets/icons/mainIcon.svg';
import { DashboardIcon, OrderIcon, ProductIcon, UserIcon } from "../assets/icons/IconComponents.jsx";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 969);
    const [activeItem, setActiveItem] = useState(1); // با state ساده بجای useLocation

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 969;
            setIsMobile(mobile);
            if (!mobile) {
                setIsOpen(false);
                document.body.style.overflow = '';
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            document.body.style.overflow = '';
        };
    }, []);

    useEffect(() => {
        if (isMobile && isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isOpen, isMobile]);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, []);

    const handleNavClick = (id) => {
        setActiveItem(id);
        if (isMobile) setIsOpen(false);
    };

    const menuItems = [
        { id: 1, icon: DashboardIcon, label: 'داشبورد' },
        { id: 2, icon: OrderIcon, label: 'سفارشات' },
        { id: 3, icon: ProductIcon, label: 'محصولات' },
        { id: 4, icon: UserIcon, label: 'مشتری ها' },
    ];

    return (
        <>
            {/* Hamburger Button */}
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

            {/* Overlay */}
            {isMobile && (
                <div
                    className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
                        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
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
                {/* Header */}
                <div className="flex items-center gap-3 p-6 border-b border-(--border-color)">
                    <div className="w-12 h-12 rounded-lg bg-(--bg) flex items-center justify-center shrink-0">
                        <img className="size-8" src={mainIcon} alt="لوگو" />
                    </div>
                    <div>
                        <h1 className="font-bold text-lg text-(--text)">پنل فروشگاه</h1>
                        <p className="text-sm text-gray-500">مدیریت عملیات روزانه</p>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4 space-y-1">
                    {menuItems.map(({ id, icon: Icon, label }) => (
                        <button
                            key={id}
                            onClick={() => handleNavClick(id)}
                            className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                ${activeItem === id
                                ? 'bg-(--bg) text-white'
                                : 'text-(--text) hover:bg-(--bg) hover:text-white'
                            }
              `}
                        >
                            <Icon size={18} color="currentColor" strokeWidth={2} />
                            <span className="font-medium">{label}</span>

                            {activeItem === id && (
                                <svg className="mr-auto size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            )}
                        </button>
                    ))}
                </nav>
            </aside>
        </>
    );
}