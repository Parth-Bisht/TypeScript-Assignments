import { fireEvent, render, screen } from "@testing-library/react";
import { Input } from "../Components/Input";

describe("Basics of testing",function(){
  test("Should contain Input Tag and button",function(){
    render(<Input/>);
    const getItem = screen.getByTestId("input-cont");
    const getItem2 = screen.getByTestId("eye-btn");
    expect(getItem).toBeInTheDocument();
    expect(getItem2).toBeInTheDocument();
  });

  test("should have class sm",function(){
      render(<Input size="sm"/>);
      const getItem = screen.getByTestId("input-box");
      expect(getItem).toHaveClass("sm")
  })

  test("should have class filled",function(){
      render(<Input variant="filled"/>);
      const getItem = screen.getByTestId("input-box");
      expect(getItem).toHaveClass("filled")
  })

  test("should change type of inputtag",function(){
      const mockfn = jest.fn();
      render(<Input type="text" rightLogoOnClick={mockfn}/>);
      const btn = screen.getByTestId("eye-btn");
      fireEvent.click(btn)
      const getItem = screen.getByTestId("input-box");
      expect(getItem).toHaveAttribute("type","text")
  })
})
