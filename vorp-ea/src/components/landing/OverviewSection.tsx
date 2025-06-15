import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Lightbulb, HeartHandshake, Globe, Megaphone } from "lucide-react";

// Data
const focusAreas = [
	{
		title: "Peacebuilding",
		description:
			"We bring communities together through dialogue, reconciliation, and sustainable conflict resolution.",
		icon: <HeartHandshake size={28} />,
		color: "from-red-500 to-pink-500",
	},
	{
		title: "Empowerment",
		description:
			"We equip youth and women with the tools and platforms to lead change from within their communities.",
		icon: <Lightbulb size={28} />,
		color: "from-yellow-500 to-amber-500",
	},
	{
		title: "Advocacy",
		description:
			"We raise voices that matter, pushing for policy change, awareness, and regional collaboration.",
		icon: <Megaphone size={28} />,
		color: "from-blue-500 to-indigo-500",
	},
	{
		title: "Unity in Diversity",
		description:
			"We celebrate and bridge differences to cultivate a culture of inclusion, understanding, and mutual respect.",
		icon: <Globe size={28} />,
		color: "from-green-500 to-emerald-500",
	},
];

// 🔥 Fancy Animated Card
type FocusCardProps = {
	title: string;
	description: string;
	icon: React.ReactNode;
	color: string;
	delay?: number;
};

function FocusCard({ title, description, icon, color, delay = 0 }: FocusCardProps) {
	const blobControls = useAnimation();

	useEffect(() => {
		blobControls.start({
			clipPath: [
				"circle(35% at 70% 30%)",
				"ellipse(45% 30% at 65% 25%)",
				"circle(35% at 70% 30%)",
			],
			transition: {
				duration: 7,
				repeat: Infinity,
				repeatType: "mirror",
				ease: "easeInOut",
			},
		});
	}, [blobControls]);

	return (
		<motion.div
			className="relative group p-6 rounded-3xl bg-white shadow-md transition-all border-l-8 border-transparent hover:border-red-500 overflow-hidden hover:shadow-2xl"
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay }}
			viewport={{ once: true }}
		>
			{/* Animated Heart Blob */}
			<motion.div
				className={`absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br ${color} opacity-30 z-0 filter blur-md`}
				animate={blobControls}
				whileHover={{
					clipPath:
						"polygon(50% 0%, 61% 13%, 75% 13%, 88% 25%, 88% 38%, 75% 50%, 50% 75%, 25% 50%, 12% 38%, 12% 25%, 25% 13%, 39% 13%)",
					scale: 1.1,
					transition: { duration: 0.6, ease: "easeInOut" },
				}}
			/>

			{/* Glow effect */}
			<div className="absolute inset-0 rounded-3xl bg-pink-200 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300 z-0 pointer-events-none" />

			{/* Actual Content */}
			<div className="relative z-10">
				<div
					className={`inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gradient-to-r ${color} text-white shadow-md`}
				>
					{icon}
				</div>
				<h3 className="text-xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
					{title}
				</h3>
				<p className="mt-2 text-gray-600 leading-relaxed">{description}</p>
			</div>
		</motion.div>
	);
}

// 🧠 Main Section Component
export default function OverviewSection() {
	return (
		<section
			className="bg-gray-50 py-20 relative overflow-hidden"
			style={{
				backgroundImage: "url('/grain-texture.png')",
				backgroundSize: "repeat",
			}}
		>
			{/* Shared blob "plate" */}
			<div className="absolute top-1/2 left-1/2 w-[90%] h-[110%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-rose-200 via-red-100 to-pink-100 rounded-[40px] blur-3xl opacity-40 pointer-events-none z-0" />

			<div className="max-w-7xl mx-auto px-6 relative z-10">
				<motion.div
					className="text-center mb-16"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={{
						hidden: {},
						visible: {
							transition: {
								staggerChildren: 0.15,
							},
						},
					}}
				>
					<motion.h2
						className="text-4xl md:text-5xl font-serif font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-500 to-pink-500"
						variants={{
							hidden: { opacity: 0, y: 20 },
							visible: { opacity: 1, y: 0 },
						}}
					>
						Our Focus
					</motion.h2>

					<motion.h3
						className="mt-2 text-xl italic font-serif font-medium text-gray-500"
						variants={{
							hidden: { opacity: 0, y: 20 },
							visible: { opacity: 1, y: 0 },
						}}
					>
						What We Stand For
					</motion.h3>

					<motion.div
						className="w-20 h-1 mx-auto mt-4 bg-red-500 rounded-full"
						variants={{
							hidden: { opacity: 0, scaleX: 0 },
							visible: { opacity: 1, scaleX: 1 },
						}}
						transition={{ duration: 0.4 }}
						style={{ transformOrigin: "left" }}
					/>

					<motion.p
						className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
						variants={{
							hidden: { opacity: 0, y: 10 },
							visible: { opacity: 1, y: 0 },
						}}
						transition={{ duration: 0.4 }}
					>
						We are more than just a movement — we are a collective voice for
						healing, hope, and harmony.
					</motion.p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
					{focusAreas.map((item, index) => (
						<FocusCard key={item.title} {...item} delay={index * 0.15} />
					))}
				</div>
			</div>
		</section>
	);
}
