import { IMenu } from "routes";

export function getPlainNode(menuData: IMenu[], parentPath: string): IMenu[] {
  const arr: IMenu[] = [];
  menuData.forEach(node => {
    const item = { ...node };
    item.path = `${parentPath}/${item.path || ""}`.replace(/\/+/g, "/");
    item.exact = node.exact;
    if (item.children && !item.component) {
      arr.push(...getPlainNode(item.children, item.path));
    } else {
      if (item.children && item.component) {
        item.exact = false;
      }
      arr.push(item);
    }
  });
  return arr;
}
