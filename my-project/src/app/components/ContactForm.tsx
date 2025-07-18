import React, { useState } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import phoneCodes from "../data/phoneCodes.json";
import { AnimatePresence, motion } from "framer-motion";

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

    // Venue-specific validations
    if (selectedOptions.includes("Renting the Venue")) {
      if (!venuePeople || !venuePurpose || !venueDate || !venueTime) {
        toast.error("Please complete all venue rental details.");
        return;
      }

      // Check that venuePeople is a valid number > 0
      const peopleNum = parseInt(venuePeople);
      if (isNaN(peopleNum) || peopleNum <= 0) {
        toast.error("Please enter a valid number of people.");
        return;
      }

      // Validate time format — should match HH:MM in 24hr format
      const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
      if (!timeRegex.test(venueTime)) {
        toast.error(
          "Please enter a valid time in 24-hour format (e.g., 13:30)."
        );
        return;
      }

      // Validate date is not in the past
      const selectedDate = new Date(venueDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Reset time to start of today

      if (selectedDate < today) {
        toast.error("Please select a date that is today or in the future.");
        return;
      }
    }

    setLoading(true);

    const templateParams = {
      from_name: name,
      from_email: email,
      message,
      enquiry_type: selectedOptions.join(", "),
      company,
      phone: `${phoneCode} ${phoneNumber}`,
      venue_people: selectedOptions.includes("Renting the Venue")
        ? venuePeople
        : "N/A",
      venue_purpose: selectedOptions.includes("Renting the Venue")
        ? venuePurpose
        : "N/A",
      venue_date: selectedOptions.includes("Renting the Venue")
        ? venueDate
        : "N/A",
      venue_time: selectedOptions.includes("Renting the Venue")
        ? venueTime
        : "N/A",
    };

    // before sending, log all templateParams to console
    console.log("Sending email with params:", templateParams);

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
            {Object.entries(phoneCodes).map(([country, code]) => (
              <option key={country} value={code}>
                {`${code} (${country})`}
              </option>
            ))}
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

        <AnimatePresence>
          {selectedOptions.includes("Renting the Venue") && (
            <motion.div
              key="venue-details"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-4 border rounded-lg p-4 bg-gray-50"
            >
              <h3 className="font-semibold text-lg">Venue Rental Details</h3>

              <input
                type="number"
                placeholder="How many people will attend?"
                className="w-full border rounded-lg p-3"
                value={venuePeople}
                onChange={(e) => {
                  const value = e.target.value.replace(/-/g, "");
                  // Only allow positive numbers (including empty string) and max 5 digits
                  if (
                    value === "" ||
                    (/^\d+$/.test(value) &&
                      Number(value) > 0 &&
                      value.length <= 5)
                  ) {
                    setVenuePeople(value);
                  }
                }}
                min={1}
                max={99999}
                inputMode="numeric"
                pattern="[1-9][0-9]{0,4}"
                onKeyDown={(e) => {
                  if (
                    e.key === "-" ||
                    (venuePeople.length >= 5 &&
                      ![
                        "Backspace",
                        "Delete",
                        "ArrowLeft",
                        "ArrowRight",
                        "Tab",
                      ].includes(e.key))
                  ) {
                    e.preventDefault();
                  }
                }}
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

              <input
                type="time"
                value={venueTime}
                onChange={(e) => setVenueTime(e.target.value)}
                className="w-full border rounded-lg p-3"
              />
            </motion.div>
          )}
        </AnimatePresence>

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
