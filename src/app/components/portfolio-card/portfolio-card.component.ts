import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio-card',
  standalone: true,
  imports: [ButtonComponent, RouterLink, CommonModule],
  templateUrl: './portfolio-card.component.html',
  styleUrl: './portfolio-card.component.scss',
})
export class PortfolioCardComponent {
  @Input() name: string = "";
  @Input() description: string = "";
  @Input() link: string = "";
  @Input() techsQuantity: string = "";
  @Input() featuresQuantity: string = "";
  @Input() techs: string[] = [];
  @Input() techIcons: string[] = [];
  @Input() features: string[] = [];

}
