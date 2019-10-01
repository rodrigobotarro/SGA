import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Aeronave } from '../models/aeronave';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  @Output() atualizarAeronaves: EventEmitter<null> = new EventEmitter();
  @Output() ocultarDetalhesAeronave: EventEmitter<null> = new EventEmitter();
  @Input() showDetalhes = false;
  marcas = ['Embraer', 'Boeing', 'AirBus', 'Bombardier', 'Cessna', 'BAE Systems'];
  vendidoStatus = [
    { status: 'Vendido', valor: 'true' },
    { status: 'Disponível', valor: 'false' }];
  @Input() aeronaveModel: Aeronave;
  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.limparCampos();
  }
  atualizarAeronave(form: any) {
    this.apiService.atualizaAeronave(this.aeronaveModel).subscribe();
    form.resetForm();
    this.atualizarAeronaves.emit();
  }

  criarAeronave(form: any) {
    this.apiService.postAeronaves(this.aeronaveModel).subscribe();
    form.resetForm();
    this.atualizarAeronaves.emit();
  }

  limparCampos() {
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

  cancelar(form: any) {
    form.resetForm();
    this.ocultarDetalhesAeronave.emit();
  }

}
