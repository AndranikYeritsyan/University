import { Injectable } from '@angular/core';
import { ApiServicesService } from './api-services.service';
import { Observable } from 'rxjs';
import { Student } from '../interfaces/Students';
import { Faculty } from '../interfaces/Faculties';
import { Group } from '../interfaces/Group';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(public apiService: ApiServicesService) { }

  public studentTableItem(): Observable<Student>{
    return this.apiService.get(`/students`)
  }
  public facultiesName(): Observable<Faculty>{
    return this.apiService.get(`/faculties`)
  }
  public groupsName(): Observable<Group>{
    return this.apiService.get(`/groups`)
  }
  public creatNewStudents(students: any): Observable<Student>{
    return this.apiService.post(`/students`,{
      name: students.name as Student,
      faculty_id :students.faculty_id  as Student,
      last_name :students.last_name  as Student, 
      email: students.email as Student,
      phone :students.phone  as Student, 
      group_id: students.group_id as Student  
    })
  }
  public getStudentById(id: number): Observable<Student>{
    return this.apiService.get(`/students/${id}`)
  }
  public editStudent(student: Student): Observable<Student> {
    return this.apiService.put(`/students/${student.id}`, {
      id: student.id, 
      name: student.name,
      faculty_id:student.faculty_id,
      last_name: student.last_name, 
      email: student.email, 
      phone: student.phone, 
      group_id: student.group_id, 
    })
  }
  public deleteStudentById(id:number): Observable<Student>{
    return this.apiService.delete(`/students/${id}`)

  }

}
