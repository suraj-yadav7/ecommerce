import "./Banner.scss";
import BannerImg from '../../../assets/banner-img.png'
const Banner = () => {
    return(
        <>
        <div className="hero-banner">
            <div className="content">
                <div className="text-content"></div>
                <img src={BannerImg} alt="banner-img"></img>
            </div>

        </div>
        
        </>
)
};

export default Banner;
