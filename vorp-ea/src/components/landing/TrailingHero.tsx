import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { trackEvent } from "../../lib/analytics";

export default function TrailingHero() {
	const ref = useRef(null);
	const controls = useAnimation();
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (isInView) {
			controls.start("visible");
		}
	}, [isInView, controls]);

	return (
		<section className="relative bg-gray-900 text-white w-screen max-w-full h-screen overflow-hidden">
			
			{/* Top wave divider */}
			<div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180 z-10">
				<svg
					className="relative block w-full h-[100px]"
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
					viewBox="0 0 1200 120"
				>
					<path
						d="M0,0 C300,100 900,0 1200,100 L1200,120 L0,120 Z"
						className="fill-white"
					/>
				</svg>
			</div>

			{/* Background Image */}
			<div className="absolute inset-0 z-0">
				<img
					src="/trailinghero-bg.jpg"
					alt="Community at work"
					className="w-full h-full object-cover opacity-100"
				/>
				<div className="absolute inset-0 bg-black opacity-50" />
			</div>

			{/* Hero Content */}
			<div className="relative z-10 max-w-7xl mx-auto px-2 h-full pt-64 flex items-start">
				<motion.div
					ref={ref}
					initial="hidden"
					animate={controls}
					variants={{
						hidden: { opacity: 0, y: 20 },
						visible: { opacity: 1, y: 0, transition: { duration: 1 } },
					}}
					className="md:w-1/2 text-center md:text-left space-y-6"
				>
					<h2 className="text-4xl font-serif font-semibold leading-tight drop-shadow-md">
						Together, we rise.
					</h2>
					<p className="text-lg drop-shadow-sm">
						Your support fuels peace, hope, and healing in East Africa. Help us build a resilient tomorrow.
					</p>
					<a
						href="#"
						onClick={() =>
							trackEvent({
								action: "click_donate",
								category: "CTA",
								label: "Trailing Hero > Donate Button",
							})
						}
						className="bg-gradient-to-r from-red-500 via-pink-600 to-red-700 text-white font-semibold px-6 py-3 rounded-md shadow-lg transition duration-300 transform hover:scale-105 hover:animate-pulse inline-block w-max"
					>
						Donate
					</a>
				</motion.div>
			</div>
		</section>
	);
};
