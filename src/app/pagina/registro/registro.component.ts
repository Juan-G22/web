import { Component } from '@angular/core';
import { RegistroPacienteDTO } from 'src/app/modelo/registro-paciente-dto';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  registroPacienteDTO: RegistroPacienteDTO;
  ciudades:string[];
  tiposSangre:string[];
  epss:string[];
  archivos!:FileList;

  constructor(){
    this.registroPacienteDTO = new RegistroPacienteDTO();
    this.ciudades = [];
    this.cargarCiudades();
    this.tiposSangre = [];
    this.cargarTiposSangre();
    this.epss =[];
    this.cargarEps();
    }

   public registrar(){
      
    if(this.archivos != null && this.archivos.length > 0){
      console.log(this.registroPacienteDTO);
      }else{
      console.log("Debe cargar una foto");
      }
  
    }

   public sonIguales():boolean{
      return this.registroPacienteDTO.password == this.registroPacienteDTO.confirmaPassword;
      
  
    }

    public onFileChange(event:any){
     
      this.archivos = event.target.files;
      
      if (event.target.files.length > 0) {
      const files = event.target.files;
      console.log(files);
      }
      }

    private cargarCiudades(){
      this.ciudades.push("Armenia");
      this.ciudades.push("Calarcá");
      this.ciudades.push("Pereira");
      this.ciudades.push("Manizales");
      this.ciudades.push("Salento");
      this.ciudades.push("Dosquebradas");
      }

      private cargarTiposSangre(){
        this.tiposSangre.push("A+");
        this.tiposSangre.push("A-");
        this.tiposSangre.push("B+");
        this.tiposSangre.push("B-");
        this.tiposSangre.push("AB+");
        this.tiposSangre.push("AB-");
        this.tiposSangre.push("O+");
        this.tiposSangre.push("O-");
        }

        private cargarEps(){
          this.epss.push("Salud Total");
          this.epss.push("Coomeva");
          this.epss.push("Sanitas");
          this.epss.push("Nueva EPS");
          this.epss.push("Cafe Salud");
          this.epss.push("Medimas");
          this.epss.push("Compensar EPS");
          this.epss.push("Cajacopi");
          this.epss.push("Confamiliar EPS");
          this.epss.push("SaludVida");
          }

}




