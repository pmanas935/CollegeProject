import React from "react";
import './ProductSlider.css';
import '../flaticon.css';

function ProductSlider(){
    return(<>
        <div className="categories">
        <div className="container-fluid">
            <div className="row">
                <div className="categories__slider owl-carousel">
                    <div className="categories__item">
                        <div className="categories__item__icon">
                            <span className="flaticon-029-cupcake-3"></span>
                            <h5>Cupcake</h5>
                        </div>
                    </div>
                    <div className="categories__item">
                        <div className="categories__item__icon">
                            <span className="flaticon-034-chocolate-roll"></span>
                            <h5>Butter</h5>
                        </div>
                    </div>
                    <div className="categories__item">
                        <div className="categories__item__icon">
                            <span className="flaticon-005-pancake"></span>
                            <h5>Red Velvet</h5>
                        </div>
                    </div>
                    <div className="categories__item">
                        <div className="categories__item__icon">
                            <span className="flaticon-030-cupcake-2"></span>
                            <h5>Biscuit</h5>
                        </div>
                    </div>
                    <div className="categories__item">
                        <div className="categories__item__icon">
                            <span className="flaticon-006-macarons"></span>
                            <h5>Donut</h5>
                        </div>
                    </div>
                    <div className="categories__item">
                        <div className="categories__item__icon">
                            <span className="flaticon-006-macarons"></span>
                            <h5>Cupcake</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
    )
}
export default ProductSlider;