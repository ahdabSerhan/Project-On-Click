import { ProjectService } from './project.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ProjectComponent } from './project/project.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { AngularDraggableModule } from 'angular2-draggable';

import { OnClickRoutingModule } from './on-click-routing.module';
import { GraphAllProjectsComponent } from './all-projects/graph-all-projects/graph-all-projects.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AngularDraggableModule,
    OnClickRoutingModule,
    ProgressbarModule.forRoot(),
    PopoverModule.forRoot()
  ],
  declarations: [
    CreateProjectComponent,
    ProjectComponent,
    AllProjectsComponent,
    GraphAllProjectsComponent
  ],
  providers: [ProjectService],
})
export class OnClickModule { }
