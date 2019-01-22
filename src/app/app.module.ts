import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxDraggableResizerModule } from 'src/packages/ngx-draggable-resizer/src/ngx-draggable-resizer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDraggableResizerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
