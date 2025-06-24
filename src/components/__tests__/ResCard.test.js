import { render, screen } from "@testing-library/react"
import ResCard, { withOpenLabel,withCloseLabel } from "../ResCard";
import Mock_Data from "../mocks/resCardMock"
import "@testing-library/jest-dom"

it("Should render ResCard component with props data", () =>{
    render(<ResCard resData={Mock_Data}/>)

    const name = screen.getByText("Bakery World");

    expect(name).toBeInTheDocument();
})

it("should render ResCard component with open label", () => {

    const ResCardOpened = withOpenLabel(ResCard);
    const ResCardClosed = withCloseLabel(ResCard);

    const isOpen = Mock_Data.info.isOpen;
    const ComponentToRender = isOpen ? ResCardOpened : ResCardClosed; 

    render(<ComponentToRender resData={Mock_Data} />)

    const name = screen.getByText("Open");

    expect(name).toBeInTheDocument();
})