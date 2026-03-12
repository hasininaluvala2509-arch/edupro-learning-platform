import { Card, CardContent, CardActions, Typography, Button, CardMedia } from '@mui/material';

export default function VideoCard({ video, onComplete }) {
  return (
    <Card sx={{ maxWidth: 345, m: 1, boxShadow: 3 }}>
      <CardMedia
        component="iframe"
        height="180"
        src={video.videoUrl}
        title={video.title}
        sx={{ borderRadius: 1 }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {video.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="primary" onClick={() => onComplete(video._id)}>
          Complete &amp; Attempt Assignment
        </Button>
      </CardActions>
    </Card>
  );
}
