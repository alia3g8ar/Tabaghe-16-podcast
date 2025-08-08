import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), 'data', 'db.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(jsonData);
    
    res.status(200).json(data.videos);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load videos' });
  }
}