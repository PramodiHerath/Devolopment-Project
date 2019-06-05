import { ItemDataSource } from './itemDataSource';
import { ItemsService } from './../services/items.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
@Component({
  selector: 'admin-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ItemDataSource;
  data:any;
  searchKey:string;
  displayedColumns = ['itemName', 'categoryName'];

  constructor(private itemService: ItemsService,private router:Router) { }


  
  ngOnInit() {
    this.getItems();

  }


  getItems(){
    this.itemService.getAllItems()
    .subscribe(response=>{
      console.log(response);
      this.dataSource = new ItemDataSource (this.paginator, this.sort,this.data);
    },(error:Response)=>{
      console.log(error);
    })
  }

  searchItem(){
    this.itemService.searchItem(this.searchKey)
    .subscribe(response=>{
      this.data=response;
      // console.log(this.data);
      this.dataSource = new ItemDataSource(this.paginator, this.sort,this.data);
    },(error:Response)=>{
    })
  }
  onView(){

  }
}
