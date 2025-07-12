'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Users, Briefcase, Info, Heart, X } from 'lucide-react';
import { trackEvent } from '../../lib/analytics';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
    {
        title: 'Join Us',
        icon: <Users size={20} />,
        items: [
            { name: 'Work With Us', path: '/work-with-us' },
            { name: 'Learn & Share', path: '/learn-share' },
            { name: 'Partner With Us', path: '/partner-with-us' },
        ],
    },
    {
        title: 'What We Do',
        icon: <Briefcase size={20} />,
        items: [
            { name: 'Programs', path: '/programs' },
            { name: 'Our Work', path: '/our-work' },
            { name: 'Our Impact', path: '/our-impact' },
        ],
    },
    {
        title: 'Who We Are',
        icon: <Info size={20} />,
        items: [
            { name: 'About Us', path: '/about' },
            { name: 'Our History', path: '/history' },
            { name: 'Our Team', path: '/team' },
        ],
    },
];

export default function MobileBottomNav() {
    const location = useLocation();
    const currentPath = location.pathname;
    const drawerRef = useRef<HTMLDivElement>(null);

    const [activeDrawer, setActiveDrawer] = useState<string | null>(null);

    // Detect click outside drawer
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
                setActiveDrawer(null);
            }
        };

        if (activeDrawer) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [activeDrawer]);

    // Determine active tab (top nav item)
    const activeTab = useMemo(() => {
        if (currentPath === '/') return 'Home';
        if (currentPath === '/donate') return 'Donate';

        for (const nav of navItems) {
            for (const item of nav.items) {
                if (item.path === currentPath) {
                    return nav.title;
                }
            }
        }

        return null;
    }, [currentPath]);

    const handleDrawerToggle = (title: string) => {
        setActiveDrawer((prev) => (prev === title ? null : title));
    };

    return (
        <>
            {/* Bottom Nav */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t rounded-t-xl border-gray-200 z-50">
                <ul className="flex justify-around items-center py-2 text-xs text-gray-700">
                    {/* HOME */}
                    <li
                        className={`flex flex-col items-center relative ${
                            activeTab === 'Home' ? 'text-black' : 'text-gray-500'
                        }`}
                    >
                        <Link to="/" className="flex flex-col items-center">
                            <Home size={20} />
                            <span className="mt-1 text-[11px]">Home</span>
                        </Link>
                        {activeTab === 'Home' && (
                            <motion.div
                                layoutId="underline-mobile"
                                className="absolute top-full mt-1 w-6 h-1 bg-gray-700 rounded"
                            />
                        )}
                    </li>

                    {/* NAV SECTIONS */}
                    {navItems.map(({ title, icon }) => (
                        <li
                            key={title}
                            onClick={() => handleDrawerToggle(title)}
                            className={`flex flex-col items-center cursor-pointer relative select-none ${
                                activeTab === title ? 'text-black' : 'text-gray-500'
                            }`}
                        >
                            {icon}
                            <span className="mt-1 text-[11px]">{title}</span>
                            {activeTab === title && (
                                <motion.div
                                    layoutId="underline-mobile"
                                    className="absolute top-full mt-1 w-6 h-1 bg-gray-700 rounded"
                                />
                            )}
                        </li>
                    ))}

                    {/* DONATE */}
                    <li
                        className={`flex flex-col items-center relative ${
                            activeTab === 'Donate' ? 'text-red-800' : 'text-red-600'
                        }`}
                    >
                        <Link
                            to="/donate"
                            onClick={() =>
                                trackEvent({
                                    action: 'click_donate',
                                    category: 'CTA',
                                    label: 'Mobile Nav > Donate Button',
                                })
                            }
                            className="flex flex-col items-center"
                        >
                            <motion.div
                                animate={{ scale: [1, 1.25, 1] }}
                                transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
                            >
                                <Heart fill="currentColor" size={20} />
                            </motion.div>
                            <span className="mt-1 text-[11px]">Donate</span>
                        </Link>
                        {activeTab === 'Donate' && (
                            <motion.div
                                layoutId="underline-mobile"
                                className="absolute top-full mt-1 w-6 h-1 bg-red-600 rounded"
                            />
                        )}
                    </li>
                </ul>
            </nav>

            {/* DRAWERS */}
            <AnimatePresence>
                {activeDrawer && activeDrawer !== 'Home' && (
                    <motion.div
                        key={activeDrawer}
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="fixed bottom-0 left-0 right-0 bg-white shadow-lg rounded-t-xl p-6 z-[60] md:hidden"
                        ref={drawerRef}
                    >
                        <button
                            onClick={() => setActiveDrawer(null)}
                            className="absolute top-4 right-4 text-gray-600"
                            aria-label="Close Drawer"
                        >
                            <X size={24} />
                        </button>
                        <h2 className="text-lg font-bold mb-4 text-gray-900">
                            {activeDrawer}
                        </h2>
                        <div className="flex flex-col space-y-4">
                            {navItems
                                .find((nav) => nav.title === activeDrawer)
                                ?.items.map(({ name, path }) => {
                                    const isActive = location.pathname === path;

                                    return (
                                        <Link
                                            key={name}
                                            to={path}
                                            onClick={() => {
                                                // Delay drawer close slightly to allow visual update
                                                setTimeout(() => setActiveDrawer(null), 100);
                                                trackEvent({
                                                    action: 'click_mobile_drawer',
                                                    category: 'Navigation',
                                                    label: `${activeDrawer} > ${name}`,
                                                });
                                            }}
                                            className={`w-full py-2 rounded-md text-center font-semibold transition
                                                ${
                                                    isActive
                                                        ? 'text-green-700 bg-green-100'
                                                        : 'text-gray-800 bg-gray-100'
                                                }`}
                                        >
                                            {name}
                                        </Link>
                                    );
                                })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
