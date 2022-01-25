import { TransferenciaService } from './../services/transferencia.service';
import { Component, OnInit, Input } from '@angular/core';
import { Transferencia } from '../models/transferencia.models';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  constructor(private service: TransferenciaService) {}

  transferencias: any[];

  ngOnInit(): void {
    this.service
      .todasTransferencias()
      .subscribe((x) => (this.transferencias = x));
  }
}
