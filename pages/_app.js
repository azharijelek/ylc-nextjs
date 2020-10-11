import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Head from 'next/head'
import NavBar from '@/components/NavBar'
import '../styles/globals.css'
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme';

/**
 * YLC App
 * @param {Component, pageProps} param0 
 */
function ylcApp({ Component, pageProps }) {
	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	return (
		<>
			<Head>
				<title>Your Life Choices</title>
				<link rel="manifest" href="/manifest.json"></link>
				<link rel="icon" href="/favicon.ico"></link>
				<link rel="apple-touch-icon" href="/icons/apple-icon-180x180-dunplab-manifest-18305.png"></link>
				<meta name="theme-color" content="#317EFB" />
			</Head>
			<ThemeProvider theme={theme}>
				<div className="root">
					<NavBar/>
					<CssBaseline />
					<Component {...pageProps} />
				</div>
			</ThemeProvider>

			<style jsx>{`
				.root {
					flex-grow: 1;
					padding-top: 60px;
				}
			`}</style>
		</>
	)
}

export default ylcApp
