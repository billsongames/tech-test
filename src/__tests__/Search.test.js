import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import Search from "../components/Search";

describe('Search Box', () => {
  it("search box renders correctly", () => {
    const validProps= {
      setSearchResults: jest.fn(),
    }

    const { asFragment } = render(
    <Search setSearchResults={validProps.setSearchResults}/>)

    expect(asFragment).toMatchSnapshot()
  })
})

