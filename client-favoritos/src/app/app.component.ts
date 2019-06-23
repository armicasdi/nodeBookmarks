import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: "./views/home.html"
  
})


export class AppComponent {  
  public title:string;
  public description:string;

  constructor(){
    this.title = "App Favoritos",
    this.description= "Aplicacion Web SPA con angular 2 para gestionar favoritos"
  }
}
