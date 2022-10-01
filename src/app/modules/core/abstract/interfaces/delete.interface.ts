import { Observable } from 'rxjs';

export interface IDelete {
  delete(id: number): Observable<{}>;
}
