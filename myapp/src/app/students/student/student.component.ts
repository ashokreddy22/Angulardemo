import { Component, Input, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
  }
@Input()
student:{
  name:string;
  status:string;

};
@Input()
id:number=0;
changeStatus(newstatus:string){
  this.studentService.updateStatus(this.id,newstatus);
}
}
