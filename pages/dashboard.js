import {auth} from "../utils/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import {useRouter} from "next/router";
import {useEffect} from "react";

export default function Dashboard(){
    const rout = useRouter()
    const [user, loading] = useAuthState(auth)
    //See if user logged
    const getData = async() => {
        if (loading) return
        if(!user) return rout.push('/auth/login')
    }
    //get users data
    useEffect(()=> {
        getData()
    }, [user, loading])



    return (
        <div>
            <h1>Your posts</h1>
            <div>posts</div>
            <button onClick={()=> auth.signOut()}>Sign out</button>
        </div>
    )
}