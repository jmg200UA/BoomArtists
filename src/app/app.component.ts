import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {


  ngOnInit(){
    this.router.events.subscribe((event) => {
      if (event instanceof RouterEvent) {
        this.currentPage = event.url;
      }
    });
    console.log("Pages: ", this.pages);
  }

  public pages = [
    { title: 'Inicio', url: '/home' },
    { title: 'Día 1', url: '/dia1' },
    { title: 'Día 2', url: '/dia2' },
    { title: 'Día 3', url: '/dia3' }
  ];
  public currentPage = '';

  constructor(private router: Router) {

  }
}
