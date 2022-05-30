import { render, screen } from "@testing-library/react";
import { Image } from "../Components/Image";

describe("Basics of testing",function(){
  test("Should contain Image Tag",function(){
    render(<Image/>);
    const getItem = screen.getByTestId("img-cont");
    expect(getItem).toBeInTheDocument();
  })
  test("Should have some borderRadius",function(){
    render(<Image borderRadius={200}/>);
    const getItem = screen.getByTestId("img-tag");
    expect(getItem).toHaveStyle('border-radius:200px')
  })
  test("Should have some width",function(){
    render(<Image width={500}/>);
    const getItem = screen.getByTestId("img-tag");
    expect(getItem).toHaveStyle('width:500px')
  })
  test("Should have some height",function(){
    render(<Image height={500}/>);
    const getItem = screen.getByTestId("img-tag");
    expect(getItem).toHaveStyle('height:500px')
  })
})
