import { Observable } from 'rxjs';

export interface ICreate<T, Tout> {
  create(obj: T): Observable<Tout>;
}
