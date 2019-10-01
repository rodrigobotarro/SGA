import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Aeronave } from '../models/aeronave';
import { ApiService } from '../services/api.service';
import { CountMarcas } from '../models/CountMarcas';
import { CountDecadas } from '../models/CountDecadas';


@Component({
  selector: 'app-aeronaves',
  templateUrl: './aeronaves.component.html',
  styleUrls: ['./aeronaves.component.css']
})

export class AeronavesComponent implements OnInit {
  @Output() aeronaveDetalhes: EventEmitter<number> = new EventEmitter();
  @Input() aeronaves: Aeronave[] = [];
  @Input() todasAeronaves: Aeronave[] = [];
  aeronavesSemana: Aeronave[] = [];
  naoVendidos: Aeronave[] = [];
  marcas: CountMarcas[] = [];
  decadas: CountDecadas[] = [];
  aeronave: Aeronave;
  showDetalhes = false;
  aeronaveModel: Aeronave;

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.atualizaAeronaves();
  }

  PreparaCampos() {
    this.aeronaveModel = {
      id: null,
      nome: '',
      marca: '',
      ano: null,
      descricao: '',
      vendido: null,
      created: null,
      updated: null,
    };
  }

  atualizaAeronaves() {
    setTimeout(() => this.getAeronaves(), 100);
    setTimeout(() => this.getNaoVendidos(), 100);
    setTimeout(() => this.getAeronavesSemana(), 100);
    setTimeout(() => this.getMarcas(), 100);
    setTimeout(() => this.getDecadas(), 100);
    this.showDetalhes = false;
  }

  public getAeronaves() {
    this.apiService.getAeronaves().subscribe(
      res => {
        this.aeronaves = res;
        this.todasAeronaves = res;
      },
    );
  }

  deleta(id: number) {
    // Deleta na UI
    this.aeronaves = this.aeronaves.filter(
      aero => aero.id !== id);
    // Deleta no Server
    this.apiService.deletaAeronave(id).subscribe();
    this.atualizaAeronaves();
  }

  getNaoVendidos() {
    this.apiService.getAeronavesFind('naoVendidos').subscribe(
      res => {
        this.naoVendidos = res;
      },
    );
  }

  getAeronavesSemana() {
    this.apiService.getAeronavesFind('aeronavesSemana').subscribe(
      res => {
        this.aeronavesSemana = res;
      },
    );
  }

  getMarcas() {
    this.apiService.countMarcas('countMarcas').subscribe(
      res => {
        this.marcas = res;
      },
    );
  }

  getDecadas() {
    this.apiService.countDecadas('countDecadas').subscribe(
      res => {
        this.decadas = res;
      },
    );
  }

  atualizaListaAeronaves(showAeronaves: Aeronave[]) {
    this.aeronaves = showAeronaves;
  }

  exibirDetalhesAeronave(aeronave: Aeronave) {
    this.aeronaveModel = aeronave;
    this.showDetalhes = true;
  }

  ocultarDetalhesAeronave() {
    this.showDetalhes = false;
    this.getAeronaves();
  }

}
