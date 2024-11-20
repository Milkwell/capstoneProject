import { expect } from '@wdio/globals'
import SuppliesSelector from '../pageobjects/workSupplies.js'
import SecurePage from '../pageobjects/pageChecker.js'

describe('This is', () => {
    it('step one', async () => {
        await SuppliesSelector.open()

        await SuppliesSelector.select()
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('Pens'))
    })
})

