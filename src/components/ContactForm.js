// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import React from "react";

import { 
    Box,
    TextField,
    Button,
    FormControl
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
            <form onSubmit={handleAddContact}>
                <div>
                    <TextField id="name" name="name" label="Name" variant="filled" type="text" sx={{ mt: 3 }} />
                    <TextField id="phone" name="phone" label="Phone" variant="filled"  />
                    <TextField id="email" name="email" label="Email" variant="filled" type="text" />
                    <TextField id="photo" name="photo" label="Photo URL" variant="filled" type="url" />
                </div>
                <Button variant="text" type="submit">Add New</Button>
            </form>
        </Box>
    );
}

export default ContactForm;