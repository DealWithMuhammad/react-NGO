import { useState } from "react";
import firebase from "firebase/app";
import { app } from "api/FirebaseConfig";
import { getFirestore, collection, addDoc } from "firebase/firestore";

export default function YourComponent() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const db = getFirestore(app);
      const docRef = await addDoc(collection(db, "emails"), {
        email: email,
      });
      console.log("Email saved with ID: ", docRef.id);
      // Optionally, you can reset the email state after submission
      setEmail("");
    } catch (error) {
      console.error("Error adding email: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <input
          type="text"
          placeholder="Email address"
          value={email}
          onChange={handleEmailChange}
          className="w-full rounded-full border text-black border-stroke px-6 py-3 shadow-solid-11 focus:border-primary focus:outline-none"
        />

        <button
          type="submit"
          aria-label="signup to newsletter"
          className="absolute right-0 p-4"
        >
          <svg
            className="fill-[#f8cf2c] transition ease-in hover:fill-[#000] "
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_48_1487)">
              <path
                d="M3.1175 1.17318L18.5025 9.63484C18.5678 9.67081 18.6223 9.72365 18.6602 9.78786C18.6982 9.85206 18.7182 9.92527 18.7182 9.99984C18.7182 10.0744 18.6982 10.1476 18.6602 10.2118C18.6223 10.276 18.5678 10.3289 18.5025 10.3648L3.1175 18.8265C3.05406 18.8614 2.98262 18.8792 2.91023 18.8781C2.83783 18.8769 2.76698 18.857 2.70465 18.8201C2.64232 18.7833 2.59066 18.7308 2.55478 18.6679C2.51889 18.6051 2.50001 18.5339 2.5 18.4615V1.53818C2.50001 1.46577 2.51889 1.39462 2.55478 1.33174C2.59066 1.26885 2.64232 1.2164 2.70465 1.17956C2.76698 1.14272 2.83783 1.12275 2.91023 1.12163C2.98262 1.12051 3.05406 1.13828 3.1175 1.17318ZM4.16667 10.8332V16.3473L15.7083 9.99984L4.16667 3.65234V9.16651H8.33333V10.8332H4.16667Z"
                fill=""
              />
            </g>
            <defs>
              <clipPath id="clip0_48_1487">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </form>
  );
}
