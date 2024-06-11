import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "static/pdf/",
            publicPath: "/_next/static/pdf/",
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
