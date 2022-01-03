import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className='home_image' src='https://m.media-amazon.com/images/I/61nCSYw01OL._SX3000_.jpg' />

                <div className='home_row' >
                    <Product id="1" title="Iphone 12 pro" price={1299} image='https://images.unsplash.com/photo-1611791485440-24e8239a0377?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' rating={4} />
                    <Product id="2" title="Rich Dad Poor Dad" price={3} image="https://images-na.ssl-images-amazon.com/images/I/81dQwQlmAXL.jpg" rating={5} />
                    
                </div>
                <div className='home_row' >
                    <Product id="3" title="Prada Sidonie bag" price={399} image="https://www.prada.com/content/dam/pradanux_products/1/1BD/1BD228/2BB0F0046/1BD228_2BB0_F0046_V_OJN_SLF.png" rating={4} />
                    <Product id="4" title="Windmax 5 Burner Gas Stove" price={99} image="https://5.imimg.com/data5/EB/VT/PR/SELLER-94406767/five-burner-gas-stove-500x500.jpg" rating={3} />
                    <Product id="5" title="2020 Apple MacBook Pro" price={2199} image="https://m.media-amazon.com/images/I/71an9eiBxpL._SL1500_.jpg" rating={5} />
                </div>
                <div className='home_row' >
                    <Product id="6" title="LG 335 litres Double Door" price={599} image="https://www.reliancedigital.in/medias/LG-GL-T372JPZN-Refrigerators-491666532-i-3-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNDQwNjJ8aW1hZ2UvanBlZ3xpbWFnZXMvaGJkL2g3Yy85MjY0Mjc4MDc3NDcwLmpwZ3w3NzFlYWY1ZTg5OTFkNmNkNGE3MTA2ZGJlOGE5Y2M5NTZkNzFhMjE5NzliN2IzMmFiNDU4NTFmNDRkN2U3Yzg2" rating={4} />
                </div>
            </div>
        </div>
    )
}

export default Home
