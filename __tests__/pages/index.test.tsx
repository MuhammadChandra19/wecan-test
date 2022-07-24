import { fireEvent, render, within } from '@testing-library/react'
import { mock_donation_list } from '../../constants/mock-data'
import Home from '../../pages/index'

describe('Home', () => {
  test('Should render donation list', async () => {
    const { getAllByTestId, getByTestId } = render(<Home data={mock_donation_list}/>)

    expect(getAllByTestId('donation-card').length).toEqual(mock_donation_list.length)

    const sortHandlerBtn = getByTestId('sort-handler')

    //test sort by days left
    expect(sortHandlerBtn.textContent).toEqual('Sort by days left')
    await fireEvent.click(sortHandlerBtn)
    expect(within(getAllByTestId('donation-card')[0]).getByText('#BisaBangkit Bersama Kitabisa'))

    // test sort by donation goal
    expect(sortHandlerBtn.textContent).toEqual('Sort by donation goal')
    await fireEvent.click(sortHandlerBtn)
    expect(within(getAllByTestId('donation-card')[0]).getByText('Bantu Korban Kebakaran Palembang'))
  })
})