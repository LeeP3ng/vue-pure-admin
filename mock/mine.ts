import { defineFakeRoute } from "vite-plugin-fake-server/client";

export default defineFakeRoute([
  // 账户设置-个人信息
  {
    url: "/mine",
    method: "get",
    response: () => {
      return {
        code: 0,
        message: "操作成功",
        data: {
          avatar: "https://avatars.githubusercontent.com/u/44761321",
          username: "admin",
          nickname: "小铭",
          email: "pureadmin@163.com",
          phone: "15888886789",
          description: "一个热爱开源的前端工程师"
        }
      };
    }
  }
]);
