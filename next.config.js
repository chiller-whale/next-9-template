const withPlugins = require("next-compose-plugins")

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"], // Handles converting svgs to react components.
    })
    return config
  },
}

module.exports = withPlugins([withBundleAnalyzer], nextConfig)
