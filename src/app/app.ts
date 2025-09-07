import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {StylesDemoComponent} from './components/styles-demo/styles-demo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StylesDemoComponent],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('member-client');
}
