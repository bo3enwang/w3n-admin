import React from "react";
import Workplace from "./Workplace";

import { BasicLayout, ScrollLayout } from "./Layouts";
import { BasicForm, StepForm, ComplexForm } from "./Forms";
import { Org, User } from "./System";
import { DND, RichEditor } from "./Advanced";
import { ChatRoom } from "./Server";

import { getPlainNode } from "utils/routes";

export interface IMenu {
  key?: string;
  name: string;
  icon: string;
  path: string;
  exact?: boolean;
  component?: React.ComponentType<any>;
  children?: IMenu[];
}

export const menuData: IMenu[] = [
  {
    name: "首页",
    icon: "user",
    path: "workplace",
    component: Workplace
  },
  {
    name: "布局",
    icon: "setting",
    path: "layouts",
    exact: false,
    children: [
      {
        name: "基础布局",
        icon: "team",
        path: "basic",
        component: BasicLayout,
        exact: false
      },
      {
        name: "滚动布局",
        icon: "team",
        path: "scroll",
        component: ScrollLayout,
        exact: false
      }
    ]
  },
  {
    name: "表单",
    icon: "user",
    path: "forms",
    exact: false,
    children: [
      {
        name: "基础表单",
        icon: "user",
        path: "basicForm",
        component: BasicForm,
        exact: false
      },
      {
        name: "分步表单",
        icon: "user",
        path: "stepForm",
        component: StepForm,
        exact: false
      },
      {
        name: "复杂表单",
        icon: "user",
        path: "complexForm",
        component: ComplexForm,
        exact: false
      }
    ]
  },
  {
    name: "特殊组件",
    icon: "user",
    path: "advanced",
    exact: false,
    children: [
      {
        name: "拖拽布局",
        icon: "user",
        path: "dnd",
        component: DND,
        exact: false
      },
      {
        name: "富文本编辑器",
        icon: "user",
        path: "rich-editor",
        component: RichEditor,
        exact: false
      }
    ]
  },
  {
    name: "远程连接",
    icon: "setting",
    path: "server",
    exact: false,
    children: [
      {
        name: "聊天室",
        icon: "team",
        path: "chatroom",
        component: ChatRoom,
        exact: false
      }
    ]
  },
  {
    name: "系统管理",
    icon: "setting",
    path: "sys",
    exact: false,
    children: [
      {
        name: "组织机构管理",
        icon: "team",
        path: "org",
        component: Org,
        exact: false
      },
      {
        name: "用户管理",
        icon: "user",
        path: "user",
        component: User,
        exact: false
      }
    ]
  }
];

export const plainNode = getPlainNode(menuData, "");
