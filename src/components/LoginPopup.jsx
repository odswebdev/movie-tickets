import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../context/AuthContext";

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modal = {
  hidden: { opacity: 0, scale: 0.8, y: "-50%" },
  visible: { opacity: 1, scale: 1, y: "0%" },
};

const LoginPopup = ({ isOpen, onClose }) => {
  const { login } = useAuth(); // импортируем login

  const handleSubmit = (e) => {
    e.preventDefault();
    login(); // Вход
    onClose(); // Закрыть попап
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-[0px] flex items-center justify-center"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="relative bg-[#FFF] px-[44px] py-[61.5px] rounded-[10px] shadow-xl w-[100%] max-w-[34.2rem]"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-[30px] text-[#101012] font-[600] mb-[32px]">
              Login to your account
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 w-full"
            >
              <div className="mb-[24px]">
                <label className="text-[16px] capitalize text-[#5a5a5d]">
                  Email
                </label>
                <input
                  type="email"
                  className="block w-full h-[48px] rounded-[8px] mt-[12px] border border-solid border-[#bebebf] px-[12px]"
                  placeholder="you@example.com"
                />
              </div>

              <div className="mb-[32px]">
                <label className="text-[16px] capitalize text-[#5a5a5d]">
                  Password
                </label>
                <input
                  type="password"
                  className="block w-full h-[48px] rounded-[8px] mt-[12px] border border-solid border-[#bebebf] px-[12px]"
                  placeholder="Enter your password"
                />
              </div>

              <button
                type="submit"
                className="w-full h-[48px] bg-[#1de782] text-[#FFF] rounded-[8px] box-border px-4 cursor-pointer"
              >
                <span className="px-[16px]">Login now</span>
              </button>

              <p className="text-center text-[16px] text-[#bebebf] mt-2">
                Don’t Have An Account?{" "}
                <span className="text-[16px] text-[#1de782] cursor-pointer">
                  Register Here
                </span>
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginPopup;
