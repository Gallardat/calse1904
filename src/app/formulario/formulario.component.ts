import { Component } from '@angular/core';
import { Factura } from '../modelo/Factura';
import { ServicioService } from '../servicio.service';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  idFactura: number;
  idCliente: number;
  totalFactura: number;
  ivaFactura: number;
  contador: number
  click: boolean=false

  constructor(private miServicio:ServicioService){
    this.idCliente=0
    this.idFactura = 0;
    this.totalFactura= 0;
    this.ivaFactura= 0;
    this.contador=0
    this.arrayFactura=this.miServicio.arrayfactura
  }

  arrayFactura: Factura[]=[]
 // factura: Factura= new Factura(0,0,0)

  agregarFactura(){
    this.contador++;
    let miFactura= new Factura(this.contador,this.idCliente,this.totalFactura,this.ivaFactura)
    this.miServicio.agregarFacturaServicio(miFactura)

  }

  eliminarFactura()
  {
      this.miServicio.eliminarFacturaServicio(this.idFactura);
      this.arrayFactura=this.miServicio.mostrarFactura()
  }

  editarFactura(){
    this.miServicio.editarFacturaServicio(this.idFactura,this.idCliente,this.totalFactura,this.ivaFactura)

  }

  consultarFactura(){
    this.click=true
    
  }




}
