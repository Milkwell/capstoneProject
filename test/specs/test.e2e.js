import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.js'
import PickupSelector from '../pageobjects/pickupSelector.js'
import DeliverySelector from '../pageobjects/orderSelector.js'
import SearchPens from '../pageobjects/searchBar.js'

describe('This is', () => {
    it('step one', async () => {
        await LoginPage.open()

        await LoginPage.login('maxwellhilmo@gmail.com' ,'19778264mH!')
        await expect(LoginPage.flashAlert).toBeExisting()
    })
})

describe('This is', () => {
    it('step two', async () => {
        await PickupSelector.select()
        await expect(PickupSelector.flashAlert).toBeExisting()

        await DeliverySelector.select()
        await expect(DeliverySelector.flashAlert).toBeExisting()
    })
})

describe('This is', () => {
    it('step three', async () => {
        await SearchPens.select('pens')

        await expect(SearchPens.flashAlert).toBeExisting()
    })
})