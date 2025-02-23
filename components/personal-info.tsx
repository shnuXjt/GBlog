import { useState } from "react"

export default function PersonalInfo() {
    const [info, setInfo] = useState([{
        id: 1,
        title: '姓名',
        content: '肖劲涛'
    }, {
        id: 2,
        title: '生日',
        content: '1993-04-18'
    }, {
        id: 3,
        title: '电话',
        content: '(+86)188-1737-8046'
    }, {
        id: 4,
        title: '邮箱',
        content: 'pkuxjt@sina.com'
    }, {
        id: 5,
        title: '地址',
        content: '上海市'
    }
    ]);
    return (
        <div className="border-2 border-gray-200 rounded-lg p-4 bg-slate-950 text-white ">
        <div className="title p-2 mb-4 border-b-2 border-gray-500">个人信息</div>
        <div className="grid grid-cols-2 gap-4">
            {info.map((item) => {
                return (
                    <p key={item.id}>
                        <span className="font-bold">{item.title}:</span>
                        <span className="ml-1">{item.content}</span>
                    </p>
                )
            })}
        </div>
    </div>
    )
}