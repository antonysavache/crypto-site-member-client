import { Component } from '@angular/core';
import { ShellComponent } from './layout/shell/shell.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShellComponent],
  template: '<app-shell></app-shell>',
  styleUrl: './app.css'
})
export class App {
  constructor() {
    const arr = [1, '1', 2, '2']

    const onj = {
      numbers: arr.filter(item => typeof item === 'number').reduce((a, b) => a + b),
      strings: arr.filter(item => typeof item === 'string').reduce((a, b) => a + b),
    }

    console.log(onj)
  }
}
