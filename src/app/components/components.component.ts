import { Component, OnInit } from '@angular/core';
import { TableDataService } from '../services/table-data.service';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

  public tableDatas: Array<Object> = [];

  // 等待动画
  public loading: boolean = false;
  // 分页配置
  public currentPage: number = 1;
  public itemsPerpage: number = 5;
  public totalItems: number = 0;
  constructor(
    private tableDataService:TableDataService
  ) { 
    console.log("这里是组件的构造函数");
    
  }

  ngOnInit() {
    this.getData();
  }


  getData(){
    // 从服务器查询表格数据
    let result = this.tableDataService.getTableData(this.currentPage,this.itemsPerpage);
    console.log("result:",result);
    this.totalItems = result["totalCounts"];
    this.tableDatas = result["list"];
    
  }
}
