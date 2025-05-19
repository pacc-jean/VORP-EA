import { motion } from "framer-motion";
import { Lightbulb, HeartHandshake, Globe, Megaphone } from "lucide-react";

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

export default function OverviewSection() {
	return (
		<section className="bg-gray-50 py-20">
			<div className="max-w-7xl mx-auto px-6">
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
					{/* Top Line - Bold Gradient */}
					<motion.h2
						className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-500 to-pink-500"
						variants={{
							hidden: { opacity: 0, y: 20 },
							visible: { opacity: 1, y: 0 },
						}}
					>
						Our Focus
					</motion.h2>

					{/* Bottom Line - Italic, Muted, Classy */}
					<motion.h3
						className="mt-2 text-xl italic font-medium text-gray-500"
						variants={{
							hidden: { opacity: 0, y: 20 },
							visible: { opacity: 1, y: 0 },
						}}
					>
						What We Stand For
					</motion.h3>

					{/* Decorative line */}
					<motion.div
						className="w-20 h-1 mx-auto mt-4 bg-red-500 rounded-full"
						variants={{
							hidden: { opacity: 0, scaleX: 0 },
							visible: { opacity: 1, scaleX: 1 },
						}}
						transition={{ duration: 0.4 }}
						style={{ transformOrigin: "left" }}
					/>

					{/* Supporting subtitle */}
					<motion.p
						className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
						variants={{
							hidden: { opacity: 0, y: 10 },
							visible: { opacity: 1, y: 0 },
						}}
						transition={{ duration: 0.4 }}
					>
						We are more than just a movement — we are a collective voice for healing,
						hope, and harmony.
					</motion.p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
					{focusAreas.map(({ title, description, icon, color }, index) => (
						<motion.div
							key={title}
							className={`group relative p-6 rounded-3xl bg-white shadow-md hover:shadow-xl transition-shadow border-l-8 border-transparent hover:border-red-500`}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.2 }}
							viewport={{ once: true }}
						>
							<div
								className={`inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gradient-to-r ${color} text-white shadow-md`}
							>
								{icon}
							</div>
							<h3 className="text-xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
								{title}
							</h3>
							<p className="mt-2 text-gray-600 leading-relaxed">
								{description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
