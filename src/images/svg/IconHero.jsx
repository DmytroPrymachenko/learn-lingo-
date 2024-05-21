const IconHero = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24} // Changed width to 24px
    height={24} // Changed height to 24px
    className="h-full w-full"
    style={{
      color: "#e4ab00",
    }}
    {...props}
  >
    <rect
      width={24}
      height={24}
      fill="transparent"
      paintOrder="stroke"
      rx={30}
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="#E4AB00"
      style={{
        display: "inline-block",
        verticalAlign: "middle",
      }}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  </svg>
);
export default IconHero;
