/* eslint-disable react/prop-types */
import { useState } from 'react'
import './Product.css'
import './Tombol.css'
import Tombol from './Tombol';

const Product = ({ urlImage, productName, productDeskripsi }) => {

    const [like, setLiked] = useState(true);
    const [deskription, setDeskription] = useState(false);

    const handleClick = () => {
        setLiked(!like);
    };

    const handleDeskrip = () => {
        setDeskription(!deskription);
    };

    return (
        <div className="product">
            <h3>{productName}</h3>
            <img src={urlImage} className='image' alt="product" />

            <Tombol className={`like ${like ? "like" : ""}`} hanleClick={handleClick}>
                {like ? "Suka" : "Batal Suka"}
            </Tombol>

            <Tombol className={"likes"} hanleClick={handleDeskrip}>Selengkapnya</Tombol>

            {
                deskription &&
                (
                    <div className="details">
                        <p>{productDeskripsi}</p>
                    </div>
                )
            }
        </div>
    )
}

export default Product