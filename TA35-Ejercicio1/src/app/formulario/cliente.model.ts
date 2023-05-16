export class Cliente {
  nombre: string = '';
  cif: string = '';
  direccion: string = '';
  grupo: string = '';

  constructor(nombre: string, cif: string, direccion: string, grupo: string) {
    this.nombre = nombre;
    this.cif = cif;
    this.direccion = direccion;
    this.grupo = grupo;
  }
}
