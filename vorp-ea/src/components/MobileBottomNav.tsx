'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Users, Briefcase, Info, Heart, X } from 'lucide-react';
import { trackEvent } from '../lib/analytics';

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

export default function MobileBottomNav() {
	const [activeDrawer, setActiveDrawer] = useState<string | null>('Home');

	const handleDrawerToggle = (title: string) => {
		setActiveDrawer((prev) => (prev === title ? null : title));
	};

	return (
		<>
			{/* Bottom Nav */}
			<nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
				<ul className="flex justify-around items-center py-2 text-xs text-gray-700">
					{/* HOME */}
					<li
						onClick={() => setActiveDrawer('Home')}
						className={`flex flex-col items-center cursor-pointer relative select-none ${
							activeDrawer === 'Home' ? 'text-black' : 'text-gray-500'
						}`}
						aria-current={activeDrawer === 'Home' ? 'page' : undefined}
					>
						<Home size={20} />
						<span className="mt-1 text-[11px]">Home</span>
						{activeDrawer === 'Home' && (
							<motion.div
								layoutId="underline-mobile"
								className="absolute top-full mt-1 w-6 h-1 bg-gray-700 rounded"
								transition={{ type: 'spring', stiffness: 500, damping: 30 }}
							/>
						)}
					</li>

					{/* OTHER DRAWER TABS */}
					{navItems.map(({ title, icon }) => (
						<li
							key={title}
							onClick={() => handleDrawerToggle(title)}
							className={`flex flex-col items-center cursor-pointer relative select-none ${
								activeDrawer === title ? 'text-black' : 'text-gray-500'
							}`}
							aria-current={activeDrawer === title ? 'page' : undefined}
						>
							{icon}
							<span className="mt-1 text-[11px]">{title}</span>
							{activeDrawer === title && (
								<motion.div
									layoutId="underline-mobile"
									className="absolute top-full mt-1 w-6 h-1 bg-gray-700 rounded"
									transition={{ type: 'spring', stiffness: 500, damping: 30 }}
								/>
							)}
						</li>
					))}

					{/* DONATE */}
					<li
						onClick={() =>
							trackEvent({
								action: 'click_donate',
								category: 'CTA',
								label: 'Mobile Nav > Donate Button',
							})
						}
						className="flex flex-col items-center cursor-pointer relative select-none text-red-600"
						aria-label="Donate"
					>
						<Heart fill="currentColor" size={20} />
						<span className="mt-1 text-[11px]">Donate</span>
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
						role="dialog"
						aria-modal="true"
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
									<button
										key={item}
										onClick={() => {
											setActiveDrawer(null);
											trackEvent({
												action: 'click_mobile_drawer',
												category: 'Navigation',
												label: `${activeDrawer} > ${item}`,
											});
										}}
										className="w-full bg-gray-100 text-gray-800 rounded-md py-2 font-semibold hover:bg-gray-200 transition flex items-center justify-center gap-2 text-sm"
										aria-label={item}
									>
										{item}
									</button>
								))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
