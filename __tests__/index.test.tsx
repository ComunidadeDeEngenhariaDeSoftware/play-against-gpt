import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
    it("renders a div", () => {
        render(<Home />);

        const div = screen.getByText(/Hello world/i);

        expect(div).toBeInTheDocument();
    })
});