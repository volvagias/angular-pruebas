import { NgClass } from '@angular/common';
import { Component, Inject, ViewChild, ElementRef, OnInit } from '@angular/core'; // rendered2
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestService } from './rest.service';

interface User {
  id: string;
  name: string;
  age: string;
  email: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'testeos-de-laburo';

  public formLogin!: FormGroup;

  public dataEntrante:User[] = [];

  public form!: FormGroup;

  

  constructor(
    public formBuilder: FormBuilder, 
    private RestService: RestService)
  { }
  
  ngOnInit() {

    this.cargarData();

    this.form = this.formBuilder.group({
      name: [''],
      age: [''],
      email: ['']
    })

  }
  

  cargarData() {  /* GET */
    this.RestService.get('http://localhost:3000/users')
    .subscribe(respuesta => {
      this.dataEntrante = respuesta;
    })
  }

  enviarData() { /* POST */

    // Obtener la última ID en la lista actual
    const ultimaId = this.dataEntrante.length > 0 ? Math.max(...this.dataEntrante.map(user => parseInt(user.id))) : 0;

    // Generar una nueva ID basada en la última ID
    const nuevaId = (ultimaId + 1).toString();

    this.RestService.post('http://localhost:3000/users', 
    {
    id: nuevaId,  
    name: this.form.value.name,
    age: this.form.value.age,
    email: this.form.value.email})
    .subscribe(respuesta => {

      this.cargarData(); // Actualiza la lista después de agregar un nuevo objeto

      // Reinicia el formulario después de enviar datos
      this.form.reset();
    })
  }








}
