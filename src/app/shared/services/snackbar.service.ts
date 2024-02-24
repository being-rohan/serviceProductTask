import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _matSnack:MatSnackBar) { }

  opensanck(msg:string){
    this._matSnack.open(msg,"Close" ,{
      duration:2500,
      verticalPosition:'top',
      horizontalPosition:'left'
    });
  }
}
