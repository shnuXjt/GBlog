import clsx from "clsx";
import Image from "next/image"
import { useState } from "react";

const ResumeTab = () => {

    const [resumeItemShow, setResumeItemShow] = useState(false);
  const [resumeItems, setResumeItems] = useState([
    {
      id: 1,
      title: '教育经历'
    },{
      id: 2,
      title: '工作经历'
    },{
      id: 3,
      title: '项目经验'
    },{
      id: 4,
      title: '技能证书'
    }
  ]);

    return (
        <div >
           <div className='absolute top-5 left-5 w-32 h-24 border-2 border-gray-300 bg-transparent rounded-sm opacity-70 z-10
                      flex justify-center items-center text-white'>
        <div className='flex flex-col justify-center items-center' onClick={() => setResumeItemShow(!resumeItemShow)}>
          <span className='text-sm text-gray-400 cursor-pointer hover:text-white'>旅行者1号</span>
        </div>
        </div>
        <ol className={clsx(
            ['absolute top-32 left-5 h-24 bg-transparent opacity-0 z-10 transition-opacity duration-1000 mt-3',
            {'opacity-100': resumeItemShow}]
        )}>
            {resumeItems.map((item, index) => {
            return <li key={item.id} className={clsx(
                [
                'mb-6 border-2 border-gray-300 rounded-sm text-center py-1 px-3 cursor-pointer transition-all delay-100 translate-x-0',
                ]
            )} style={{
                // @ts-ignore
                'transform': resumeItemShow ? `translateX(${index % 2 + 0.5}rem)` : 'translateX(0)'
            }}>
                <span className='text-white text-base font-bold text-opacity-70 hover:text-opacity-100'>{item.title}</span>
            </li>
            })}
        </ol>
        </div>
    )
}
export default ResumeTab;