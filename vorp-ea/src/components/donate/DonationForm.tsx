import { motion } from "framer-motion";
import { useState } from "react";

export default function DonationForm() {
  const [coverFees, setCoverFees] = useState(false);
  const [anonymous, setAnonymous] = useState(false);

  return (
    <section className="py-24 bg-white px-4" id="donate-form">
      <div className="max-w-3xl mx-auto space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900"
        >
          Make a Pledge
        </motion.h2>

        <form className="bg-gray-50 p-8 rounded-2xl shadow-lg space-y-6">
          {/* Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Donation Amount (KES/USD)
            </label>
            <input
              type="number"
              placeholder="e.g. 3000"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>

          {/* Designation */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Designate to
            </label>
            <select
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-red-500 focus:border-red-500"
              defaultValue=""
            >
              <option value="" disabled>Select a fund</option>
              <option value="general">General Support</option>
              <option value="health">Health Fund</option>
              <option value="education">Education Fund</option>
              <option value="environment">Environment Fund</option>
              <option value="tribute">Tribute / Memorial</option>
            </select>
          </div>

          {/* Donor Info */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full px-4 py-3 rounded-md border border-gray-300"
                disabled={anonymous}
                required={!anonymous}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-md border border-gray-300"
                disabled={anonymous}
                required={!anonymous}
              />
            </div>
          </div>

          {/* Toggles */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <label className="flex items-center space-x-2 text-sm">
              <input
                type="checkbox"
                className="h-4 w-4 text-red-600"
                checked={coverFees}
                onChange={() => setCoverFees(!coverFees)}
              />
              <span>I'd like to cover transaction fees</span>
            </label>

            <label className="flex items-center space-x-2 text-sm">
              <input
                type="checkbox"
                className="h-4 w-4 text-red-600"
                checked={anonymous}
                onChange={() => setAnonymous(!anonymous)}
              />
              <span>Donate anonymously</span>
            </label>
          </div>

          {/* Payment Method */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Payment Method
            </label>
            <select
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-red-500 focus:border-red-500"
              defaultValue=""
              required
            >
              <option value="" disabled>Select a method</option>
              <option value="mpesa">M-PESA</option>
              <option value="airtel">Airtel Money</option>
              <option value="card">Credit / Debit Card</option>
              <option value="bank">Bank Transfer</option>
            </select>
          </div>

          {/* Submit */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full transition duration-300"
            >
              Donate Now
            </button>
          </div>
        </form>

        <p className="text-sm text-gray-500 text-center">
          Tax receipt will be sent instantly to your email.
        </p>
      </div>
    </section>
  );
}
