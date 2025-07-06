import { Banknote, Smartphone, Wallet, Mail } from "lucide-react";
import { motion } from "framer-motion";

const channels = [
  {
    icon: <Smartphone className="w-7 h-7 text-white" />,
    title: "Online Gateway",
    description: "Securely give via Credit/Debit card, M-PESA, or Airtel Money.",
    color: "bg-indigo-600",
  },
  {
    icon: <Banknote className="w-7 h-7 text-white" />,
    title: "Bank Transfer",
    description: "Send direct to our account—details provided below.",
    color: "bg-rose-600",
  },
  {
    icon: <Wallet className="w-7 h-7 text-white" />,
    title: "Mobile Wallets",
    description: "Tap-to-pay via popular East African apps and wallets.",
    color: "bg-emerald-600",
  },
  {
    icon: <Mail className="w-7 h-7 text-white" />,
    title: "Offline Giving",
    description: "Prefer checks or cash? We’ve got you covered.",
    color: "bg-yellow-500 text-black",
  },
];

export default function DonationChannels() {
  return (
    <section className="py-20 bg-white px-4" id="donation-channels">
      <div className="max-w-6xl mx-auto text-center space-y-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Multiple Ways to Give
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((channel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 ${channel.color}`}
              >
                {channel.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{channel.title}</h3>
              <p className="text-gray-600 text-sm">{channel.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
