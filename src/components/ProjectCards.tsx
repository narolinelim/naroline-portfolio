import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';


type ProjectCardProps = {
  name: string;
  icon: string;
  description: string;
}

function ProjectCard({ name, icon, description }: ProjectCardProps) {
  return (
    <Card className="w-100" sx={{ borderRadius: 4, overflow: "hidden" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={icon}
          sx={{ height: 160, objectFit: "contain", pt: 2, pb: 2, bgcolor: "background.paper" }}
        />
        <CardContent sx={{ bgcolor: "" }}>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}


export default ProjectCard;