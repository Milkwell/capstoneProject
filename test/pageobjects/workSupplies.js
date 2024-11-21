import { $ } from '@wdio/globals'

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
    get flashAlert () {
        return $('img[src="https://target.scene7.com/is/image/Target/GUEST_e5c0e1cf-b0da-47ed-a65b-457975f2e30f?wid=315&hei=315&qlt=60&fmt=webp"]');
    }
}

export default new SuppliesSelector();
