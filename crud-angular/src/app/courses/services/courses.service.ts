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
    //delay(1000),
    tap(Course => console.log(Course))
   );
  }

  save(record: Partial<Course> ){
    return this.httpClient
        .post<Course>(this.API,record)
        .pipe(first());
  }

  delete(record: Course){
    return this.httpClient
        .delete<Course>(this.API)
        .pipe(first());
  }

}
