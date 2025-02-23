import { useState } from "react"

export const WorkExperience = () => {
  const [expeirences, setExperiences] = useState([{
    id: 1,
    period: '2021.07 - 至今',
    company: '花旗金融信息服务（中国）有限公司',
    position: '高级前端开发工程师',
    description: `1、负责公司 RET 系统的前端开发（主要运用 angular + PrimeNg 框架），通过代码优化使系统页面加载速度提升 25%，前端应用打包上线（Jenkins），保障每周稳定上线，有效支持业务快速迭代；
2、主导与设计师、PO 的沟通协作，推动 5 个管理页面功能与交互形式优化，用户满意度提升 15%。精准协商接口定义，确保前后端高效协作，前端任务按时交付率达 100%。`
  }, {
    id: 2,
    period: '2018.06 - 2021.07',
    company: '霍尼韦尔(中国)有限公司',
    position: '高级前端开发工程师',
    description: `
    1、负责多个后台管理系统的前端技术选型及开发（主要运用 angular + ant design 框架），引入新技术方案使系统性能提升 30%，降低维护成本；
2、积极与设计师、PO 合作，完成 8 个管理页面功能与交互设计，实现与后端无缝联调，优化部署与发布流程，发布周期缩短 20%。
3、成功管理 4 人前端团队，通过制定合理的工作计划与任务分配，提升团队整体工作效率 30%。定期组织技术分享与培训活动，促进团队成员技术水平提升，团队成员在半年内掌握并熟练运用至少一项新前端技术。建立有效的沟通机制，确保项目信息及时准确传达，团队协作满意度达 90% 以上`
  }, {
    id: 3,
    period: '2015.08 - 2018.05',
    company: '埃森哲(中国)有限公司',
    position: '高级前端开发工程师',
    description: `
    1、负责各项目中前端页面构建及页面交互开发，主导前端架构优化，项目可维护性提高 40%，成功交付 10 个以上高质量项目。
    `
  }]);
  return <div className="border-2 border-gray-200 rounded-lg p-4 bg-slate-950 text-white ">
  <div className="title p-2 mb-4 border-b-2 border-gray-500">工作经历</div>
  <div className="flex flex-col justify-center items-center">
      {expeirences.map((item) => {
          return (
            <div className="pb-3 border-b-2 border-gray-500 w-full mb-3">
              <div className="flex flex-row justify-between items-center w-full mb-2">
                <span>{item.period}</span>
                <span>{item.company}</span>
                <span>{item.position}</span>
              </div>
              <div>{item.description}</div>
            </div>
          )
      })
      }
  </div>
</div>
}