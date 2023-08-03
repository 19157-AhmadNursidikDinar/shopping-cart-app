// tailwind.config.js
module.exports = {
  purge: {
    enabled: true, // Aktifkan ketika siap untuk produksi
    content: ['./src/**/*.js'],
  },
  mode: 'jit', // Matikan mode JIT jika tidak diperlukan
  theme: {},
  variants: {},
  plugins: [],
};
