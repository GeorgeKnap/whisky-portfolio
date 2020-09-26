import { Distilleries } from './distilleries.enum';

export interface PortfolioItem {
    name: string;
    boughtOn: string;

    /**
     * The purchase price in @see currency.
     */
    price: number;

    /**
     * The currency in which the purchase was made.
     */
    currency: string;

    /**
     * The price in CZK in time of purchase.
     */
    priceCzk: number;

    /**
     * The real value in time of purchase in @see currency . Discounts etc. might make difference between this price and @see price .
     */
    realPrice: number;

    /**
     * The price in CZK for which I'm selling the item.
     */
    salePrice: number;

    description: string;
    photo: string;
    distillery: Distilleries;
}
