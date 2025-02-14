import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

function Advance() {
  const navigate = useNavigate();

  const handleStartInterview = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://15.206.133.74/interview/start",
        {
          level: "advanced",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data.data.id);

      navigate(
        `/interview/advanced/${response.data.data.id || "123"}`,
        { replace: true }
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center gap-4 py-5 px-5">
      <div className="py-5 px-5 space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold">Advanced</h2>
        {/* <p className="text-lg py-6 pr-6">
          Get started with our beginner-friendly courses, designed to help you
          develop essential skills and knowledge for your job search.
        </p> */}
        <img
          className="md:h-[31rem]"
          src="assets/beginnerPage.jpg"
          alt="Advanced Page"
        ></img>
      </div>
      <div className="py-5 sm:px-5 mt-6 lg:mt-14">
        <h2 className="text-2xl lg:text-4xl text-center font-semibold">
          Key Instruction
        </h2>
        <ol
          style={{ listStyleType: "decimal" }}
          className="text-base lg:text-lg border-2 rounded-xl px-8 mt-6 py-6 space-y-4 md:space-y-2 xl:space-y-6"
        >
          <li>10 Seconds is Minimum Spent time for each question</li>
          <li>Ensure You have stable and Strong internet Connectivity.</li>
          <li>
            Do Not Press Back Or Quit Interview In Middle to avoid Punishment in
            form of Coins
          </li>
          <li>Try Answering Every Question For Better Result.</li>
          <li>Focus Camera on your face and be audible for better Result</li>
        </ol>
        <button
          className="text-xl md:text-2xl bg-orange-950 rounded-2xl my-6 p-5 text-slate-200"
          onClick={handleStartInterview}
        >
          Start Interview
        </button>
      </div>
    </div>
  );
}

export default Advance;
