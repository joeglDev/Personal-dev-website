import '@testing-library/jest-dom';
import { render} from '@testing-library/react';
import {Card} from './Card';

describe('<Card/>', () => {
    test('renders correctly', () => {
        const {getByText} = render(<Card title={'title'} textContent={'textContent'}/>);

        expect(getByText('title')).toBeInTheDocument();
        expect(getByText('textContent')).toBeInTheDocument();
    })
})