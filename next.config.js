/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: [
      "being-marvel-public-assets.s3.eu-west-1.amazonaws.com",
      "https://beingmarvelblogs381553-dev.s3.eu-west-1.amazonaws.com",
      "beingmarvelblogs381553-dev.s3.eu-west-1.amazonaws.com",
    ],
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "being-marvel-public-assets.s3.eu-west-1.amazonaws.com",
  //       port: "",
  //       pathname: "*",
  //     },
  //   ],
  // },
  reactStrictMode: true,
};
