import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Head from 'next/head'
import NavBar from '@/components/NavBar'
import '../styles/globals.css'
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme';
import { SWRConfig } from 'swr'
import fetch from '../lib/fetchJson'

// State management
// import { useStore } from '@/store'
// import { Provider } from 'react-redux'
// import { persistStore } from 'redux-persist'
// import { PersistGate } from 'redux-persist/integration/react'

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

	// const store = useStore(pageProps.initialReduxState)
	// const persistor = persistStore(store, {}, function () {
	// 	persistor.persist()
	// });

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
					<CssBaseline />
					<SWRConfig
						value={{
						fetcher: fetch,
						onError: (err) => {
						console.error(err)
						},
					}}>
						{/* <Provider store={store}>
							<PersistGate loading={<div>loading</div>} persistor={persistor}> */}
								<NavBar/>
								<Component {...pageProps} />
							{/* </PersistGate>
						</Provider> */}
					</SWRConfig>
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
