import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UpperNavComponent } from "./Shared/upper-nav/upper-nav.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'iconic-intern';
}
