import React, { useState } from "react";
import { useModal } from "../context/ModalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCross, faX } from "@fortawesome/free-solid-svg-icons";

const FormModal = () => {
  const { isOpen, setIsOpen } = useModal();
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    refereeName: "",
    refereeEmail: "",
    refereePhone: "",
    message: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setIsOpen(0);
    // Handle form submission (API call, etc.)
  };

  if (!isOpen) return null;

  return (
    <div className="fixed w-full h-full bg-blue-950/25 flex justify-center">
      <div className="relative w-104 h-auto my-auto mx-auto bg-white rounded-xl shadow-lg p-6">
        <FontAwesomeIcon
          icon={faX}
          className="absolute top-4 right-4 cursor-pointer text-gray-500 hover:text-gray-700"
          onClick={() => setIsOpen(false)}
        />

        <h2 className="text-xl font-semibold text-center mb-4">
          Refer & Earn Rewards!
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Your Name</label>
            <input
              type="text"
              name="referrerName"
              value={formData.referrerName}
              onChange={handleChange}
              placeholder="Enter friend's name"
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Your Email</label>
            <input
              type="email"
              name="referrerEmail"
              value={formData.referrerEmail}
              onChange={handleChange}
              placeholder="Enter friend's name"
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Friend's Name</label>
            <input
              type="text"
              name="refereeName"
              value={formData.refereeName}
              onChange={handleChange}
              placeholder="Enter friend's name"
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Friend's Email</label>
            <input
              type="email"
              name="refereeEmail"
              value={formData.refereeEmail}
              onChange={handleChange}
              placeholder="Enter friend's email"
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Friend's Phone (Optional)</label>
            <input
              type="tel"
              name="refereePhone"
              value={formData.refereePhone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Personalized Message (Optional)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write a short message..."
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600"
              required
            />
            <label className="text-sm">
              I confirm that I have permission to share this contact’s details.
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue text-white font-semibold py-2 rounded-md hover:bg-blue-700 cursor-pointer"
          >
            Send Referral
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
