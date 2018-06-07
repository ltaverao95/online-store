class EntityNormalizedObj<TEntity>{

    constructor() {
        this.byId = {};
        this.allIds = [];
    }

    byId: EntityMap<TEntity>;
    allIds: Array<string>
}

class EntityMap<TEntity>{
    [id: string]: TEntity;
}

class KeyValueUtil<TKey, TValue>{
    key: TKey;
    value: TValue;
}

export {
    EntityNormalizedObj,
    EntityMap,
    KeyValueUtil
}