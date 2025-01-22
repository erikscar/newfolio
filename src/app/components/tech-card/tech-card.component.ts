import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tech-card',
  standalone: true,
  imports: [],
  templateUrl: './tech-card.component.html',
  styleUrl: './tech-card.component.scss'
})
export class TechCardComponent {
  @Input() techImgLink: string = "";
  @Input() techName: string = "";
}
