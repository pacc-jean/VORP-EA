'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Users, Briefcase, Info, Heart, X } from 'lucide-react';
import { trackEvent } from '../../lib/analytics';
import { Link } from 'react-router-dom';

const navItems = [
	{
		title: 'Join Us',
		icon: <Users size={20} />,
		items: ['Work With Us', 'Learn & Share', 'Partner With Us'],
	},
	{
		title: 'What We Do',
		icon: <Briefcase size={20} />,
		items: ['Programs', 'Our Work', 'Our Impact'],
	},
	{
		title: 'Who We Are',
		icon: <Info size={20} />,
		items: ['About Us', 'Our History', 'Our Team', 'Our Partners'],
	},
];

const pathMap: Record<string, string> = {
	Home: '/',
	'Work With Us': '/work',
	'Learn & Share': '/learn',
	'Partner With Us': '/partners',
	Programs: '/programs',
	'Our Work': '/our-work',
	'Our Impact': '/impact',
	'About Us': '/about',
	'Our History': '/history',
	'Our Team': '/team',
	'Our Partners': '/partners',
	Donate: '/donate',
};

export default function MobileBottomNav() {
	const [activeDrawer, setActiveDrawer] = useState<string | null>('Home');

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
							activeDrawer === 'Home' ? 'text-black' : 'text-gray-500'
						}`}
					>
						<Link to={pathMap['Home']} className="flex flex-col items-center">
							<Home size={20} />
							<span className="mt-1 text-[11px]">Home</span>
						</Link>
						{activeDrawer === 'Home' && (
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
								activeDrawer === title ? 'text-black' : 'text-gray-500'
							}`}
						>
							{icon}
							<span className="mt-1 text-[11px]">{title}</span>
							{activeDrawer === title && (
								<motion.div
									layoutId="underline-mobile"
									className="absolute top-full mt-1 w-6 h-1 bg-gray-700 rounded"
								/>
							)}
						</li>
					))}

					{/* DONATE */}
					<li className="flex flex-col items-center relative text-red-600">
						<Link
							to={pathMap['Donate']}
							onClick={() =>
								trackEvent({
									action: 'click_donate',
									category: 'CTA',
									label: 'Mobile Nav > Donate Button',
								})
							}
							className="flex flex-col items-center"
						>
							<Heart fill="currentColor" size={20} />
							<span className="mt-1 text-[11px]">Donate</span>
						</Link>
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
								?.items.map((item) => (
									<Link
										key={item}
										to={pathMap[item] || '#'}
										onClick={() => {
											setActiveDrawer(null);
											trackEvent({
												action: 'click_mobile_drawer',
												category: 'Navigation',
												label: `${activeDrawer} > ${item}`,
											});
										}}
										className="w-full bg-gray-100 text-gray-800 rounded-md py-2 font-semibold hover:bg-gray-200 transition text-center"
									>
										{item}
									</Link>
								))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
