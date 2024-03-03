import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Home() {
    const [room1Center, setRoom1Center] = useState({ x: 0, y: 0 });
    const [room2Center, setRoom2Center] = useState({ x: 0, y: 0 });
    const [arrowPosition, setArrowPosition] = useState({ top: 0, left: 0 });

    useEffect(() => {
        // Calculate and set the center point of Room 1 when component mounts
        const room1 = document.getElementById(styles.room1);
        if (room1) {
            const room1Rect = room1.getBoundingClientRect();
            const room1CenterX = room1Rect.left + room1Rect.width / 2;
            const room1CenterY = room1Rect.top + room1Rect.height / 2;
            setRoom1Center({ x: room1CenterX, y: room1CenterY });
            // Initialize arrow's position to be at Room 1's center
            setArrowPosition({
                top: room1CenterY - 32.5,
                left: room1CenterX - 32.5,
            });
        }

        // Calculate and set the center point of Room 2 when component mounts
        const room2 = document.getElementById(styles.room2);
        if (room2) {
            const room2Rect = room2.getBoundingClientRect();
            const room2CenterX = room2Rect.left + room2Rect.width / 2;
            const room2CenterY = room2Rect.top + room2Rect.height / 2;
            setRoom2Center({ x: room2CenterX, y: room2CenterY });
        }
    }, []);

    const handleMoveToNextRoom = () => {
        // Move the arrow to Room 2's center point
        setArrowPosition({
            top: room2Center.y - 32.5,
            left: room2Center.x - 32.5,
        });
    };

    const handleMoveToPreviousRoom = () => {
        // Move the arrow back to Room 1's center point
        setArrowPosition({
            top: room1Center.y - 32.5,
            left: room1Center.x - 32.5,
        });
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>InnerMap</title>
                <link rel="icon" href="logo.ico" />
                <title className={`dancing-script-${styles.uniquifier}`}>
                    InnerMap
                </title>
            </Head>

            <nav id={styles.navbar}>
                <h1 id={styles.title}>InnerMaps</h1>
            </nav>

            <div
                id="arrowContainer"
                style={{
                    position: "absolute",
                    top: `${arrowPosition.top}px`,
                    left: `${arrowPosition.left}px`,
                    transition: "top 2s ease-out, left 2s ease-out",
                }}>
                <img
                    src="/right-arrow-in-a-circle.png"
                    alt="Blue arrow icon"
                    className={styles.arrow}
                />
            </div>

            <main>
                <section id={styles.room2}>
                    <p>Room 2</p>
                </section>
                <section id={styles.room1}>
                    <p>Room 1</p>
                </section>
                <div className={styles.buttoncontainer}>
                    <button
                        id={styles.button1}
                        onClick={handleMoveToPreviousRoom}>
                        Move to Previous Room
                    </button>
                    <button id={styles.button2} onClick={handleMoveToNextRoom}>
                        Move to Next Room
                    </button>
                </div>
            </main>

            <footer>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer">
                    Powered by{" "}
                    <img
                        src="/vercel.svg"
                        alt="Vercel"
                        className={styles.logo}
                    />
                </a>
            </footer>

            <style jsx>{`
                main {
                    padding: 5rem 0;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                footer {
                    width: 100%;
                    height: 100px;
                    border-top: 1px solid #000;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #000;
                }
                footer img {
                    margin-left: 0.5rem;
                }
                footer a {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-decoration: none;
                    color: inherit;
                }
                code {
                    background: #fafafa;
                    border-radius: 5px;
                    padding: 0.75rem;
                    font-size: 1.1rem;
                    font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
                        DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New,
                        monospace;
                }
            `}</style>

            <style jsx global>{`
                html,
                body {
                    padding: 0;
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI,
                        Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
                        Helvetica Neue, sans-serif;
                }
                * {
                    box-sizing: border-box;
                }
            `}</style>
        </div>
    );
}
