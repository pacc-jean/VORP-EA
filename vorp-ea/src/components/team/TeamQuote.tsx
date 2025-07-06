import { useEffect, useState } from "react";
import { Quote } from "lucide-react";

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
];

export default function TeamQuote() {
  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    setRandomIndex(Math.floor(Math.random() * quotes.length));
  }, []);

  const quote = quotes[randomIndex];

  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        <Quote className="mx-auto text-green-600 mb-4" size={32} />
        <p className="text-xl italic text-gray-700 mb-6">
          “{quote.text}”
        </p>
        <div className="font-semibold text-gray-800">
          — {quote.author}, <span className="text-green-600">{quote.role}</span>
        </div>
      </div>
    </section>
  );
}
