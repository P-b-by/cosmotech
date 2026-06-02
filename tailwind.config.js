export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#F8FAFC',
        panel: '#1E293B',
        primary: '#1D4ED8',
        accent: '#9333EA',
        action: '#F59E0B',
        detail: '#22D3EE'
      },
      boxShadow: {
        soft: '0 24px 80px rgba(15, 23, 42, 0.12)'
      }
    }
  },
  plugins: []
};
