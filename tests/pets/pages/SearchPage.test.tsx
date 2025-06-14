import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { SearchPage } from '../../../src/pets/pages/SearchPage';

describe(`Tests on "SearchPage.tsx" component`, () => {
	test(`Component must match a snapshot`, () => {
		const { container } = render(
			<MemoryRouter>
				<SearchPage />
			</MemoryRouter>
		);
		expect(container).toMatchSnapshot();
	});
	test(`test on queryParameters`, () => {
		const queryParam = 'siamese';
		render(
			<MemoryRouter initialEntries={[`/search=?q=${queryParam}`]}>
				<SearchPage />
			</MemoryRouter>
		);
		const input: HTMLInputElement = screen.getByRole('textbox');
		const image: HTMLImageElement = screen.getByRole('img');
		expect(input.value).toBe(queryParam);
		expect(screen.getByText(`Results for '${queryParam}'`)).toBeTruthy();
		expect(image.src).toContain(
			'assets/pets-images/d2e7f4b9-1c3d-42c8-8c1a-2e5fbcf847a1.jpg'
		);
	});
});
