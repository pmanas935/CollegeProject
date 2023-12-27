import React from 'react';
import './ProductSlider.css';

function Product(props){
    return(
        <>
             <div className="properties pb-30">
                        <div className="properties-card">
                            <div className="properties-img">
                                <a href="#"><img src={props.PImg} alt="sorry" className='img' /></a>
                                <div className="img-cap">
                                    <span>Add to cart</span>
                                </div>
                            </div>
                            <div className="properties-caption properties-caption2">
                                <h3><a href="#">{props.PName}</a></h3>
                                <div className="properties-footer">
                                    <div className="price">
                                        <span>{props.PPrice}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    )
}
export default Product;
