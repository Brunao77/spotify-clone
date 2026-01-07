import { allPlaylists, songs } from '@/lib/data';
import { NextResponse } from 'next/server';


export async function GET(request) {
  const { url } = request
  const urlObject = new URL(url)
  const id = urlObject.searchParams.get('id')

  const playlist = allPlaylists.find((playlist) => playlist.id === id)
  const songsList = songs.filter(song => song.albumId === playlist?.albumId)

  return new Response(JSON.stringify({ playlist, songs: songsList }), {
    headers: { "content-type": "application/json" },
  });
}