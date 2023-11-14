/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      apiUrl: 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=ASC',
    },
    experimental: {
        forceSwcTransforms: true,
      },
}

module.exports = nextConfig
