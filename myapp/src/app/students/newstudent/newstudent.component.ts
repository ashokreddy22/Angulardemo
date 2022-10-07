import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-newstudent',
  templateUrl: './newstudent.component.html',
  styleUrls: ['./newstudent.component.css']
})
export class NewstudentComponent implements OnInit {

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
  }
onCreateStudent(studentName:string,status:string){
  this.studentService.addStudent(studentName,status);
}
}
