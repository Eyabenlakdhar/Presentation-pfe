import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';



@NgModule({
  imports: [
    AppModule,
    ServerModule,
    IonicModule
    
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
