import { $ } from '@wdio/globals'

class ItemSelector {

    get penSelect () {
        return $('button[aria-label="Add Pilot 5ct FriXion Clicker Erasable Gel Pens Fine Point 0.7mm Assorted Inks: Colored Pens with Eraser, Retractable, 5-Pack to cart"]');
    }
    get addToCart () {
        return $('button[aria-label="Add to cart for Pilot 5ct FriXion Clicker Erasable Gel Pens Fine Point 0.7mm Assorted Inks: Colored Pens with Eraser, Retractable, 5-Pack"]');
    }
    get backArrow () {
        return $('button[aria-label="Previous"]');
    }
    get closeWindow () {
        return $('button[aria-label="close"]');
    }
    get favoriteSelect () {
        return $('button[aria-label="favorite Yoobi Novelty Ballpoint Pen Gingerbread Scarf: 1.0mm Black Ink, Art Stationery, Office Supplies to keep tabs on it"]');
    }
    get cartSelect () {
        return $('div[data-test="@web/CartIcon"]');
    }

    async select () {
        await this.penSelect.click();
        await this.addToCart.click();
        await this.backArrow.click();
        await this.closeWindow.click();
        await this.favoriteSelect.click();
        await this.cartSelect.click();
    }

    get flashAlert () {
        return $('a[id="item-title-3b5d3291-a8e7-11ef-bcb7-65bba13a0df1"]');
    }
}

export default new ItemSelector();