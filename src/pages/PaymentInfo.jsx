import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function PaymentInfo() {
  useEffect(() => {
    document.title = "Payment Info | Movie Tickets";
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
          <div className="text-left flex flex-col items-center justify-center transform translate-x-[0%] translate-y-[30%]">
            <h1 className="text-[36px] text-[#FFF] text-center mb-[70px]">
              Enter Otp
            </h1>

            <div>
              <form className="flex flex-col items-center gap-[20px]">
                <div className="flex items-center gap-[20px] mb-[150px]">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[60px] h-[60px] rounded-[10px] text-[#FFF] text-[56px] text-center border border-solid border-[rgba(255,_255,_255,_1)]"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[60px] h-[60px] rounded-[10px] text-[#FFF] text-[56px] text-center border border-solid border-[rgba(255,_255,_255,_1)]"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[60px] h-[60px] rounded-[10px] text-[#FFF] text-[56px] text-center border border-solid border-[rgba(255,_255,_255,_1)]"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-[60px] h-[60px] rounded-[10px] text-[#FFF] text-[56px] text-center border border-solid border-[rgba(255,_255,_255,_1)]"
                  />
                </div>

                <Link
                  to="/paymentsuccess"
                  className="w-[390px] rounded-[10px] bg-[rgba(29,_231,_130,_1)] p-[15px_10px] text-[24px] font-medium text-[#FFF] text-center hover:text-[#FFF]"
                >
                  Submit
                </Link>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
