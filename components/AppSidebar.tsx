import { Home, Bell, Search, Mail, Bookmark, Settings, Users, User, LucideProps } from 'lucide-react'
import Image from 'next/image'
import logo from '@/public/logo.png'
import { ForwardRefExoticComponent, RefAttributes } from 'react'
import Link from 'next/link';

export default function AppSidebar() {
    type IconComponent = ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
    type ItemsProps = {
        id: number
        icon: IconComponent,
        url: string,
        title: string,
    }

    const items: ItemsProps[] = [
        {
            id: 1,
            icon: Home,
            url: '#',
            title: 'Home'
        },
        {
            id: 2,
            icon: Search,
            url: '#',
            title: 'Explore'
        },
        {
            id: 3,
            icon: Bell,
            url: '#',
            title: 'Notification'
        },
        {
            id: 4,
            icon: Mail,
            url: '#',
            title: 'Inbox'
        },
        {
            id: 5,
            icon: Users,
            url: '#',
            title: 'Communities'
        },
        {
            id: 6,
            icon: Bookmark,
            url: '#',
            title: 'Saved Posts'
        },
        {
            id: 7,
            icon: User,
            url: '/profile/i',
            title: 'Profile'
        },
        {
            id: 8,
            icon: Settings,
            url: '#',
            title: 'Settings'
        },
    ]

    const SidebarItem: React.FC<ItemsProps> = ({ icon: Icon, url, title }) => (
        <Link 
            href={url} 
            className="group block p-3 xl:p-4 rounded-full transition duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
            <li className='flex items-center gap-5'>
                <Icon className='w-6 h-6 text-green-700 dark:text-green-500 xl:group-hover:text-green-800 xl:group-hover:dark:text-green-400'/>
                {/* Text is visible on large screens (xl) and hidden on medium (md) and small screens */}
                <span className='hidden xl:inline text-lg font-medium text-gray-800 dark:text-gray-200'>
                    {title}
                </span>
            </li>
        </Link>
    );

    const MobileNavItem: React.FC<ItemsProps> = ({ icon: Icon, url, title }) => (
        <Link href={url} className="flex flex-col items-center justify-center p-2 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
            <Icon className='w-6 h-6' />
            <span className='text-xs mt-1'>{title}</span>
        </Link>
    );

    return (
        <>
            {/* 1. Desktop/Tablet Sidebar (Hidden on Small Screens) */}
            <nav className='hidden md:flex flex-col h-screen fixed top-0 left-0 p-4 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900'>
                {/* Logo and App Name */}
                <div className='mb-6 p-2'>
                    <Image 
                        src={logo} 
                        alt='Logo' 
                        width={40} 
                        height={40}
                        className='xl:hidden' // Show only icon on tablet view
                    />
                    <div className='hidden xl:block'>
                        <Image 
                            src={logo} 
                            alt='Logo' 
                            width={100} 
                            height={100}
                        />
                    </div>
                </div>

                {/* Navigation Items (Tablet/Desktop) */}
                <ul className='flex flex-col space-y-2'>
                    {items.map(item => (
                        // Use SidebarItem for the icon/text logic
                        <SidebarItem key={item.id} {...item} />
                    ))}
                </ul>
            </nav>

            {/* 2. Mobile Bottom Navigation (Hidden on Medium and Large Screens) */}
            <nav className='fixed bottom-0 left-0 right-0 h-16 md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg z-50 '>
                <ul className='flex justify-around h-full'>
                    {/* Only show a subset of icons for bottom nav */}
                    {items.slice(0, 4).map(item => (
                        <li key={item.id}>
                            <MobileNavItem {...item} />
                        </li>
                    ))}
                </ul>
            </nav>

            {/* * IMPORTANT: Add a wrapper div to push main content
                * away from the fixed sidebar on larger screens
            */}
            <div className="md:pl-20 xl:pl-[250px] min-h-screen">
                {/* Your main content will go here, e.g., <main>...</main> */}
                {/* The padding accounts for the width of the sidebar */}
            </div>
        </>
    )
}