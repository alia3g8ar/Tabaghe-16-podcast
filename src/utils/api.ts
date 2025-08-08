const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? '/api' 
  : 'http://localhost:3000';

export const fetchVideos = async () => {
  const response = await fetch(`${API_BASE_URL}/videos`);
  if (!response.ok) throw new Error('Failed to fetch videos');
  return response.json();
};

export const fetchVideo = async (id: string) => {
  const response = await fetch(`${API_BASE_URL}/videos/${id}`);
  if (!response.ok) throw new Error('Video not found');
  return response.json();
};