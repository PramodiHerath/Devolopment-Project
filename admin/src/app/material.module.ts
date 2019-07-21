import { MatGridListModule } from '@angular/material/grid-list';
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
        MatExpansionModule,
        MatInputModule, 
        MatSortModule,
        MatAutocompleteModule,
        MatSelectModule,
        MatPaginatorModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    MatAutocompleteModule,
    // FormsModule,
    MatSelectModule,
    MatListModule,
    MatRadioModule,
    MatPaginatorModule,
    MatSortModule,
    MatExpansionModule,
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
    MatExpansionModule,
    MatPaginatorModule,
    MatGridListModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatSelectModule,
    // MatFormsModule,

    BrowserAnimationsModule
  ],
  providers: [ MatDatepickerModule ],
})

export class MaterialModule {}