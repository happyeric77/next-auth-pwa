import { MetadataRoute } from 'next';

const manifest: () => MetadataRoute.Manifest = () => ({
  name: 'My App',
  short_name: 'My App',
  start_url: '/',
  display: 'standalone',
  background_color: '#f7f7f7',
  theme_color: '#f7f7f7',
  icons: [
    {
      src: '/icon-128x128.png',
      sizes: '128x128',
      type: 'image/png',
    },
    {
      src: '/icon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
  ],
});

export default manifest;
