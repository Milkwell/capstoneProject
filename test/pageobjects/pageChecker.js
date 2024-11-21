import { $ } from '@wdio/globals'
import Page from './page.js';

class SecurePage extends Page {

    get flashAlert () {
        return $('a[aria-label="Target home"]');
    }
}

export default new SecurePage();
