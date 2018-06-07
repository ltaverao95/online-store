import { EntityNormalizedObj } from './';

export namespace Services {

    export const getArrayFromMap = <TEntity>(entityNormalizeObj: EntityNormalizedObj<TEntity>, cloneObjects = false) => {

        let dataSourceRequestsList = new Array<TEntity>();

        if (!entityNormalizeObj) {
            return dataSourceRequestsList;
        }

        if (!entityNormalizeObj.allIds) {
            return dataSourceRequestsList;
        }

        for (let i = 0; i < entityNormalizeObj.allIds.length; i++) {

            if (cloneObjects) {
                dataSourceRequestsList.push(Object.assign({}, entityNormalizeObj.byId[entityNormalizeObj.allIds[i]]));
                continue;
            }

            dataSourceRequestsList.push(entityNormalizeObj.byId[entityNormalizeObj.allIds[i]]);
        }

        return dataSourceRequestsList;
    }
}