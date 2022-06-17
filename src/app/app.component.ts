import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aoiskea';
  submit=false;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Noodles'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8)
  ]);

  onSubmit(){
    this.submit=true;
  }

  onBack(){
    this.submit=false;
  }
}
