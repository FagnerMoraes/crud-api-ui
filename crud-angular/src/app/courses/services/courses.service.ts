import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Course } from './../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  //private readonly API = '/assets/Cursos.json';
  private readonly API = '/api/curso';

  constructor(private httpClient: HttpClient) { }

  list(){
   return this.httpClient.get<Course[]>(this.API)
   .pipe(
    first(),
    delay(1000)
   );
  }

  loadById(id: string){
    return this.httpClient.get<Course>(`${this.API}/${id}`);
  }

  save(record: Partial<Course> ){
    //console.log(record);
    if(record._id){
      return this.update(record);
      //console.log('update');
    }
    //console.log('create');
    return this.create(record);
  }



  private create(record: Partial<Course>){
    record._id = '0';
    return this.httpClient
    .post<Course>(this.API,record)
    .pipe(first());
  }

  private update(record: Partial<Course>){
    return this.httpClient
    .put<Course>(`${this.API}/${record._id}`,record)
    .pipe(first());
  }

  remove(id: string) {
    return this.httpClient
    .delete(`${this.API}/${id}`)
    .pipe(first());
  }

}
