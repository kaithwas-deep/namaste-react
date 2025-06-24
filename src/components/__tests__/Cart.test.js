import { act, fireEvent, render, screen } from "@testing-library/react"
import ResMenu from "../ResMenu"
import MOCK_DATA from "../mocks/resMenuMock.json"
import { MemoryRouter } from "react-router"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom"
import Header from "../Header"
import Cart from "../Cart"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})


it("should load the data on Res Menu page and add to cart", async () => {
    await act(async () => render(
                                <Provider store={appStore}>
                                    <MemoryRouter>
                                        <Header />
                                        <ResMenu/>
                                        <Cart />
                                    </MemoryRouter>
                                </Provider>
                            )
                        );    

    const menuCategories = screen.getAllByTestId("menuResCategory");
    expect(menuCategories.length).toBe(13)

    const accordionHeader = screen.getByText("1 Pound Cake(29)");
    expect(accordionHeader).toBeInTheDocument();
    fireEvent.click(accordionHeader);

    const resMenuCategoryItems = screen.getAllByTestId("resMenuCardItem");
    expect(resMenuCategoryItems.length).toBe(29)

    const cartItems = screen.getByText("Cart (0 items)");
    expect(cartItems).toBeInTheDocument();

    const addCartBtn = screen.getAllByRole("button", { name: "Add +" });
    
    fireEvent.click(addCartBtn[0])

    const updatedCartItems = screen.getByText("Cart (1 items)");
    expect(updatedCartItems).toBeInTheDocument();

    fireEvent.click(addCartBtn[1])
    const nextUpdatedCartItems = screen.getByText("Cart (2 items)");
    expect(nextUpdatedCartItems).toBeInTheDocument();

    const resMenuCategoryItemsUpdated = screen.getAllByTestId("resMenuCardItem");
    expect(resMenuCategoryItemsUpdated.length).toBe(31)

})