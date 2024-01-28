import { useState } from "react"
import '../assets/style.css'


export default function Scrapbook({ numOfPapers }) {
    let maxLocation = numOfPapers + 1;

    const [currentLocation, setCurrentLocation] = useState(1);

    const goNextPage = () => {
        const prevBtn = document.querySelector("#prev-btn");
        const nextBtn = document.querySelector("#next-btn");
        const book = document.querySelector("#book");

        const papers = [0];
        for (let i = 1; i <= numOfPapers; i++) {
            papers.push(document.querySelector(`#p${i}`));
        }

        if (currentLocation < maxLocation) {
            if (currentLocation == 1) {
                openBook();
            }
            if (currentLocation == numOfPapers) {
                closeBook(false);
            }
            papers[currentLocation].classList.add("flipped");
            papers[currentLocation].style.zIndex = currentLocation;
            setCurrentLocation(currentLocation + 1);
        }
    };

    const goPrevPage = () => {
        const prevBtn = document.querySelector("#prev-btn");
        const nextBtn = document.querySelector("#next-btn");
        const book = document.querySelector("#book");
        const paper1 = document.querySelector("#p1");
        const paper2 = document.querySelector("#p2");
        const paper3 = document.querySelector("#p3");

        const papers = [0];
        for (let i = 1; i <= numOfPapers; i++) {
            papers.push(document.querySelector(`#p${i}`));
        }

        if (currentLocation > 1) {
            if (currentLocation == 2) {
                closeBook(true);
            }
            if (currentLocation == numOfPapers + 1) {
                openBook();
            }
            papers[currentLocation - 1].classList.remove("flipped");
            papers[currentLocation - 1].style.zIndex = numOfPapers - currentLocation + 2;
            setCurrentLocation(currentLocation - 1);
        }
    };

    const openBook = () => {
        // Implement book opening logic here
        const prevBtn = document.querySelector("#prev-btn");
        const nextBtn = document.querySelector("#next-btn");
        const book = document.querySelector("#book");

        const paper1 = document.querySelector("#p1");
        const paper2 = document.querySelector("#p2");
        const paper3 = document.querySelector("#p3");
        book.style.transform = "translateX(50%)";
        // prevBtn.style.transform = "translateX(-180px)";
        // nextBtn.style.transform = "translateX(180px)";
    };

    const closeBook = (isAtBeginning) => {
        // Implement book closing logic here
        const prevBtn = document.querySelector("#prev-btn");
        const nextBtn = document.querySelector("#next-btn");
        const book = document.querySelector("#book");

        const paper1 = document.querySelector("#p1");
        const paper2 = document.querySelector("#p2");
        const paper3 = document.querySelector("#p3");
        if (isAtBeginning) {
            book.style.transform = "translateX(0%)";
        } else {
            book.style.transform = "translateX(100%)";
        }

        prevBtn.style.transform = "translateX(0px)";
        nextBtn.style.transform = "translateX(0px)";
    };

    const pageNumbers = []
    for (let i = 0; i < numOfPapers; i++) {
        pageNumbers.push(i + 1);
    }

    return (
        <>
            <button className="scrapbut" id="prev-btn" onClick={goPrevPage}>
                <i className="fas fa-arrow-circle-left"></i>
            </button>

            {/* {
                pageNumbers.map((idx) => {
                    return (
                        <div id="book" className="book">
                            <div id={`p${idx}`} style={{zIndex: numOfPapers - idx + 1}} className="paper">
                                <div className="front">
                                    <div id={`f${idx}`} className="front-content">
                                        <h1>Front {idx}</h1>
                                    </div>
                                </div>
                                <div className="back">
                                    <div id={`b${idx}`} className="back-content">
                                        <h1>Back {idx}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            } */}

            <div id="book" class="book">
                <div id="p1" class="paper">
                    <div class="front">
                        <img src="/img/burger.jpg" alt="Burger" 
                        style={{ maxWidth: '300px', maxHeight: '300px', paddingLeft: '50px', paddingBottom: '0px'}}/>

                        <div id="f1" class="front-content">
                            <h2 className="pics">Burger</h2>
                        </div>
                    </div>
                    <div class="back">
                        <img src="/img/ramen.jpg" alt="ramen" 
                            style={{ maxWidth: '300px', maxHeight: '250px', paddingLeft: '55px', paddingBottom: '0px'}}/>
                            
                        <div id="b1" class="back-content">
                            <h2 className="pics">Ramen</h2>
                        </div>
                    </div>
                </div>

                <div id="p2" class="paper">
                    <div class="front">
                        <img src="/img/mc.jpg" alt="mc" 
                        style={{ maxWidth: '300px', maxHeight: '300px', paddingLeft: '50px', paddingBottom: '0px'}}/>
                        
                        <div id="f2" class="front-content">
                            <h2 className="pics">Mac And Cheese</h2>
                        </div>
                    </div>

                    <div class="back">
                        <img src="/img/peanuts.jpg" alt="peanuts" 
                            style={{ maxWidth: '300px', maxHeight: '300px', paddingLeft: '50px', paddingBottom: '0px'}}/>
                        <div id="b2" class="back-content">
                           <h2 className="pics">Jeffery's Famous Peanuts</h2>
                        </div>
                    </div>
                </div>

                <div id="p3" class="paper">
                    <div class="front">
                        <img src="/img/pizza.jpg" alt="pizza" 
                        style={{ maxWidth: '300px', maxHeight: '300px', paddingLeft: '50px', paddingBottom: '0px'}}/>
                        
                        <div id="f3" class="front-content">
                            <h2 className="pics">Pizza</h2>
                        </div>
                    </div>
                    
                    <div class="back">
                        <img src="/img/steak.jpg" alt="steak" 
                            style={{ maxWidth: '300px', maxHeight: '300px' , paddingLeft: '50px', paddingBottom: '0px'}}/>
                        <div id="b3" class="back-content">
                            <h2 className="pics">Steak</h2>
                        </div>
                    </div>
                </div>
            </div>

            <button className="scrapbut" id="next-btn" onClick={goNextPage}>
                <i className="fas fa-arrow-circle-right"></i>
            </button>
        </>
    );
}