import { Injectable } from '@angular/core';
import { ItemCitaAdminDTO } from '../modelo/item-cita-admin-dto';
import { RegistroCitaDTO } from '../modelo/registro-cita-dto';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

cita: ItemCitaAdminDTO[];

constructor() {
  this.cita = [];
  this.cita.push({ codigoCita: 1, cedulaPaciente: '1004917855', nombrePaciente: 'Juan David Giraldo', nombreMedico :'Leonel Ramirez', especialidad:
  'MEDICINA GENERAL', estado: 'PROGRAMADA', fecha:'2023-11-28'});
  this.cita.push({ codigoCita: 6, cedulaPaciente: '419034057', nombrePaciente: 'Martha Lucia Palacio', nombreMedico :'Brenda Tatiana Alcazar', especialidad:
  'CITOLOGIA', estado: 'PROGRAMADA', fecha:'2023-11-23'});
  this.cita.push({ codigoCita: 13, cedulaPaciente: '1214713604', nombrePaciente: 'Jose Gildardo Bedoya', nombreMedico :'Carlos Manuel Sanchez', especialidad:
  'MEDICINA GENERAL', estado: 'CANCELADA', fecha:'2023-11-21'});
  this.cita.push({ codigoCita: 1, cedulaPaciente: '1004917855', nombrePaciente: 'Angel Custodio Zamudio', nombreMedico :'Amilcar Salazar Guerrero', especialidad:
  'NEUROLOGIA', estado: 'COMPLETADA', fecha:'2023-11-17'});
  }
public listar(): ItemCitaAdminDTO[] {
return this.cita;
}
public obtener(codigoCita: number): ItemCitaAdminDTO | undefined{
return this.cita.find(cita => cita.codigoCita == codigoCita);
}
public crear(cita: RegistroCitaDTO){
let codigo = this.cita.length + 1;
this.cita.push({ codigoCita: 1, cedulaPaciente: '24786950', nombrePaciente: 'Angel Custodio Zamudio', nombreMedico :'Amilcar Salazar Guerrero', especialidad:
  'NEUROLOGIA', estado: 'COMPLETADA', fecha:'2023-11-17'});
}
}
