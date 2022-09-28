import './App.css';
import React, { useState } from "react";
import ContactForm from './components/ContactForm';
import Contact from './components/Contact';
import Header from './components/Header';

import { 
	Grid,
  Card
} from "@mui/material";

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const [listContact, setContact] = useState(contactsJSON);
  
  const addContact = (data) => {
    const newContact = [...listContact, data];
    setContact(newContact);
  };

  return (
    <div className="App">
      <Header />

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <ContactForm addContact={addContact} />
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ bgcolor: '#dbf6f0', margin: "81px" }}>
          {listContact.map((item, index) => {
            return (
              <Contact data={item} key={index} />
            );
          })}
          </Card>
        </Grid>
      </Grid>

    </div>
  );
};

export default App;
