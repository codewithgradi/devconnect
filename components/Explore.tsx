import { Search, X } from 'lucide-react'
import Link from 'next/link'

export default function Expore() {

    
    return (
        <div>
            <input placeholder={`${Search}  Search`} />
            <p>Line</p>
            <div>
                <p>Recent</p>
                <p>Clear alll</p>
            </div>
            <div>
                <Link href={'/'}>
                
                </Link>
            </div>
        </div>
    )
}