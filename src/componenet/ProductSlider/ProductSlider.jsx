import React from 'react';
import './ProductSlider.css';
import Product from './Product';
import PData from './ProductData';

function ProductSlider() {
    return (
        <><section class="latest-items section-padding fix">
            <div class="container">
                <div class="latest-items-active">
                    <Product 
                       PImg= {PData[0].PImg}
                       PPrice= {PData[0].PPrice}
                       PName= {PData[0].PName}
                    />
                     <Product 
                       PImg= {PData[1].PImg}
                       PPrice= {PData[1].PPrice}
                       PName= {PData[1].PName}
                    />
                     <Product 
                       PImg= {PData[2].PImg}
                       PPrice= {PData[2].PPrice}
                       PName= {PData[2].PName}
                    />
                  <Product
                  PImg = "../../images/gallery/blog1.jpg"
                  PPrice ="500"
                  PName = "cake"
                  />
                </div>
            </div>
        </section>
        </>
    )
}
export default ProductSlider;