
import React from 'react';
import Categorie from '../components/Categorie';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';

function Home(props) {
    return (
        <div>
            <Navbar/>
            <Slider/>
            <Categorie/>
            <Footer/>
            
        </div>
    );
}

export default Home;