import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  constructor() { }

  getTableData(currentPage: number, itemsPerpage: number): Object {
    let totalDatas = [
      { id: 0, name: "张三", gender: "男", age: 23 },
      { id: 1, name: "李四", gender: "男", age: 25 },
      { id: 2, name: "王五", gender: "男", age: 28 },
      { id: 3, name: "赵六", gender: "男", age: 22 },
      { id: 4, name: "马七", gender: "男", age: 29 },
      { id: 5, name: "锅巴", gender: "男", age: 30 },
      { id: 6, name: "关羽", gender: "男", age: 56 },
      { id: 7, name: "张飞", gender: "男", age: 28 },
      { id: 8, name: "刘备", gender: "男", age: 26 },
      { id: 9, name: "王启年", gender: "男", age: 23 },
      { id: 10, name: "郭麒麟", gender: "男", age: 28 },
      { id: 11, name: "陈萍萍", gender: "男", age: 45 },
      { id: 12, name: "影子", gender: "男", age: 67 },
      { id: 13, name: "高达", gender: "男", age: 89 },
      { id: 14, name: "上山虎", gender: "男", age: 24 },
      { id: 15, name: "海棠朵朵", gender: "男", age: 18 },
    ]


    let result = [];
    let startNumber = (currentPage - 1) * itemsPerpage;
    let endNumber = (currentPage) * itemsPerpage;

    totalDatas.map((item, index) => {
      if ((index >= startNumber) && (index < endNumber)) {
        result.push(item);
      } else {
        // Do-nothing
      }
    })


    return {
      currentPage: currentPage,
      itemsPerpage: itemsPerpage,
      totalCounts: totalDatas.length,
      list: result,
    }
  }
}
