import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App.jsx"

describe("App component", () => {
    it("renders the correct heading", () => {
        render(<App />);
        // using regex with the i flag allows simpler case-insensitive comparison
        expect(screen.getByRole("heading").textContent).toMatch(/shopping cart/i);
    });
});

describe("NavBar component");