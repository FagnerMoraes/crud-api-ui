import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { ConfirmationDialogComponent } from '../../components/confirmation-dialog/confirmation-dialog.component';
import { Course } from '../../model/course';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]> | null = null;

  constructor(

    private CoursesService: CoursesService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
     ) {

      this.refresh();

     }

   refresh(){

    this.courses$ = this.CoursesService.list()
    .pipe(
      catchError(error => {
        this.OnError('Erro ao carregar dados')
        return of([])
      })
    );

   }

   OnError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onEdit(course: Course){
    this.router.navigate(['edit',course._id], {relativeTo: this.route});
  }
  onRemove(course: Course){

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que quer remover',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if(result){
        this.CoursesService.remove(course._id).subscribe(
          () => {
            this.refresh();
            this.snackBar.open("Curso deletado com sucesso",'X',
            {duration:2000,
             verticalPosition: 'top',
             horizontalPosition: 'center'
            });

          },
          () => this.OnError('Erro ao tentar remover curso.')
        );
      }
    });
  }

}
