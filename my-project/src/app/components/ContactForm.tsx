import React, { useState } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

interface ContactFormProps {
  title: string;
  tagline?: string;
  enquiryOptions: string[];
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
  const [loading, setLoading] = useState(false);
  const [company, setCompany] = useState("");
  const [phoneCode, setPhoneCode] = useState("+60"); // default Malaysia code
  const [phoneNumber, setPhoneNumber] = useState("");

  const [venuePeople, setVenuePeople] = useState("");
  const [venuePurpose, setVenuePurpose] = useState("");
  const [venueDate, setVenueDate] = useState("");
  const [venueTime, setVenueTime] = useState("");

  const handleCheckboxChange = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message || selectedOptions.length === 0) {
      toast.error(
        "Please fill in all fields and select at least one enquiry type."
      );
      return;
    }
    if (!company || !phoneNumber) {
      toast.error("Please fill in your company name and phone number.");
      return;
    }

    if (
      selectedOptions.includes("Renting the Venue") &&
      (!venuePeople || !venuePurpose || !venueDate || !venueTime)
    ) {
      toast.error("Please complete all venue rental details.");
      return;
    }

    const phoneDigitsOnly = phoneNumber.replace(/\D/g, "");

    if (phoneDigitsOnly.length < 6 || phoneDigitsOnly.length > 15) {
      toast.error("Phone number must be between 6 and 15 digits.");
      return;
    }

    setLoading(true);

    const templateParams = {
      from_name: name,
      from_email: email,
      message,
      enquiry_type: selectedOptions.join(", "),
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJSSERVICE as string,
        process.env.NEXT_PUBLIC_EMAILJSTEMPLATE as string,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJSPUBLICKEY as string
      );

      toast.success("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
      setSelectedOptions([]);
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 md:p-12 space-y-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center">{title}</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          placeholder="Your name"
          className="w-full border rounded-lg p-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Your email"
          className="w-full border rounded-lg p-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Company Name"
          className="w-full border rounded-lg p-3"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <div className="flex space-x-2">
          <select
            className="border rounded-lg p-3 w-1/3"
            value={phoneCode}
            onChange={(e) => setPhoneCode(e.target.value)}
          >
            <option value="+60">+60 (MY)</option>
            <option value="+65">+65 (SG)</option>
            <option value="+44">+44 (UK)</option>
            <option value="+1">+1 (US)</option>
            {/* Add more if needed */}
          </select>

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border rounded-lg p-3"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

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

        <textarea
          placeholder="Your message"
          className="w-full border rounded-lg p-3 h-32 resize-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {selectedOptions.includes("Renting the Venue") && (
          <div className="space-y-4 border rounded-lg p-4 bg-gray-50">
            <h3 className="font-semibold text-lg">Venue Rental Details</h3>

            <input
              type="number"
              placeholder="How many people will attend?"
              className="w-full border rounded-lg p-3"
              value={venuePeople}
              onChange={(e) => setVenuePeople(e.target.value)}
            />

            <textarea
              placeholder="What do you want to do in the venue?"
              className="w-full border rounded-lg p-3 h-24 resize-none"
              value={venuePurpose}
              onChange={(e) => setVenuePurpose(e.target.value)}
            />

            <input
              type="date"
              className="w-full border rounded-lg p-3"
              value={venueDate}
              onChange={(e) => setVenueDate(e.target.value)}
            />

            <select
              className="w-full border rounded-lg p-3"
              value={venueTime}
              onChange={(e) => setVenueTime(e.target.value)}
            >
              <option value="">Select a time</option>
              <option value="Morning">Morning (9am–12pm)</option>
              <option value="Afternoon">Afternoon (12pm–4pm)</option>
              <option value="Evening">Evening (4pm–8pm)</option>
              <option value="Full Day">Full Day</option>
            </select>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>

      {tagline && (
        <p className="text-center text-sm text-gray-600">{tagline}</p>
      )}
    </div>
  );
};

export default ContactForm;
