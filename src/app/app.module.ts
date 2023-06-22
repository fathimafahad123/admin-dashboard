import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




// button imported from angular meterial.io-api 
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './card/card.component';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { TableComponent } from './table/table.component';
import { PichartComponent } from './pichart/pichart.component';

// side bar imported from angular material.io.api
import {MatSidenavModule} from '@angular/material/sidenav';

// toolbar imported from angular material.io.api
import {MatToolbarModule} from '@angular/material/toolbar';

// icon imported from angular material.io.api
import {MatIconModule} from '@angular/material/icon';

// menu imported from angular material.io.api
import {MatMenuModule} from '@angular/material/menu';

// horizontal line imported from angular material.io.api
import {MatDividerModule} from '@angular/material/divider';
import { EmployeComponent } from './employe/employe.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { LeadesComponent } from './leades/leades.component';

// card imported from angular material.io.api
import {MatCardModule} from '@angular/material/card';

// highchart imported from angular material.io.api
import { HighchartsChartModule } from 'highcharts-angular';

// Paginator imported from angular material.io.api
import {MatPaginatorModule} from '@angular/material/paginator';

import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    CardComponent,
    AreaChartComponent,
    TableComponent,
    PichartComponent,
    EmployeComponent,
    GalleryComponent,
    ContactComponent,
    LeadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // to active imported button-copy brase nte ullile saadanm
    MatButtonModule,

    // to active imported sidebar-copy brase nte ullile saadanm
    MatSidenavModule,

   // to active imported toolbar-copy brase nte ullile saadanm
    MatToolbarModule,
    
    // to active imported icon-copy brase nte ullile saadanm
    MatIconModule,

    // to active imported menu-copy brase nte ullile saadanm
    MatMenuModule,

    // to active imported horizontal line-copy brase nte ullile saadanm
    MatDividerModule,

    // to active imported card-copy brase nte ullile saadanm
    MatCardModule,

     // to active imported hightchart-copy brase nte ullile saadanm
    HighchartsChartModule,
    
    // to active imported Paginator-copy brase nte ullile saadanm
    MatPaginatorModule,

    MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
