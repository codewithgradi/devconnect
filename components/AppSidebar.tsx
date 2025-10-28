import { Home, Bell, Search, Mail, Bookmark,Settings, Users, User,LucideProps } from 'lucide-react'
import Image from 'next/image'
import logo from '@/public/logo.png'
import { ForwardRefExoticComponent, RefAttributes } from 'react' 
import Link from 'next/link';

export default function AppSidebar() {
  type IconComponent = ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  type ItemsProps = {
    id:number
    icon: IconComponent,
      url: string,
      title:string,
  }

  const items : ItemsProps[] = [
    {
      id:1,
      icon: Home,
      url: '#',
      title:'Home'
    },
    {
      id:2,
      icon: Search,
      url: '#',
      title:'Expore'
    },
    {
      id:3,
      icon: Bell,
      url: '#',
      title:'Notification'
    },
    {
      id:4,
      icon: Mail,
      url: '#',
      title:'Inbox'
    },
    {
      id:5,
      icon: Users,
      url: '#',
      title:'Communities'
    },
    {
      id:6,
      icon: Bookmark,
      url: '#',
      title:'Saved Posts'
    },
    {
      id:7,
      icon: User,
      url: '#',
      title:'Profile'
    },
    {
      id:8,
      icon: Settings,
      url: '#',
      title:'Settings'
    },
  ]
  return (
    <div>
      <nav className='w-2xl fixed'>
      <Image src={ logo} alt='Logo' width={100} height={100}/>
        
            <ul>
          {items.map(item => (
            <Link href={item.url} key={item.id}>
                <li  className='flex items-center p-5 gap-5'>
                  <item.icon className='text-green-800'/>
                  <span>{ item.title}</span>
              </li>
            </Link>
              ))}
            </ul>
      </nav>
    </div>
  )
}