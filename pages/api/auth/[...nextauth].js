// pages/api/auth/[...nextauth].js
import axios from 'axios'
import NextAuth from 'next-auth'
import  Google  from 'next-auth/providers/google'
import { verifyGoogleAccount } from '../../../store/reducers/authReducer';

export default NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    
    // Add other providers if needed
  ],
  callbacks: {
    async signIn(user, account, profile) {
      // Extract user data from the provider's profile object
     
    try {
      await verifyGoogleAccount(user.account.id_token);
      return Promise.resolve(user);
    } catch (error) {
      return Promise.reject(error);
    }
    
  },

      
    },
  // Configure your session, callbacks, and other options
});
