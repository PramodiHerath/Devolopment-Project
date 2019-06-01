import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'admin-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
categories:any[];
  constructor(http:HttpClient) {

    http.get('http://localhost:3000/api/categories')
    .subscribe(response=>{
        this.categories.push(response);
    })
   }

  ngOnInit() {
  }

}
