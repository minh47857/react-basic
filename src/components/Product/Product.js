import "./Product.scss"
import {useState} from 'react'
import sneaker1 from "../../assets/images/sneaker1.jpg"
import sneaker2 from "../../assets/images/sneaker2.jpg"
import sneaker3 from "../../assets/images/sneaker3.jpg"
import sneaker4 from "../../assets/images/sneaker4.jpg"
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";

const Product = () => {
    const [currentUpImg, setCurrentUpImg] = useState(sneaker1);
    const [open, setOpen] = useState(false);

    const handleOnClickDownImg = (imgSrc) => {
        setCurrentUpImg(imgSrc)
    }

    return ( 
        <div className="product-container">
            <div className="content-left">
                <div className="img-up">
                    <img alt="" src={currentUpImg} onClick={() => setOpen(true)}/>
                </div>
                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={[
                        {src: sneaker1},
                        {src: sneaker2},
                        {src: sneaker3},
                        {src: sneaker4}
                    ]}
                    plugins={[Captions, Fullscreen, Slideshow, Zoom]}
                />
                <div className="img-down">
                    <div className="img-small">
                        <img alt="" src={sneaker1} onClick={() => handleOnClickDownImg(sneaker1)} className={currentUpImg === sneaker1 ? "active" : ""}/>
                    </div>
                    <div className="img-small">
                        <img alt="" src={sneaker2} onClick={() => handleOnClickDownImg(sneaker2) } className={currentUpImg === sneaker2 ? "active" : ""}/>
                    </div>
                    <div className="img-small">
                        <img alt="" src={sneaker3} onClick={() => handleOnClickDownImg(sneaker3)} className={currentUpImg === sneaker3 ? "active" : ""}/>
                    </div>
                    <div className="img-small">
                        <img alt="" src={sneaker4} onClick={() => handleOnClickDownImg(sneaker4)} className={currentUpImg === sneaker4 ? "active" : ""}/>
                    </div>
                </div>
            </div>
            <div className="content-right">
                <div className="title">Giày chạy bộ nam New-Balance</div>
                <div className="price">3.695.000</div>
                <div className="size">Size: 30</div>
                <div className="action">
                    <label className="quantity">Số lượng</label>
                    <input type="number" min={1}/>
                    <button className="buy">Chon mua</button>
                </div>
            </div>
        </div>
    )
}

export default Product