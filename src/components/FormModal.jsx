import React, { useState } from "react";
import { useModal } from "../context/ModalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCross, faX } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const FormModal = () => {
  const { isOpen, setIsOpen } = useModal();

  const handleCloseModal = () => {
    setIsOpen(false);
    setMessage("")
  }

  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    refereeName: "",
    refereeEmail: "",
    message: "",
    consent: false,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [validationErrors, setValidationErrors] = useState({
    referrerName: "",
    referrerEmail: "",
    refereeName: "",
    refereeEmail: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setLoading(true);
    setMessage("");
    setValidationErrors({
      referrerName: "",
      referrerEmail: "",
      refereeName: "",
      refereeEmail: "",
    });

    try {
      const res = await axios.post(`${API_URL}/api/v1/refer`, formData);
      setMessage(res.data.message);
      setFormData({
        referrerName: "",
        referrerEmail: "",
        refereeName: "",
        refereeEmail: "",
        message: "",
        consent: false,
      });
      setValidationErrors({
        referrerName: "",
        referrerEmail: "",
        refereeName: "",
        refereeEmail: "",
      });

      setMessage("Referral Submitted");
    } catch (error) {
      console.log(error);

      if (error.status === 400) {
        const errors = error.response?.data?.errors;
        errors.forEach((error) => {
          setValidationErrors((prevErrors) => ({
            ...prevErrors,
            [error.path]: error.msg,
          }));
        });
      } else{
        setMessage(error.response?.data?.error || "Something went wrong.");
      }

    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed w-full h-full bg-blue-950/25 flex justify-center">
      <div className="relative w-104 h-auto my-auto mx-auto bg-white rounded-xl shadow-lg p-6">
        <FontAwesomeIcon
          icon={faX}
          className="absolute top-4 right-4 cursor-pointer text-gray-500 hover:text-gray-700"
          onClick={handleCloseModal}
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
              placeholder="Enter your name"
              required
              className="w-full px-3 py-2 border rounded-md"
            />
            {validationErrors.referrerName && (
              <p className="text-red-500 text-sm">
                {validationErrors.referrerName}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Your Email</label>
            <input
              type="email"
              name="referrerEmail"
              value={formData.referrerEmail}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full px-3 py-2 border rounded-md"
            />
            {validationErrors.referrerEmail && (
              <p className="text-red-500 text-sm">
                {validationErrors.referrerEmail}
              </p>
            )}
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
            {validationErrors.refereeName && (
              <p className="text-red-500 text-sm">
                {validationErrors.refereeName}
              </p>
            )}
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
            {validationErrors.refereeEmail && (
              <p className="text-red-500 text-sm">
                {validationErrors.refereeEmail}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">
              Personalized Message (Optional)
            </label>
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
            disabled={loading}>
            {loading ? "Submitting..." : "Send Referral"}
          </button>
        </form>
        {message && <p className="text-center mt-4 text-gray-600">{message}</p>}
      </div>
    </div>
  );
};

export default FormModal;
