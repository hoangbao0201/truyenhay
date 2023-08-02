import '@/styles/globals.css'
import { NextPage } from 'next'
import { Router } from "next/router";
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'


import "moment/locale/vi";
import "nprogress/nprogress.css";
import NProgress from "nprogress";

// Redux
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

// Toastify
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { SessionProvider } from 'next-auth/react';

//Binding events
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
NProgress.configure({ showSpinner: false });


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <>
      <SessionProvider session={session}>
        <Provider store={store}>
          {getLayout(<Component {...pageProps} />)}
        </Provider>
      </SessionProvider>
      
      <ToastContainer />
    </>
  )
}
