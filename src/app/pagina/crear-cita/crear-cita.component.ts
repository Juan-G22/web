import { Component } from '@angular/core';
import { RegistroCitaDTO } from 'src/app/modelo/registro-cita-dto';
import { CitaService } from 'src/app/servicios/cita.service';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent {

  registroCitaDTO: RegistroCitaDTO;
constructor(private citaService: CitaService) {
this.registroCitaDTO = new RegistroCitaDTO();
}
public crearCita(){
this.citaService.crear(this.registroCitaDTO);
}


}
