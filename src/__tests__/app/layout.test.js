import { render, screen } from "@testing-library/react";
import Layout from "@/app/layout";

jest.mock("@/components/Navbar", () => {
  return function MockNavbar() {
    return <div data-testid="navbar-component">Navbar Mock</div>;
  };
});

jest.mock("@/components/AsideMenu", () => {
  return function MockAsideMenu() {
    return <div data-testid="aside-component">AsideMenu Mock</div>;
  };
});

jest.mock("@/components/Player", () => {
  return function MockPlayer() {
    return <div data-testid="player-component">Player Mock</div>;
  };
});


describe("Layout", () => {
    it("debería renderizar la estructura principal y sus hijos correctamente", () => {
        
        render(
        <Layout>
            <div data-testid="child-content">Contenido de prueba</div>
        </Layout>
        );

        const navbar = screen.getByTestId("navbar-component");
        expect(navbar).toBeInTheDocument();

        const aside = screen.getByTestId("aside-component");
        expect(aside).toBeInTheDocument();

        const player = screen.getByTestId("player-component");
        expect(player).toBeInTheDocument();

        const childContent = screen.getByTestId("child-content");
        expect(childContent).toBeInTheDocument();
        
    });
});