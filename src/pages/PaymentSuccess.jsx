import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function PaymentSuccess() {
  useEffect(() => {
    document.title = "Payment Success | Movie Tickets";
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#000] overflow-hidden">
      {/* Зеленое свечение слева снизу */}
      <div className="absolute left-[-30%] bottom-[-30%] w-[60vw] h-[60vw] bg-[#15803d] rounded-full blur-[120px] opacity-40" />

      {/* Зеленое свечение справа сверху */}
      <div className="absolute right-[-20%] top-[-20%] w-[50vw] h-[50vw] bg-[#166534] rounded-full blur-[100px] opacity-50" />

      {/* Основной контент */}
      <div className="relative z-10 flex flex-col min-h-screen max-w-[1390px] mx-auto px-[15px]">
        <main className="flex-1 flex flex-col items-center px-4 pb-[5rem]">
          <div className="text-left flex flex-col items-center justify-center transform translate-x-[0%] translate-y-[20%]">
            <h1 className="text-[36px] text-[#FFF] text-center mb-[40px]">
              Payment Success
            </h1>

            <div className="flex items-center justify-center relative bg-[rgba(29,_231,_130,_0.25)] rounded-[50%] w-[170px] h-[170px]">
              <div className="absolute bg-transparent rounded-[50%] w-[100px] h-[100px] z-10">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 119 120"
                  fill="#000000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M59.4996 0.714279C26.7739 0.714279 0.213867 27.2743 0.213867 60C0.213867 92.7257 26.7739 119.286 59.4996 119.286C92.2253 119.286 118.785 92.7257 118.785 60C118.785 27.2743 92.2253 0.714279 59.4996 0.714279ZM43.4331 85.4336L22.1496 64.15C19.8374 61.8378 19.8374 58.1028 22.1496 55.7907C24.4617 53.4786 28.1967 53.4786 30.5089 55.7907L47.6424 72.865L88.431 32.0764C90.7431 29.7643 94.4781 29.7643 96.7903 32.0764C99.1024 34.3886 99.1024 38.1236 96.7903 40.4357L51.7924 85.4336C49.5396 87.7457 45.7453 87.7457 43.4331 85.4336Z"
                    fill="#1DE782"
                  />
                </svg>
              </div>
            </div>

            <div className="flex flex-col gap-[20px] mt-[80px]">
              <Link
                to="/ticketdetail"
                className="w-[390px] rounded-[10px] bg-[rgba(29,_231,_130,_1)] p-[15px_10px] text-[24px] font-medium text-[#FFF] text-center hover:text-[#FFF]"
              >
                View Ticket
              </Link>
              <Link
                to="/"
                className="w-[390px] rounded-[10px] bg-transparent border border-solid border-[#FFF] p-[15px_10px] text-[24px] font-medium text-[#FFF] text-center hover:text-[#FFF]"
              >
                Back to Homepage
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
