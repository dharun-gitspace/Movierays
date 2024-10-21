import React from "react";// Assuming Navbar is under user folder
import Header from "../shared/GetStartHeader";
const plans = [
  {
    name: "Monthly",
    price: "₹199",
    features: ["1 Device", "480p Streaming", "Email Support"],
  },
  {
    name: "6 Months",
    price: "₹999",
    features: ["2 Devices", "720p Streaming", "Help Center Access"],
  },
  {
    name: "Yearly",
    price: "₹1799",
    features: ["4 Devices", "4K Streaming", "Priority Support"],
  },
];

const Subscription = () => {
  return (
    <div className="min-h-screen bg-gray-800">
      <Header /> {/* Movirays Header */}
      <div className="container mx-auto px-8 py-12">
        <h2 className="text-4xl font-bold text-yellow-400 text-center mb-12">
          Choose Your Subscription Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-xl bg-black p-6 shadow-lg border border-yellow-400"
            >
              <h3 className="text-2xl font-semibold text-yellow-400">
                {plan.name}
              </h3>
              <p className="mt-4 text-3xl font-bold text-white">
                {plan.price} / plan
              </p>
              <ul className="mt-6 space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="text-lg text-gray-300">
                    • {feature}
                  </li>
                ))}
              </ul>
              <button
                className="mt-8 w-full py-3 rounded-lg border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
              >
                Subscribe Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subscription;
