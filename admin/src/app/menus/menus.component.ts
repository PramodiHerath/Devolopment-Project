import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {

  constructor(private router:Router) { } 


  MainMenus='/assets/images/Main Menus.png';
  Categories='/assets/images/Categories.png';
  Items='/assets/images/Items.png';
  

  bringCategories(){
    this.router.navigate(['/categories']);
  }

  ngOnInit() {
  }

}
