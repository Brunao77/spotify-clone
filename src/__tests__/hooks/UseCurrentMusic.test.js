import { renderHook } from "@testing-library/react";
import { useCurrentMusic } from "@/hooks/UseCurrentMusic";

const mockSongs = [
  { id: "1", title: "Song A" },
  { id: "2", title: "Song B" },
  { id: "3", title: "Song C" },
];

describe("Hook: UseCurrentMusic", () => {

  it("debería devolver la canción anterior y siguiente correctamente cuando se está en el medio", () => {
    const currentMusicMock = {
      songs: mockSongs,
      song: mockSongs[1],
    };

    const { result } = renderHook(() => useCurrentMusic(currentMusicMock));

    expect(result.current.getNextSong()).toEqual(mockSongs[2]);
    
    expect(result.current.getPreviousSong()).toEqual(mockSongs[0]);
  });

  it("debería devolver null en getPreviousSong si es la primera canción", () => {
    const currentMusicMock = {
      songs: mockSongs,
      song: mockSongs[0],
    };

    const { result } = renderHook(() => useCurrentMusic(currentMusicMock));

    expect(result.current.getPreviousSong()).toBeNull();
    expect(result.current.getNextSong()).toEqual(mockSongs[1]);
  });

  it("debería devolver null en getNextSong si es la última canción", () => {
    const currentMusicMock = {
      songs: mockSongs,
      song: mockSongs[2],
    };

    const { result } = renderHook(() => useCurrentMusic(currentMusicMock));

    expect(result.current.getNextSong()).toBeNull();
    expect(result.current.getPreviousSong()).toEqual(mockSongs[1]);
  });

  it("debería manejar listas vacías o null correctamente", () => {
    const emptyMusicMock = {
      songs: [],
      song: null,
    };

    const { result } = renderHook(() => useCurrentMusic(emptyMusicMock));

    expect(result.current.getNextSong()).toBeNull();
    expect(result.current.getPreviousSong()).toBeNull();
  });
});