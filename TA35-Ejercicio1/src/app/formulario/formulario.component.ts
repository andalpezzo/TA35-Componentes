import { Component } from '@angular/core';
import { Cliente } from './cliente.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  labelNombre:string="";
  labelCif:string="";
  labelDireccion:string="";
  selectGrupo:string="";

  addCliente(){
    let newCliente = new Cliente(this.labelNombre, this.labelCif, this.labelDireccion, this.selectGrupo);
    this.clientes.push(newCliente);
  }

  clientes:Cliente[] = [
    new Cliente("Cliente 1", "12345678W", "Calle 1", "Grupo 1"),
  ];
}
