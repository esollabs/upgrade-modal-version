import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  experimental: {
    matchVariant: true,
  },
  safelist: [
    {
      pattern: /scale-(.*)/,
      variants: ["group-data"],
    },
    {
      pattern: /max-h-(.*)/,
      variants: ["group-data"],
    },
  ],
  plugins: [],
} satisfies Config;
