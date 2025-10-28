import AppSidebar from "@/components/AppSidebar";
import Post from "@/components/Post";
import PostContainer from "@/components/PostOverview";

export default function Home() {
  return (
    <div className="grid grid-cols-3">
      <AppSidebar />
      <div>
        <Post />
        <PostContainer/>
        <PostContainer/>
      </div>
    </div>
  )
}
