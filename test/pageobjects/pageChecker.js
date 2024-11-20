import { $ } from '@wdio/globals'
import Page from './page.js';

class SecurePage extends Page {

    get flashAlert () {
        return $('h1[class="sc-fe064f5c-0 dtCtuk"]');
    }
}

export default new SecurePage();
