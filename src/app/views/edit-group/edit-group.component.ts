import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GroupServiceService } from '../../services/group-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Group } from '../../interfaces/Group';

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.scss']
})
export class EditGroupComponent implements OnInit {
  groupForm: FormGroup;
  id: number;
  facultyId: number;
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private groupServ: GroupServiceService,
    private formBilder: FormBuilder
  ) {
    this.activeRoute.params.subscribe(params => {
      this.id = params.id;
    })
  }
  setFormControl() {
    this.groupForm = this.formBilder.group({
      name: ['', Validators.required]
    })
  }
  ngOnInit() {
    this.getGroupByid();
    this.setFormControl()
  }
  public goGroupTable() {
    this.router.navigate(['groups']);
  }
  getGroupByid() {
    this.groupServ.getGroupById(this.id).
      subscribe(data => {
        this.facultyId = data.faculty_id;
        this.groupForm.controls['name'].setValue(data.name);

      })
  }
  editGroup(): void {
    const group: Group = {
      id: this.id,
      name: this.groupForm.value.name,
      faculty_id: this.facultyId,
    }
    this.groupServ.editGroup(group)
      .subscribe(() => {
        this.router.navigate(['groups']);
      }

      )

  }
}
