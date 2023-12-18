import { render,screen,fireEvent } from "@testing-library/react";
import Assigned from "./assigned";

describe("assigned-tests",()=>{
    test("should display headings as provided",()=>{
        render(<Assigned/>);
        const h1 = screen.getByText(/Our work is the presentation of our capabilities/);
        const h2 = screen.getByText(/Clean desk and clear screen/);
        const h3 = screen.getByText(/Living the Seal Life/);
        expect(h1).toBeInTheDocument();
        expect(h2).toBeInTheDocument();
        expect(h3).toBeInTheDocument();
    })

    test("Render elements",()=>{
        render(<Assigned/>);
        const textElement = screen.getByLabelText("Name") 
        expect(textElement).toBeInTheDocument();
    })

    test("should submit the form successfully",()=>{
        render(<Assigned/>);
        const nameInput = screen.getByLabelText("Name");
        const passwordInput = screen.getByLabelText("Password");
        const submitButton = screen.getByText("Submit");
        fireEvent.change(nameInput, { target: { value: "John" } });
        fireEvent.change(passwordInput, { target: { value: "password123" } });
        fireEvent.click(submitButton);
    })

    test("should not submit the form and display an error message",()=>{
        render(<Assigned/>);
        const submitButton = screen.getByText("Submit");
        fireEvent.click(submitButton);
    })
    test("should update the value of the password input field",()=>{
        render(<Assigned/>);
        const passwordInput = screen.getByLabelText("Password");
        fireEvent.change(passwordInput, { target: { value: "password123" } });
    })
})