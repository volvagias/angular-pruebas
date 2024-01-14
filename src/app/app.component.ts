import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testeos-de-laburo';

  public nombre = 'Rodriguez Pablo';
  public edad = 17;
  public sueldos = [1700, 1600, 1900];

  public imgUrl: string = '';

  

  constructor(){
    
    console.log('Componente cargado');
    this.estaEnCelu();
    window.addEventListener('resize', () => this.estaEnCelu());
  }
  
  ngOnInit(){

  }

  estaEnCelu(){
    if(window.innerWidth < 768){
      this.imgUrl = 'assets/images/informatica.png';
    }
    else{
      this.imgUrl = '/assets/images/logo-hospital.png';
    }
  }
}
