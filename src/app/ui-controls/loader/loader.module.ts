import { NgModule } from '@angular/core';
import { LoaderComponent } from './components/loader.component';
import { MaterialFormsModule } from '../material/material-forms.module';

@NgModule({
    imports: [
        MaterialFormsModule
    ],
    declarations: [
        LoaderComponent
    ],
    providers: [
        // LoaderService
    ],
    exports: [
        LoaderComponent
    ]
})

export class LoaderModule { }
