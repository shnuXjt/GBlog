import { useState } from "react"

export const MySkill = () => {
    const [skills, setSkills] = useState([{
        id: 1,
        title: '编程语言',
        content: 'javascript, typescript, HTML ,CSS, Node.js',
    }, {
        id: 2,
        title: '前端框架',
        content: 'Angularjs, Angular, React, Vue, Ionic3, nestjs, nextjs, Taro, tailwind',
    }, {
        id: 3,
        title: '3D图形',
        content: 'Three.js'
    }]);
  return (
    <div className="border-2 border-gray-200 rounded-lg p-4 bg-slate-950 text-white ">
        <div className="title p-2 mb-4 border-b-2 border-gray-500">个人技能</div>
        <div className="flex flex-col justify-center items-start">
            {skills.map((skill) => {
                return (
                    <div key={skill.id} className="flex justify-center items-baseline">
                        <div className="title mb-3 font-medium">{skill.title}: </div>
                        <div className="content">{skill.content}</div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}