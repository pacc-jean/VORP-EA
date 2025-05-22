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
		<section
			className="relative bg-cover bg-center bg-no-repeat text-white min-h-[80vh] overflow-hidden"
			style={{
				backgroundImage: "url('/trailinghero.jpg')",
			}}
		>
			<div className="bg-black/40 w-full h-full">
				<div className="max-w-7xl mx-auto px-6 py-32 flex flex-col md:flex-row items-center md:items-start h-full">
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
							className="bg-gradient-to-r from-red-500 via-pink-600 to-red-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:animate-pulse inline-block w-max"
						>
							Donate
						</a>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
