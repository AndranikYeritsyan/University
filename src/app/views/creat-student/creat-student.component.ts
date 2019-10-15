import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentServiceService } from '../../services/student-service.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Student } from '../../interfaces/Students';
import { GroupServiceService } from '../../services/group-service.service';


@Component({
  selector: 'app-creat-student',
  templateUrl: './creat-student.component.html',
  styleUrls: ['./creat-student.component.scss']
})
export class CreatStudentComponent implements OnInit {
  public studentsList: any;
  public studentList: any;
  public studentForm: FormGroup;
  public variable: boolean = true;
  public facultyGroups: any = [];
  public errorLastName = '';
  public errorName = '';
  public errorEmail = '';
  public errorPhone = '';
  public errorFaculty = '';
  public errorGroup = '';
  constructor(
    private router: Router,
    private formBilder: FormBuilder,
    private studentsServ: StudentServiceService,
    private groupServ: GroupServiceService

  ) { }

  ngOnInit() {
    this.getStudentIteam();
    this.setFormControl();
    this.getGroupIteam();
  }
  setFormControl() {
    this.studentForm = this.formBilder.group({
      name: ['', Validators.required],
      faculty_id: [null, Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      group_id: [null, Validators.required],
    })
  }
  public goStudentsTable() {
    this.router.navigate(['students']);
  }
  public getStudentIteam(): void {
    this.studentsServ.facultiesName().subscribe(
      (data) => {
        this.studentsList = data;
      },
      (error) => {
        console.log(error);
      }
    )

  }
  public getGroupIteam(): void {
    this.studentsServ.groupsName().subscribe(
      (data) => {
        this.studentList = data;
      },
    )

  }
  public getFacultyGroups() {
    this.groupServ.getFacultyGroups(this.studentForm.value.faculty_id)
      .subscribe(
        (data) => {
          this.facultyGroups = data;

        },
      )
  }

  public creatNewStudent() {
    const student: Student = {
      name: this.studentForm.value.name,
      faculty_id: this.studentForm.value.faculty_id,
      last_name: this.studentForm.value.last_name,
      email: this.studentForm.value.email,
      phone: this.studentForm.value.phone,
      group_id: this.studentForm.value.group_id

    }
    this.studentsServ.creatNewStudents(student).
      subscribe(() => {
        this.router.navigate(['students']);

      }, error => {
        error.error.error.name ?  this.errorName = error.error.error.name[0] : this.errorName = undefined;
        error.error.error.last_name ?  this.errorLastName = error.error.error.last_name[0] : this.errorLastName = undefined;
        error.error.error.email ?  this.errorEmail = error.error.error.email[0] : this.errorEmail = undefined;
        error.error.error.faculty_id ?  this.errorFaculty = error.error.error.faculty_id[0] : this.errorFaculty = undefined;
        error.error.error.phone ?  this.errorPhone = error.error.error.phone[0] : this.errorPhone = undefined;
        error.error.error.group_id ?  this.errorGroup = error.error.error.group_id[0] : this.errorGroup = undefined;

 },
 
      )
   
  }

}
