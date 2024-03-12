import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useEffect, useState } from "react";

const room1CenterPoint = { x: 195, y: 295 };
const room2CenterPoint = { x: 495, y: 395 };
const room3CenterPoint = { x: 495, y: 195 };
const room4CenterPoint = { x: 895, y: 195 };
const room5CenterPoint = { x: 995, y: 395 };
export default function Home() {
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

            <figure
                style={{
                    position: "absolute",
                    top: `${room1CenterPoint.y}px`,
                    left: `${room1CenterPoint.x}px`,
                    zIndex: 10,
                }}>
                <img
                    className={styles.userCircles}
                    src="../bluecircle.png"
                    alt="blue circle"
                />
            </figure>

            <main>
                <div className={styles.classcontainer}>
                    <div className={styles.rowClass1}>
                        <button className={styles.class}>Room 3</button>
                        <div className={styles.hallway}>H12</div>
                        <div className={styles.hallway}>H11</div>
                        <div className={styles.hallway}>H10</div>
                        <button className={styles.class}>Room 5</button>
                    </div>

                    <div className={styles.rowClass2}>
                        <button className={styles.class}>Room 1</button>
                        <div className={styles.hallway}>H1</div>
                        <div className={styles.hallway}>H2</div>
                        <div className={styles.hallway}>H3</div>
                    </div>

                    <div className={styles.rowClass3}>
                        <button className={styles.class}>Room 2</button>
                        <div className={styles.hallway}>H4</div>
                        <div className={styles.hallway}>H5</div>
                        <div className={styles.hallway}>H6</div>
                        <div className={styles.hallway}>H7</div>
                        <button className={styles.class}>Room 4</button>
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
