/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost', 'media.graphassets.com', 'cdn.vdicheck.com']
    },
    async redirects() {
        return [
            // SEARCH BY REDIRECTS
            {
                source: "/tyres/search-by-brand",
                destination: "/tyres/find/by-brand",
                permanent: true
            },
            {
                source: "/tyres/search-by-reg-number",
                destination: "/tyres/find/by-registration",
                permanent: true
            },
            {
                source: "/tyres/search-by-tyre-size",
                destination: "/tyres/find/by-size",
                permanent: true
            },
            {
                source: "/tyres/search-by-car-make",
                destination: "/tyres/find/by-make",
                permanent: true
            },
            // TYRES FITTING OPTIONS REDIRECTS
            {
                source: "/tyres/services/new-car-tyres",
                destination: "/tyres/fitting-options/new-car-tyres",
                permanent: true
            },
            {
                source: "/tyres/services/part-worn-tyres",
                destination: "/tyres/fitting-options/part-worn-tyres",
                permanent: true
            },
            {
                source: "/tyres/services/used-car-tyres",
                destination: "/tyres/fitting-options/part-worn-tyres",
                permanent: true
            },
            {
                source: "/tyres/services/wheel-balancing",
                destination: "/tyres/services/wheel-services/wheel-balancing",
                permanent: true
            },
            // MOBILE TYRE FITTING REDIRECTS
            {
                source: "/tyres/services/mobile-tyre-fitting",
                destination: "/mobile-tyre-fitting",
                permanent: true
            },
            {
                source: "/tyres/services/mobile-tyre-fitting-at-home",
                destination: "/mobile-tyre-fitting/at-home",
                permanent: true
            },
            {
                source: "/tyres/services/mobile-tyre-fitting-at-work",
                destination: "/mobile-tyre-fitting/at-work",
                permanent: true
            },
            // OLD SERVICES REDIRECTS
            {
                source: "/express-tyre-fitting",
                destination: "tyres/services/express-tyre-fitting",
                permanent: true
            },
            {
                source: "/tyres/cars/mercedes",
                destination: "/tyres/cars/mercedes-benz",
                permanent: true
            },


        ]
    }
}

module.exports = nextConfig

