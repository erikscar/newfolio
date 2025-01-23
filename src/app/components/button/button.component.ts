import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgStyle, RouterModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})

export class ButtonComponent {
  @Input() text: string = "";
  @Input() icon: string = "";
  @Input() icon_left: string = "";
  @Input() width: string = "";
  @Input() href: string = "";
  @Input() className: string = "commonBtn";
  @Input() queryParams: any;
  @Input() link: string = "";
}
