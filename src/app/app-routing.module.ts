import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SocialComponent } from './social/social.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'', component:SocialComponent},
  {path:'', component:FooterComponent},
  {path:'menu', component:MenuComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
