import { act, fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router"
import { Body } from "../Body"
import MOCK_DATA from "../mocks/resCardListMock.json"
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

beforeAll(() => {
    // console.log("before all ---");
})

beforeEach(() => {
    // console.log("before each ---");
})

afterEach(() => {
    // console.log("after each ---");
})

afterAll(() => {
    // console.log("after all ---");
})

it("should search the resCard listing with search input", async () => {

    await act(async () => render(
                            <MemoryRouter>
                                <Body/>
                            </MemoryRouter>
                            )
            );

    const searchBtn = screen.getByRole("button", { name:"Search" });
    expect(searchBtn).toBeInTheDocument();

    const searchInput = screen.getByTestId("searchInput");
    expect(searchInput).toBeInTheDocument();

    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(11);

    fireEvent.change(searchInput, { target: { value: "rest" } })
    fireEvent.click(searchBtn);

    const cardsAfterSearch = screen.getAllByTestId("resCard");
    expect(cardsAfterSearch.length).toBe(2);
})

it("should search the resCard listing with top rated restaurant button", async () => {

    await act(async () => render(
                            <MemoryRouter>
                                <Body/>
                            </MemoryRouter>
                            )
            );

    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(11);

    const topRatedBtn = screen.getByRole("button", { name: "Top Rated Restaurants" })
    expect(topRatedBtn).toBeInTheDocument();

    fireEvent.click(topRatedBtn);

    const cardsAfterSearch = screen.getAllByTestId("resCard");
    expect(cardsAfterSearch.length).toBe(5)

})