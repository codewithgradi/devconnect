import AppSidebar from "@/components/AppSidebar";
import Post from "@/components/Post";
import PostContainer from "@/components/PostOverview";
import SuggestionsContainer from "@/components/Suggestions";

export default function Home() {
  const acoounts = [
    {id:1, img:'',username:'davstart'},
    {id:2, img:'',username:'davstart'},
  ]
  return (
    <div className="grid grid-cols-2">
      <div>
        <Post />
        <PostContainer/>
        <PostContainer/>
      </div>
      <div className=" my-40 mx-20">
        <p className="font-bold opacity-30  ">Suggested for you</p>
        <SuggestionsContainer accounts={acoounts}/>
      </div>
    </div>
  )
}
