import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuService } from '../serviceshttp/menu.service';
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas'; 

@Component({
  selector: 'package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {


  royalSilver1='/assets/images/royalSilver1.png';
  royalSilver2='/assets/images/royalSilver2.png';
  royalSilver3='/assets/images/royalSilver3.png';
  royalSilver4='/assets/images/royalSilver4.png';
  logo='/assets/images/logoPng.png';
  constructor(private route:ActivatedRoute,private menuService: MenuService) { }


  ngOnInit() {
    this.bringMenu();
  }

menuId:any;
menu:any;

  bringMenu(){
    this.route.paramMap
    .subscribe(params=>{
      this.menuId=params.get('menuId');
      console.log(this.menuId);
      
      this.menuService.getMenu(this.menuId)
      .subscribe(
        response=>{
          
           this.menu=response;
           console.log(this.menu);
      },
        error=>{
          alert('An unexpected error occurred.');
          console.log(error);
      })
    })
  
  }

  downloadPdf(){ 
    var data = document.getElementById('contentToConvert');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      console.log(canvas.height+","+canvas.width)
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      // var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, 0, imgWidth, imgHeight)  
       pdf.save('MYPdf.pdf'); // Generated PDF   
    });  
   
} 

  }

