import { Router } from '@angular/router';
import { TransferenciaService } from './../../services/transferencia.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router : Router) {}

  ngOnInit(): void {}

  transferir() {
    this.service
      .adicionar({
        valor: this.valor,
        destino: this.destino,
      })
      .subscribe(
        (resultado) => {
          this.router.navigateByUrl('extrato');
        },
        (error) => console.error(error)
      );
  }
}
