export default function ProgramsStepper() {
  const steps = [
    {
      title: 'Community Dialogue & Reconciliation',
      description:
        'Healing divisions through participatory dialogues, resulting in 30 local peace accords since inception.',
    },
    {
      title: 'Health & Well-Being',
      description:
        'Mobile clinics, vaccination drives, and health education reaching 60 remote villages annually.',
    },
    {
      title: 'Livelihoods & Learning',
      description:
        'Vocational training (carpentry, tailoring, agribusiness) with 70% graduate employment rate.',
    },
    {
      title: 'Environmental Resilience',
      description:
        'Reforestation campaigns, solar water pumps, and climate-smart farming benefitting 12,000 households.',
    },
    {
      title: 'Human Rights & Advocacy',
      description:
        'Legal aid clinics and policy briefs that influenced two government acts protecting minority rights.',
    },
  ]

  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col bg-white p-6 rounded-2xl shadow-lg">
          {steps.map((step, index) => (
            <div key={index} className="relative pl-8 pb-10">
              {/* Circle marker */}
              <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-4 border-green-500 bg-white z-10" />
              {/* Vertical line */}
              {index !== steps.length - 1 && (
                <div className="absolute left-1.5 top-6 h-full w-1 bg-green-200 z-0" />
              )}

              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
