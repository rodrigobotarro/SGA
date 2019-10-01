import { Component, OnInit, Input } from '@angular/core';
import { CountMarcas } from '../models/CountMarcas';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {
  @Input() marcas: CountMarcas[] = [];

  constructor(
  ) { }

  ngOnInit() {
  }

}
