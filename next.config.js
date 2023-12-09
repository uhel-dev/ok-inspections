/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost', 'media.graphassets.com', 'cdn.vdicheck.com']
    },
    async redirects() {
        return [
        ]
    }
}

module.exports = nextConfig

