import {

    //Models
    EntityMap,
    EntityNormalizedObj
} from '../utils';

interface IdEntityBase {
    id: string;
}

class CommonConfiguration{
    
}

class InterfaceConfiguration{
    commonConfiguration: CommonConfiguration;
}

export {
    CommonConfiguration,
    InterfaceConfiguration,
    IdEntityBase
}