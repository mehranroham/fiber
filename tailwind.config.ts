import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins-Medium': 'Poppins-Medium',
        'Poppins-Regular': 'Poppins-Regular',
        'Poppins-Bold': 'Poppins-Bold',
        'Poppins-Light': 'Poppins-Light',
      },
      colors: {
        'header-bg': '#FBF8F3',
        primary: '#4D13D1',
      },
    },
  },
  plugins: [],
};
export default config;
