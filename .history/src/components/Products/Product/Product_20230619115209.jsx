import "./Product.scss";
const Product = () => {
    return(
        <>
        <div className="product-card">
            <div className="thumbnail">
                <imf src="" alt="" />
            </div>
            <div className="prod-details">
                <span className="name">Product Name</span>
                <span className="price">&#8377; 499</span>
            </div>
        </div>
         </>
    ) 
};

export default Product;
