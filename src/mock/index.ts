import Mock from "mockjs";

Mock.mock("/system/org", "get", options => {
  return [
    {
      id: 1,
      name: "摩天集团",
      path: null,
      children: [
        { id: 11, name: "电梯集团", path: null },
        { id: 12, name: "天台集团", path: null },
        { id: 13, name: "远景集团", path: null }
      ]
    },
    {
      id: 2,
      name: "海航集团",
      path: null,
      children: [
        { id: 21, name: "大副企业", path: null, children: [] },
        { id: 22, name: "船长集团", path: null, children: [] },
        { id: 23, name: "货航集团", path: null, children: [] }
      ]
    },
    {
      id: 3,
      name: "测试",
      path: null,
      children: [
        { id: 31, name: "测测一下", path: null, children: [] },
        { id: 32, name: "测试", path: null, children: [] },
        { id: 33, name: "测试", path: null, children: [] }
      ]
    }
  ];
});

Mock.mock("/form/step", "post", options => {
  setTimeout(() => {
    return { msg: "ok" };
  }, 5000);
});
