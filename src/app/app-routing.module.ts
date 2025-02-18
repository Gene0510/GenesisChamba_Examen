import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './modules/contact/contact.component';
import { HomeComponent } from './modules/home/home.component';
import { PostsComponent } from './modules/posts/posts.component';
import { AboutComponent } from './modules/about/about.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: 'posts', component: PostsComponent }, // Corregido el path 'post' a 'posts'
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Ruta por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

