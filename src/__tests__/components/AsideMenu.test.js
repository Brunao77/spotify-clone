import { render, screen, fireEvent } from "@testing-library/react";
import AsideMenu from "@/components/AsideMenu";


jest.mock("@/lib/data", () => ({
    playlists: [
        { id: "1", name: "Rock Playlist" },
        { id: "2", name: "Pop Playlist" },
    ],
}));


jest.mock("@/components/SideMenuCard", () => {
    return function MockSideMenuCard({ playlist }) {
        return <div data-testid="playlist-card">{playlist.name}</div>;
    };
});

describe("AsideMenu", () => {
    it("debería renderizar el título y las playlists", () => {
        render(<AsideMenu />);
        const title = screen.getByText("Tu Biblioteca");
        expect(title).toBeInTheDocument();
        const playlistCards = screen.getAllByTestId("playlist-card");
        expect(playlistCards.length).toBe(2);
        expect(playlistCards[0]).toHaveTextContent("Rock Playlist");
        expect(playlistCards[1]).toHaveTextContent("Pop Playlist");
    });

    it("debería mostrar y seleccionar opciones de filtro", () => {
        render(<AsideMenu />);
        const filterButton = screen.getByRole("button", { name: /Recientes/i });
        expect(filterButton).toBeInTheDocument();
        fireEvent.click(filterButton);
        const alphabeticalOption = screen.getByRole("button", { name: /Orden Alfabético/i });
        expect(alphabeticalOption).toBeInTheDocument();
        fireEvent.click(alphabeticalOption);
        expect(screen.getByRole("button", { name: /Orden Alfabético/i })).toBeInTheDocument();
    });
});