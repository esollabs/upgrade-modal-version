export function ProgressButton() {
  return (
    <>
      <span className="relative size-[18px]  transition-all group-data-[load=true]:!scale-[1.8]">
        <svg
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-100  transition-all duration-300 group-data-[load=true]:scale-0"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" x2="12" y1="15" y2="3" />
        </svg>

        <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 scale-0  items-center justify-center text-white transition-all delay-[350ms] duration-300 group-data-[load=true]:scale-100">
          <svg
            width="16"
            height="16"
            className="animate-spin"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M19.0073 10C19.5555 10 20.0051 10.4456 19.9508 10.9912C19.7381 13.1267 18.8424 15.1472 17.3831 16.7446C15.9238 18.342 13.9924 19.4164 11.8848 19.8208C11.3463 19.9241 10.862 19.5166 10.8125 18.9705V18.9705C10.7631 18.4245 11.1679 17.9479 11.7037 17.8314C13.3175 17.4803 14.7924 16.6368 15.9172 15.4055C17.0421 14.1741 17.7491 12.6292 17.9531 10.9903C18.0209 10.4462 18.459 10 19.0073 10V10Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </span>

      <span className="max-w-[70px] overflow-hidden whitespace-nowrap text-nowrap opacity-100 transition-all duration-300 group-data-[load=true]:max-w-0 group-data-[load=true]:opacity-0">
        Upgrade
      </span>
    </>
  );
}
