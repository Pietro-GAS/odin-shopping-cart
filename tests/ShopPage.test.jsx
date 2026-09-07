import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import ShopPage from "../src/components/ShopPage/ShopPage";

describe("Shop page", () => {
    const routes = [
        {
            path: "/shop",
            element: <ShopPage />,
        }
    ];
    const router = createMemoryRouter(routes);
    
    it("renders the correct heading", () => {
        render(<RouterProvider router={router} />);

        expect(screen.getByRole("heading", { level: 1 }).textContent).toMatch(/shop page/i);
    });
})