import { Button } from '@nextui-org/react/';

export default function Login() {

    const signIn = () => {

    }
    const signOut = () => {

    }

    // if (session) {
    //     return (
    //         <>
    //             Signed in as {session.user.email} <br />
    //             <Button onClick={() => signOut()}>Sign out</Button>
    //         </>
    //     )
    // }
    return (
        <>
            Not signed in <br />
            <Button onClick={() => signIn()}>Sign in</Button>
        </>
    )
}