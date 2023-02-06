import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import Search from "../components/Search";

describe('Search Box', () => {
  const { asFragment } = render(<Search />)

  xit("search box renders correctly", () => {
    expect(asFragment).toMatchSnapshot()
  })
})

describe('Search Box function', () => {
  const {setSearchResults} = jest.fn()

  const { content } = render(<Search />)
  fireEvent.click(getByText(button, "Search..."))

  test("search returns results", () => {
    expect({setSearchResults}).toHaveBeenCalled()
  })  
})