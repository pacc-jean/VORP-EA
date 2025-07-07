import undpImg from "../../assets/impact/undp.jpg";
import oxfamImg from "../../assets/impact/oxfam.jpg";

const stories = [
  {
    title: "UNDP & VORP-EA",
    summary:
      "Together we co-designed drought resilience programs in Turkana, integrating community feedback, climate data, and indigenous knowledge systems.",
    image: undpImg,
  },
  {
    title: "Oxfam Partnership",
    summary:
      "We collaborated to host gender-responsive peace forums in Somalia, blending civic dialogue with arts-based healing practices.",
    image: oxfamImg,
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
                <a
                  href="#"
                  className="mt-4 inline-block text-blue-600 hover:underline"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
