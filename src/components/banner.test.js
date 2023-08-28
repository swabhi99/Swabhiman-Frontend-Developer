import {getAllByRole, render,screen} from '@testing-library/react'
import Banner from './Banner.jsx'


describe('testing banner',()=>{
    test('should have heading',()=>{
        const banner = render(<Banner/>)
        const heading = banner.getByRole('heading')
        expect(heading).toHaveTextContent(/Welcome to Our Space X page/)
    })
       
    test('should have sub-heading',()=>{
        const banner = render(<Banner/>)
        const subHeading = banner.getByText('Discover Amazing Content!')
        expect(subHeading).toBeInTheDocument()
    })
})