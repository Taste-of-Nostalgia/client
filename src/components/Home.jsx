import Profile from "./profile";
import { useAuth0 } from "@auth0/auth0-react";
import React from 'react'
import { Carousel } from 'react-bootstrap';
import { default as axios } from 'axios'
import Dunkaroos from "../assets/images/Dunkaroos.jpg";
import LunchMate from "../assets/images/LunchMate.jpg";
import RitzDip from "../assets/images/RitzDip.jpg";

export default function Home() {
    const { getAccessTokenSilently, isAuthenticated } = useAuth0();

    const getAdminResource = async (accessToken) => {
        const apiServerUrl = 'http://localhost:3010'
        const config = {
            url: `${apiServerUrl}/userid`,
            method: "GET",
            headers: {
                // "content-type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
        };

        const { data, error } = await axios.request(config);

        return {
            data: data || null,
            error,
        };
    };

    React.useEffect(() => {
        if (!isAuthenticated) return;

        getAccessTokenSilently({ ignoreCache: true }).then(accessToken => {
            console.log("Access token", accessToken);
            getAdminResource(accessToken).then((res) => {
                console.log("Returned data:", res.data);
            }).catch((err) => {
                console.log("ERROR:", err);
            });
        })
    }, [isAuthenticated]);
    return (
        <>
        <div className="container">
        <Carousel>
            
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={Dunkaroos}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={LunchMate}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={RitzDip}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    

    <h1 className="title-header"><b>Welcome!</b></h1>
    <p className="title-p">
Welcome to Taste of Nostalgia – your passport to the flavors of yesterday, powered by the latest in AI technology!<br/><br/>

Embark on a delicious journey through time as our app taps into the depths of your memories to recommend the iconic dishes and treats that hold a special place in your heart. From the simple joys of childhood snacks to the comforting aroma of family recipes, Taste of Nostalgia is here to reignite your fondest culinary memories.<br/><br/>

With our intuitive interface and advanced algorithms, rediscover those cherished flavors with just a swipe and a tap. Whether you're craving the warmth of homemade soup on a rainy day or the sweetness of a childhood dessert, let Taste of Nostalgia guide you back to the tastes that shaped your happiest moments.<br/><br/>

Join us as we blend the magic of nostalgia with the power of AI, creating a culinary experience that's as unforgettable as it is delicious. Welcome to Taste of Nostalgia – where every bite is a trip down memory lane.</p>
    </div>
        </>
    )
}