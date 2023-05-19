import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//You have to import any component you are going to use into module?
import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server.element.component';
import { TestComponentComponent } from './test-component/test-component.component';

@NgModule({
  declarations: [	
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
      TestComponentComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
