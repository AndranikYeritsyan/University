import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../../services/student-service.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Student } from '../../interfaces/Students';
import { GroupServiceService } from '../../services/group-service.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {
  public studentsList: any;
  public studentList: any;
  public studentForm: FormGroup;
  public id: number;
  public facultyId: number;
  public groupId: number;
  public facultyGroups: any;
  public disabled: boolean = false;
  public errorLastName = '';
  public errorName = '';
  public errorEmail = '';
  public errorPhone = '';
  public errorFaculty = '';
  public errorGroup = '';
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private formBilder: FormBuilder,
    private studentsServ: StudentServiceService,
    private groupServ: GroupServiceService

  ) {
    this.activeRoute.params.subscribe(params => {
      this.id = params.id
    })
  }

  ngOnInit() {
    this.setFormControl();
    this.getStudentIteam();
    this.getStudentByid();
    this.getGroupIteam();
  }
  setFormControl() {
    this.studentForm = this.formBilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      groupId: [null, Validators.required],
      facultyId: [null, Validators.required]
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
    )
  }
  public getGroupIteam(): void {
    this.studentsServ.groupsName().subscribe(
      (data) => {
        this.studentList = data;
      },
    )
  }
  public editStudent(): void {
    const student: Student = {
      id: this.id,
      name: this.studentForm.value.name,
      faculty_id: this.studentForm.value.facultyId,
      last_name: this.studentForm.value.last_name,
      email: this.studentForm.value.email,
      phone: this.studentForm.value.phone,
      group_id: this.studentForm.value.groupId

    }
    this.studentsServ.editStudent(student).
      subscribe(() => {
        this.router.navigate(['students'])
      }, error => {
        error.error.error.name ? this.errorName = error.error.error.name[0] : this.errorName = undefined;
        error.error.error.last_name ? this.errorLastName = error.error.error.last_name[0] : this.errorLastName = undefined;
        error.error.error.email ? this.errorEmail = error.error.error.email[0] : this.errorEmail = undefined;
        error.error.error.faculty_id ? this.errorFaculty = error.error.error.faculty_id[0] : this.errorFaculty = undefined;
        error.error.error.phone ? this.errorPhone = error.error.error.phone[0] : this.errorPhone = undefined;
        error.error.error.group_id ? this.errorGroup = error.error.error.group_id[0] : this.errorGroup = undefined;

      }
      )
  }
  getStudentByid() {
    this.studentsServ.getStudentById(this.id).
      subscribe(data => {
        const t = data.student;
        this.studentForm.controls['name'].setValue(t.name);
        this.studentForm.controls['last_name'].setValue(t.last_name);
        this.studentForm.controls['email'].setValue(t.email);
        this.studentForm.controls['phone'].setValue(t.phone);
        this.studentForm.controls['facultyId'].setValue(t.faculty_id);
        this.studentForm.controls['groupId'].setValue(t.group_id);
      })
  }
  public getFacultyGroups() {
    this.groupServ.getFacultyGroups(this.studentForm.value.facultyId).
      subscribe(
        (data) => {
          this.facultyGroups = data;
          this.disabled = true;
        }
      )
  }

}


