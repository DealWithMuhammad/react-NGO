"use client";
import { useState } from "react";
import { getEmails } from "api/functions/get";
import emailjs from "emailjs-com";
import SectionHeader from "components/Common/SectionHeader";
import { Button, Textarea, Spinner } from "@nextui-org/react"; // Import Loading component from Next UI

export default function AdminPage() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // State variable to track loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emails = await getEmails();
    console.log(emails);
  };

  const sendEmailsToAll = async () => {
    setLoading(true); // Set loading to true when sending emails
    const emailsData = await getEmails();
    if (Array.isArray(emailsData)) {
      const emails = emailsData.map((obj) => obj.email);
      console.log(emails);

      // Iterate over each email address and send email using EmailJS
      for (const email of emails) {
        try {
          const templateParams = {
            to_email: email,
            message: formData.message, // Fixed: passing message from form data
          };
          console.log(templateParams);
          await emailjs.send(
            "service_1s935as",
            "template_fp4yner",
            templateParams,
            "Yw_Sl-LEwJcEf7Oef"
          );
        } catch (error) {
          console.error(`Error sending email to ${email}:`, error);
          // Handle error, e.g., update a log or database record
        }
      }
    } else {
      console.error("Emails data is not in the expected format.");
    }
    setLoading(false); // Set loading back to false when emails are sent
  };

  return (
    <div className="mx-10">
      <SectionHeader
        headerInfo={{
          title: "",
          subtitle: "Newsletter Admin Panel",
          description: "Send e-mail to your subscribers",
        }}
      />

      <form onSubmit={handleSubmit}>
        <div className="relative">
          <Textarea
            label="Email"
            type="text"
            maxRows={4}
            placeholder="Write your message"
            value={formData.message}
            onChange={
              (e) => setFormData({ ...formData, message: e.target.value }) // Fixed: updating email field in formData
            }
            className="w-full  text-black x-6 py-6 shadow-solid-11 focus:border-primary focus:outline-none"
          />
        </div>
      </form>
      <Button
        className="bg-yellow-500 w-full text-large hover:text-black text-white py-6"
        onClick={sendEmailsToAll}
        disabled={loading} // Disable button when loading is true
      >
        {loading ? <Spinner size="lg" /> : "Send Email"}
        {/* Display Loading component while loading */}
      </Button>
    </div>
  );
}
