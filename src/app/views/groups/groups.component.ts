import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupServiceService } from '../../services/group-service.service';
import { Group } from '../../interfaces/Group';
import { group } from '@angular/animations';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  public groupList: any;
  constructor(
    private router: Router,
    private groupServ: GroupServiceService
    ) { }
  ngOnInit() {
    this.getGroups();
  }
  public goCreatGroup() {
    this.router.navigate(['creat-groups'])
  }
  public goEditGroup(id: number): void {
    this.router.navigate([`edit-group/${id}`])
  }
  public getGroups() {
    this.groupServ.groupTabeleItem().subscribe(
      (data) => {
        this.groupList = data;
      }
    )
  }
  public goDeleteGroup(id: number): any {
    ;
    this.groupServ.deleteGroupById(id).
      subscribe(() => {
        const data: Group = this.groupList.filter(group => group.id === id)
        this.groupList.map((group: Group, index: number) => {
          (group.id === id) ? this.groupList.splice(index, 1) : undefined;
        });
        alert('you deleted a ' + data[0].name + ' ' + 'group');
      })


  }
}
