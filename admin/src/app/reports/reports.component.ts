import { ReportsService } from './../services/reports.service';
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
  currentYear=new Date().getFullYear();

  selectedYear =this.currentYear.toString();

  years=[
    {value: '2019', viewValue: '2019'},
    {value: '2020', viewValue: '2020'},
    {value: '2021', viewValue: '2021'},
  ];
  constructor(private service:ReportsService) { }

  ratingReportdata:any;
  hallsReportData
  sectionName=[];
  monthName=[];

  ngOnInit() {
  }

  getFeedbackReport(){
    this.service.getInterestReport().subscribe(
      response=>{
        this.ratingReportdata=response;
        this.generateReport()
    },
      error=>{
      alert(error.error);
      console.log(error.error);
    })
  }


  generateReport(){
  
    this.sectionName=[];
    let feedBackDataToEnter=[];
    this.ratingReportdata.forEach(section => {
     
      section.feedbacks.forEach(feedback => {
            let dataToInsert=[];
           
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


  getHallsReport(){
    this.service.getHallsReport(this.selectedYear).subscribe(
      response=>{
        this.hallsReportData=response;
        console.log(response)
        this.generateHallsReport()
    },
      error=>{
      alert(error.error);
      console.log(error.error);
    })
   
  }

  generateHallsReport(){
    this.monthName=[];
    let hallCount=this.hallsReportData[0].halls.length;
    let hallsDataToEnter=[];
    this.hallsReportData.forEach(month => {
     
      month.halls.forEach(hall => {
            let dataToInsert=[];
            // dataToInsert.push(offence.provision);
            this.monthName.push(month.name);
            dataToInsert.push(hall.name);
            dataToInsert.push(hall.count);
            hallsDataToEnter.push(dataToInsert);
          });
    });
    console.log(hallsDataToEnter);
    let doc = new jspdf();


    let head = [['Month', 'Hall','Count']];
    doc.setFontSize(22);
    doc.setTextColor(40);
    doc.setFontStyle('normal');
    doc.text("Hotel Royal Park", 75, 25);
    doc.setFontSize(21);
    doc.text("Kiribathgoda", 85, 35);
    doc.setFontSize(16);
    doc.text("Bookings",14 , 44);    

    hallsDataToEnter= hallsDataToEnter.map(row => Object.keys(row).map(key => row[key]));
    for (let i = 0; i < hallsDataToEnter.length; i++) {
      let row = hallsDataToEnter[i];
      if (i % 3 === 0) {
        console.log(row);
      
          row.unshift({rowSpan: 3, content:this.monthName[i], styles: {valign: 'middle', halign: 'left'}});
      }
    }
    doc.autoTable({
        head: head,
        body: hallsDataToEnter,
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

    doc.save('Monthly bookings report.pdf');
  }


}
