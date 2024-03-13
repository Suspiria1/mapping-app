import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useEffect, useState } from "react";

const roomCoordinates = {
    "Room 1": { x: 195, y: 295 },
    "Room 2": { x: 495, y: 395 },
    "Room 3": { x: 495, y: 195 },
    "Room 4": { x: 995, y: 395 },
    "Room 5": { x: 895, y: 195 },
    "HW 1": { x: 295, y: 295 },
    "HW 2": { x: 395, y: 295 },
    "HW 3": { x: 495, y: 295 },
    "HW 4": { x: 595, y: 395 },
    "HW 5": { x: 695, y: 395 },
    "HW 6": { x: 795, y: 395 },
    "HW 7": { x: 895, y: 395 },
    "HW 8": { x: 595, y: 195 },
    "HW 9": { x: 695, y: 195 },
    "HW 10": { x: 795, y: 195 },
};

const R1toR2 = ["Room 1", "HW 1", "HW 2", "HW 3", "Room 2"];
const R1toR3 = ["Room 1", "HW 1", "HW 2", "HW 3", "Room 3"];
const R1toR5 = [
    "Room 1",
    "HW 1",
    "HW 2",
    "HW 3",
    "Room 3",
    "HW 8",
    "HW 9",
    "HW 10",
    "Room 5",
];
const R1toR4 = [
    "Room 1",
    "HW 1",
    "HW 2",
    "HW 3",
    "Room 2",
    "HW 4",
    "HW 5",
    "HW 6",
    "HW 7",
    "Room 4",
];
const R2toR1 = ["Room 2", "HW 3", "HW 2", "HW 1", "Room 1"];
const R2toR3 = ["Room 2", "HW 3", "Room 3"];
const R2toR4 = ["Room 2", "HW 4", "HW 5", "HW 6", "HW 7", "Room 4"];
const R2toR5 = ["Room 2", "HW 3", "Room 3", "HW 8", "HW 9", "HW 10", "Room 5"];
const R3toR1 = ["Room 3", "HW 3", "HW 2", "HW 1", "Room 1"];
const R3toR2 = ["Room 3", "HW 3", "Room 2"];
const R3toR4 = [
    "Room 3",
    "HW 3",
    "Room 2",
    "HW 4",
    "HW 5",
    "HW 6",
    "HW 7",
    "Room 4",
];
const R3toR5 = ["Room 3", "HW 8", "HW 9", "HW 10", "Room 5"];
const R4toR1 = [
    "Room 4",
    "HW 7",
    "HW 6",
    "HW 5",
    "HW 4",
    "Room 2",
    "HW 3",
    "HW 2",
    "HW 1",
    "Room 1",
];
const R4toR2 = ["Room 4", "HW 7", "HW 6", "HW 5", "HW 4", "Room 2"];
const R4toR3 = [
    "Room 4",
    "HW 7",
    "HW 6",
    "HW 5",
    "HW 4",
    "Room 2",
    "HW 3",
    "Room 3",
];
const R4toR5 = [
    "Room 4",
    "HW 7",
    "HW 6",
    "HW 5",
    "HW 4",
    "Room 2",
    "HW 3",
    "Room 3",
    "HW 8",
    "HW 9",
    "HW 10",
    "Room 5",
];
const R5toR1 = [
    "Room 5",
    "HW 10",
    "HW 9",
    "HW 8",
    "Room 3",
    "HW 3",
    "HW 2",
    "HW 1",
    "Room 1",
];
const R5toR2 = ["Room 5", "HW 10", "HW 9", "HW 8", "Room 3", "HW 3", "Room 2"];
const R5toR3 = ["Room 5", "HW 10", "HW 9", "HW 8", "Room 3"];
const R5toR4 = [
    "Room 5",
    "HW 10",
    "HW 9",
    "HW 8",
    "Room 3",
    "HW 3",
    "Room 2",
    "HW 4",
    "HW 5",
    "HW 6",
    "HW 7",
    "Room 4",
];

export default function Home() {
    const [circlePosition, setCirclePosition] = useState(
        roomCoordinates["Room 1"]
    );
    const [transitionEnabled, setTransitionEnabled] = useState(false);

    const handleRoomClick = (room) => {
        setTransitionEnabled(true);
        setTimeout(() => {
            setCirclePosition(roomCoordinates[room]);
        }, 100);
    };

    useEffect(() => {
        setTransitionEnabled(true);
    }, [circlePosition]);

    const circleStyle = {
        position: "absolute",
        top: `${circlePosition.y}px`,
        left: `${circlePosition.x}px`,
        transition: transitionEnabled ? "top 1s, left 1s" : "none",
        zIndex: 10,
    };
    return (
        <div className={styles.container}>
            <Head>
                <title>InnerMap</title>
                <link rel="icon" href="logo.ico" />
                <title className={`dancing-script-${styles.uniquifier}`}>
                    InnerMaps
                </title>
            </Head>

            <nav id={styles.navbar}>
                <h1 id={styles.title}>InnerMaps</h1>
            </nav>

            <figure style={circleStyle}>
                <img
                    className={styles.userCircles}
                    src="../bluecircle.png"
                    alt="blue circle"
                />
            </figure>

            <main>
                <div className={styles.classcontainer}>
                    <div className={styles.rowClass1}>
                        <button
                            className={styles.class}
                            onClick={() => handleRoomClick("Room 3")}>
                            Room 3
                        </button>
                        <div className={styles.hallway}>H8</div>
                        <div className={styles.hallway}>H9</div>
                        <div className={styles.hallway}>H10</div>
                        <button
                            className={styles.class}
                            onClick={() => handleRoomClick("Room 5")}>
                            Room 5
                        </button>
                    </div>

                    <div className={styles.rowClass2}>
                        <button
                            className={styles.class}
                            onClick={() => handleRoomClick("Room 1")}>
                            Room 1
                        </button>
                        <div className={styles.hallway}>H1</div>
                        <div className={styles.hallway}>H2</div>
                        <div className={styles.hallway}>H3</div>
                    </div>

                    <div className={styles.rowClass3}>
                        <button
                            className={styles.class}
                            onClick={() => handleRoomClick("Room 2")}>
                            Room 2
                        </button>
                        <div className={styles.hallway}>H4</div>
                        <div className={styles.hallway}>H5</div>
                        <div className={styles.hallway}>H6</div>
                        <div className={styles.hallway}>H7</div>
                        <button
                            className={styles.class}
                            onClick={() => handleRoomClick("Room 4")}>
                            Room 4
                        </button>
                    </div>
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
