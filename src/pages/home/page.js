import React from 'react';
import baffle from 'baffle';
import TweenMax from "gsap";

let AnimationScroll = 1;

function Page() {


    const event = window.addEventListener('scroll', function () {
        const scrollY = window.pageYOffset;

        if (! AnimationScroll && scrollY < 50) {
            TweenMax.to(".scrollDownImage", 1, {
                opacity: 0.5,
                height: 100
            })
            TweenMax.to(".descTopText", 1, {
                opacity: 0,
                ease: "circ.out"
            })
            AnimationScroll = 1;
        }

        if (AnimationScroll && scrollY > 250) {
            TweenMax.to(".scrollDownImage", 2, {
                opacity: 0,
                height: 0
            })
            TweenMax.to(".descTopText", 8, {
                opacity: 0.5,
                delay: 2,
                ease: "circ.out"
            })
            AnimationScroll = 0;

            baffle(document.querySelectorAll('.baffle')).start().set({characters: '10', speed: 250}).reveal(10000).text(text => 'Who are Rick and Morty? and What is this site?');

        }
        if (scrollY > 500) {
            TweenMax.to(".descClimaxText", 2, {
                opacity: 0.5,
                position: 'relative',
                left: '0'
            })

        }
    })

    return (

        <section className="Home">
            <header className="headerHome">
                <img alt="logo" width="70%" src="https://res.cloudinary.com/jaacker25/image/upload/v1585913133/rickMorty/58f37720a4fa116215a9240f_lhbjzz.png"></img>
            </header>
            <div className="HomeDescription">
                <div className="TopDescription">
                    <img className="scrollDownImage" alt="scrollDownImage" src="https://res.cloudinary.com/jaacker25/image/upload/c_scale,h_100/v1584305031/MyPortfolio/scrollDownTransparent_ulkgdf.png"></img>
                    <h1 onMouseOver={
                            () => {
                                TweenMax.to(".descTopText", 1, {
                                    rotationZ: 15,
                                    ease: "sine.out"
                                })
                                TweenMax.to(".descTopText", 1, {
                                    rotationZ: 0,
                                    delay: 1,
                                    ease: "sine.out"
                                })

                            }
                        }
                        className='descTopText baffle'>101 101 1011 10 10100? 000 0011 11 1001 1100?</h1>
                </div>
                <div className="descClimax">
                    <div className="descClimaxText">
                        <p onMouseOver={
                                () => {
                                    TweenMax.to(".descriptionText", 1, {
                                        rotationZ: -15,
                                        ease: "sine.out"
                                    })
                                    TweenMax.to(".descriptionText", 1, {
                                        rotationZ: 0,
                                        delay: 1,
                                        ease: "sine.out"
                                    })
                                }
                            }
                            className="descriptionText">Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's late-night programming block Adult Swim. The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures.<br/><br/>
                            The series has been picked up for an additional seventy episodes over an unspecified number of seasons, beginning with season 4. The fourth season premiered on November 10, 2019 and will consist of ten episodes.
                            <br/><br/>
                            Feel free to explore this site.</p>
                    </div>
                </div>
            </div>
            <hr className="HomeHr"></hr>
            <div className="HomeFooter">
                <p>jaacker25 | 2020</p>
            </div>
        </section>

    )
}

export default Page;
