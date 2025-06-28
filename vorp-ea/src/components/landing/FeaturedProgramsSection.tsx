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
		<section className="w-full bg-white py-24" id="programs">
			<div className="max-w-7xl mx-auto px-4">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
						Featured Programs
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Real programs, real impact—this is where purpose meets action.
					</p>
				</motion.div>

				{/* Program Grid */}
				<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
					{programs.map((program, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1, duration: 0.6 }}
							viewport={{ once: true }}
							className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 min-h-[260px]"
						>
							<div
								className={`w-14 h-14 flex items-center justify-center rounded-full ${program.color} mb-5`}
							>
								{program.icon}
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">
								{program.title}
							</h3>
							<p className="text-gray-700 text-lg">
                                <span className="font-extrabold">
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
						className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-300"
					>
						Explore All Programs
					</a>
				</motion.div>
			</div>
		</section>
	);
};
