import React, { useState } from "react";
import LoginPopup from "../components/LoginPopup";

const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(true); // Открываем модальное окно по умолчанию

  const openModal = () => setIsModalOpen(true); // Функция для открытия модального окна
  const closeModal = () => setIsModalOpen(false); // Функция для закрытия модального окна
  return (
    <div className="relative w-full min-h-screen bg-[#000] overflow-hidden">
      {/* Зеленое свечение слева снизу */}
      <div className="absolute left-[-30%] bottom-[-30%] w-[60vw] h-[60vw] bg-[#15803d] rounded-full blur-[120px] opacity-40" />

      {/* Зеленое свечение справа сверху */}
      <div className="absolute right-[-20%] top-[-20%] w-[50vw] h-[50vw] bg-[#166534] rounded-full blur-[100px] opacity-50" />

      {/* Основной контент */}
      <div className="relative z-10 flex flex-col min-h-screen max-w-[1390px] mx-auto px-[15px]">
        <LoginPopup isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
};

export default Login;
