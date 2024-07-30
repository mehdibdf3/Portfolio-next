import withPlugins from 'next-compose-plugins';
import withImages from 'next-images';

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    return config;
  },
};

export default withPlugins(
  [
    [withImages, {}],
  ],
  nextConfig
);
