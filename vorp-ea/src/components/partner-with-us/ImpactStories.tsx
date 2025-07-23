import rukaImg from "../../assets/impact/ruka-partnership.jpg";
import kcbImg from "../../assets/impact/kasarani-boxing-club-partnership.jpg";

const stories = [
  {
    title: "RUKA",
    summary:
      "Together we work towards mentoring youth in underprivileged communities focusing on the importance of education and social awareness.",
    image: rukaImg,
  },
  {
    title: "Kasarani Boxing Club",
    summary:
      "We collaborated to support young lives in Kasarani with ambition and the fire to fight for better lives.One glove, one punch at a time.",
    image: kcbImg,
  },
];

export default function ImpactStories() {
  return (
    <section className="bg-slate-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
          Impact Stories
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl text-center mx-auto mb-12">
          These collaborations highlight the transformative power of cross-sector
          partnerships.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {stories.map((story, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row"
            >
              <img
                src={story.image}
                alt={story.title}
                className="w-full md:w-1/2 h-48 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {story.title}
                </h3>
                <p className="text-gray-700 text-sm flex-1">
                  {story.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
