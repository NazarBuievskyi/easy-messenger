import {auth, db} from "../utils/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {collection, onSnapshot, query, where} from "firebase/firestore";
import Message from "../components/Message";
import {BsFillTrashFill} from 'react-icons/bs'
import {AiFillEdit} from 'react-icons/ai'

export default function Dashboard() {
    const rout = useRouter()
    const [user, loading] = useAuthState(auth)
    const [posts, setPosts] = useState([])
    //See if user logged
    const getData = async () => {
        if (loading) return
        if (!user) return rout.push('/auth/login')
        const collectionRef = collection(db, 'posts')
        const q = query(collectionRef, where('user', '==', user.uid))
        const unsubscribe = onSnapshot(q, (snapshot => {
            setPosts(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }))
        return unsubscribe
    }
    //get users data
    useEffect(() => {
        getData()
    }, [user, loading])

    return (
        <div>
            <h1>Your posts</h1>
            <div>
                {posts.map(post => (
                    <Message {...post} key={post.id}>
                        <div className={'flex gap-4'}>
                            <button className={'text-pink-600 flex items-center justify-center gap-2 py-2 text-sm'}><BsFillTrashFill className={'text-xl'}/>Delete</button>
                            <button className={'text-teal-600 flex items-center justify-center gap-2 py-2 text-sm'}><AiFillEdit className={'text-xl'}/>Edit</button>
                        </div>
                    </Message>
                ))}
            </div>
            <button className={'font-medium text-white bg-gray-800 py-2 px-4 my-6'} onClick={() => auth.signOut()}>Sign out</button>
        </div>
    )
}