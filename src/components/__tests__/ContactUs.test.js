import ContactUs from "../ContactUs";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact Us page test cases", () => {
    // We cane also use "it" instead of "test"
    it("Should load the contact us component", () => {
    
        render(<ContactUs />);
        const headings = screen.getAllByRole("heading");
        // console.log(headings.length)
        // Assertion
        expect(headings.length).not.toBe(3);
    });
    
    test("should load button inside the contact us component", () => {
        render(<ContactUs />);
    
        const button = screen.getByText("Submit");
    
        //Assertion
        expect(button).toBeInTheDocument();
    })
    
    test("should load placeholder name inside the contact us component", () => {
        render(<ContactUs />);
    
        const input = screen.getByPlaceholderText("Message");
    
        //Assertion
        expect(input).toBeInTheDocument();
    })
    
    test("should load 2 inputs inside contact us component", () => {
        render(<ContactUs />)
    
        // Quering
        const inputs = screen.getAllByRole("textbox");
    
        // Assertion
        expect(inputs.length).toBe(2);
    })
});