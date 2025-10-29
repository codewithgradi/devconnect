import Image from "next/image";
import { Grid, Bookmark } from 'lucide-react'
import { Button } from "@/components/ui/button";
import t from '@/public/logo.png' 
import { Metadata } from "next";

export const metaData: Metadata = {
  title: 'Dev Connect | Username',
  description: 'This is the profile page'
}

export default function ProfileInfo() {

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-xl min-h-screen ">

      {/* Profile Header Section */}
      <section className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-gray-200 dark:border-gray-700">
        
        {/* Profile Image */}
        <div className="shrink-0">
          <Image
            src={t}
            width={120} // Smaller size for a profile avatar
            height={120} // Smaller size for a profile avatar
            alt="profile image"
            className="rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-md"
          />
        </div>

        {/* Profile Info */}
        <div className="grow text-center sm:text-left mt-4 sm:mt-0">
          <p className="text-2xl font-bold text-gray-900 dark:text-white">Username</p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">Full Name</p>

          {/* Stats */}
          <div className="flex justify-center sm:justify-start space-x-6 lg:space-x-10 mb-4">
            <div className="text-center">
              <span className="block text-xl font-semibold text-gray-800 dark:text-gray-200">0</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">Posts</span>
            </div>
            {/* Note: I'm assuming the two 'Posts' paragraphs were meant to be different stats, e.g., Followers/Following */}
            <div className="text-center"> 
              <span className="block text-xl font-semibold text-gray-800 dark:text-gray-200">0</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">Followers</span> 
            </div>
            <div className="text-center">
              <span className="block text-xl font-semibold text-gray-800 dark:text-gray-200">0</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">Following</span>
            </div>
          </div>
          
          {/* About/Bio */}
          <p className="text-base text-gray-700 dark:text-gray-300">This is my about. A passionate developer building amazing things with Next.js and Tailwind CSS.</p>
        </div>
      </section>

      {/* Action Buttons Section */}
      <section className="flex justify-center sm:justify-start gap-4 py-4 border-b border-gray-200 dark:border-gray-700">
        <Button 
          className="w-full sm:w-auto px-8 py-2 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-semibold rounded-lg transition duration-200" 
        >
          Follow
        </Button>
        <Button 
          className="w-full sm:w-auto px-8 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-200"
        >
          Message
        </Button>
      </section>

      {/* Content Tabs and Grid Section */}
      <section>
        {/* Tabs */}
        <div className="flex justify-center space-x-12 my-6">
          <div className="text-green-600 border-b-2 border-green-600 pb-2 cursor-pointer dark:text-green-400 dark:border-green-400 transition duration-150">
            <Grid className="w-5 h-5 inline-block mr-1"/>
            <span className="hidden sm:inline">Posts</span>
          </div>
          <div className="text-gray-500 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 pb-2 cursor-pointer transition duration-150">
            <Bookmark className="w-5 h-5 inline-block mr-1"/>
            <span className="hidden sm:inline">Saved</span>
          </div>
        </div>

        {/* Content Grid (Posts) */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-1">
          {/* placeholder for posts/saved content */}
          <div className="aspect-square bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">Post 1</div>
          <div className="aspect-square bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">Post 2</div>
          <div className="aspect-square bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">Post 3</div>
          <div className="aspect-square bg-gray-200 dark:bg-gray-700  items-center justify-center text-sm text-gray-500 dark:text-gray-400 hidden sm:flex">Post 4</div>
          <div className="aspect-square bg-gray-200 dark:bg-gray-700  items-center justify-center text-sm text-gray-500 dark:text-gray-400 hidden lg:flex">Post 5</div>
          <p className="col-span-3 sm:col-span-4 lg:col-span-5 text-center text-gray-400 my-8">
             render post saved or own
          </p>
        </div>
      </section>
    </div>
  )
}