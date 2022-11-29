

export default function Message({children, description, user, username, avatar, id}) {
    return(
        <div className={'bg-white p-8 border-b-2 rounded-lg'}>
            <div className={'flex items-center gap-2 '}>
                <img src={avatar} className={'w-10 rounded-full'}/>
                <h2 className={'font-poppins'}>{username}</h2>
            </div>
            <div className={'py-4'}>
                <p>{description}</p>
            </div>
            {children}
        </div>
    )
}