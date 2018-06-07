import {
    InterfaceConfiguration,
    IProductsModule
} from './'

class UI{
    productsModule: IProductsModule
}

class AppState{
    interfaceConfiguration: InterfaceConfiguration;
    ui: UI;
}


export 
{
    AppState,
    UI
}