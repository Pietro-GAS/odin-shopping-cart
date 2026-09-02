import { describe, it, expect } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router";
import App from "../src/App.jsx";
import NavBar from "../src/components/NavBar/NavBar.jsx";
import HomePage from "../src/components/HomePage/HomePage.jsx";
import ShopPage from "../src/components/ShopPage/ShopPage.jsx";
import CartPage from "../src/components/CartPage/CartPage.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "shop", element: <ShopPage /> },
      { path: "cart", element: <CartPage /> },
    ],
  },
];

const router = createMemoryRouter(routes);

describe("App component", () => {
    it("renders a heading", () => {
        render(<RouterProvider router={router} />);
        expect(screen.getByRole("heading")).toBeInTheDocument();
    });
    it("renders the current page heading", () => {
        // Home Page
        render(<RouterProvider router={router} />);
        // using regex with the i flag allows simpler case-insensitive comparison
        expect(screen.getByRole("heading").textContent).toMatch(/home page/i);
        cleanup();

        // Shop Page
        const router1 = createMemoryRouter(routes, { initialEntries: ['/shop'] })
        
        render(<RouterProvider router={router1} />);

        expect(screen.getByRole("heading").textContent).toMatch(/shop page/i);
        cleanup();

        // Cart Page
        const router2 = createMemoryRouter(routes, { initialEntries: ['/cart'] })
        
        render(<RouterProvider router={router2} />);

        expect(screen.getByRole("heading").textContent).toMatch(/cart page/i);
    });
});

describe("user interaction", () => {
    it("changes page when clicking on navbar links", async () => {
        const user = userEvent.setup();

        render(<RouterProvider router={router} />);
        const home = screen.getByRole("link", { name: "Home" });
        const shop = screen.getByRole("link", { name: /shop/i });
        const cart = screen.getByRole("link", { name: "Cart" });
        
        await user.click(shop);

        expect(screen.getByRole("heading").textContent).toMatch(/shop page/i);

        await user.click(cart);

        expect(screen.getByRole("heading").textContent).toMatch(/cart page/i);

        await user.click(home);

        expect(screen.getByRole("heading").textContent).toMatch(/home page/i);

    });
});