import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BTS from "./somesrc/BTS.jpg";
import "./App.scss";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const gshowtl = useRef();
  const portfolioRef = useRef();
  const parallaxRef = useRef();
  const panelRef = useRef();
  const firstRef = useRef();
  const secondRef = useRef();

  useEffect(() => {
    if (portfolioRef.current) {
      gshowtl.current = gsap
          .timeline({
            scrollTrigger: {
              id: "container",
              duration: 1,
              scrub: 1,
              trigger: portfolioRef.current,
              pin: true,
              pinReparent: true,
              markers: {
                startColor: "red",
                endColor: "orange",
                fontSize: "12px"
              },
              start: "top top",
              end: () =>
                  (portfolioRef.current.scrollWidth -
                      document.documentElement.clientWidth) *
                  1.5
            }
          })
          .to(parallaxRef.current, { x: 300 })
          .to(
              panelRef.current,
              {
                x: () =>
                    -(
                        portfolioRef.current.scrollWidth -
                        document.documentElement.clientWidth
                    ) * 1.5
              },
              0
          )
          /*.from(firstRef.current, {
          opacity: 0,
          scale: 0.5,
          scrollTrigger: {
            id: "firstref",
            markers: {
              startColor: "green",
              endColor: "purple",
              fontSize: "12px"
            },
            trigger: portfolioRef.current,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse"
          }
        })*/
          .from(
              secondRef.current,
              {
                opacity: 0,
                scale: 0.5,
                duration: 0.2,
                stagger: {
                  amount: 0.8
                }
              },
              0
          )
          .from(firstRef.current, {
            opacity: 0,
            scale: 0.5,
            scrollTrigger: {
              id: "firstref",
              markers: {
                startColor: "green",
                endColor: "purple",
                fontSize: "12px"
              },
              trigger: portfolioRef.current,
              start: "top 90%",
              end: "bottom 10%",
              toggleActions: "play none none reverse"
            }
          });
    } else {
      console.log("That doesn't exists");
    }

    return () => {
      if (ScrollTrigger.getById("container")) {
        ScrollTrigger.getById("container").kill();
      }
    };
  }, []);

  useEffect(() => {
    console.log("Width of div should be " + portfolioRef.current.clientHeight);
    console.log(
        "Width of client should be " + document.documentElement.clientWidth
    );
  }, []);

  /*useEffect(() => {
    gsap.set(panelRef.current.children, { x: 0 });
    gshowtl.current = ScrollTrigger.batch(panelRef.current.children, {
      scrub: true,
      onEnter: batch =>
        gsap.to(batch, {
            x: () => -(portfolioRef.current.scrollWidth - document.documentElement.clientWidth),
          opacity: 1,
          stagger: { each: 0.20},
          overwrite: true,
          ease: 'sine.in',
          markers: {startColor: "green", endColor: "red", fontSize: "12px"}
        })
    });
  }, []);*/

  return (
      <>
        <div className="galleryShows">
          <div className="spacer">
            <h1>Scroll Down</h1>
          </div>
          <section className="section">
            <div ref={portfolioRef} className="portfolio">
              <h2 ref={parallaxRef} className="portfolio_title">
                Aline
              </h2>
              <div className="panel" ref={panelRef}>
                <div className="panel_item">
                  <img
                      className="panel_img"
                      ref={firstRef}
                      src={BTS}
                      alt="test"
                  />
                </div>
              </div>
              <div className="panel" ref={panelRef}>
                <div className="panel_item">
                  <img
                      className="panel_img"
                      ref={firstRef}
                      src={BTS}
                      alt="test"
                  />
                </div>
              </div>
              {/**Second group of animation */}
              <div className="panel" ref={panelRef}>
                <div className="panel_item">
                  <img
                      className="panel_img"
                      ref={secondRef}
                      src={BTS}
                      alt="test"
                  />
                </div>
              </div>

              <div className="panel" ref={panelRef}>
                <div className="panel_item">
                  <img
                      className="panel_img"
                      ref={secondRef}
                      src={BTS}
                      alt="test"
                  />
                </div>
              </div>

              <div className="panel" ref={panelRef}>
                <div className="panel_item">
                  <img
                      className="panel_img"
                      ref={secondRef}
                      src={BTS}
                      alt="test"
                  />
                </div>
              </div>

              <div className="panel" ref={panelRef}>
                <div className="panel_item">
                  <img
                      className="panel_img"
                      ref={secondRef}
                      src={BTS}
                      alt="test"
                  />
                </div>
              </div>

              <div className="panel" ref={panelRef}>
                <div className="panel_item">
                  <img
                      className="panel_img"
                      ref={secondRef}
                      src={BTS}
                      alt="test"
                  />
                </div>
              </div>

              <div className="panel" ref={panelRef}>
                <div className="panel_item">
                  <img
                      className="panel_img"
                      ref={secondRef}
                      src={BTS}
                      alt="test"
                  />
                </div>
              </div>
            </div>
          </section>
          <div className="spacer">
            <h1>The End</h1>
          </div>
        </div>
      </>
  );
}
