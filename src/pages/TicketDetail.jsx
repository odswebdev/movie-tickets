import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useSession } from "../context/SessionContext";

export default function TicketDetail() {
  const { session } = useSession();
  const { isAuthenticated, logout } = useAuth(); // session — объект

  useEffect(() => {
    document.title = "Ticket Detail | Movie Tickets";
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
          <div className="">
            <h1 className="text-[46px] font-bold text-[#FFF] mb-[65px]">
              Ticket Detail
            </h1>
          </div>

          <div className="flex flex-col gap-[10px] rounded-[20px] p-[20px] border border-solid border-[rgba(221,_222,_223,_1)] mb-[200px]">
            <div>
              <p className="text-[24px] font-medium text-[#FFF]">Date</p>

              <span className="text-[24px] font-medium text-[#FFF]">
                {session?.label || "-"}
              </span>
            </div>

            <div>
              <p className="text-[24px] font-medium text-[#FFF]">Movie Title</p>

              <span className="text-[24px] font-medium text-[#FFF]">
                {session?.title || "-"}
              </span>
            </div>

            <table>
              <tbody>
                <tr>
                  <th className="text-left text-[24px] font-medium text-[#FFF]">
                    Ticket
                  </th>
                  <th className="text-left text-[24px] font-medium text-[#FFF]">
                    Hours
                  </th>
                </tr>
                <tr>
                  <td className="text-[24px] font-medium text-[#FFF]">3</td>
                  <td className="text-[24px] font-medium text-[#FFF]">
                    {session?.time || "-"}
                  </td>
                </tr>
              </tbody>
            </table>

            <Link
              to="/"
              className="w-[390px] rounded-[10px] bg-[rgba(29,_231,_130,_1)] p-[15px_10px] text-[24px] font-medium text-[#FFF] text-center hover:text-[#FFF]"
            >
              Download Ticket
            </Link>
          </div>

          <Link
            to="/"
            className="w-[390px] rounded-[10px] bg-transparent border border-solid border-[#FFF] p-[15px_10px] text-[24px] font-medium text-[#FFF] text-center hover:text-[#FFF]"
          >
            Back to Homepage
          </Link>
        </main>
      </div>
    </div>
  );
}
