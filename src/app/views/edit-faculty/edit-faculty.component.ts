import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FacultyServiceService } from '../../services/faculty-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Faculty } from '../../interfaces/Faculties';

@Component({
  selector: 'app-edit-faculty',
  templateUrl: './edit-faculty.component.html',
  styleUrls: ['./edit-faculty.component.scss']
})
export class EditFacultyComponent implements OnInit {
  public id: number;
  public facultyForm: FormGroup;
  public errorName='';
  constructor(
    private router:Router,
    private activeRoute: ActivatedRoute,
    private facultyService: FacultyServiceService,
    private formBilder: FormBuilder,
  ) {
    this.activeRoute.params.subscribe(params => {
      this.id = params.id;
    })
  }

  setFormControl() {
    this.facultyForm = this.formBilder.group({
      name: ['', Validators.required]
    })
  }

  getFacultyById(): void {
    this.facultyService.getFacultyById(this.id)
      .subscribe(data => {
        this.facultyForm.controls.name.setValue(data.name);
      })
  }

  editFaculty(): void {
    const faculty: Faculty = {
      id: this.id,
      name: this.facultyForm.value.name,
    } 
    this.facultyService.editFaculty(faculty)
      .subscribe(() => {
        this.router.navigate(['faculties']);
      }, error => {
        this.errorName=error.error.error.name[0];
        
      }
     
      )
  }

  ngOnInit() {
    this.getFacultyById();
    this.setFormControl();
  }
 public goFacultyTable(){
   this.router.navigate(['faculties']);
 }
}
