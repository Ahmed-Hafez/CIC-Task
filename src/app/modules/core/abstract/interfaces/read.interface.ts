import { Observable } from 'rxjs';

export interface IRead<Tout> {
  readList(): Observable<Tout[]>;
  readById(id: number): Observable<Tout>;
}
