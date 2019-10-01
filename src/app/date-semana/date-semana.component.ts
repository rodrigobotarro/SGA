import { Component, OnInit, Output, EventEmitter, Input, } from '@angular/core';
import { Aeronave } from '../models/aeronave';
import { CountDecadas } from '../models/CountDecadas';

@Component({
  selector: 'app-date-semana',
  templateUrl: './date-semana.component.html',
  styleUrls: ['./date-semana.component.css']
})
export class DateSemanaComponent implements OnInit {
  @Output() aeronavesLista: EventEmitter<Aeronave[]> = new EventEmitter();
  @Input() aeronavesSemana: Aeronave[] = [];
  @Input() naoVendidos: Aeronave[] = [];
  @Input() decadas: CountDecadas[] = [];
  @Input() todasAeronaves: Aeronave[] = [];

  constructor(
  ) { }

  ngOnInit() {
  }

  aeroNaoVendidas() {
    this.aeronavesLista.emit(this.naoVendidos);
  }

  aeroDaSemana() {
    this.aeronavesLista.emit(this.aeronavesSemana);
  }

  showTodasAeronaves() {
    this.aeronavesLista.emit(this.todasAeronaves);
  }
}
