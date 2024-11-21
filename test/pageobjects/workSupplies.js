import { $ } from '@wdio/globals'
import Page from './page.js';

class SuppliesSelector {

    get dropDownTab () {
        return $('a[aria-label="Categories"]');
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

}

export default new SuppliesSelector();
