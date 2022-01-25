import { Transferencia } from './../models/transferencia.models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private transferenciasList: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient : HttpClient) {
    this.transferenciasList = [];
  }

  get transferencias() {
    return this.transferenciasList;
  }

  todasTransferencias() : Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia : any) : Observable<Transferencia>{
    this.hidratar(transferencia);
    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  private hidratar(transferencia : any) {
    transferencia.data = new Date();
  }
}
