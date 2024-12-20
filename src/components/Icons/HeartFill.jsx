const Heart = (props) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 40 36"
        {...props}
      >
        <g clipPath="url(#a)">
          <path
            stroke="var(--red)"
            fill="var(--red)"
            d="m18.765 31.546-.003-.004c-5.2-4.625-9.312-8.294-12.154-11.704C3.793 16.458 2.5 13.65 2.5 10.79 2.5 6.157 6.172 2.5 11 2.5c2.742 0 5.402 1.265 7.119 3.227a2.5 2.5 0 0 0 3.762 0C23.598 3.765 26.258 2.5 29 2.5c4.828 0 8.5 3.657 8.5 8.29 0 2.86-1.293 5.669-4.108 9.048-2.842 3.41-6.954 7.08-12.154 11.704l-.003.004L20 32.648z"
            strokeLinejoin="round"
            strokeWidth="5"
          />
        </g>
      </svg>
    );
  };
  
  export default Heart;
  