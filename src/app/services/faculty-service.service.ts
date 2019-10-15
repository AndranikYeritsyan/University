import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';
import { Faculty } from '../interfaces/Faculties';
import { ApiServicesService } from './api-services.service';

@Injectable({
  providedIn: 'root'
})
export class FacultyServiceService {
  private api: string = environment.apiUrl;

  constructor(private http: HttpClient, public apiService: ApiServicesService) { }
public requestFaculties() : Observable<Faculty> {
  return this.apiService.get('/faculties')
}
public postNewFaculty(faculty: Faculty) : Observable<Faculty>{

  return this.apiService.post(`/faculties`,{
    name: faculty.name as Faculty | string,
  })
}

public getFacultyById(id: number): Observable<Faculty> {
  return this.apiService.get(`/faculties/${id}`);
}

public editFaculty(faculty: Faculty): Observable<Faculty> {
  return this.apiService.put(`/faculties/${faculty.id}`, {
    id: faculty.id, 
    name: faculty.name
  })
}

public deleteFacultyById(id: number): Observable<Faculty> {
  return this.apiService.delete(`/faculties/${id}`)
}

}
