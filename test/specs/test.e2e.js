import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.js'
import SecurePage from '../pageobjects/pageChecker.js'

describe('This is', () => {
    it('step one', async () => {
        await LoginPage.open()

        await LoginPage.login('maxwellhilmo@gmail.com' ,'19778264mH!')
        await expect(SecurePage.flashAlert).toBeExisting()
        
    })
})

