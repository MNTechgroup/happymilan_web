import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from 'react-redux';
import store from "../store/store";
import { SessionProvider } from 'next-auth/react'
import useFcmToken from "../utils/hooks/useFcmToken";
import { setCookie } from "cookies-next";
import { DarkModeProvider } from "../ContextProvider/DarkModeContext";
// import Nextjsprogress from 'nextjs-progressbar'
import { UsersConversationProvider } from "../ContextProvider/UsersConversationContext";
import { SocketProvider } from "../ContextProvider/SocketContext";
import Head from "next/head";
import "./global.css";
import { ChatSettingsProvider } from "../ContextProvider/ChatSetingContext";
// import { DrawerProvider } from "../ContextProvider/DrawerContext";



export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const { fcmToken, notificationPermissionStatus } = useFcmToken();


  // Use the token as needed
  useEffect(() => {
    if (fcmToken) {
      setCookie("fcmToken", fcmToken, { path: '/', maxAge: 604800 }); // Set the token in a cookie with a 7-day expiration (maxAge is in seconds)
      console.log('FCM token stored in cookie:', fcmToken);
      // You can perform further actions with the FCM token here
    }
  }, [fcmToken]);

  return (
    <>

      <Head>
        <title>HappyMilan</title>
        <meta name="description" content="Your meta description goes here" />
        {/* Add more meta tags as needed */}
      </Head>


      <Provider store={store}>
        <SessionProvider>
          <DarkModeProvider>
            <SocketProvider>
              <UsersConversationProvider>
                <ChatSettingsProvider>
                  {/* <DrawerProvider> */}
                    <ThemeProvider>

                      {/* <Nextjsprogress height={2} color="#3742b6" /> */}
                      {/* <Component {...pageProps} toggleDarkMode={toggleDarkMode} darkMode={darkMode}/> */}

                      <Component {...pageProps} />
                    </ThemeProvider>
                  {/* </DrawerProvider> */}
                </ChatSettingsProvider>
              </UsersConversationProvider>
            </SocketProvider>
          </DarkModeProvider>
        </SessionProvider>
      </Provider>
    </>
  )
}


