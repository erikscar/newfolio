import { Component, HostListener } from '@angular/core';
import { HomeComponent } from "../home/home.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

activeSection: string = 'home-container';

@HostListener('window:scroll', [])
onScroll(): void {
  const sections = ['home-container', 'aboutme-container', 'portfolio-container', 'contact-container'];
  const distance = 100; 

  sections.forEach((section) => {
    const element = document.getElementById(section);
    if(element) {
      const rect = element.getBoundingClientRect();
      if(rect.top <= distance && rect.bottom > distance) {
        this.activeSection = section;
      }
    }
  })
}
}
