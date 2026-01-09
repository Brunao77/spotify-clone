import { fireEvent, render, screen } from "@testing-library/react";
import Navbar from "@/components/Navbar";


describe("Navbar", () => {
    it("debería renderizar el logo y los elementos de navegación", () => {
        render(<Navbar />);
        const links = screen.getAllByRole("link");
        expect(links.length).toBeGreaterThanOrEqual(2);
        
        expect(links[0]).toHaveAttribute("href", "/");
        expect(links[1]).toHaveAttribute("href", "/");
        
        const logo = screen.getByLabelText("Ir al inicio (Logo)");
        expect(logo).toBeInTheDocument();
        const homeIcon = screen.getByLabelText("Ir al inicio");
        expect(homeIcon).toBeInTheDocument();
        const searchInput = screen.getByPlaceholderText("¿Qué quieres reproducir?");
        expect(searchInput).toBeInTheDocument();
    });

    it("deberia renderizar la barra de busqueda", () => {
        render(<Navbar />);
        const searchInput = screen.getByPlaceholderText("¿Qué quieres reproducir?");
        expect(searchInput).toBeInTheDocument();
    })

    it("deberia dejar escribir la barra de busqueda", () => {
        render(<Navbar />);
        const searchInput = screen.getByPlaceholderText("¿Qué quieres reproducir?");

        fireEvent.change(searchInput, { target: { value: "Rock Nacional" } });

        expect(searchInput).toHaveValue("Rock Nacional");
    })

});