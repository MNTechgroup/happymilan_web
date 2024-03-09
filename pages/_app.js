import React from "react";
import "./global.css";
import { ThemeProvider } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { Provider } from 'react-redux';
import store from "../store/store";


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
// // import { useEffect } from 'react';
// // import { useRouter } from 'next/router';
// // import { useSession } from 'next-auth/react'; // Import useSession

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



