import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentgroupService {

  private baseurl= environment.API_URL
  private studentgrouppost= this.baseurl + '/api/group/create/group'
  private studentgroupget= this.baseurl +'/api/group/getAll/group'
  private studentgroupupdate= this.baseurl +'/api/group/update/group'
  private studentgroupdelete= this.baseurl +'/api/group/delete/group/{id}'
  private studentgroupedit= this.baseurl +'/api/group/get/group/{id}'
  constructor(private http:HttpClient) { }
  studentgroupcreate(data:any){
    return this.http.post<any>(this.studentgrouppost, data);
  }
  getstudentgroup(){
    return this.http.get<any>(this.studentgroupget);
  }
  updatestudentgroup(data:any,id:any) {
    return this.http.put<any>(this.studentgroupupdate+ '/' + id, data);
  }
 
  deletestudentgroup(id: any) {
    return this.http.put<any>(this.studentgroupdelete + '/' + id,id);
  }
  public editstudentgroup(id: any) {
    return this.http.get<any>(this.studentgroupedit + '/' + id);
  }
}
