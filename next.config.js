/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = "";
let basePath = "/";

if (isGithubActions) {
  // 去掉 `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}
const nextConfig = {
    // basePath,
    assetPrefix,
    reactStrictMode: true,
    // output: 'export'
    webpack: (config) => {
        config.module.rules.push({
            test: /\.node/,
            use: ["raw-loader"],
        });
        return config;
    }
};

module.exports = nextConfig;
