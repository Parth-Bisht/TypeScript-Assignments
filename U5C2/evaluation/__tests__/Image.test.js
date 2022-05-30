import { render, screen } from "@testing-library/react"
import Image from "../src/components/Image";

describe("Basic chaecking",function(){
    it("should render",function(){
        render(<Image/>)
        let img=screen.getByTestId("img-tag")
        expect(img).toBeInTheDocument();
 
     })
})