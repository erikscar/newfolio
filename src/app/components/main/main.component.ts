import { Component } from '@angular/core';
import { HomeComponent } from "../home/home.component";
import { AboutmeComponent } from "../aboutme/aboutme.component";
import { PortfolioComponent } from "../portfolio/portfolio.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HomeComponent, AboutmeComponent, PortfolioComponent, ContactComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
