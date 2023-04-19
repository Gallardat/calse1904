export class Factura{
  private _idFactura: number = 0;
  private _idCliente: number = 0;
  private _totalFactura: number = 0;
  private _ivaFactura: number = 0;


  constructor(idFactura:number,idCliente: number,totalFactura: number, ivaFactura: number){
    this._idFactura=idFactura
    this._idCliente=idCliente
    this._totalFactura=totalFactura
    this._ivaFactura=ivaFactura
  }
  public get idFactura(): number {
    return this._idFactura;
  }
  public set idFactura(value: number) {
    this._idFactura = value;
  }
  public get idCliente(): number {
    return this._idCliente;
  }
  public set idCliente(value: number) {
    this._idCliente = value;
  }
  public get totalFactura(): number {
    return this._totalFactura;
  }
  public set totalFactura(value: number) {
    this._totalFactura = value;
  }
  public get ivaFactura(): number {
    return this._ivaFactura;
  }
  public set ivaFactura(value: number) {
    this._ivaFactura = value;
  }
}
