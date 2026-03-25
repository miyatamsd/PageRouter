// Next.jsの基本設定ファイル
/** @type {import('next').NextConfig} */

const appEnv = process.env.APP_ENV || 'default';
const distDir = appEnv === 'production' ? '.next' : `.next-${appEnv}`;

module.exports = {
  reactStrictMode: true,
  // ビルドコマンドで渡した APP_ENV をそのまま出力先名に反映
  distDir: `.next-${appEnv}`,
  // env ファイルの REMOVE_CONSOLE=true/false で制御
  compiler: {
    removeConsole: process.env.REMOVE_CONSOLE === 'true',
  },
  env: {
    APP_ENV: process.env.APP_ENV,
  },
  // 必要に応じて他の設定を追加してください
};

