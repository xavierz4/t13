// next.config.mjs
import withPWA from 'next-pwa';

export default withPWA({
  pwa: {
    dest: 'public',
  },
  reactStrictMode: true,
});