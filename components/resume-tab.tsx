import clsx from "clsx";
import Image from "next/image"
import { useState } from "react";
import { EducationBg } from "./education-bg";
import { WorkExperience } from "./work-experience";
import { MySkill } from "./my-skill";
import PersonalInfo from "./personal-info";

const ResumeTab = () => {

    const [resumeItemShow, setResumeItemShow] = useState(false);
    const [selectedResumeItem, setSelectedResumeItem] = useState(0);
  const [resumeItems, setResumeItems] = useState([
    {
      id: 1,
      title: '个人信息'
    },{
      id: 2,
      title: '工作经历'
    },{
      id: 3,
       title: '教育经历'
    },{
      id: 4,
      title: '个人技能'
    }
  ]);

    return (
        <div >
           <div className='absolute top-5 left-5 w-32 h-24 border-2 border-gray-300 bg-transparent rounded-sm opacity-70 z-10
                      flex justify-center items-center text-white'>
        <div className='flex flex-col justify-center items-center' onClick={() => {
            setResumeItemShow(!resumeItemShow);
            setSelectedResumeItem(0);
            }}>
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
            }} onClick={() => {
                setSelectedResumeItem(item.id)
            }}>
                <span className='text-white text-base font-bold text-opacity-70 hover:text-opacity-100'>{item.title}</span>
            </li>
            })}
        </ol>
        <div className="item-tab-container absolute top-2/5 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-sm bg-transparent opacity-70 z-10" style={{
            minWidth: '30vw',
            minHeight: '30vh'
        }}>
            {resumeItemShow && selectedResumeItem === 1 && <PersonalInfo />}
            {resumeItemShow && selectedResumeItem === 2 && <WorkExperience />}
            {resumeItemShow && selectedResumeItem === 3 && <EducationBg />}
            {resumeItemShow && selectedResumeItem === 4 && <MySkill />}
            
        </div>
        </div>
    )
}
export default ResumeTab;