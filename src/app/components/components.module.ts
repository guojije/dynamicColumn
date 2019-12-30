import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DynamicColumnWidthDirective } from '../directives/dynamic-column-width.directive';

@NgModule({
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    NgZorroAntdModule.forRoot(),
  ],
  declarations: [ComponentsComponent,DynamicColumnWidthDirective]
})
export class ComponentsModule { }
