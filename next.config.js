// Next.jsの基本設定ファイル
/** @type {import('next').NextConfig} */

const appEnv = process.env.APP_ENV || 'default';
const distDir = appEnv === 'production' ? '.next' : `.next-${appEnv}`;

module.exports = {
  reactStrictMode: true,
  // production は Vercel 互換の .next、それ以外は環境名付き
  distDir,
  // env ファイルの REMOVE_CONSOLE=true/false で制御
  compiler: {
    removeConsole: process.env.REMOVE_CONSOLE === 'true',
  },
  env: {
    APP_ENV: process.env.APP_ENV,
  },
  // 必要に応じて他の設定を追加してください
};

