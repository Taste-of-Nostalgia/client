import React from 'react';

export default function Book() {
    return (
        <>
            <link rel="stylesheet" href="/assets/book.css" />
            <button id="prev-btn">
                <i class="fas fa-arrow-circle-left"></i>
            </button>


            <div id="book" class="book">

                <div id="p1" class="paper">
                    <div class="front">
                        <div id="f1" class="front-content">
                            <h1>Front 1</h1>
                        </div>
                    </div>
                    <div class="back">
                        <div id="b1" class="back-content">
                            <h1>Back 1</h1>
                        </div>
                    </div>
                </div>

                <div id="p2" class="paper">
                    <div class="front">
                        <div id="f2" class="front-content">
                            <h1>Front 2</h1>
                        </div>
                    </div>
                    <div class="back">
                        <div id="b2" class="back-content">
                            <h1>Back 2</h1>
                        </div>
                    </div>
                </div>

                <div id="p3" class="paper">
                    <div class="front">
                        <div id="f3" class="front-content">
                            <h1>Front 3</h1>
                        </div>
                    </div>
                    <div class="back">
                        <div id="b3" class="back-content">
                            <h1>Back 3</h1>
                        </div>
                    </div>
                </div>
            </div>

            <button id="next-btn">
                <i class="fas fa-arrow-circle-right"></i>
            </button>
        </>
    )
}