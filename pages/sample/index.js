import { signIn, signOut, SessionProvider, useSession } from 'next-auth/react';


function SignInComponent() {
  const { data: session } = useSession();

  return (
    <div>
      {!session ? (
        <button onClick={() => signIn('google')}>Sign in with Google</button>
      ) : (
        <button onClick={() => signOut()}>Sign out</button>
      )}
    </div>
  );
}

export default SignInComponent
