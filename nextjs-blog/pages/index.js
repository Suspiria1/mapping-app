import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import React, { useState } from "react";

export default function Home() {
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

            <div className={styles.arrowContainer}>
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
                <button onClick={moveArrowUp}>Move Arrow Up</button>
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

export default function Home() {
    const [arrowTop, setArrowTop] = useState("50%");

    const moveArrowUp = () => {
        const currentTop = parseFloat(arrowTop);
        const newTop = currentTop - 100; // Move the arrow up by 100px
        setArrowTop(`${newTop}px`);
    };

    return (
        <div className={styles.container}>
            {/* Header, navigation, and main content */}
            <div className={styles.arrowContainer} style={{ top: arrowTop }}>
                <img
                    src="/right-arrow-in-a-circle.png"
                    alt="Blue arrow icon"
                    className={styles.arrow}
                />
            </div>
            {/* Footer */}
        </div>
    );
}
