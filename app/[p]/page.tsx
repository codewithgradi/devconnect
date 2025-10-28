import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Bookmark, Heart, MessageCircle } from "lucide-react";
import Image from "next/image";
import t from  '@/public/nodp.png'
import Comment from "@/components/Comment";


export default function DynamicPostPage() {
    const comments = [
        {id:1, username:'pushiner',time:'12h', comment:'I am learning.'},
        {id:2, username:'devslot',time:'12h', comment:'Java is very hard dont you think.'},
        {id:3, username:'devslot',time:'12h', comment:'Java is very hard dont you think.'},
        {id:4, username:'devslot',time:'12h', comment:'Java is very hard dont you think.'},
        {id:5, username:'devslot',time:'12h', comment:'Java is very hard dont you think.'},
        {id:6, username:'devslot',time:'12h', comment:'Java is very hard dont you think.'},
        {id:7, username:'devslot',time:'12h', comment:'Java is very hard dont you think.'},
        {id:8, username:'devslot',time:'12h', comment:'Java is very hard dont you think.'},
        {id:9, username:'devslot',time:'12h', comment:'Java is very hard dont you think.'},
        {id:10, username:'devslot',time:'12h', comment:'Java is very hard dont you think.'},
        {id:12, username:'devslot',time:'12h', comment:'Java is very hard dont you think.'},
        {id:132, username:'devslot',time:'12h', comment:'Java is very hard dont you think.'},
        {id:122, username:'devslot',time:'12h', comment:'Java is very hard dont you think.'},
        {id:21, username:'devslot',time:'12h', comment:'Java is very hard dont you think.'},
    ]
    return (
        <div className="flex items-center justify-center h-screen">
        <div className="border flex rounded-2xl shadow w-fit">
            <Image className="rounded object-cover" src={t} alt="" width={500} height={500} />
                <div className="p-2 w-md">
                <div className="flex justify-between items-center">
                    <div className="flex font-bold gap-x-3 text-green-800">
                        <p>Username</p>
                        <p>. Following</p>
                    </div>
                    <p className="font-bold text-2xl">...</p>
                </div>
                        
                    
                <div className="h-80 overflow-y-scroll">
                        {comments.map(c => (
                            <div key={c.id}>
                                <Comment comment={c.comment} time={c.time} username={ c.username} />
                        </div>
                    ))}
                </div>
                <div className="flex justify-between py-2">
                    <div className="flex gap-x-4">
                        <div>
                            <Heart className="hover:cursor-pointer" />
                            <p>14</p>
                        </div>
                        <div>
                            <MessageCircle className="hover:cursor-pointer"  />
                            <p>14</p>
                        </div>
                    </div>
                    <Bookmark className="hover:cursor-pointer"/>
                </div>
                <div className="flex justify-between items-end gap-x-3 p-3">
                    <Textarea placeholder="Add a comment..." />
                    <Button>comment</Button>
                </div>
            </div>
            </div>
            </div>
    )
}