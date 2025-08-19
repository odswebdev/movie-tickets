import React, { useEffect, useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useSession } from "../context/SessionContext";

export default function Theater() {
  const { session, setSession } = useSession();
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Theater | Movie Tickets";
  }, []);

  const theaters = {
    "Bukit Bintang": [
      {
        date: "2025-08-18",
        label: "18 August 2025",
        times: ["13:00", "15:40", "18:30"],
      },
      {
        date: "2025-08-19",
        label: "19 August 2025",
        times: ["12:00", "16:00", "20:15"],
      },
    ],
    "IOI Putrajaye": [
      {
        date: "2025-08-18",
        label: "18 August 2025",
        times: ["11:00", "14:00", "20:00"],
      },
      {
        date: "2025-08-19",
        label: "19 August 2025",
        times: ["10:30", "15:30", "19:30"],
      },
    ],
    "KB Mall": [
      {
        date: "2025-08-18",
        label: "18 August 2025",
        times: ["12:45", "17:15", "21:00"],
      },
      {
        date: "2025-08-19",
        label: "19 August 2025",
        times: ["13:15", "16:45", "22:15"],
      },
    ],
  };

  const theaterNames = Object.keys(theaters);

  const [selectedTheater, setSelectedTheater] = useState(
    localStorage.getItem("theater_selectedTheater") || theaterNames[0]
  );
  const [selectedDateId, setSelectedDateId] = useState(
    localStorage.getItem("theater_selectedDateId") ||
      theaters[selectedTheater][0].date
  );
  const [selectedTime, setSelectedTime] = useState(
    localStorage.getItem("theater_selectedTime") || ""
  );

  // Получаем список сессий и выбранную дату
  const sessions = useMemo(
    () => theaters[selectedTheater] || [],
    [selectedTheater]
  );
  const selectedDateObj = useMemo(
    () => sessions.find((s) => s.date === selectedDateId) || sessions[0],
    [sessions, selectedDateId]
  );

  // Сохраняем выбор в localStorage
  useEffect(() => {
    localStorage.setItem("theater_selectedTheater", selectedTheater);
  }, [selectedTheater]);
  useEffect(() => {
    localStorage.setItem("theater_selectedDateId", selectedDateId);
  }, [selectedDateId]);
  useEffect(() => {
    localStorage.setItem("theater_selectedTime", selectedTime);
  }, [selectedTime]);

  useEffect(() => {
    setSession((prev) => ({
      ...prev, // сохраняем title и src
      theater: selectedTheater,
      date: selectedDateObj.date,
      label: selectedDateObj.label,
      time: selectedTime || null,
    }));
  }, [selectedTheater, selectedDateObj, selectedTime, setSession]);

  const canProceed = selectedTheater && selectedDateObj && selectedTime;

  const handleProceed = () => {
    if (canProceed) navigate("/seat");
  };

  const basePill =
    "cursor-pointer select-none rounded-[40px] border border-white/70 px-5 py-2 text-[18px] text-white transition " +
    "hover:shadow-[0_0_18px_rgba(29,231,130,0.65)] hover:border-transparent hover:bg-[#1DE782] hover:text-black active:scale-[0.98]";
  const selectedPill =
    "bg-[#1DE782] text-black border-transparent shadow-[0_0_18px_rgba(29,231,130,0.8)]";

  return (
    <div className="relative w-full min-h-screen bg-[#000] overflow-hidden">
      {/* Подсветки */}
      <div className="absolute left-[-30%] bottom-[-30%] w-[60vw] h-[60vw] bg-[#15803d] rounded-full blur-[120px] opacity-40" />
      <div className="absolute right-[-20%] top-[-20%] w-[50vw] h-[50vw] bg-[#166534] rounded-full blur-[100px] opacity-50" />

      <div className="relative z-10 flex flex-col min-h-screen max-w-[1390px] mx-auto px-[15px]">
        {/* Header */}
        <header className="flex justify-between items-center px-8 pt-[1.5rem] pb-10 mb-[75px]">
          <Link to="/">
            <img
              src="/movie-tickets/assets/logo.png"
              alt="Logo"
              className="h-10"
            />
          </Link>
          <div className="flex gap-[1rem]">
            {isAuthenticated ? (
              <button
                onClick={logout}
                className="text-[18px] text-[#FFF] font-medium w-[100px] h-[48px] rounded-[10px] bg-[#EF4444] hover:bg-[#dc2626] transition cursor-pointer"
              >
                Logout
              </button>
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
          <div className="relative z-10 flex flex-col min-h-screen max-w-[1390px] w-full px-[15px]">
            <div className="grid grid-cols-2 justify-between items-start gap-[30px]">
              {/* Левая колонка: выбор */}
              <div>
                <h1 className="text-[46px] font-bold text-[#FFF] mb-[65px]">
                  Theater
                </h1>

                {/* Выбор кинотеатра */}
                <div className="flex flex-wrap gap-3 mb-12">
                  {theaterNames.map((name) => (
                    <button
                      key={name}
                      onClick={() => setSelectedTheater(name)}
                      className={`${basePill} ${
                        selectedTheater === name ? selectedPill : ""
                      }`}
                    >
                      {name}
                    </button>
                  ))}
                </div>

                {/* Выбор даты */}
                <div className="mt-6">
                  <h2 className="text-[46px] font-bold text-[#FFF] mb-[30px]">
                    Date
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {sessions.length > 0 ? (
                      sessions.map((s) => (
                        <button
                          key={s.date}
                          onClick={() => setSelectedDateId(s.date)}
                          className={`${basePill} ${
                            selectedDateId === s.date ? selectedPill : ""
                          }`}
                        >
                          {s.label}
                        </button>
                      ))
                    ) : (
                      <span className="text-white/70">No dates available</span>
                    )}
                  </div>
                </div>

                {/* Выбор времени */}
                <div className="mt-12">
                  <h2 className="text-[46px] font-bold text-[#FFF] mb-[30px]">
                    Time
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {selectedDateObj?.times.length > 0 ? (
                      selectedDateObj.times.map((t) => (
                        <button
                          key={t}
                          onClick={() => setSelectedTime(t)}
                          className={`${basePill} ${
                            selectedTime === t ? selectedPill : ""
                          }`}
                        >
                          {t}
                        </button>
                      ))
                    ) : (
                      <span className="text-white/70">Select a date first</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Правая колонка: информация о фильме */}
              <div className="flex flex-col mb-[75px]">
                <div className="flex flex-col ml-auto w-[50%] min-w-[320px]">
                  <img
                    src={`/movie-tickets/assets/${session.src}`}
                    className="rounded-[20px] mb-[15px] h-auto"
                    alt={session.title}
                  />
                  <h3 className="text-[#FFF]">{session.title}</h3>
                  <p className="text-[#FFF]">Movie description here...</p>
                  <table className="text-[#FFF]">
                    <tbody>
                      <tr>
                        <td className="pr-4 py-1 opacity-70">Duration</td>
                        <td>2h 30m</td>
                      </tr>
                      <tr>
                        <td className="pr-4 py-1 opacity-70">Type</td>
                        <td>Cartoon</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Подтверждение выбора */}
            <div className="flex flex-col p-[40px_55px] ml-auto rounded-[20px] border border-solid border-[#FFF] w-[275px] h-auto">
              <h3 className="text-[32px] text-[#FFF] mb-[30px]">
                {selectedTheater}
              </h3>
              <span className="text-[#FFF]">
                {selectedDateObj?.label || "— Select a date —"}
              </span>
              <span className="text-[#FFF] mb-[30px]">
                {selectedTime || "— Select time —"}
              </span>
              <span className="text-[#FFF] mb-[30px] opacity-70">
                *Seat selection can be done after this
              </span>
              {canProceed ? (
                <button
                  onClick={handleProceed}
                  className="text-center font-[800] w-[165px] p-[16px_50px] text-[#FFF] border-transparent bg-[#1DE782] rounded-[20px] text-[16px] hover:shadow-[0_0_18px_rgba(29,231,130,0.8)] transition"
                >
                  Proceed
                </button>
              ) : (
                <button
                  disabled
                  className="text-center font-[800] w-[165px] p-[16px_50px] text-[#111] bg-white/30 rounded-[20px] text-[16px] opacity-50 cursor-not-allowed"
                >
                  Proceed
                </button>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
