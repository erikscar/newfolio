import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [ButtonComponent, RouterLink, CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnInit {
  name: string = "";
  description: string = "";
  techsQuantity: string = "";
  featuresQuantity: string = "";
  techs: string[] = [];
  features: string[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
      this.description = params['description'];
      this.techsQuantity = params['techsQuantity'];
      this.featuresQuantity = params['featuresQuantity'];
      this.techs = params['techs'] ? params['features'].split(',') : [];;
      this.features = params['features'] ? params['features'].split(',') : [];;
    });
}
}
