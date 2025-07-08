import { Users, Stethoscope, GraduationCap, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const programs = [
	{
		icon: <Users className="w-8 h-8 text-white" />,
		title: "Community Dialogue & Reconciliation",
		number: 1200,
		suffix: "",
		text: "local mediators trained since 2017.",
		color: "bg-indigo-600",
	},
	{
		icon: <Stethoscope className="w-8 h-8 text-white" />,
		title: "Health & Well-Being",
		number: 25000,
		suffix: "+",
		text: "consultations via mobile clinics.",
		color: "bg-rose-600",
	},
	{
		icon: <GraduationCap className="w-8 h-8 text-white" />,
		title: "Livelihoods & Learning",
		number: 5000,
		suffix: "+",
		text: "graduates from vocational training.",
		color: "bg-emerald-600",
	},
	{
		icon: <Leaf className="w-8 h-8 text-white" />,
		title: "Environmental Resilience",
		number: 100000,
		suffix: "",
		text: "trees planted and solar pumps piloted.",
		color: "bg-yellow-500 text-black",
	},
];

export default function FeaturedProgramsSection() {
	return (
		<section className="w-full bg-green-700 py-24">
			<div className="max-w-7xl mx-auto px-4">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
						Featured Programs
					</h2>
					<p className="text-lg text-gray-300 max-w-2xl mx-auto">
						Real programs, real impact—this is where purpose meets action.
					</p>
				</motion.div>

				{/* Program Grid */}
				<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
					{programs.map((program, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1, duration: 0.6 }}
							viewport={{ once: true }}
							className="relative p-6 rounded-2xl shadow-xl min-h-[260px] backdrop-blur-md bg-white/10 border border-white/20 hover:border-white/30 transition-all duration-300 overflow-hidden group"
						>
							{/* Glossy base overlay */}
							<span className="pointer-events-none absolute inset-0 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-[4px] z-0" />

							{/* Card Content */}
							<div className="relative z-20">
								<div className={`w-14 h-14 flex items-center justify-center rounded-full ${program.color} mb-5 shadow-md`}>
									{program.icon}
								</div>
								<h3 className="text-2xl font-bold text-white mb-2 leading-snug tracking-tight">
									{program.title}
								</h3>
								<p className="text-white/80 text-lg">
									<span className="text-black text-xl font-extrabold">
										<CountUp
											start={0}
											end={program.number}
											duration={2}
											separator=","
											suffix={program.suffix}
											enableScrollSpy
											scrollSpyOnce
										/>{" "}
									</span>
									{program.text}
								</p>
							</div>
						</motion.div>
					))}
				</div>

				{/* CTA Button */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 0.4, duration: 0.6 }}
					viewport={{ once: true }}
					className="mt-12 text-center"
				>
					<a
						href="#all-programs"
						className="inline-flex items-center justify-center bg-green-500 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-300"
					>
						Explore All Programs
					</a>
				</motion.div>
			</div>
		</section>
	);
}
