import { $ } from '@wdio/globals'
import Page from './page.js';

class SuppliesSelector extends Page {

    get dropDownTab () {
        return $('a[class="sc-15d3e3b1-1 sc-15d3e3b1-3 eOOysd fXrPWM h-margin-l-wide"]');
    }
    get btnSupplies () {
        return $('a[data-id="5xsxr"]');
    }
    get btnPens () {
        return $('a[data-id="4yjuw"]');
    }

    async select () {
        await this.dropDownTab.click();
        await this.btnSupplies.click();
        await this.btnPens.click();
    }

    open () {
        return super.open();
    }
}

export default new SuppliesSelector();
