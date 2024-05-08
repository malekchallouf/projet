import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from './add/add.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shareit';
  
  constructor(private dialogRef: MatDialog) {}
  openDialog(){
    this.dialogRef.open(AddComponent);
  }
}
