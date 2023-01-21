import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../model/course';

import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  form= this.formBuilder.group({
    _id: [''],
    name: [''],
    categoria: ['']
  });



  constructor(private formBuilder: NonNullableFormBuilder,
    private service: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute) {
    //this.form
  }

  ngOnInit(): void {
    const course: Course = this.route.snapshot.data['course'];
    console.log(course);
    this.form.setValue({
      _id: course._id,
      name: course.name,
      categoria: course.categoria
    });
  }

  onSubmit(){
    this.service.save(this.form.value)
    .subscribe(result => this.onSucces(), error => this.onError());
  }

  onCancel(){
    this.location.back();
  }

  private onSucces(){
    this.snackBar.open("Curso salvo com sucesso",'',{duration:2000});
    this.onCancel();
  }

  private onError(){
    this.snackBar.open("Erro ao salvar o curso",'',{duration:2000});

  }

}
