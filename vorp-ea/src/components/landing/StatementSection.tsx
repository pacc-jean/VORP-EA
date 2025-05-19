import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const statements = [
	{
		title: "Mission",
		content:
			"To alleviate poverty, promote access to healthcare services and improve the socioeconomic welfare of the most vulnerable groups within the communities.",
	},
	{
		title: "Vision",
		content: "A society with access to equitable resources and opportunities.",
	},
	{
		title: "Goal",
		content:
			"VORP-EA empowers vulnerable communities by improving access to basic healthcare, economic opportunities and essential resources.",
	},
];

const cardVariants = {
	enter: (direction: number) => ({
		x: direction > 0 ? 100 : -100,
		opacity: 0,
		rotate: direction > 0 ? 8 : -8,
	}),
	center: {
		x: 0,
		opacity: 1,
		rotate: 0,
		transition: { duration: 0.6 },
	},
	exit: (direction: number) => ({
		x: direction < 0 ? 100 : -100,
		opacity: 0,
		rotate: direction < 0 ? 8 : -8,
		transition: { duration: 0.4 },
	}),
};

export default function StatementSection() {
	const [[index, direction], setIndex] = useState([0, 0]);

	const paginate = useCallback(
		(newDirection: number) => {
			const newIndex =
				(index + newDirection + statements.length) % statements.length;
			setIndex([newIndex, newDirection]);
		},
		[index]
	);

	// Auto-rotate every 5s
	useEffect(() => {
		const interval = setInterval(() => {
			paginate(1);
		}, 5000);
		return () => clearInterval(interval);
	}, [paginate]);

	return (
		<section
			className="relative py-28 bg-gray-50 text-gray-900 overflow-hidden"
			style={{
				backgroundImage: "url('/grain-texture.png')",
				backgroundSize: "repeat",
			}}
		>
			<div className="max-w-4xl mx-auto text-center px-6">
				<h2 className="text-4xl md:text-5xl font-bold mb-12 font-serif tracking-tight">
					Our Mission, Vision & Goal
				</h2>

				<div className="relative h-[30rem] flex items-center justify-center z-10">
					{/* Soft Glow Behind Card */}
					<div className="absolute z-0 w-96 h-96 bg-red-500/20 rounded-full blur-[120px] animate-pulse" />

					<AnimatePresence custom={direction}>
						<motion.div
							key={index}
							custom={direction}
							variants={cardVariants}
							initial="enter"
							animate="center"
							exit="exit"
							className="absolute bg-white shadow-2xl rounded-3xl p-10 w-full max-w-2xl text-center z-10"
						>
							<h3 className="text-3xl font-serif italic text-red-600 mb-6">
								{statements[index].title}
							</h3>
							<p className="text-lg leading-relaxed text-gray-800 font-sans">
								{statements[index].content}
							</p>
						</motion.div>
					</AnimatePresence>

					{/* Navigation Arrows */}
					<button
						onClick={() => paginate(-1)}
						className="absolute left-0 p-2 text-gray-500 hover:text-red-600 transition z-20"
					>
						<ChevronLeft size={36} />
					</button>
					<button
						onClick={() => paginate(1)}
						className="absolute right-0 p-2 text-gray-500 hover:text-red-600 transition z-20"
					>
						<ChevronRight size={36} />
					</button>
				</div>
			</div>
		</section>
	);
}
