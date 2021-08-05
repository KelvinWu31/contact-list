import React, { useEffect, useState } from 'react'; 
import Footer from './components/Footer';
import Header from './components/Header';
import axios from 'axios'
import List from './components/List';

const BASE_URL = "https://dummyapi.io/data/api"
const APP_ID = "610b0a70bfa6d5248a6f3dd2"



function App() { 
    const [contacts, setContacts] = useState({data:[]})
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
          .get(`${BASE_URL}/user?limit=5`, { headers: { "app-id": APP_ID } })
          .then(({ data }) => setContacts(data))
          .catch(console.error)
          .finally(() => setLoading(false));
      }, []);
    return (
        <div> 
           <Header />
           <List  loading={loading} contacts={contacts} />
           <Footer />
        </div>
    );
}

export default App;