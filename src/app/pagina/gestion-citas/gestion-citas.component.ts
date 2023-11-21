import { Component } from '@angular/core';
import { ItemCitaAdminDTO } from 'src/app/modelo/item-cita-admin-dto';
import { CitaService } from 'src/app/servicios/cita.service';

@Component({
  selector: 'app-gestion-citas',
  templateUrl: './gestion-citas.component.html',
  styleUrls: ['./gestion-citas.component.css']
})
export class GestionCitasComponent {


  cita: ItemCitaAdminDTO[];
  constructor( private citaService: CitaService ) {
  this.cita = citaService.listar();
}
}
