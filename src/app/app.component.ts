import { NgClass } from '@angular/common';
import { Component, Inject, ViewChild, ElementRef, OnInit } from '@angular/core'; // rendered2
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'testeos-de-laburo';

  public formLogin!: FormGroup;

  public dataEntrante:any = [];

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
    this.RestService.post('http://localhost:3000/users', 
    {Nombre: this.form.value.name,
    Edad: this.form.value.age,
    Correo: this.form.value.email})
    .subscribe(respuesta => {
    })
  }








}
