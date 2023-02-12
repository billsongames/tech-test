import React from "react";
import { getByRole, render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe('Search Results', () => {
  
  test("zero search results render correctly", () => {
    const validProps = {
      results: [],
    }

    render(<SearchResults results={validProps.results} />);

    expect(screen.getByText("No results")).toBeInTheDocument()
  })

  test("two search results renders correctly", () => {
    const validProps = {
      results: [
        {
          thumbnail: "https://test-thumbnail-url-1.jpg",
          original: "https://test-original-url-1.jpg",
          originalTitle: "test title 1",
          originalHeight: 600,
          description: "test description 1",
        },
        {
          thumbnail: "https://test-thumbnail-url-2.jpg",
          original: "https://test-original-url-2.jpg",
          originalTitle: "test title 2",
          originalHeight: 600,
          description: "test description 2",
        }
      ]
    }

    render(<SearchResults results={validProps.results} />);

    expect(screen.getByText("2 results")).toBeInTheDocument()
    

  
  })
})