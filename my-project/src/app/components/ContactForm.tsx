import React, { useState } from "react";
import toast from "react-hot-toast";

interface ContactFormProps {
  title: string;
  tagline?: string;
  enquiryOptions: string[]; // e.g. ["Partnership", "Bug Report", "Speaking Engagement"]
}

const ContactForm: React.FC<ContactFormProps> = ({
  title,
  tagline,
  enquiryOptions,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleCheckboxChange = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // email validation

    if (!name || !email || !message || selectedOptions.length === 0) {
      toast.error(
        "Please fill in all fields and select at least one enquiry type."
      );
      return;
    }

    // Placeholder for actual submission logic (e.g. email, API, etc.)
    toast.success("Message sent successfully!");

    // Reset form
    setName("");
    setEmail("");
    setMessage("");
    setSelectedOptions([]);
  };

  return (
    <div className="p-6 md:p-12 space-y-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center">{title}</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <input
          type="text"
          placeholder="Your name"
          className="w-full border rounded-lg p-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Your email"
          className="w-full border rounded-lg p-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Enquiry Options */}
        <div>
          <p className="font-semibold mb-2">What is your enquiry about? *</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {enquiryOptions.map((option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                  className="accent-blue-600"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Message */}
        <textarea
          placeholder="Your message"
          className="w-full border rounded-lg p-3 h-32 resize-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>

      {tagline && (
        <p className="text-center text-sm text-gray-600">{tagline}</p>
      )}
    </div>
  );
};

export default ContactForm;
