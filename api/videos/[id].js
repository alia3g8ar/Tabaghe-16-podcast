import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { id } = req.query;
  
  try {
    const filePath = path.join(process.cwd(), 'data', 'db.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(jsonData);
    
    const video = data.videos.find(v => v.id === parseInt(id));
    
    if (!video) {
      return res.status(404).json({ error: 'Video not found' });
    }
    
    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load video' });
  }
}