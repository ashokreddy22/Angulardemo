import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers:[StudentService]
})
export class StudentsComponent implements OnInit {
students:{name:string;status:string}[]=[];
  constructor(private studentService:StudentService) {
    this.students=studentService.students;
   }

  ngOnInit(): void {
  }

}
