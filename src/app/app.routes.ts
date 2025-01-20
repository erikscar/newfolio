import { Routes } from '@angular/router';
import { ProjectComponent } from './components/project/project.component';
import { MainComponent } from './components/main/main.component';


export const routes: Routes = [
    { path: '', component: MainComponent},
    { path: 'project', component: ProjectComponent}
];
