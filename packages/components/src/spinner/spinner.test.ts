import { render, screen } from '../test-utils'

import spinnerFixture from "./spinner.fixture";

describe('Spinner', () => {
    it('should render a spinner with content', async () => {
        await render(spinnerFixture["Button Spinner"])
        screen.getByRole('button')  
    })
})