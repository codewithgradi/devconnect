import Image from 'next/image'
import NoDP from '@/public/nodp.png'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

export default function Post() {
    return(
        <div className='border-2 px-3 rounded-2xl shadow-2xl'>
            <div className='py-4'>
                <div className='flex border-none gap-x-1'>
                    <Image
                        className='rounded-4xl'
                        src={NoDP}
                        width={50}
                        height={50}
                        alt='PlaceHolder' />
                    <Textarea placeholder="Whats's Happening" />
                </div>
                <div className='flex justify-between my-2'>
                    <div className='flex gap-x-1 text-blue-500'>
                        <p>#cloud</p>
                        <p>#cybersecurity</p>
                        <p>#AI</p>
                        <p>#datascience</p>
                    </div>
                   <Button className='bg-green-500 hover:bg-green-700 cursor-pointer'>Post</Button>
                </div>
            </div>
        </div>
    )
}