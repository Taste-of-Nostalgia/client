import '../assets/css/About.css';
import Step1 from "../assets/images/Rate.jpg";
import Step2 from "../assets/images/Recommendations.jpg";
import Step3 from "../assets/images/Scrapbook.jpg";

export default function About (){
    return (
        <div className="container">
            <h1 className="abt-title-header"><b>About Us!</b></h1>
            <p>Get personalized nostalgic food recommendations in 3 easy steps!</p>
            
            <div className="row">
                <div className="col-sm-4">
                    <div className="step">
                        <img src={Step1} alt="Step 1" />
                        <h2>Step 1</h2>
                        <p>Rate new and unique food.<br/><br/></p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="step">
                        <img src={Step3} alt="Step 2" />
                        <h2>Step 2</h2>
                        <p>View a scrapbook of all the foods you have eaten before.<br/></p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="step">
                        <img src={Step2} alt="Step 3" />
                        <h2>Step 3</h2>
                        <p>Generate food recommendations in each of the three themes!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}