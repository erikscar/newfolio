import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { AboutmeComponent } from "../aboutme/aboutme.component";

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [ButtonComponent, AboutmeComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

}
