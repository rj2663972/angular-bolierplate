import { NgModule } from '@angular/core';
import { MaterialFormsModule } from '../material/material-forms.module';
import { WarningSnackbarComponent } from './warning-snackbar/warning-snackbar.component';
import { InfoSnackbarComponent } from 'src/app/ui-controls/snackbars/info-snackbar/info-snackbar.component';
import { ErrorSnackbarComponent } from 'src/app/ui-controls/snackbars/error-snackbar/error-snackbar.component';
import { SnackBarsService } from './services/snackbars.service';

@NgModule({
    imports: [
        MaterialFormsModule
    ],
    declarations: [
        InfoSnackbarComponent,
        ErrorSnackbarComponent,
        WarningSnackbarComponent
    ],
    providers: [SnackBarsService],
    exports: [
        InfoSnackbarComponent,
        ErrorSnackbarComponent,
        WarningSnackbarComponent
    ],
    entryComponents: [
        InfoSnackbarComponent,
        ErrorSnackbarComponent,
        WarningSnackbarComponent
    ]
})

export class SnackBarsModule { }
