import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { ApiServicesService } from './api-services.service';
import { Observable } from 'rxjs';
import { Group } from '../interfaces/Group';
import { Faculty } from '../interfaces/Faculties';

@Injectable({
  providedIn: 'root'
})
export class GroupServiceService {
  private api: string = environment.apiUrl;
  constructor(private http:HttpClient,public apiService: ApiServicesService) { }

  public groupTabeleItem():Observable<Group>{
    return this.apiService.get('/groups');
  }
  public creatNewGroup(group: any):Observable<Group>{
    return this.apiService.post(`/groups`,{
      name: group.name as Group,
      faculty_id :group.faculty_id  as Group 
    })
  }
  public getGroupById(id: number): Observable<Group> {
    return this.apiService.get(`/groups/${id}`);
  }
  public editGroup(group: Group): Observable<Group> {
    return this.apiService.put(`/groups/${group.id}`, {
      id: group.id, 
      name: group.name,
      faculty_id:group.faculty_id
    })
  }
  public deleteGroupById(id:number): Observable<Group>{
    return this.apiService.delete(`/groups/${id}`)

  }

  public facultiesName(): Observable<Faculty>{
    return this.apiService.get(`/faculties`)
  }
  public groupsName(): Observable<Group>{
    return this.apiService.get(`/groups`)
  }
  public getFacultyGroups(id:number): Observable<Group>{
    return this.apiService.get(`/faculties/${id}/groups`)
  }

}
