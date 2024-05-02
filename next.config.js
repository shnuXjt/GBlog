/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = "";
let basePath = "";

if (isGithubActions) {
  // 去掉 `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  // assetPrefix = `/${repo}/`;
  // basePath = `/${repo}`;
  assetPrefix = "";
  basePath = "";
}
const nextConfig = {
    basePath,
    assetPrefix,
    output: 'export',
};

module.exports = nextConfig;
