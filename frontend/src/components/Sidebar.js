import { Link } from "react-router-dom";
import { Drawer, List, ListItem, ListItemText, Toolbar, Typography, Box } from '@mui/material';

export default function Sidebar() {
  return (
    <Drawer variant="permanent" anchor="left" sx={{ width: 240, flexShrink: 0 }}>
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          <ListItem>
            <Typography variant="h6">EDUPRO</Typography>
          </ListItem>
          <ListItem button component={Link} to="/student">
            <ListItemText primary="Student Dashboard" />
          </ListItem>
          <ListItem button component={Link} to="/teacher">
            <ListItemText primary="Teacher Panel" />
          </ListItem>
          <ListItem button component={Link} to="/parent">
            <ListItemText primary="Parent Dashboard" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
