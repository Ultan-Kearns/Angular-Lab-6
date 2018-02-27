import { Component,OnInit } from '@angular/core';
import {PullDataService} from './pull-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private pullDataService:PullDataService){

  }
  student:any = [];
  title = "a";
  ngOnInit()
  {
    this.pullDataService.getStudentData().subscribe(data => {
      this.student = data.students;
    });
  }
}
