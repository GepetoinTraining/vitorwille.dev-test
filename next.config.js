const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/
  })
  
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    pageExtensions: ["ts", "tsx", "mdx"]
  }
  
  module.exports = withMDX(nextConfig)
  