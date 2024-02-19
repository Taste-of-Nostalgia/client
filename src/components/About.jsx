import '../assets/css/About.css';
import Dunkaroos from "../assets/images/Dunkaroos.jpg";

export default function About (){
    return (
        <div className="container">
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque vestibulum dolor, et gravida est commodo vitae.</p>
            
            <div className="row">
                <div className="col-sm-4">
                    <div className="step">
                        <img src={Dunkaroos} alt="Step 1" />
                        <h2>Step 1</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="step">
                        <img src={Dunkaroos} alt="Step 2" />
                        <h2>Step 2</h2>
                        <p>Integer in elit ac elit lacinia placerat ut ut dolor.</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="step">
                        <img src={Dunkaroos} alt="Step 3" />
                        <h2>Step 3</h2>
                        <p>Phasellus nec magna ut velit ultricies faucibus.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}