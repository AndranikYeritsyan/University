import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacultyServiceService } from '../../services/faculty-service.service';
import { Faculty } from '../../interfaces/Faculties';

@Component({
  selector: 'app-facultes',
  templateUrl: './facultes.component.html',
  styleUrls: ['./facultes.component.scss']
})
export class FacultesComponent implements OnInit {
  public facultyList: any;
  constructor(
    private router: Router,
    private facultyServ: FacultyServiceService
  ) { }

  ngOnInit() {
    this.getFaculties()
  }
  public goCreatFaculty(): void {
    this.router.navigate(['creat-faculties'])
  }

  public goEditFaculty(id: number): void {
    this.router.navigate([`edit-faculties/${id}`]);
  }

  public getFaculties() {
    this.facultyServ.requestFaculties().subscribe(
      (data) => {
        this.facultyList = data;
      },
    )

  }
  public goDeleteFaculty(id: number): any {
    this.facultyServ.deleteFacultyById(id)
      .subscribe(() => {
        const data: Faculty = this.facultyList.filter(faculty => faculty.id === id)
        this.facultyList.map((faculty: Faculty, index: number) => {
          (faculty.id === id) ? this.facultyList.splice(index, 1) : undefined;
        });
        alert('you deleted a ' + data[0].name + ' ' + 'faculty' )
      })
       
      
  }

}
