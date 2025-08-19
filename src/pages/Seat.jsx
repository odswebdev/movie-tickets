import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import { useSession } from "../context/SessionContext";

export default function Seat() {
  const { session } = useSession();
  const { isAuthenticated, logout } = useAuth(); // session — объект
  const [selectedSeat, setSelectedSeat] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Seat | Movie Tickets";
  }, []);

  // Создаём массив мест
  const seats = Array.from({ length: 70 }, (_, i) => i + 1);

  return (
    <div className="relative w-full min-h-screen bg-[#000] overflow-hidden">
      {/* Зеленое свечение слева снизу */}
      <div className="absolute left-[-30%] bottom-[-30%] w-[60vw] h-[60vw] bg-[#15803d] rounded-full blur-[120px] opacity-40" />

      {/* Зеленое свечение справа сверху */}
      <div className="absolute right-[-20%] top-[-20%] w-[50vw] h-[50vw] bg-[#166534] rounded-full blur-[100px] opacity-50" />

      {/* Основной контент */}
      <div className="relative z-10 flex flex-col min-h-screen max-w-[1390px] mx-auto px-[15px]">
        <main className="flex-1 flex flex-col items-center px-4 pb-[5rem]">
          <h1 className="text-[46px] font-bold text-[#FFF] mb-[65px]">Seat</h1>

          {/* Сетка мест */}
          <div className="flex justify-center items-center mb-6">
            <div className="grid grid-cols-10 gap-[20px] p-6 bg-gray-800 rounded-2xl shadow-xl">
              {seats.map((seat) => (
                <motion.button
                  key={seat}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedSeat(seat)}
                  className={`w-[40px] h-[35px] flex items-center justify-center rounded-[6px] font-medium cursor-pointer transition-colors
                    ${
                      selectedSeat === seat
                        ? "bg-[#1DE782] text-[#000] text-[20px] font-bold shadow-md border-transparent"
                        : "bg-gray-600 hover:bg-gray-500"
                    }`}
                >
                  {seat}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Нижний блок с инфо */}
          <div className="border-t border-gray-700 bg-gray-800 p-4 flex justify-between items-center w-full max-w-[700px]">
            {/* Инфо слева */}
            <div>
              <p className="text-sm">
                Выбранное место:{" "}
                <span className="font-semibold">{selectedSeat || "-"}</span>
              </p>
              <p className="text-sm">
                Дата:{" "}
                <span className="font-semibold">{session?.label || "-"}</span>
              </p>
              <p className="text-sm">
                Время:{" "}
                <span className="font-semibold">{session?.time || "-"}</span>
              </p>
              <p className="text-sm">
                Кинотеатр:{" "}
                <span className="font-semibold">{session?.theater || "-"}</span>
              </p>
            </div>

            {/* Кнопки справа */}
            <div className="flex gap-3">
              <button
                onClick={() => window.history.back()}
                className="px-4 py-2 rounded-xl bg-gray-600 hover:bg-gray-500 transition"
              >
                Back
              </button>
              <button
                disabled={!selectedSeat}
                onClick={() => navigate("/orderdetail")}
                className="px-4 py-2 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 disabled:opacity-50"
              >
                Proceed
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
