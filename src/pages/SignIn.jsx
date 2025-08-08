import React from "react";

const SignIn = () => {
  return (
    <div className="grid grid-cols-2 min-h-screen">
      {/* Левая колонка с фоном */}
      <div className="relative w-full min-h-screen bg-[#000] overflow-hidden">
        {/* Зеленое свечение слева снизу */}
        <div className="absolute left-[-50%] bottom-[-80%] w-[60vw] h-[60vw] bg-[#15803d] rounded-full blur-[120px] opacity-40" />

        {/* Зеленое свечение справа сверху */}
        <div className="absolute right-[-20%] top-[-80%] w-[50vw] h-[50vw] bg-[#166534] rounded-full blur-[100px] opacity-50" />

        {/* Основной контент */}
        <div className="relative z-10 flex flex-col">
          {/* Левая колонка */}
          <div className="flex flex-wrap justify-between items-center py-[40px] px-[50px]">
            <a href="/" className="mb-[25rem]">
              <img src="../src/assets/logo.png" alt="Logo" />
            </a>
            <div className="text-[36px] md:text-[56px] text-[#FFF] font-[300] italic max-w-[596px] break-words">
              Welcome. Begin your cinematic adventure now with our ticketing
              platform!
            </div>
          </div>
        </div>
      </div>

      {/* Правая колонка */}
      <div className="flex justify-center items-center bg-white p-8">
        <div className="w-[450px]">
          <div className="text-[30px] text-[#101012] font-[600] mb-[32px]">
            Create an account
          </div>
          <form>
            <div className="mb-[24px]">
              <label
                className="block text-[16px] text-[#5a5a5d] capitalize mb-[12px]"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="block w-full h-[48px] rounded-[8px] border border-solid border-[#bebebf] px-[12px]"
                type="email"
                id="email"
                placeholder="balamia@gmail.com"
              />
            </div>
            <div className="mb-[24px]">
              <label
                className="block text-[16px] text-[#5a5a5d] capitalize mb-[12px]"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="block w-full h-[48px] rounded-[8px] border border-solid border-[#bebebf] mb-[12px] px-[12px]"
                type="password"
                id="password"
                placeholder="Enter your password"
              />
              <input
                className="block w-full max-w-[450px] h-[48px] rounded-[8px] border border-solid border-[#bebebf] px-[12px]"
                type="password"
                placeholder="Confirm your password"
              />
            </div>
            <button className="text-[16px] text-[#FFF] font-[600] w-full h-[48px] rounded-[8px] bg-[#1de782] border-transparent cursor-pointer mb-[24px]">
              Create account
            </button>
            <div className="flex justify-center gap-[8px]">
              <span className="text-[16px] text-[#bebebf] capitalize">
                Already have an account?
              </span>
              <a
                className="text-[16px] text-[#1de782] capitalize"
                href="/login"
              >
                Log in
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
