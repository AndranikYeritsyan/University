import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { GroupServiceService } from '../../services/group-service.service';
import { Group } from '../../interfaces/Group';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-creat-groups',
  templateUrl: './creat-groups.component.html',
  styleUrls: ['./creat-groups.component.scss']
})
export class CreatGroupsComponent implements OnInit {
  public groupForm: FormGroup;
  public groupId: FormGroup;
  public groupList: any;
  public facultyList: any;
  public errorName='';
  public errorFaculty='';
  public errorGroup:any;
  public erevala:boolean=false;
  constructor(
    private router: Router,
    private formBilder: FormBuilder,
    private groupService: GroupServiceService
  ) { }

  ngOnInit() {
    this.getGroups();
    this.setFormControl();
    this.getFaculties();
  }
  setFormControl() {
    this.groupForm = this.formBilder.group({
      name: ['', Validators.required],
      faculty_id: [null, Validators.required],
    })
  }

  public goGroupTable() {
    this.router.navigate(['groups']);
  }
  public creatGroup(): void {
    const group: Group = {
      name: this.groupForm.value.name,
      faculty_id: this.groupForm.value.faculty_id
    }

    this.groupService.creatNewGroup(group)
      .subscribe(() => {
        this.router.navigate(['groups']);
      }, error => {
     
        console.log(error.error.error);
        error.error.error.name ?  this.errorName = error.error.error.name[0] : this.errorName = undefined;
        error.error.error.faculty_id ? this.errorFaculty = error.error.error.faculty_id[0] : this.errorFaculty = undefined;
      })
  }
  public getGroups() {
    this.groupService.groupTabeleItem().subscribe(
      (data) => {
        this.groupList = data;
      },
    
    )
  }
  public getFaculties(): void {
    this.groupService.facultiesName().subscribe(
      (data) => {
        this.facultyList = data;
      },
     
    )

  }
}
