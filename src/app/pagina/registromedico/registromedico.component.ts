import { Component } from '@angular/core';
import { RegistroMedicoDTO } from 'src/app/modelo/registro-medico-dto';

@Component({
  selector: 'app-registromedico',
  templateUrl: './registromedico.component.html',
  styleUrls: ['./registromedico.component.css']
})
export class RegistromedicoComponent {

  registroMedicoDTO: RegistroMedicoDTO;
  horario: any = {}; // Objeto para almacenar los horarios temporales
  horarios: any[] = []; // Array para almacenar los horarios registrados
  ciudades: string[] = [];
  especialidades: string[] = [];
  archivos!: FileList;

  // Método para agregar un horario a la lista
  agregarHorario() {
    if (this.horario.dia && this.horario.hora) {
      this.horarios.push({ dia: this.horario.dia, hora: this.horario.hora });
      this.horario = {}; // Limpiar el objeto horario después de agregarlo
    }
  }

  constructor() {
    this.registroMedicoDTO = new RegistroMedicoDTO();
    this.ciudades = [];
    this.cargarCiudadesM();
    this.especialidades = [];
    this.cargarEspecialidadesM();
  }

  public registrar() {
    if (this.archivos != null && this.archivos.length > 0) {
      console.log(this.registroMedicoDTO);
    } else {
      console.log("Debe cargar una foto");
    }
  }

  public sonIguales(): boolean {
    return this.registroMedicoDTO.password === this.registroMedicoDTO.confirmaPassword;
  }

  private cargarCiudadesM() {
    this.ciudades.push("Manizales");
    this.ciudades.push("Pereira");
    this.ciudades.push("Armenia");
    this.ciudades.push("Calarca");
    this.ciudades.push("Salento");
    this.ciudades.push("Dosquebradas");
  }

  private cargarEspecialidadesM() {
    this.especialidades.push("Cirugía general");
    this.especialidades.push("Medicina Interna");
    this.especialidades.push("Cardiología");
    this.especialidades.push("Neurología");
    this.especialidades.push("Radiología");
    this.especialidades.push("Ortopedia");
    this.especialidades.push("Anestesiología");
    this.especialidades.push("Psiquiatría");
    this.especialidades.push("Oftalmología");
  }

  public onFileChange(event: any) {
    this.archivos = event.target.files;

    if (event.target.files.length > 0) {
      const files = event.target.files;
      console.log(files);
    }
  }
}
