/** @type {import('next').NextConfig} */

// import nextpwa from "next-pwa";

// const withPWA = nextpwa({
//   dest: "public",
// });

const nextConfig = {
  reactStrictMode: false,
  staticPageGenerationTimeout: 1000
  // async redirects() {
  //   return [
  //     {
  //       source: '/auth',
  //       destination: '/',
  //       permanent: false,
  //       basePath: false,
  //     },
  //   ]
  // },
};

// export default withPWA(nextConfig);
export default nextConfig
