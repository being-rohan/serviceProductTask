import { NgModule } from "@angular/core";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
    declarations:[],
    exports:[
        MatCardModule,
        MatButtonModule,
        MatDividerModule,
        MatSnackBarModule
    ],
    imports:[
        MatCardModule,
        MatButtonModule,
        MatDividerModule,
        MatSnackBarModule
    ]
})
export class MaterialModule {

}

