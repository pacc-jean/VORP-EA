import { useState } from 'react'
import ProgramsModal from './ProgramsModal'

const steps = [
	{
		title: 'Community Dialogue & Reconciliation',
		shortDescription: 'Healing divisions through participatory dialogues.',
		longDescription:
			'Healing divisions through participatory dialogues, resulting in 30 local peace accords since inception.',
		timeline: 'Since 2017 • Ongoing across Kenya, Uganda & Somalia',
	},
	{
		title: 'Health & Well-Being',
		shortDescription: 'Mobile clinics and health education for villages.',
		longDescription:
			'Mobile clinics, vaccination drives, and health education reaching 60 remote villages annually.',
		timeline: 'Annual outreach since 2018 • 60+ villages served',
	},
	{
		title: 'Livelihoods & Learning',
		shortDescription: 'Vocational training with high employment rates.',
		longDescription:
			'Vocational training (carpentry, tailoring, agribusiness) with 70% graduate employment rate.',
		timeline: 'Started in 2019 • 800+ youth trained',
	},
	{
		title: 'Environmental Resilience',
		shortDescription: 'Reforestation, solar pumps, and smart farming.',
		longDescription:
			'Reforestation campaigns, solar water pumps, and climate-smart farming benefitting 12,000 households.',
		timeline: 'Active since 2020 • 12 counties reached',
	},
	{
		title: 'Human Rights & Advocacy',
		shortDescription: 'Legal aid and policies for minority rights.',
		longDescription:
			'Legal aid clinics and policy briefs that influenced two government acts protecting minority rights.',
		timeline: 'Legal clinics held quarterly • 2 policies influenced',
	},
	{
		title: 'Youth & Empowerment',
		shortDescription: 'Equipping youth with leadership skills.',
		longDescription:
			'Programs aimed at equipping young people with skills and opportunities for leadership and self-sufficiency.',
		timeline: 'Launched in 2021 • 500+ youth engaged',
	},
	{
		title: 'Women’s Empowerment',
		shortDescription: 'Boosting women’s participation and equity.',
		longDescription:
			'Initiatives focused on enhancing the social, economic, and political empowerment of women and girls.',
		timeline: 'Ongoing since 2020 • 1,000+ women supported',
	},
	{
		title: 'Peacebuilding & Conflict Resolution',
		shortDescription: 'Training leaders to resolve community disputes.',
		longDescription:
			'Training community leaders in conflict resolution, resulting in a 40% reduction in local disputes.',
		timeline: 'Since 2018 • 200+ leaders trained',
	},
	{
		title: 'Community Resilience',
		shortDescription: 'Building sustainable and adaptive communities.',
		longDescription:
			'Empowering communities to adapt to climate change through sustainable practices and education.',
		timeline: 'Initiated in 2020 • 100+ communities engaged',
	},
	{
		title: 'Digital Literacy & Technology',
		shortDescription: 'Tech skills training for digital inclusion.',
		longDescription:
			'Providing digital skills training and access to technology, enhancing educational and economic opportunities.',
		timeline: 'Started in 2021 • 300+ individuals trained',
	},
]

export default function ProgramsStepper() {
	const [activeIndex, setActiveIndex] = useState<number | null>(null)

	const openModal = (index: number) => setActiveIndex(index)
	const closeModal = () => setActiveIndex(null)

	return (
		<div className="py-16 px-4 bg-white">
			<h2 className="text-3xl font-bold text-center mb-12">
				Targeted Initiatives Driving Transformation
			</h2>

			<div className="max-w-3xl mx-auto">
				<div className="flex flex-col bg-white p-6 rounded-2xl shadow-lg">
					{steps.slice(0, 6).map((step, index) => (
						<button
							key={index}
							onClick={() => openModal(index)}
							className="relative pl-8 pb-10 text-left group hover:bg-gray-50 rounded-md transition"
						>
							{/* Circle marker */}
							<div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-4 border-green-500 bg-white z-10" />
							{/* Vertical line */}
							{index !== 5 && (
								<div className="absolute left-1.5 top-6 h-full w-1 bg-green-200 z-0" />
							)}

							<div>
								<h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-700 transition">
									{step.title}
								</h3>
								<p className="mt-2 text-gray-600">
									{step.shortDescription}
								</p>
							</div>
						</button>
					))}
				</div>

				<div className="text-center mt-10">
					<button
						onClick={() => openModal(0)}
						className="inline-block px-6 py-3 bg-green-600 text-white rounded-full font-semibold shadow hover:bg-green-700 transition"
					>
						Explore Programs
					</button>
				</div>
			</div>

			{/* Modal */}
			{activeIndex !== null && (
				<ProgramsModal
					steps={steps}
					currentIndex={activeIndex}
					onClose={closeModal}
					onNavigate={(i) => setActiveIndex(i)}
				/>
			)}
		</div>
	)
}
