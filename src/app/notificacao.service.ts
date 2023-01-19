import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificacaoService {
  constructor(private _snackBar: MatSnackBar) {}

  notificar(msg: string) {
    this._snackBar.open(msg, 'Ok', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }
}
