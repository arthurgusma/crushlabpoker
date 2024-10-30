/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
            },
        ],
    },
    i18n: {
        locales: ["en-US", "pt-BR"],
        defaultLocale: "en-US",
    },
};

export default nextConfig;
