import { AppState } from './modules/domain';
import { ActionResultDTO } from './modules/utils/DTO';
import { UtilsConstants } from './modules/utils';

export const appState: AppState = {
    interfaceConfiguration: {
        domainConfiguration: {
            productConfiguration: {
                productsMap: {
                    byId: {
                        "1": {
                            id: "1",
                            title: "Angular Course",
                            productDetailId: "1"
                        }
                    },
                    allIds: ["1"]
                },
                productDetailMap: {
                    byId: {
                        "1": {
                            id: "1",
                            description: "Introduction to Angular framework",                            
                            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png",
                            price: 69000,
                            currencyId: "1"
                        }
                    },
                    allIds: ["1"]
                },
                currencyMap: {
                    byId: {
                        "1": {
                            id: "1",
                            title: "COP",
                            currency: "COP $"
                        },
                        "2": {
                            id: "2",
                            title: "USD",
                            currency: "USD $"
                        }
                    },
                    allIds: ["1", "2"]
                },
                productsComplete: {
                    byId: {
                        "1": {
                            id: "1",
                            productId: "1",
                            productDetailId: "1",
                            currencyId: "1"
                        }
                    },
                    allIds: ["1"]
                }
            }
        }
    },
    ui: {
        productsModule: {
            productsList: [],
            productsListViewModel: {
                actionResult: new ActionResultDTO()
            }
        }
    }
};