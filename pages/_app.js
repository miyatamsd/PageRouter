
import '../styles/global.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
    const router = useRouter();
    useEffect(() => {
        // 環境名を判定してログ出力
        const env = process.env.APP_ENV;
        if (env === 'maintenance') {
            console.log('現在の環境: 保守環境 (maintenance)');
            console.info('保守環境では、サイトは一時的に利用できません。ご迷惑をおかけしますが、しばらくお待ちください。');
            console.warn('保守環境では、サイトの機能が制限される可能性があります。');   
            console.error('保守環境でエラーが発生した場合は、管理者に連絡してください。');
        } else if (env === 'staging') {
            console.log('現在の環境: 接続検証環境 (staging)');
        } else if (process.env.NODE_ENV === 'development') {
            console.log('現在の環境: 開発環境 (development)');
        } else if (process.env.NODE_ENV === 'production') {
            console.log('現在の環境: 本番環境 (production)');
        } else {
            console.log('現在の環境: 不明');
        }

        const handleRouteChange = (url) => {
            console.log('ページ遷移:', url);
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);
    return <Component {...pageProps} />;
}