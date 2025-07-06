import { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
	{
		text: "Working with VORP-EA has taught me that even small efforts can ripple into massive change.",
		author: "Grace Kinyua",
		role: "Project Manager",
	},
	{
		text: "When we empower one voice, we amplify an entire community.",
		author: "Kelvis Wanjia",
		role: "Communications Specialist",
	},
	{
		text: "Hope thrives where purpose leads. At VORP-EA, we walk that path together.",
		author: "Rozzie Nicole",
		role: "Human Resources Manager",
	},
	{
		text: "Education isn’t a privilege—it’s a right. I’m proud to fight for it.",
		author: "Rugaruza Honneur",
		role: "Treasurer",
	},
	{
		text: "Technology isn't just hardware — it's the bridge to a more connected, inclusive future.",
		author: "Jean Luc",
		role: "IT Specialist",
	},
	{
		text: "Leadership means listening deeply and acting boldly. VORP-EA is where vision becomes reality.",
		author: "Catherine Mwangi",
		role: "Director",
	},
];

export default function TeamQuote() {
	const [index, setIndex] = useState(0);
	const [fadeKey, setFadeKey] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => {
				let next = Math.floor(Math.random() * quotes.length);
				while (next === prev) {
					next = Math.floor(Math.random() * quotes.length);
				}
				setFadeKey(next);
				return next;
			});
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	const quote = quotes[index];

	return (
		<section className="py-16 px-6 bg-gray-100">
			<div className="max-w-3xl mx-auto text-center">
				<Quote className="mx-auto text-green-600 mb-4" size={32} />
				<AnimatePresence mode="wait">
					<motion.div
						key={fadeKey}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 1.0 }}
					>
						<p className="text-xl italic text-gray-700 mb-6">“{quote.text}”</p>
						<div className="font-semibold text-gray-800">
							— {quote.author},{" "}
							<span className="text-green-600">{quote.role}</span>
						</div>
					</motion.div>
				</AnimatePresence>
			</div>
		</section>
	);
}
