import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [room1Center, setRoom1Center] = useState({ x: 0, y: 0 });
  const [room2Center, setRoom2Center] = useState({ x: 0, y: 0 });
  const [arrowPosition, setArrowPosition] = useState({ top: 0, left: 0 });
  const [transitionDuration, setTransitionDuration] = useState(0);
  const [showLine, setShowLine] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(90); // Initial rotation angle

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
        top: room1CenterY - 22.5,
        left: room1CenterX - 22.5,
      });
      alert(room1CenterX, room1CenterY);
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

  const calculateTransitionDuration = (distance) => {
    // Calculate the duration based on the distance and speed (75px per second)
    return (Math.abs(distance) / 75) * 1000; // Convert seconds to milliseconds
  };

  const calculateRotationAngle = (fromPoint, toPoint) => {
    // Calculate the angle of the arrow using trigonometry
    const deltaX = toPoint.x - fromPoint.x;
    const deltaY = toPoint.y - fromPoint.y;
    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
    return angle >= 0 ? angle : 360 + angle; // Ensure angle is between 0 and 360 degrees
  };

  const handleMoveToNextRoom = () => {
    // Calculate the distance to move the arrow to Room 2
    const distanceX = room2Center.x - arrowPosition.left;
    const distanceY = room2Center.y - arrowPosition.top;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    // Calculate transition duration based on distance and speed
    const duration = calculateTransitionDuration(distance);

    // Calculate and set the rotation angle for the arrow
    const rotationAngle = calculateRotationAngle(room1Center, room2Center);
    setRotationAngle(rotationAngle);

    // Update transition duration for rotation
    setTransitionDuration(duration / 2); // Half of the total duration

    // Move the arrow to Room 2's center point
    setTimeout(() => {
      setArrowPosition({
        top: room2Center.y - 22.5,
        left: room2Center.x - 22.5,
      });
      setTransitionDuration(duration / 2); // Remaining half of the total duration for movement
      setShowLine(true);
    }, duration / 4); // Start moving after rotation completes
  };

  const handleMoveToPreviousRoom = () => {
    // Calculate the distance to move the arrow to Room 1
    const distanceX = room1Center.x - arrowPosition.left;
    const distanceY = room1Center.y - arrowPosition.top;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    // Calculate transition duration based on distance and speed
    const duration = calculateTransitionDuration(distance);

    // Calculate and set the rotation angle for the arrow
    const rotationAngle = calculateRotationAngle(room2Center, room1Center);
    setRotationAngle(rotationAngle);

    // Update transition duration for rotation
    setTransitionDuration(duration / 4); // Half of the total duration

    // Move the arrow back to Room 1's center point
    setTimeout(() => {
      setArrowPosition({
        top: room1Center.y - 22.5,
        left: room1Center.x - 22.5,
      });
      setTransitionDuration(duration / 2); // Remaining half of the total duration for movement
      setShowLine(true);
    }, duration / 4); // Start moving after rotation completes
  };

  const handleTransitionEnd = () => {
    setShowLine(false);
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

      <figure>
        <img src="../bluecircle.png" alt="blue circle"></img>
      </figure>

      <main>
        <div className={styles.classcontainer}>
          <div className={styles.rowClass1}>
            <div className={styles.class}>Room 3</div>
            <div className={styles.hallway}>H12</div>
            <div className={styles.hallway}>H11</div>
            <div className={styles.hallway}>H10</div>
            <div className={styles.class}>Room 5</div>
          </div>

          <div className={styles.rowClass2}>
            <div className={styles.class}>Room 1</div>
            <div className={styles.hallway}>H1</div>
            <div className={styles.hallway}>H2</div>
            <div className={styles.hallway}>H3</div>
          </div>

          <div className={styles.rowClass3}>
            <div className={styles.class}>Room 2</div>
            <div className={styles.hallway}>H4</div>
            <div className={styles.hallway}>H5</div>
            <div className={styles.hallway}>H6</div>
            <div className={styles.hallway}>H7</div>
            <div className={styles.class}>Room 4</div>
          </div>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
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
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
