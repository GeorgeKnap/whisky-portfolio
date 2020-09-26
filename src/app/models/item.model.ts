import { Distilleries } from './distilleries.enum';

export interface PortfolioItem {
    name: string;
    boughtOn: string;
    price: number;
    currency: string;
    priceCzk: number;
    realPrice: number;
    description: string;
    photo: string;
    distillery: Distilleries;
}