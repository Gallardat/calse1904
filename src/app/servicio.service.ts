import { Injectable } from '@angular/core';
import { Factura } from './modelo/Factura';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  arrayfactura: Factura[]=[]

  constructor() { }

  agregarFacturaServicio(factura: Factura)
  {
    this.arrayfactura.push(factura)

  }
  eliminarFacturaServicio(id:number)
  {

    this.arrayfactura=this.arrayfactura.filter(facturas=>facturas.idFactura!= id)
  }
  mostrarFactura()
  {
    return this.arrayfactura
  }
  editarFacturaServicio(id:number,cliente:number, total:number, iva:number)
  {
    for(let x=0;this.arrayfactura.length-1;x++)
    {
      if(this.arrayfactura[x].idFactura==id)
      {
        this.arrayfactura[x].idFactura=id
        this.arrayfactura[x].idCliente=cliente
        this.arrayfactura[x].totalFactura=total
        this.arrayfactura[x].ivaFactura=iva
      }
    }
    //this.arrayfactura=this.arrayfactura.filter(facturas=>facturas.idFactura!= id)
  }


}
