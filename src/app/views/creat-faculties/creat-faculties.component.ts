import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacultyServiceService } from '../../services/faculty-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-creat-faculties',
  templateUrl: './creat-faculties.component.html',
  styleUrls: ['./creat-faculties.component.scss']
})
export class CreatFacultiesComponent implements OnInit {
  facultyForm: FormGroup;
  errorName='';
  constructor(
    private router:Router, 
    private facultiService: FacultyServiceService,
    private formBilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.setFormControl();
  }

  setFormControl() {
    this.facultyForm = this.formBilder.group({
      name: ['', Validators.required]
    })
  }

  addFaculty() {
    this.facultiService.postNewFaculty(this.facultyForm.value)
      .subscribe((data) => {
        data = this.facultyForm.value.name;
        this.router.navigate(['faculties']);
      }, error => {
        this.errorName=error.error.error.name[0];
        
      })
  }

  public goFacultyTable(){
    this.router.navigate(['faculties']);
  }
  

}
