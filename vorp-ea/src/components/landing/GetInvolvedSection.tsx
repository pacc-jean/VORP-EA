import { Briefcase, Handshake, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const actions = [
	{
		icon: <Briefcase className="w-8 h-8 text-white" />,
		title: "Work with Us",
		description: "Careers & volunteer roles",
		href: "/work-with-us",
		color: "bg-indigo-600",
	},
	{
		icon: <Handshake className="w-8 h-8 text-white" />,
		title: "Partner with Us",
		description: "Institutional collaboration",
		href: "/partner-with-us",
		color: "bg-rose-600",
	},
	{
		icon: <BookOpen className="w-8 h-8 text-white" />,
		title: "Learn & Share",
		description: "Resources & training",
		href: "/learn-share",
		color: "bg-emerald-600",
	},
];

export default function GetInvolvedSection() {
	return (
		<section className="w-full bg-slate-900 py-24" id="get-involved">
			<div className="max-w-7xl mx-auto px-4">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
						Get Involved
					</h2>
					<p className="text-lg text-gray-300 max-w-2xl mx-auto">
						Join our movement to build inclusive, empowered communities across East
						Africa.
					</p>
				</motion.div>

				{/* Action Grid */}
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{actions.map((action, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1, duration: 0.6 }}
							viewport={{ once: true }}
						>
							<Link
								to={action.href}
								className="block bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:shadow-lg transition-all duration-300"
							>
								<div
									className={`w-14 h-14 flex items-center justify-center rounded-full ${action.color} mb-4`}
								>
									{action.icon}
								</div>
								<h3 className="text-xl font-bold text-white mb-1">
									{action.title}
								</h3>
								<p className="text-gray-300">{action.description}</p>
							</Link>
						</motion.div>
					))}
				</div>

				{/* CTA Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <HashLink
            to="/work-with-us#opportunities"
            className="inline-flex items-center justify-center bg-green-700 md:bg-green-500 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-300"
          >
            View Opportunities
          </HashLink>
        </motion.div>
			</div>
		</section>
	);
}
