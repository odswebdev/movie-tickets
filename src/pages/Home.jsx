import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useSession } from "../context/SessionContext";

export default function Home() {
  const { isAuthenticated, logout } = useAuth();
  const { setSession } = useSession();
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Movie Tickets";
  }, []);

  const movies = [
    { title: "Furiosa", src: "furiosa.png" },
    { title: "If", src: "if.png" },
    { title: "Civil War", src: "civil-war.png" },
    { title: "Kingdom Planet Apes", src: "planet-apes.png" },
    { title: "Dune", src: "dune.png" },
    { title: "Sheriff", src: "sheriff.png" },
  ];

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
                  <button className="text-[18px] text-[#FFF] font-medium w-[120px] h-[48px] rounded-[10px] bg-transparent border border-white hover:bg-white hover:text-black transition cursor-pointer">
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
          <h1 className="text-[46px] font-bold text-[#FFF] line-through mb-[65px] text-center">
            Now Showing
          </h1>

          <div className="flex flex-wrap justify-center gap-[50px]">
            {movies.map((movie, idx) => (
              <Link
                key={idx}
                to="/theater"
                onClick={(e) => {
                  e.preventDefault();
                  setSession(movie);
                  navigate("/theater");
                }}
                className="cursor-pointer"
              >
                <img
                  className="rounded-[20px] mb-[15px] h-auto"
                  src={`/movie-tickets/assets/${movie.src}`}
                  alt={movie.title}
                />
                <div className="text-[24px] text-[#FFF] text-center font-[600]">
                  {movie.title}
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
