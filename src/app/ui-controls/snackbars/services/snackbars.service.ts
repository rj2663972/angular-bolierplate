import { Injectable } from '@angular/core';

import { InfoSnackbarComponent } from 'src/app/ui-controls/snackbars/info-snackbar/info-snackbar.component';
import { WarningSnackbarComponent } from 'src/app/ui-controls/snackbars/warning-snackbar/warning-snackbar.component';
import { ErrorSnackbarComponent } from 'src/app/ui-controls/snackbars/error-snackbar/error-snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()

export class SnackBarsService {

    constructor(
        private _snackBar: MatSnackBar
    ) {
    }

    public openSnackBarInfo(text: string) {
        const snackBarRef = this._snackBar.openFromComponent(InfoSnackbarComponent, {
            duration: 5000,
            horizontalPosition: 'right'
        });
        snackBarRef.instance.text = text;
     }

     public openSnackBarWarning(text: string) {
        const snackBarRef = this._snackBar.openFromComponent(WarningSnackbarComponent, {
            duration: 5000,
            horizontalPosition: 'right'
        });
        snackBarRef.instance.text = text;
    }

    public openSnackBarError(text: string) {
        const snackBarRef = this._snackBar.openFromComponent(ErrorSnackbarComponent, {
            duration: 5000,
            horizontalPosition: 'right'
        });
        snackBarRef.instance.text = text;
    }
}
