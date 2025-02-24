import { useState } from "react"

export const ProjectExperience = () => {
  const [expeirences, setExperiences] = useState([{
    id: 1,
    period: '2021.07 - 至今',
    projectName: 'RET项目',
    position: '高级前端开发工程师',
    background: '该项目是用于管理与追踪银行内部监管条例及行为订单的重要平台，需集成复杂的监管交互模块及问题追踪功能。',
    description: `1、深度参与产品交互操作与展现内容讨论，主导 5 次以上关键交互优化，确保产品符合用户需求与行业标准，助力用户需求更好落地。
2、与后端紧密协商接口与数据格式，完成 10 个以上接口定义与联调，保障数据传输准确高效。
3、运用 angular 搭建项目，结合 PrimeNg UI 库构建前端架构，实现页面高复用性与扩展性，代码复用率提高 35%。
4、主动调研文档协同等新技术，提出并部分实施创新解决方案，提升团队协作效率 20%。项目成功上线，有效管理银行监管事务，工作效率提高 30%，获银行内部高度评价`
  }, {
    id: 2,
    period: '2018.12 - 2021.07',
    projectName: '消防 IOT 产品项目',
    position: '高级前端开发工程师',
    background: '属于消防的后台管理系统，帮助消防人员管理人、应对事件、管理事件处理流程及资料库，历经项目到产品的提炼过程。',
    description: `1、与多角色人员沟通协作，推进富士康等园区项目，负责产品交互操作与展现内容讨论。
2、用 angular 搭建项目，配套 ant - design UI 库构建页面，采用 monorepo 结构统一管理多个应用，为项目构建稳健前端架构。
3、结合 htjs 技术及 Three.js 库，实现 3D 地图及设备点位展示，优化地图性能，提升地图加载速度 20%。负责与后端协商接口并联调，确保系统稳定运行。`
  }, {
    id: 3,
    period: '2018.05 - 2018.12',
    projectName: '安防 IOT 产品项目',
    position: '高级前端开发工程师',
    background: '一款安防设备后台管理系统，实现对安防设备管理及视频实时查看等功能',
    description: `用 angular + ant - design 搭建项目并绘制页面，采用 threejs 实现 2d 地图加载及点位放置，与后端合作实现外接设备屏幕分屏显示和定时循环，运用 MSE 技术实现视频流播放，优化视频播放性能，卡顿率降低 30%`
  }, {
    id: 4,
    period: '2016.09 - 2018.03',
    projectName: 'Component Design Studio 项目',
    position: '高级前端开发工程师',
    background: '公司打造的实现拖拽控件生成 app 及流程图原型 app 的 web 平台。平台发布后，以次平台为南方电网打造 app 应用平台，开发多款app 如招聘app等。',
    description: `1、采用 angularjs + angular（当时 2.0 的 rc 版本）实现前端，用 node + mongodb 实现服务端及数据库，生成 ionic 框架 web app。
2、用 angularjs + ionic 构建组件，angular 编写平台展示页面，nodejs 编写部分接口，优化平台性能，提升页面响应速度 30%。
3、在南方电网现场与多方协调并讨论需求，使用 ionic3 开发 app，反向优化 Component Design Studio 组件，提升组件复用性 40%。`
  }, {
    id: 5,
    period: '2016.06 - 2016.09',
    projectName: '香港免税店官网项目',
    position: '高级前端开发工程师',
    background: '构建香港免税店官网部分页面及功能。',
    description: `采用 jquery + html + css 构建项目部分页面及功能，实现页面展示，与 java 后端协调，确保页面对数据更新及时准确，优化页面交互体验，用户留存率提升 10%。`
  }]);
  return <div className="border-2 border-gray-200 rounded-lg p-4 bg-slate-950 text-white ">
  <div className="title p-2 mb-4 border-b-2 border-gray-500">项目经历</div>
  <div className="flex flex-col justify-center items-center">
      {expeirences.map((item) => {
          return (
            <div key={item.id} className="pb-3 border-b-2 border-gray-500 w-full mb-3">
              <div className="flex flex-row justify-between items-center w-full mb-2">
                <span>{item.period}</span>
                <span>{item.projectName}</span>
                <span>{item.position}</span>
              </div>
              <div className="flex flex-col mb-2">
                <span className="font-bold mb-2">项目背景:</span>
                <div>{item.background}</div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold mb-2">负责内容与成果:</span>
                <div>{item.description}</div>
              </div>
            </div>
          )
      })
      }
  </div>
</div>
}