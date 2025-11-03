import React, { useState } from "react";
import { toast } from "react-toastify";
import { Productslist } from "../Productslist";

function Product() {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    rating: "",
    description: "",
    category: "",
    image: "",
    fullimage: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const isEmpty = Object.values(formData).some((val) => val === "");
    if (isEmpty) {
      toast.error("⚠️ Please fill all fields!");
      return;
    }

    // Create new product
    const newProduct = {
      id: Productslist.length + 1,
      title: formData.title,
      price: formData.price,
      rating: formData.rating,
      description: formData.description,
      category: formData.category,
      brand: formData.category, // for consistency with brand filtering
      image: formData.image,
      fullimage: formData.fullimage,
      display: "true",
    };

    // This only updates memory (not saved permanently)
    Productslist.push(newProduct);

    console.log("✅ New Product Added:", newProduct);
    toast.success("🎉 Product added successfully!");

    // Reset form
    setFormData({
      title: "",
      price: "",
      rating: "",
      description: "",
      category: "",
      image: "",
      fullimage: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-50 to-blue-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Add New Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {[
            { label: "Title", name: "title", type: "text" },
            { label: "Price", name: "price", type: "number" },
            { label: "Rating (0–5)", name: "rating", type: "number", step: "0.1", max: "5" },
            { label: "Category / Brand", name: "category", type: "text" },
            { label: "Thumbnail Image URL", name: "image", type: "text" },
            { label: "Full Image URL", name: "fullimage", type: "text" },
          ].map((input) => (
            <div key={input.name}>
              <label className="block text-gray-700 font-medium mb-1">
                {input.label}
              </label>
              <input
                {...input}
                value={formData[input.name]}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>
          ))}

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none resize-none"
              placeholder="Enter product description"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-xl font-semibold shadow-md hover:bg-indigo-700 transition"
          >
            ➕ Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default Product;
