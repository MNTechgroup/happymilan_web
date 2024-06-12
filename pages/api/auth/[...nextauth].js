import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    GitHubProvider({
      clientId: 'Iv1.ab538f23a24477bc',
      clientSecret: 'b879c41692299edb2dec383c79c141a33ae8a1f4',
    }),
    GoogleProvider({
      clientId: '203134319873-i6nligpvngt2v89l03itj2qd39n8r8or.apps.googleusercontent.com',
      clientSecret: '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',
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
