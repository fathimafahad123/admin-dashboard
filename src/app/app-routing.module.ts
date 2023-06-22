import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeComponent } from './employe/employe.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { LeadesComponent } from './leades/leades.component';

const routes: Routes = [
  // set to redirect 
 { path:'dashboard',component:DashboardComponent
},
{
  path:'',redirectTo:'dashboard',pathMatch:'full'
},
// seting the path of component to redirect to next page
{
  path:'employe',component:EmployeComponent
},
{
  path:'gallery',component:GalleryComponent
},
{
  path:'contact',component:ContactComponent
},
{
  path:'leades',component:LeadesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
