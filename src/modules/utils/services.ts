import { EntityNormalizedObj } from './';

export namespace Services {

    export const getArrayFromMap = <TEntity>(entityNormalizeObj: EntityNormalizedObj<TEntity>, cloneObjects = false) => {

        let arrayList = new Array<TEntity>();

        if (!entityNormalizeObj) {
            return arrayList;
        }

        if (!entityNormalizeObj.allIds) {
            return arrayList;
        }

        for (let i = 0; i < entityNormalizeObj.allIds.length; i++) {

            if (cloneObjects) {
                arrayList.push(Object.assign({}, entityNormalizeObj.byId[entityNormalizeObj.allIds[i]]));
                continue;
            }

            arrayList.push(entityNormalizeObj.byId[entityNormalizeObj.allIds[i]]);
        }

        return arrayList;
    }
}