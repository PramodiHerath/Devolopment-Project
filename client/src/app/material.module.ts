// material.module.ts
import { NgModule } from '@angular/core';
import { MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatCardModule,
        MatButtonModule,
        MatDialogModule,
        MatTableModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatCheckboxModule,
        // FormsModule,
        MatListModule,
        MatRadioModule,
        MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
@NgModule({
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatCheckboxModule,
    // FormsModule,
    MatListModule,
    MatRadioModule,
    MatGridListModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatCheckboxModule,
    MatListModule,
    MatRadioModule,
    MatGridListModule,
    // MatFormsModule,

    BrowserAnimationsModule
  ],
  providers: [ MatDatepickerModule ],
})

export class MaterialModule {}