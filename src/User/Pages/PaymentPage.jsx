import React, { useState } from "react";

function PaymentPage() {
  const [method, setMethod] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!method || !price) {
      alert("Please select a payment method and enter price!");
      return;
    }
    alert(`Payment of ₹${price} successful with ${method}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Payment Page
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Payment Methods */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Choose Payment Method
            </h3>

            <div className="space-y-3">
              {["GPay", "PhonePe", "Card", "Cash on Delivery"].map((option) => (
                <label
                  key={option}
                  className={`flex items-center p-3 border rounded-lg cursor-pointer ${
                    method === option
                      ? "border-indigo-500 bg-indigo-50"
                      : "border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value={option}
                    checked={method === option}
                    onChange={(e) => setMethod(e.target.value)}
                    className="mr-3"
                  />
                  <span className="text-gray-700 font-medium">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Enter Price
            </label>
            <input
              type="number"
              placeholder="₹ Enter amount"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Pay Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition font-medium"
          >
            {method === "Cash on Delivery"
              ? `Confirm Order (₹${price || 0})`
              : `Pay ₹${price || 0} Now`}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PaymentPage;
