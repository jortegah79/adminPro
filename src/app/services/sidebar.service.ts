import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  menu: any[] = [
    {
      titulo: 'Dashboard',
      icon: 'mdi mdi-home menu-icon',
      submenu: [
        { titulo: 'Main', url: '/', },
        { titulo: 'Progress', url: '/dashboard/progress' },
        { titulo: 'Gráfica', url: '/dashboard/grafica1' },
      ]

    }
  ]

}
