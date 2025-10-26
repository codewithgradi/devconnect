import Image from 'next/image'
import NoDP from '@/public/nodp.png'
import { Textarea } from './ui/textarea'

export default function Post() {
    return(
        <div>
            <div>
                <Image src={NoDP} width={50} height={50} alt='PlaceHolder' />
                <Textarea placeholder="Whats's Happening"/>
                
            </div>
        </div>
    )
}