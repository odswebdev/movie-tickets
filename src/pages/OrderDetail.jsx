import React from "react";
import { Link } from "react-router-dom";
import { useSession } from "../context/SessionContext";

export default function OrderDetail() {
  const { session } = useSession();
  return (
    <div className="relative w-full min-h-screen bg-[#000] overflow-hidden">
      {/* Зеленое свечение слева снизу */}
      <div className="absolute left-[-30%] bottom-[-30%] w-[60vw] h-[60vw] bg-[#15803d] rounded-full blur-[120px] opacity-40" />

      {/* Зеленое свечение справа сверху */}
      <div className="absolute right-[-20%] top-[-20%] w-[50vw] h-[50vw] bg-[#166534] rounded-full blur-[100px] opacity-50" />

      {/* Основной контент */}
      <div className="relative z-10 flex flex-col min-h-screen max-w-[1390px] mx-auto px-[15px]">
        <main className="flex-1 flex flex-col items-center px-4 pb-[5rem]">
          <div className="text-left flex flex-col">
            <h1 className="text-[36px] text-[#FFF] text-left">
              Booking Detail
            </h1>

            <p className="text-[24px] font-medium text-[#FFF]">Shedule</p>

            <p className="text-[24px] font-medium text-[#FFF]">Movie Title</p>

            <span className="text-[24px] font-medium text-[#FFF]">
              {session?.title || "-"}
            </span>

            <p className="text-[24px] font-medium text-[#FFF]">Date</p>

            <span className="text-[24px] font-medium text-[#FFF]">
              {session?.label || "-"}
            </span>

            <table>
              <tbody>
                <tr>
                  <th className="text-[24px] font-medium text-[#FFF]">
                    Ticket
                  </th>
                  <th className="text-[24px] font-medium text-[#FFF]">Hours</th>
                </tr>
                <tr>
                  <td className="text-[24px] font-medium text-[#FFF]">3</td>
                  <td className="text-[24px] font-medium text-[#FFF]">
                    {session?.time || "-"}
                  </td>
                </tr>
              </tbody>
            </table>

            <p className="text-[24px] font-medium text-[#FFF]">
              Transaction Detail
            </p>

            <table>
              <tbody>
                <tr>
                  <td className="text-[24px] font-medium text-[#FFF]">
                    REGULAR SEAT
                  </td>
                  <td className="text-[24px] font-medium text-[#FFF]">
                    RM 55.70
                  </td>
                </tr>
                <tr>
                  <td className="text-[24px] font-medium text-[#FFF]">
                    Service Charge (6%)
                  </td>
                  <td className="text-[24px] font-medium text-[#FFF]">
                    RM 2.70
                  </td>
                </tr>
                <tr>
                  <td className="text-[24px] font-medium text-[#FFF]">
                    Total payment
                  </td>
                  <td className="text-[24px] font-medium text-[#FFF]">2.80</td>
                </tr>
              </tbody>
            </table>

            <span className="text-[24px] font-medium text-[#FFF] mb-[30px]">
              *Purchased ticket cannot be canceled
            </span>

            <Link
              to="/paymentinfo"
              className="bg-[rgba(29,_231,_130,_1)] border-transparent text-[24px] font-medium text-[#FFF] p-[10px_16px] rounded-[8px] cursor-pointer hover:bg-[#ffe62c] hover:text-[#FFF] text-center"
            >
              Checkout Ticket
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
