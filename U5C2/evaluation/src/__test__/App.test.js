import { render, screen } from "@testing-library/react";
import App from "../App";
import { Image } from "../Components/Image";

describe("Basics of testing",function(){
  test("Should render",function(){
    render(<App/>);
    const getItem = screen.getByTestId("main-cont");
    expect(getItem).toBeInTheDocument();
  })
  test("Should contain Image Tag",function(){
    render(<Image/>);
    const getItem = screen.getByTestId("img-cont");
    expect(getItem).toBeInTheDocument();
  })
})
