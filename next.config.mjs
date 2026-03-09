/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Tambahkan baris ini
  images: {
    unoptimized: true, // Tambahkan ini agar gambar di portfolio kamu tidak error saat export
  },
};

export default nextConfig;