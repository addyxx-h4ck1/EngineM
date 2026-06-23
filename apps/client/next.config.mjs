/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      new URL('https://i.pinimg.com/**'),
      new URL('https://static.thenounproject.com/**'),
      new URL('https://svgrepo.com/**'),
      new URL('https://logo.wine/**'),
      new URL('https://upload.wikimedia.org/**'),
      new URL('https://storage.googleapis.com/**'),
      new URL('https://cdn.dribbble.com/**'),
      new URL('https://blog-assets.freshworks.com/**'),
      new URL('https://media.istockphoto.com/**'),
      new URL('https://nextjs.spruko.com/**'),
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;
