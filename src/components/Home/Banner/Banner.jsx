import "./Banner.scss";
import BannerImg from '../../../assets/banner-img.png'
const Banner = () => {
    return(
        <>
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>Sales</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi enim esse voluptas placeat voluptatem sint reiciendis. Adipisci vitae error id tempora animi dolorem? Debitis sapiente ea a facilis nostrum voluptates sint ut vitae possimus quae?</p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop now</div>
                    </div>
                </div>
                <img src={BannerImg}className="banner-img" alt="banner-img"></img>
            </div>

        </div>
        
        </>
)
};

export default Banner;
