const SvgGlow = ({ children }) => (
  <div className="relative min-h-screen bg-[#0D0D0D] overflow-hidden">
    {/* Левый верхний glow */}
    <svg
      className="absolute top-[-400px] left-[-400px] z-0 w-[100%] h-[100px]"
      viewBox="0 0 823 951"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_77_858)">
        <circle cx="774" cy="177" r="224" fill="#1DE782" />
      </g>
      <defs>
        <filter
          id="filter0_f_77_858"
          x="0"
          y="-597"
          width="1548"
          height="1548"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="275"
            result="effect1_foregroundBlur_77_858"
          />
        </filter>
      </defs>
    </svg>

    {/* Контент поверх */}
    <div className="relative z-10 text-white p-10">
      {children || (
        <>
          <h1 className="text-4xl font-bold">Светящиеся SVG-засветки ✨</h1>
          <p className="mt-4 text-lg">Левый верхний и правый нижний угол</p>
        </>
      )}
    </div>
  </div>
);

export default SvgGlow;
