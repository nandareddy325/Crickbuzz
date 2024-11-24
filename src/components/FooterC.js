import { AiFillPhone } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { BsAndroid, BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { PiPinterestLogo } from "react-icons/pi";

const Footer = ()=>{
    return(
        <footer className="bg-dark text-light">
            <div className="container">
                <div className="row  py-4">
                    <div className="col-lg-3 col-md-6 col-12 text-md-start text-lg-start text-center ">
                        <div className="mt-3">
                            <img src="https://static.cricbuzz.com/images/cb_logo.svg" width={"100px"}/>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 text-md-start text-lg-start text-center mobile">
                        <div className="mt-3">
                           <h5>MOBILE SITE & APPS</h5>
                           <p ><span> <BiWorld className="text-success"/></span> <a href="#">m.cricbuzz.com</a></p>
                           <p><span><BsAndroid className="text-success"/></span><a href="#">android</a></p>
                           <p><span><AiFillPhone className="text-success"/></span> <a href="#">iOS</a></p>
                        </div>

                    </div>
                    <div className="col-lg-3 col-md-6 col-12 text-md-start text-lg-start text-center mobile">
                        
                        <div className="mt-3">
                           <h5>FOLLOW US ON</h5>
                           <p> <BsFacebook className="text-success"/> <a href="#">Facebook</a></p>
                           <p> <BsTwitter  className="text-success"/> <a href="#">twitter</a></p>
                           <p> <BsYoutube className="text-success"/> <a href="#">youtube</a></p>
                           <p><PiPinterestLogo className="text-success"/> <a href="#">Pinterest</a></p>
                        </div>

                    </div>
                    <div className="col-lg-3 col-md-6 col-12 text-md-start text-lg-start text-center">
                        
                        <div  className="mt-3">
                           <h5>COMPANY</h5>
                           <p><a>Careers</a></p>
                           <p><a>Advertise</a></p>
                           <p><a>Privacy Policy</a></p>
                           <p><a>Terms of Use</a></p>
                           <p><a>Cricbuzz TV Tds</a></p>
                        </div>

                    </div>
                    
                </div>
                <div className="border-top p-2">
                    <p className="p-2 text-center">© 2024 Cricbuzz.com, Times Internet Limited. All rights reserved | The Times of India | Navbharat Times</p>
                </div>

            </div>

        </footer>
    )
}
export default Footer;