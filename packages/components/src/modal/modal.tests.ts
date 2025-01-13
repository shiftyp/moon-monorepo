import { render, screen } from '../test-utils'
import modalFixtures from './modal.fixture'

describe('Modal', () => {
    it('should show nothing when closed', async () => {
        await render(modalFixtures["Closed Modal"])

        expect(screen.findAllByRole('dialog')).toBeNull()
    })
})