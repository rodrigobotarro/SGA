import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aeronave } from '../models/aeronave';
import { CountMarcas } from '../models/CountMarcas';
import { CountDecadas } from '../models/CountDecadas';


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  // tslint:disable-next-line: no-string-literal
  private BASE_URL = window['cfgApiBaseUrl'];
  private GET_AERONAVES_URL = `${this.BASE_URL}/aeronaves`;
  private POST_AERONAVES_URL = `${this.BASE_URL}/aeronaves`;
  private DELETE_AERONAVES_URL = `${this.BASE_URL}/aeronaves/`;
  private UPDATE_AERONAVES_URL = `${this.BASE_URL}/aeronaves/`;
  private SEARCH_AERONAVE_URL = `${this.BASE_URL}/aeronaves/`;
  private GET_AERONAVES_FIND_URL = `${this.BASE_URL}/aeronaves/find`;

  constructor(private http: HttpClient) { }

  public getAeronaves(): Observable<Aeronave[]> {
    return this.http.get<Aeronave[]>(this.GET_AERONAVES_URL);
  }

  public postAeronaves(aeronave: Aeronave): Observable<Aeronave> {
    return this.http.post<Aeronave>(this.POST_AERONAVES_URL, aeronave);
  }

  public deletaAeronave(id: number): Observable<void> {
    return this.http.delete<void>(this.DELETE_AERONAVES_URL + id);
  }

  public atualizaAeronave(aeronave: Aeronave): Observable<Aeronave> {
    return this.http.put<Aeronave>(this.UPDATE_AERONAVES_URL + aeronave.id, aeronave);
  }

  public buscaAeronave(id: number): Observable<Aeronave> {
    return this.http.get<Aeronave>(this.SEARCH_AERONAVE_URL + id);
  }

  public getAeronavesFind(parametro: string): Observable<Aeronave[]> {
    return this.http.get<Aeronave[]>(this.GET_AERONAVES_FIND_URL, { params: { parametro } });
  }

  public countMarcas(parametro: string): Observable<CountMarcas[]> {
    return this.http.get<CountMarcas[]>(this.GET_AERONAVES_FIND_URL, { params: { parametro } });
  }

  public countDecadas(parametro: string): Observable<CountDecadas[]> {
    return this.http.get<CountDecadas[]>(this.GET_AERONAVES_FIND_URL, { params: { parametro } });
  }

}
