// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import React from "react";

import { 
    Box,
    TextField,
    Button,
} from "@mui/material";

const ContactForm = ({addContact}) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    
    const handleAddContact = () => {
        const name = document.querySelector("#name");
        const phone = document.querySelector("#phone");
        const email = document.querySelector("#email");
        const photo = document.querySelector("#photo");
        const formData = {
            name: name.value,
            phone: phone.value,
            email: email.value,
            photo: photo.value,
        };
        name.value = "";
        phone.value = "";
        email.value = "";
        photo.value = "";
        
        console.log(formData);
    
        addContact(formData);
    };

    
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { ml: 3, mr: 3, mb: 2, width: '90%' },
                bgcolor: '#f3f1eb', 
                margin: "81px",
                display: 'flex',
                flexDirection: 'column',
            }}
            noValidate
            autoComplete="off"
            >
            <div>
                <TextField id="name" label="Name" variant="filled" type="text" sx={{ mt: 3 }} />
                <TextField id="phone" label="Phone" variant="filled" type="number" />
                <TextField id="email" label="Email" variant="filled" type="email" />
                <TextField id="photo" label="Photo URL" variant="filled" type="url" />
            </div>
            <Button variant="text" onClick={handleAddContact}>Add New</Button>
        </Box>
    );
}

export default ContactForm;