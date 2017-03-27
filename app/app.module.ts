import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainContainerModule } from './components/main-container/main-container.module';
import { MainContainer } from './components/main-container/main-container.component';

@NgModule({
  imports: [
    BrowserModule,
    MainContainerModule
  ],
  bootstrap: [MainContainer]
})
export class AppModule { }
