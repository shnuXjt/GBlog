import Image from "next/image"

const MyAvatar = () => {
    return (
        <div className='flex flex-col items-center justify-start gap-2 bg-cyan-400'>
            <Image
                src='/customers/guillermo-rauch.png'
                width={100}
                height={100}
                alt='avatar'

            />
        </div>
    )
}
export default MyAvatar;