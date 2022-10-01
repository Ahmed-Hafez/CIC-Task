import { IDelete } from './delete.interface';
import { IUpdate } from './update.interface';
import { IRead } from './read.interface';
import { ICreate } from './create.interface';

export interface ICrud<T, Tout>
  extends ICreate<T, Tout>,
    IRead<Tout>,
    IUpdate<T, Tout>,
    IDelete {}
