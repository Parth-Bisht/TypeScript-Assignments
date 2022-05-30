import { render, screen } from "@testing-library/react";
import { Pagination } from "../Components/Pagination";

describe("Basics of testing",function(){
  test("Should contain Input Tag and button",function(){
    render(<Pagination/>);
    const getItem = screen.getByTestId("page-cont");
    expect(getItem).toBeInTheDocument();
  });
  test("Should have 10 boxes",function(){
    render(<Pagination total={10}/>);
    const getItem = screen.getAllByTestId("items")
    expect(getItem).toHaveLength(10)
  });
})
