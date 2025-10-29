import Image from "next/image";
import { Button } from "./ui/button";

type SuggestionProps = {
    img: string;
    username: string;
}
type SuggestionsContainerProps = {
    accounts : SuggestionProps[]
}



function Suggestion({img, username} : SuggestionProps) {
    return (
        <div className="p-2 flex justify-between w-70 items-center ">
            <div className="flex gap-x-3">
                <Image
                className="rounded-2xl p-1 border w-10 h-10"
                src={img}
                alt="Profile image"
                width={30}
                height={30} />
            <p className="font-bold">{username}</p>
            </div>
            <Button className="bg-green-500 hover:bg-green-700 cursor-pointer">Connect</Button>
        </div>
    )
}

export default function SuggestionsContainer({accounts }:SuggestionsContainerProps ) {
    return (
        <div>
            {accounts.map(s => (
                <Suggestion key={Math.random()} img={'/public/nodp.png' } username={'devstart'}  />
            ))}
        </div>
    )
}