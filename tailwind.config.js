/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                pink: {
                    50: '#fff0f5',   // Lavender Blush
                    100: '#ffe4e1',  // Misty Rose
                    200: '#ffc1e3',  // Light Pink
                    300: '#ff9ecf',  // Soft Pink
                    400: '#ff69b4',  // Hot Pink (Primary)
                    500: '#e91e63',  // Darker Pink/Rose
                    600: '#d81b60',  // Deep Rose
                    700: '#c2185b',
                    800: '#880e4f',
                    900: '#6d0c41',
                },
                brown: {
                    800: '#5d4037', // Text color
                    900: '#3e2723',
                },
                gold: {
                    DEFAULT: '#d4af37',
                    light: '#f1c40f',
                }
            },
            fontFamily: {
                'dancing': ['"Dancing Script"', 'cursive'],
                'poppins': ['"Poppins"', 'sans-serif'],
            },
            backgroundImage: {
                'pink-gradient': 'linear-gradient(135deg, #fff5f8 0%, #ffe4e1 100%)',
                'soft-paper': "url('https://www.transparenttextures.com/patterns/cream-paper.png')", // Optional texture
            },
            boxShadow: {
                'glow': '0 0 15px rgba(255, 105, 180, 0.5)',
                'card': '0 10px 30px rgba(0, 0, 0, 0.05)',
            },
            animation: {
                'float': 'float 4s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        },
    },
    plugins: [],
}
