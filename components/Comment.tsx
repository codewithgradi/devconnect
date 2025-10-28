type CommentProps = {
    username: string;
    time: string;
    comment: string;
}
export default function Comment({username, time, comment}:CommentProps) {
    return (
        <div className="p-3" >
            <div className="flex gap-x-4">
                <p>{username}</p>
                <p>{ time}</p>
            </div>
            <p>{comment}</p>
        </div>
    )
}


