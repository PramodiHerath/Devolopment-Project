import { CategoriesService } from './../services/categories.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categoryItems',
  templateUrl: './categoryItems.component.html',
  styleUrls: ['./categoryItems.component.css']
})
export class CategoryItemsComponent implements OnInit {
  categoryItems;
  catergoryId;
  constructor(private route:ActivatedRoute,private service:CategoriesService) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params=>{
      this.catergoryId=params.get('categoryId');
      console.log(this.catergoryId);
      this.service.getCategoryItems(this.catergoryId)
      .subscribe(
        response=>{
          console.log(response);
           this. categoryItems=response;
      },
        error=>{
          alert('An unexpected error occurred.');
          console.log(error);
      })
    })
  }

}
