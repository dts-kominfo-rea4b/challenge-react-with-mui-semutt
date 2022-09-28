// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from "react";
import { 
	List,
	ListItem,
	ListItemAvatar,
	Avatar,
	ListItemText,
	Typography,
	Divider } from "@mui/material";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
	// Contact berisi foto, nama, telepon, dan email
	return (
		<div sx={{ bgcolor: '#dbf6f0', margin: "81px" }}>
			<List sx={{ width: '100%', bgcolor: '#dbf6f0' }}>
				<ListItem alignItems="flex-start">
					<ListItemAvatar>
						<Avatar alt={data.name} src={data.photo} sx={{ height:60, width: 60, marginRight: 3 }} />
					</ListItemAvatar>
					<ListItemText
						primary={data.name}
						secondary={
							<React.Fragment>
								<Typography
									sx={{ display: 'inline' }}
									component="span"
									variant="body2"
									color="text.primary"
								>
								</Typography>
								<div>
									<div>{data.phone}</div>
									<div>{data.email}</div>
								</div>
							</React.Fragment>
						}
					/>
				</ListItem>
			</List>
			<Divider light />
		</div>
	);
};

export default Contact;
