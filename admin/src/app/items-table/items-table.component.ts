import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ItemsTableDataSource } from './items-table-datasource';
import { Router } from '@angular/router';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.css']
})
export class ItemsTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ItemsTableDataSource;
items;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name','categoryName'];

  
  constructor(private itemService: ItemsService,private router:Router) { }
  ngOnInit() {
    this.getPaifines();
  }

  getPaifines(){
    this.itemService.getAllItems()
    .subscribe(response=>{
      this.items=response;
      console.log(response);
      this.dataSource = new ItemsTableDataSource(this.paginator, this.sort,this.items);
    },(error:Response)=>{
      console.log(error);
    })
  }
}
