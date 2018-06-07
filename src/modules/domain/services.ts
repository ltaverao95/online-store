import * as u from 'updeep';

import {
    EntityMap,
} from '../utils';

import {
    IdEntityBase
} from './';

export namespace Services {

    export class EntityMapStorageService {
        public storeById<TEntity extends IdEntityBase>(previousEntityMap: EntityMap<TEntity>, newEntityMap: TEntity): EntityMap<TEntity> {

            let newEntityMapState = new EntityMap<TEntity>();

            const { id } = newEntityMap;

            newEntityMapState = u({
                [id]: newEntityMap
            }, previousEntityMap);

            return newEntityMapState;
        }

        public storeByAllIds(previousIdsList: Array<string>, idEntityBase: IdEntityBase): Array<string> {

            if (previousIdsList.indexOf(idEntityBase.id) == -1) {
                return [...previousIdsList, idEntityBase.id];
            }

            return previousIdsList;
        }
    }
}