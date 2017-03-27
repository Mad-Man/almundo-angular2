import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NouisliderComponent } from 'ng2-nouislider';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { AppRoutingModule } from '../../app.route';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module'
import { MainContainer } from './main-container.component';
import { Header } from './header/header.component';
import { HotelsService } from './services/hotels.service';
import { ListContainer } from './list-container/list-container.component';
import { FilterBar } from './filter-bar/filter-bar.component';
import { ListModule } from './list/list.module';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        ListModule,
        SharedModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDoT8l-Fg0lyWxX2SaqLDOdEtZEDX9_0B4'
        }),
        AppRoutingModule
    ],
    providers: [HotelsService],
    declarations: [
        MainContainer,
        Header,
        ListContainer,
        FilterBar,
        NouisliderComponent,
    ],
})
export class MainContainerModule { }
