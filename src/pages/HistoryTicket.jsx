import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useSession } from "../context/SessionContext";

export default function HistoryTicket() {
  const { isAuthenticated, logout } = useAuth();
  const { setSession } = useSession();
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "HistoryTicket | Movie Tickets";
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#000] overflow-hidden">
      {/* Зеленое свечение слева снизу */}
      <div className="absolute left-[-30%] bottom-[-30%] w-[60vw] h-[60vw] bg-[#15803d] rounded-full blur-[120px] opacity-40" />

      {/* Зеленое свечение справа сверху */}
      <div className="absolute right-[-20%] top-[-20%] w-[50vw] h-[50vw] bg-[#166534] rounded-full blur-[100px] opacity-50" />

      {/* Основной контент */}
      <div className="relative z-10 flex flex-col min-h-screen max-w-[1390px] mx-auto px-[15px]">
        {/* Header */}
        <header className="flex justify-between items-center px-8 pt-[1.5rem] pb-10">
          {/* Лого */}
          <Link to="/">
            <img
              src="/movie-tickets/assets/logo.png"
              alt="Logo"
              className="h-10"
            />
          </Link>

          {/* Кнопки */}
          <div className="flex gap-[1rem]">
            {isAuthenticated ? (
              <>
                <Link to="/upcomingticket">
                  <button className="text-[18px] text-[#FFF] font-medium w-[120px] h-[48px] bg-transparent hover:bg-white hover:text-black transition cursor-pointer">
                    My Ticket
                  </button>
                </Link>
                <button
                  onClick={logout}
                  className="text-[18px] text-[#FFF] font-medium w-[100px] h-[48px] rounded-[10px] bg-[#EF4444] hover:bg-[#dc2626] transition cursor-pointer"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="text-[18px] text-[#FFF] font-medium w-[100px] h-[48px] rounded-[10px] bg-[#1DE782] hover:border-transparent transition cursor-pointer">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button className="text-[18px] text-[#FFF] font-medium w-[100px] h-[48px] rounded-[10px] bg-transparent border border-white hover:bg-white hover:text-black transition cursor-pointer">
                    Register
                  </button>
                </Link>
              </>
            )}
          </div>
        </header>

        {/* Main */}
        <main className="flex-1 flex flex-col items-center px-4 pb-[5rem]">
          <div className="flex items-center justify-center gap-[10px] mb-[70px]">
            <Link
              to="/upcomingticket"
              className="bg-transparent border border-solid border-[#FFF] hover:bg-[rgba(29,_231,_130,_1)] hover:border-none hover:text-[#FFF] p-[4px_9px] text-[16px] text-center font-[500] rounded-[50px] text-[#FFF] w-[100px]"
            >
              Upcoming
            </Link>
            <Link
              to="/historyticket"
              className="bg-[rgba(29,_231,_130,_1)] p-[4px_9px] text-[16px] text-center hover:bg-transparent hover:border hover:border-[#FFF] hover:text-[#FFF] font-[500] rounded-[50px] text-[#FFF] w-[100px]"
            >
              HistoryTicket
            </Link>
          </div>

          <div className="grid grid-cols-3 items-center place-items-center gap-[30px]">
            <div className="flex flex-col gap-[10px] rounded-[20px] p-[20px] border border-solid border-[rgba(221,_222,_223,_1)] mb-[200px]">
              <div>
                <p className="text-[24px] font-medium text-[#FFF]">Date</p>

                <span className="text-[24px] font-medium text-[#FFF]"></span>
              </div>

              <div>
                <p className="text-[24px] font-medium text-[#FFF]">
                  Movie Title
                </p>

                <span className="text-[24px] font-medium text-[#FFF]"></span>
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
                    <td className="text-[24px] font-medium text-[#FFF]"></td>
                  </tr>
                </tbody>
              </table>

              <Link
                to="/"
                className="w-[200px] rounded-[10px] bg-[rgba(29,_231,_130,_1)] p-[15px_10px] text-[24px] font-medium text-[#FFF] text-center hover:text-[#FFF]"
              >
                Download Ticket
              </Link>
            </div>

            <div className="flex flex-col gap-[10px] rounded-[20px] p-[20px] border border-solid border-[rgba(221,_222,_223,_1)] mb-[200px]">
              <div>
                <p className="text-[24px] font-medium text-[#FFF]">Date</p>

                <span className="text-[24px] font-medium text-[#FFF]"></span>
              </div>

              <div>
                <p className="text-[24px] font-medium text-[#FFF]">
                  Movie Title
                </p>

                <span className="text-[24px] font-medium text-[#FFF]"></span>
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
                    <td className="text-[24px] font-medium text-[#FFF]"></td>
                  </tr>
                </tbody>
              </table>

              <Link
                to="/"
                className="w-[200px] rounded-[10px] bg-[rgba(29,_231,_130,_1)] p-[15px_10px] text-[24px] font-medium text-[#FFF] text-center hover:text-[#FFF]"
              >
                Download Ticket
              </Link>
            </div>

            <div className="flex flex-col gap-[10px] rounded-[20px] p-[20px] border border-solid border-[rgba(221,_222,_223,_1)] mb-[200px]">
              <div>
                <p className="text-[24px] font-medium text-[#FFF]">Date</p>

                <span className="text-[24px] font-medium text-[#FFF]"></span>
              </div>

              <div>
                <p className="text-[24px] font-medium text-[#FFF]">
                  Movie Title
                </p>

                <span className="text-[24px] font-medium text-[#FFF]"></span>
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
                    <td className="text-[24px] font-medium text-[#FFF]"></td>
                  </tr>
                </tbody>
              </table>

              <Link
                to="/"
                className="w-[200px] rounded-[10px] bg-[rgba(29,_231,_130,_1)] p-[15px_10px] text-[24px] font-medium text-[#FFF] text-center hover:text-[#FFF]"
              >
                Download Ticket
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
