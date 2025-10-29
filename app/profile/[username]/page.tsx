import AppSidebar from "@/components/AppSidebar";
import ProfileInfo from "@/components/ProfileInfo";


export default function ProfilePage() {

  return (
    <div className="flex">
      <AppSidebar />
      <ProfileInfo/>
    </div>
  )
}