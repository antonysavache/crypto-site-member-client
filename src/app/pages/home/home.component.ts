import { Component } from '@angular/core';
import { StylesDemoComponent } from '../../components/styles-demo/styles-demo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [StylesDemoComponent]
})
export class HomeComponent {

}
