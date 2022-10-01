import { Observable } from 'rxjs';

export interface IUpdate<T, Tout> {
  update(obj: T): Observable<Tout>;
}
