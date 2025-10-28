import { BsX } from "react-icons/bs";

type NotificationProps = {
    isPositive: boolean;
    message: string;
}

export default function Notification({ isPositive, message }: NotificationProps) {

    const bgColor = isPositive ? 'bg-green-500' : 'bg-red-500'
    
    return (    
        <div
            className=
            {
                `fixed top-5 right-5 ${bgColor} 
                text-white p-4 rounded-lg
                shadow-lg z-50 flex items-center space-x-2`
            }>
            <p className="m-0 font-medium">{message}</p>
            <BsX className="w-5 h-5" />
</div>
    )
}