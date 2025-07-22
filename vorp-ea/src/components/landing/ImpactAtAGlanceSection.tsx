import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FileText } from "lucide-react";
import { useInView } from "react-intersection-observer";

type Stat = {
	label: string;
	number: number;
	suffix: string;
	description: string;
};

const stats: Stat[] = [
	{
		label: "Vocational Trainees",
		number: 10,
		suffix: "+",
		description: "within Nairobi",
	},
	{
		label: "Health Awareness",
		number: 250,
		suffix: "+",
		description: "provided to underserved communities",
	},
	{
		label: "Skill Empowerment",
		number: 50,
		suffix: "+",
		description: "individuals with new livelihoods",
	},
	{
		label: "GBV Aware Communities",
		number: 50,
		suffix: "+",
		description: "engaged in gender-based-violence talks",
	},
];

function StatCard({ stat, index }: { stat: Stat; index: number }) {
	const { ref, inView } = useInView({ triggerOnce: true });

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 20 }}
			animate={inView ? { opacity: 1, y: 0 } : {}}
			transition={{ delay: index * 0.1, duration: 0.6 }}
			className="text-center bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
		>
			<h3 className="text-4xl font-bold text-green-600 mb-2">
				{inView && (
					<CountUp
						start={0}
						end={stat.number}
						duration={2}
						separator=","
						suffix={stat.suffix}
					/>
				)}
			</h3>
			<p className="text-lg font-semibold text-gray-800">{stat.label}</p>
			<p className="text-sm text-gray-500 mt-1">{stat.description}</p>
		</motion.div>
	);
}

export default function ImpactAtAGlanceSection() {
	return (
		<section className="w-full bg-white py-24" id="impact">
			<div className="max-w-7xl mx-auto px-4">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
						Impact at a Glance
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Our work is measured in lives transformed, communities strengthened, and futures secured.
					</p>
				</motion.div>

				{/* Stats Grid */}
				<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
					{stats.map((stat, index) => (
						<StatCard key={index} stat={stat} index={index} />
					))}
				</div>

				{/* CTA: Impact Report */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 0.5, duration: 0.6 }}
					viewport={{ once: true }}
					className="mt-12 text-center"
				>
					<a
						href="/assets/reports/Annual_Impact_Report.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 bg-green-700 md:bg-green-500 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-full transition-colors duration-300"
					>
						<FileText className="w-5 h-5" />
						Download Annual Impact Report
					</a>
				</motion.div>
			</div>
		</section>
	);
}
