import Image from "next/image";
import { Heart, MessageCircle, Bookmark } from 'lucide-react'
import t from  '@/public/nodp.png'
import Link from "next/link";
export default function PostContainer() {
    return (
        <div className="font-bold">
            <div className="flex justify-between p-1 items-center">
                <div className="flex gap-x-2 ">
                    <p>username</p>
                    <p>.2h</p>
                </div>
                <p className="text-2xl">...</p>
            </div>
            <Link href={'/username/posts/id'}>
                <Image
                            src={t}
                            width={500}
                            height={500}
                    alt="user profile"
                    className="object-cover rounded-2xl"
                    />
                </Link>
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
        </div>
    )
}