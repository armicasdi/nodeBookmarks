import {Component} from '@angular/core';


@Component({
    selector: 'favoritos-list',
    templateUrl: '../views/favoritos-list.html'
})
export class FavoritosListComponent{
    public title: string;
    constructor(){
        this.title= "Listado de Marcadores";

    }

}