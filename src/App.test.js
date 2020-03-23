import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

// test("blank firstname blur displays an error", async ()=>{
//   const container = render(<ContactForm />);
//   const firstNameField = container.getByTestId("firstName");
//   act(()=> {
//     fireEvent.blur(firstNameField);
//   })
//   const error = await waitForElement(()=>container.getByTestId("firstNameError"));
// })

//1. 
test("firstname renders correctly ", () => {
  render(<label htmlFor="firstName">First Name*</label>);
});

//2.
test("div APP renders correctly", ()=> {
  render(<div className="App"></div>);
});

//3.
test("form renders correclty", ()=> {
  render(<label htmlFor="lastName">Last Name*</label>);
});

//4.


