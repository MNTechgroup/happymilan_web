import React, { useEffect } from "react";
import Head from "next/head";
import "./global.css";
import { ThemeProvider } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { Provider } from 'react-redux';
import store from '../store/store';
//import { SessionProvider } from "next-auth/react";

// function MyApp({ Component, pageProps }) {
//   return (
//     <React.Fragment>

//       <Head>
//         <title>HappyMilan</title>
//         <meta
//           name="viewport"
//           content="minimum-scale=1, initial-scale=1, width=device-width"
//         />
//       </Head>
//       <ThemeProvider>
//         <Component {...pageProps} />
//       </ThemeProvider>

//     </React.Fragment>
//   );
// }

// export default MyApp;


//2


export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const router = useRouter();
  // const { data: session } = useSession(); // Use useSession from next-auth/react

  return (

    <Provider store={store}>
     
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      
    </Provider>
  )
}


//3

// import { SessionProvider } from 'next-auth/react'; // Import SessionProvider
// import { Provider as AuthProvider } from 'next-auth'; // Import AuthProvider
// import { useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { useSession } from 'next-auth/react'; // Import useSession

// function MyApp({ Component, pageProps }) {
//   const router = useRouter();
//   const { data: session } = useSession(); // Use useSession from next-auth/react

//   useEffect(() => {
//     // Check if the user is authenticated
//     if (session) {
//       // Redirect to the dashboard if authenticated
//       router.push('/dashboard');
//     }
//   }, [session, router]);

//   return (
//     <AuthProvider session={pageProps.session}>
//       {/* Wrap your app with AuthProvider */}
//       <SessionProvider session={pageProps.session}>
//         {/* Wrap your app with SessionProvider */}
//         <Component {...pageProps} />
//       </SessionProvider>
//     </AuthProvider>
//   );
// }

// export default MyApp;



