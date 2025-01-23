import { Component, input, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio-card',
  standalone: true,
  imports: [ButtonComponent, RouterLink],
  templateUrl: './portfolio-card.component.html',
  styleUrl: './portfolio-card.component.scss',
})
export class PortfolioCardComponent {
  @Input() name: string = "";
  @Input() description: string = "";
  @Input() techsQuantity: string = "";
  @Input() featuresQuantity: string = "";
  @Input() techs: string[] = [];
  @Input() features: string[] = [];
}
