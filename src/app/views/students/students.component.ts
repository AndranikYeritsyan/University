import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentServiceService } from '../../services/student-service.service';
import { Student } from '../../interfaces/Students';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  public studentsList: any;
  constructor(
    private router: Router,
    private studentsServ: StudentServiceService
  ) { }

  ngOnInit() {
    this.getStudentIteam();
  
  }
  public goCreatStudent() {
    this.router.navigate(['creat-student']);
  }
  public goEditStudent(id: number) {
    this.router.navigate([`edit-student/${id}`]);
  }
  public getStudentIteam(): void {
    this.studentsServ.studentTableItem().subscribe(
      (data) => {
        this.studentsList = data;
      },

    )

  }
  public goDeleteStudent(id: number): any {
    this.studentsServ.deleteStudentById(id).
      subscribe(() => {
        const data: Student = this.studentsList.filter(student => student.id === id)
        this.studentsList.map((student: Student, index: number) => {
          (student.id === id) ? this.studentsList.splice(index, 1) : undefined;
        });
        alert('you deleted a ' + data[0].name + ' ' + data[0].last_name + ' ' + 'student' )
       
      })


  }


}
