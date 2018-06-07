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
                            title: "",
                            productDetailId: "1"
                        }
                    },
                    allIds: ["1"]
                },
                productDetailMap: {
                    byId: {
                        "1": {
                            id: "1",
                            description: "",
                            url: "",
                            price: 0,
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
            productsList: [
                {
                    id: "1",
                    title: "Angular Course",
                    description: "Introduction to Angular framework",
                    price: 0,
                    url: "",
                    currency: "COP $"
                }
            ],
            productsListViewModel: {
                actionResult: new ActionResultDTO()
            }
        }
    }
};