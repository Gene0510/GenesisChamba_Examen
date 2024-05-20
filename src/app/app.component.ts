import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'examen';

  menuItems: MenuItem[]=[];
  items:any[]=[]
  
  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'HOME',
        icon: 'pi pi-home',
        routerLink: ['/home']
      },
      {
        label: 'ABOUT',
        icon: 'pi pi-address-book',
        routerLink: ['/about']
      },
      {
        label: 'CONTACT',
        icon: 'pi pi-envelope',
        routerLink: ['/contact']
      },
      {
        label: 'POSTS',
        icon: 'pi pi-shopping-cart',
        routerLink: ['/post']
      }
    ];
  }
}
