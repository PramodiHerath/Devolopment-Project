import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import * as jspdf from 'jspdf'; 
import 'jspdf-autotable';

@Component({
  selector: 'reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor(private authService:AuthService) { }

  reportData:any;
  sectionName=[];

  ngOnInit() {
  }

  getFeedbackReport(){
    this.authService.getReport().subscribe(
      response=>{
        this.reportData=response;
        this.generateReport()
    },
      error=>{
      alert(error.error);
      console.log(error.error);
    })
   
  }


  generateReport(){
    console.log("gene");
    this.sectionName=[];
    let feedBackDataToEnter=[];
    this.reportData.forEach(section => {
     
      section.feedbacks.forEach(feedback => {
            let dataToInsert=[];
            // dataToInsert.push(offence.provision);
            this.sectionName.push(section.name);
            dataToInsert.push(feedback.name);
            dataToInsert.push(feedback.totalRespones);
            dataToInsert.push(feedback.percentage);
            feedBackDataToEnter.push(dataToInsert);
          });
    });
    console.log(feedBackDataToEnter);
    let doc = new jspdf();


    let head = [['Section', 'Category','Total Responses','Customer Vote']];
    doc.setFontSize(22);
    doc.setTextColor(40);
    doc.setFontStyle('normal');
    doc.text("Hotel Royal Park", 75, 25);
    doc.setFontSize(21);
    doc.text("Kiribathgoda", 85, 35);
    doc.setFontSize(16);
    doc.text("Customer Feedback",14 , 44);    

    feedBackDataToEnter= feedBackDataToEnter.map(row => Object.keys(row).map(key => row[key]));
    for (let i = 0; i < feedBackDataToEnter.length; i++) {
      let row = feedBackDataToEnter[i];
      if (i % 3 === 0) {
        console.log(row);
      
          row.unshift({rowSpan: 3, content:this.sectionName[i], styles: {valign: 'middle', halign: 'left'}});
      }
    }
    doc.autoTable({
        head: head,
        body: feedBackDataToEnter,
        startY:55,
        headStyles: {
          fontSize: 8
      },
      footStyles: {
          fontSize: 15
      },
      bodyStyles: {
        fontSize: 10,
      },
      didDrawPage: function (data) {

        //set page number
        // Footer
        var str = "Page " + doc.internal.getNumberOfPages()
        if (typeof doc.putTotalPages === 'function') {
            str = str ;
        }
        doc.setFontSize(10);

        var pageSize = doc.internal.pageSize;
        var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
        doc.text(str, data.settings.margin.left, pageHeight - 10);
    },
    });

    doc.save('Feedback report.pdf');
  }


}
