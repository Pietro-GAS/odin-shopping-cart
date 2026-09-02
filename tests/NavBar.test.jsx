import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import NavBar from "../src/components/NavBar/NavBar.jsx";
//import HomePage from "../src/components/HomePage/HomePage.jsx";
//import ShopPage from "../src/components/ShopPage/ShopPage.jsx";
//import CartPage from "../src/components/CartPage/CartPage.jsx";

describe("NavBar component", () => {
    const routes = [
        {
            path: "/",
            element: <NavBar />,
            //children: [
            //{ path: "/", element: <HomePage /> },
            //{ path: "shop", element: <ShopPage /> },
            //{ path: "cart", element: <CartPage /> },
            //],
        },
    ];
    const router = createMemoryRouter(routes); 
    it("renders the navbar", () => {
        render(<RouterProvider router={router} />);
        
        expect(screen.getByRole("navigation")).toBeInTheDocument();
    });
    it("contains the expected links", () => {
        render(<RouterProvider router={router} />);
        
        expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /shop/i })).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /cart/i })).toBeInTheDocument();
    });
});