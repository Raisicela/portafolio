import "./Avatar.css";
import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
export const Avatar = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      let xPosition: number;
      let yPosition: number;

      let height: number;
      let width: number;
      const meTl = gsap.timeline({
        onComplete: addMouseEvent,
        delay: 1,
      });

      gsap.set(".bg", { transformOrigin: "50% 50%" });
      gsap.set(".ear-right", { transformOrigin: "0% 50%" });
      gsap.set(".ear-left", { transformOrigin: "100% 50%" });
      gsap.set(".me", { opacity: 1 });

      meTl
        .from(
          ".me",
          {
            duration: 1,
            yPercent: 100,
            ease: "elastic.out(0.5, 0.4)",
          },
          0.5
        )
        .from(
          ".head , .hair , .shadow",
          {
            duration: 0.9,
            yPercent: 20,
            ease: "elastic.out(0.58, 0.25)",
          },
          0.6
        )
        .from(
          ".ear-right",
          {
            duration: 1,
            rotate: 40,
            yPercent: 10,
            ease: "elastic.out(0.5, 0.2)",
          },
          0.7
        )
        .from(
          ".ear-left",
          {
            duration: 1,
            rotate: -40,
            yPercent: 10,
            ease: "elastic.out(0.5, 0.2)",
          },
          0.7
        )
        .to(
          ".glasses",
          {
            duration: 1,
            keyframes: [{ yPercent: -10 }, { yPercent: -0 }],
            ease: "elastic.out(0.5, 0.2)",
          },
          0.75
        )
        .from(
          ".eyebrow-right , .eyebrow-left",
          {
            duration: 1,
            yPercent: 300,
            ease: "elastic.out(0.5, 0.2)",
          },
          0.7
        )
        .to(
          ".eye-right , .eye-left",
          {
            duration: 0.01,
            opacity: 1,
          },
          0.85
        )
        .to(
          ".eye-right-2 , .eye-left-2",
          {
            duration: 0.01,
            opacity: 0,
          },
          0.85
        );

      const blink = gsap.timeline({
        repeat: -1,
        repeatDelay: 5,
        paused: true,
      });

      blink
        .to(
          ".eye-right, .eye-left",
          {
            duration: 0.01,
            opacity: 0,
          },
          0
        )
        .to(
          ".eye-right-2, .eye-left-2",
          {
            duration: 0.01,
            opacity: 1,
          },
          0
        )
        .to(
          ".eye-right, .eye-left",
          {
            duration: 0.01,
            opacity: 1,
          },
          0.15
        )
        .to(
          ".eye-right-2 , .eye-left-2",
          {
            duration: 0.01,
            opacity: 0,
          },
          0.15
        );

      //   CustomWiggle.create("myWiggle", {
      //     wiggles: 6,
      //     type: "ease-out",
      //   });
      //   CustomWiggle.create("lessWiggle", {
      //     wiggles: 4,
      //     type: "ease-in-out",
      //   });

      const dizzy = gsap.timeline({
        paused: true,
        onComplete: () => {
          dizzyIsPlaying = false;
        },
      });

      dizzy
        .to(
          ".eyes",
          {
            duration: 0.01,
            opacity: 0,
          },
          0
        )
        .to(
          ".dizzy",
          {
            duration: 0.01,
            opacity: 0.3,
          },
          0
        )
        .to(
          ".mouth",
          {
            duration: 0.01,
            opacity: 0,
          },
          0
        )
        .to(
          ".oh",
          {
            duration: 0.01,
            opacity: 0.85,
          },
          0
        )
        .to(
          ".head, .hair-back, .shadow",
          {
            duration: 6,
            rotate: 2,
            transformOrigin: "50% 50%",
            ease: "myWiggle",
          },
          0
        )
        .to(
          ".me",
          {
            duration: 6,
            rotate: -2,
            transformOrigin: "50% 100%",
            ease: "myWiggle",
          },
          0
        )
        .to(
          ".me",
          {
            duration: 4,
            scale: 0.99,
            transformOrigin: "50% 100%",
            ease: "lessWiggle",
          },
          0
        )
        .to(
          ".dizzy-1",
          {
            rotate: -360,
            duration: 1,
            repeat: 5,
            transformOrigin: "50% 50%",
            ease: "none",
          },
          0.01
        )
        .to(
          ".dizzy-2",
          {
            rotate: 360,
            duration: 1,
            repeat: 5,
            transformOrigin: "50% 50%",
            ease: "none",
          },
          0.01
        )
        .to(
          ".eyes",
          {
            duration: 0.01,
            opacity: 1,
          },
          4
        )
        .to(
          ".dizzy",
          {
            duration: 0.01,
            opacity: 0,
          },
          4
        )
        .to(
          ".oh",
          {
            duration: 0.01,
            opacity: 0,
          },
          4
        )
        .to(
          ".mouth",
          {
            duration: 0.01,
            opacity: 1,
          },
          4
        );

      // end animation

      // mouse coords stuff

      function percentage(partialValue: number, totalValue: number) {
        return (100 * partialValue) / totalValue;
      }

      let dizzyIsPlaying: boolean;
      function updateScreenCoords(event: any) {
        if (!dizzyIsPlaying) {
          xPosition = event.clientX;
          yPosition = event.clientY;
        }
        if (!dizzyIsPlaying && Math.abs(event.movementX) > 500) {
          dizzyIsPlaying = true;
          dizzy.restart();
        }
      }

      let storedXPosition = 0;
      let storedYPosition = 0;

      // gsap can use queryselector in the quick setter but this is better for performance as it touches the DOM less
      const dom = {
        face: document.querySelector(".face"),
        eye: document.querySelectorAll(".eye"),
        innerFace: document.querySelector(".inner-face"),
        hairFront: document.querySelector(".hair-front"),
        hairBack: document.querySelector(".hair-back"),
        shadow: document.querySelectorAll(".shadow"),
        ear: document.querySelectorAll(".ear"),
        eyebrowLeft: document.querySelector(".eyebrow-left"),
        eyebrowRight: document.querySelector(".eyebrow-right"),
      };

      function animateFace() {
        if (!xPosition) return;
        // important, only recalculating if the value changes
        if (storedXPosition === xPosition && storedYPosition === yPosition)
          return;

        // range from -50 to 50
        const x = percentage(xPosition, width) - 50;
        const y = percentage(yPosition, height) - 50;

        // range from -20 to 80
        const yHigh = percentage(yPosition, height) - 20;
        // range from -80 to 20
        const yLow = percentage(yPosition, height) - 80;

        gsap.to(dom.face, {
          yPercent: yLow / 30,
          xPercent: x / 30,
        });
        gsap.to(dom.eye, {
          yPercent: yHigh / 3,
          xPercent: x / 2,
        });
        gsap.to(dom.innerFace, {
          yPercent: y / 6,
          xPercent: x / 8,
        });
        gsap.to(dom.hairFront, {
          yPercent: yHigh / 15,
          xPercent: x / 22,
        });
        gsap.to([dom.hairBack, dom.shadow], {
          yPercent: (yLow / 20) * -1,
          xPercent: (x / 20) * -1,
        });
        gsap.to(dom.ear, {
          yPercent: (y / 1.5) * -1,
          xPercent: (x / 10) * -1,
        });
        gsap.to([dom.eyebrowLeft, dom.eyebrowRight], {
          yPercent: y * 2.5,
        });

        storedXPosition = xPosition;
        storedYPosition = yPosition;
      }

      // function being called at the end of main timeline
      function addMouseEvent() {
        const safeToAnimate = window.matchMedia(
          "(prefers-reduced-motion: no-preference)"
        ).matches;

        if (safeToAnimate) {
          window.addEventListener("mousemove", updateScreenCoords);

          // gsap's RAF, falls back to set timeout
          gsap.ticker.add(animateFace);

          blink.play();
        }
      }

      // update if browser resizes
      function updateWindowSize() {
        height = window.innerHeight;
        width = window.innerWidth;
      }
      updateWindowSize();
      window.addEventListener("resize", updateWindowSize);
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      <svg
        viewBox="0 10 211.73 180"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <defs>
          <clipPath id="backgroundClip">
            <path
              d="M35.73 144.153C35.73 144.153 67.3 163.863 112.99 159.363C158.68 154.863 203.17 122.133 203.35 87.0327C203.53 51.9327 194.53 6.75274 169.76 0.74274C133.57 -16.1473 110.86 -15.3973 84.73 -12.3973C58.6 -9.39726 31.46 1.87274 13.44 38.6627C-4.76999 57.0627 -8.14999 115.623 35.73 144.153Z"
              fill="none"
            />
          </clipPath>
          <radialGradient
            id="hairBack"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(101.152 87.4559) rotate(32.5529) scale(123.66 100.007)"
          >
            <stop stopColor="#633a34" />
            <stop offset="0.0625" stopColor="#633a34" />
            <stop offset="0.125" stopColor="#633a34" />
            <stop offset="0.1875" stopColor="#633a34" />
            <stop offset="0.25" stopColor="#633a34" />
            <stop offset="0.3125" stopColor="#633a34" />
            <stop offset="0.375" stopColor="#633a34" />
            <stop offset="0.4375" stopColor="#633a34" />
            <stop offset="0.5" stopColor="#633a34" />
            <stop offset="0.5625" stopColor="#633a34" />
            <stop offset="0.625" stopColor="#633a34" />
            <stop offset="0.6875" stopColor="#633a34" />
            <stop offset="0.75" stopColor="#633a34" />
            <stop offset="0.8125" stopColor="#633a34" />
            <stop offset="0.875" stopColor="#633a34" />
            <stop offset="0.9375" stopColor="#633a34" />
            <stop offset="1" stopColor="#633a34" />
            <stop offset="1" stopColor="#633a34" />
          </radialGradient>
          <radialGradient
            id="hairFront"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(103.557 56.4287) rotate(-169.322) scale(73.6617 42.1474)"
          >
            <stop stopColor="#633a34" />
            <stop offset="0.0625" stopColor="#633a34" />
            <stop offset="0.125" stopColor="#633a34" />
            <stop offset="0.1875" stopColor="#633a34" />
            <stop offset="0.25" stopColor="#633a34" />
            <stop offset="0.3125" stopColor="#633a34" />
            <stop offset="0.375" stopColor="#633a34" />
            <stop offset="0.4375" stopColor="#633a34" />
            <stop offset="0.5" stopColor="#633a34" />
            <stop offset="0.5625" stopColor="#633a34" />
            <stop offset="0.625" stopColor="#633a34" />
            <stop offset="0.6875" stopColor="#633a34" />
            <stop offset="0.75" stopColor="#633a34" />
            <stop offset="0.8125" stopColor="#633a34" />
            <stop offset="0.875" stopColor="#633a34" />
            <stop offset="0.9375" stopColor="#633a34" />
            <stop offset="1" stopColor="#633a34" />
            <stop offset="1" stopColor="#633a34" />
          </radialGradient>
        </defs>
        <path
          className="bg"
          d="M39.7302 144.153C39.7302 144.153 71.3002 163.863 116.99 159.363C162.68 154.863 207.17 122.133 207.35 87.0328C207.53 51.9328 196.84 30.0328 172.07 24.0328C147.3 18.0328 121.85 41.0328 95.7602 44.0328C69.6702 47.0328 35.6402 28.1528 17.4402 46.5428C-0.75983 64.9328 -4.14983 115.623 39.7302 144.153Z"
          fill="#de7c31"
        />

        <g clipPath="url(#backgroundClip)">
          <g className="me" opacity="0">
            <g className="body">
              <path
                className="shadow"
                opacity="0.09"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M136.501 43.134C133.091 38.0849 128.635 34.8486 128.635 34.8486L120.057 40.6829C118.738 39.6457 116.993 38.7545 114.687 38.2109C104.283 35.7583 96.6111 41.9396 96.6111 41.9396L90.8736 60.5322L89.0851 61.7486L89.4952 64.999L88.2197 69.1323L98.7123 138.046L98.9505 139.934L89.5527 147.347C89.5527 147.347 96.6211 157.379 108.834 154.374C110.187 154.041 111.485 153.254 112.636 152.322L132.265 184.809L153.655 180.269C153.068 173.837 151.608 167.516 149.315 161.479C148.288 157.953 145.652 154.425 142.719 151.366C146.677 147.397 144.643 138.312 144.643 138.312C144.643 138.312 155.481 143.776 163.58 133.866C171.713 123.913 161.686 112.785 161.686 112.785C161.686 112.785 172.998 112.785 173.909 100.881C174.96 87.1571 159.792 85.3931 159.792 85.3931C159.792 85.3931 171.246 77.5086 159.792 64.3751C157.13 61.3225 151.012 61.7303 151.012 61.7303C151.012 61.7303 157.325 50.8095 147.539 45.5992C143.505 43.4514 139.76 42.8842 136.501 43.134Z"
                fill="black"
              />
              <path
                className="shadow"
                opacity="0.09"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M53.0574 135.874C53.0574 135.874 43.3693 135.874 41.1786 128.847C37.9393 118.456 49.27 110.777 49.27 110.777C49.27 110.777 30.4062 111.266 29.2383 97.4519C28.1552 84.6408 41.1786 81.2342 41.1786 81.2342C41.1786 81.2342 35.428 77.411 38.5964 71.9124C46.8983 57.5051 66.4857 58.862 66.4857 58.862C66.4857 58.862 61.5242 52.5877 69.3899 44.3402C69.5149 43.0509 70.029 41.9892 71.3485 41.3411L72.1811 41.7879C85.893 30.7203 96.6129 41.9396 96.6129 41.9396C96.6129 41.9396 104.285 35.7583 114.689 38.2109L110.311 72.2L108.836 154.374C102.293 155.984 97.2273 153.852 93.9333 151.526L79.1657 182.539L58.2757 180.639C58.2147 174.473 59.0021 168.329 60.6157 162.379C61.2728 158.843 63.6809 154.968 66.4407 151.501C64.44 151.288 62.5255 150.839 60.8045 150.071C50.1428 145.316 53.0574 135.874 53.0574 135.874Z"
                fill="black"
              />
              <path
                className="hair-back hair"
                d="M44.891 123.737C46.9319 131.596 55.9576 131.596 55.9576 131.596C55.9576 131.596 53.2423 142.156 63.175 147.474C73.1077 152.793 89.9592 144.427 89.9592 144.427C89.9592 144.427 96.5443 155.647 107.922 152.286C112.043 151.069 115.621 144.427 115.621 144.427C115.621 144.427 124.941 161.957 138.877 149.559C143.377 145.555 141.282 134.323 141.282 134.323C141.282 134.323 151.38 140.434 158.925 129.351C166.502 118.22 157.16 105.774 157.16 105.774C157.16 105.774 167.699 105.774 168.548 92.4625C169.526 77.1137 155.396 75.1409 155.396 75.1409C155.396 75.1409 166.067 66.3232 155.396 51.6353C152.916 48.2213 147.217 48.6775 147.217 48.6775C147.217 48.6775 153.097 36.4641 143.981 30.6371C131.64 22.7496 122.197 33.9221 122.197 33.9221C122.197 33.9221 122.197 24.8706 113.375 22.3744C103.682 19.6315 96.535 26.5444 96.535 26.5444C96.535 26.5444 86.4574 13.8833 73.6 26.5444C62.9254 37.056 68.4677 45.4697 68.4677 45.4697C68.4677 45.4697 50.2196 43.9522 42.4854 60.0648C39.5336 66.2141 44.891 70.4898 44.891 70.4898C44.891 70.4898 32.7581 74.2996 33.7671 88.627C34.8552 104.076 52.4291 103.529 52.4291 103.529C52.4291 103.529 41.8732 112.118 44.891 123.737Z"
                fill="url(#hairBack)"
              />
              <path
                className="neck"
                d="M114.99 133.583V119.583C115.031 118.347 114.822 117.116 114.378 115.962C113.933 114.809 113.261 113.757 112.401 112.868C111.541 111.98 110.511 111.273 109.373 110.79C108.235 110.308 107.011 110.059 105.775 110.059C104.538 110.059 103.315 110.308 102.176 110.79C101.038 111.273 100.009 111.98 99.1488 112.868C98.2891 113.757 97.6169 114.809 97.1721 115.962C96.7273 117.116 96.5191 118.347 96.5598 119.583V133.583C81.2898 136.423 71.8198 148.663 71.8198 160.913H139.73C139.73 148.673 130.23 136.423 114.99 133.583Z"
                fill="#EDE3D1"
              />
              <path
                className="top"
                d="M105.46 143.462C93.4841 143.906 80.8745 123.64 80.8745 161.828H106.225L131.225 159.688C131.225 121.658 117.343 143.021 105.46 143.462Z"
                fill="black"
                stroke="black"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className="shoulder"
                d="M96.5502 133.293C80.5502 135.133 67.1802 152.793 67.1802 173.293H96.5502V133.293Z"
                fill="#404040"
              />
              <path
                className="shoulder"
                d="M114.96 133.093C130.72 134.943 143.96 152.693 143.96 173.293H114.96V133.093Z"
                fill="#404040"
              />
            </g>
            <path
              className="shadow"
              d="M96.5503 112.783H114.96V127.093C114.96 127.093 104.46 132.633 96.5503 127.093V112.783Z"
              fill="#EFCEB9"
            />
            <g className="head">
              <g className="ear-left ear">
                <path
                  d="M64.25 95.563C64.2693 96.6516 64.5049 97.7254 64.9431 98.7221C65.3814 99.7187 66.0135 100.618 66.8026 101.368C67.5918 102.118 68.5222 102.704 69.5398 103.091C70.5574 103.478 71.6419 103.659 72.73 103.623C74.9287 103.663 77.0548 102.836 78.6477 101.32C80.2406 99.8037 81.172 97.721 81.24 95.523C81.2261 94.4284 80.9934 93.3477 80.5556 92.3443C80.1179 91.341 79.4839 90.4354 78.691 89.6806C77.8981 88.9259 76.9622 88.3374 75.9385 87.9497C74.9148 87.562 73.8239 87.3829 72.73 87.423C70.5297 87.3906 68.4054 88.2271 66.8179 89.751C65.2303 91.2749 64.3077 93.3632 64.25 95.563Z"
                  fill="#EDE3D1"
                />
                <path
                  d="M69.27 94.9031C70.6616 94.8697 72.052 95.0074 73.41 95.3131C74.48 95.6231 75.35 96.3131 76.41 96.6231C76.4837 96.6405 76.5608 96.6361 76.632 96.6104C76.7032 96.5847 76.7654 96.5388 76.811 96.4784C76.8566 96.418 76.8836 96.3456 76.8888 96.27C76.8939 96.1945 76.877 96.1191 76.84 96.0531C75.69 93.6731 71.35 94.1931 69.26 94.3831C69.191 94.3831 69.1249 94.4105 69.0762 94.4592C69.0274 94.508 69 94.5741 69 94.6431C69 94.712 69.0274 94.7782 69.0762 94.8269C69.1249 94.8757 69.191 94.9031 69.26 94.9031H69.27Z"
                  fill="#B5AA9A"
                />
              </g>
              <g className="ear-right ear">
                <path
                  d="M145.1 95.663C145.082 96.7425 144.851 97.8077 144.42 98.7976C143.989 99.7875 143.367 100.683 142.589 101.431C141.812 102.18 140.894 102.768 139.888 103.161C138.883 103.555 137.81 103.746 136.73 103.723C134.531 103.766 132.403 102.94 130.81 101.423C129.216 99.9062 128.286 97.8219 128.22 95.623C128.24 94.5397 128.473 93.4708 128.908 92.4782C129.342 91.4856 129.969 90.5888 130.752 89.8396C131.534 89.0903 132.458 88.5034 133.468 88.1127C134.479 87.7219 135.557 87.5351 136.64 87.563C138.831 87.5332 140.946 88.3657 142.529 89.881C144.111 91.3963 145.035 93.4729 145.1 95.663Z"
                  fill="#EDE3D1"
                />
                <path
                  d="M140.33 94.423C138.23 94.233 133.9 93.703 132.74 96.093C132.702 96.1599 132.685 96.2365 132.69 96.3134C132.695 96.3902 132.723 96.4637 132.77 96.5247C132.817 96.5856 132.881 96.6313 132.954 96.6559C133.027 96.6805 133.106 96.683 133.18 96.663C134.25 96.403 135.1 95.663 136.18 95.353C137.542 95.0515 138.936 94.9138 140.33 94.943C140.399 94.943 140.465 94.9156 140.514 94.8668C140.563 94.8181 140.59 94.7519 140.59 94.683C140.59 94.614 140.563 94.5479 140.514 94.4991C140.465 94.4504 140.399 94.423 140.33 94.423Z"
                  fill="#B5AA9A"
                />
              </g>
              <g className="face">
                <path
                  d="M100.8 119.163H110.18C124.584 119.163 136.26 107.486 136.26 93.0828V64.7528C136.26 50.3493 124.584 38.6728 110.18 38.6728H100.8C86.3967 38.6728 74.7203 50.3493 74.7203 64.7528V93.0828C74.7203 107.486 86.3967 119.163 100.8 119.163Z"
                  fill="#EDE3D1"
                />
                <g className="inner-face">
                  <path
                    className="eyebrow-right"
                    d="M120.73 79a9 9 0 00-4-1.22 9.8 9.8 0 00-4.19.87"
                    fill="none"
                    stroke="#b5aa9a"
                    strokeWidth="1.04"
                  />
                  <path
                    className="eyebrow-left"
                    d="M97.12 79.41a9.53 9.53 0 00-4-1.11 10.58 10.58 0 00-4.2.76"
                    fill="none"
                    stroke="#b5aa9a"
                    strokeWidth="1.04"
                  />
                  <path
                    className="mouth"
                    d="M97 107.52s7.06 4.62 14 1.59"
                    fill="none"
                    stroke="#b5aa9a"
                    strokeWidth="1.04"
                  />
                  <path
                    className="oh"
                    opacity="0"
                    d="M105.56,117.06c4-.14,5-2.89,4.7-5.64s-1.88-6.7-4.84-6.62-4.73,4.36-4.9,6.72S101.57,117.19,105.56,117.06Z"
                    fill="#262528"
                  />
                  <g className="eyes">
                    <path
                      className="eye-left eye"
                      d="M89.48 87.37c-.07 2.08 1.25 3.8 2.94 3.85s3.1-1.59 3.16-3.67-1.25-3.8-2.94-3.85-3.1 1.59-3.16 3.67z"
                      fill="#2b343b"
                    />
                    <path
                      className="eye-right eye"
                      d="M113.67 87.37c-.07 2.08 1.25 3.8 2.94 3.85s3.1-1.59 3.16-3.67-1.25-3.8-2.94-3.85-3.1 1.59-3.16 3.67z"
                      fill="#2b343b"
                    />
                    <path
                      className="eye-right-2 eye"
                      d="M114.11 88a5.72 5.72 0 002.48.72 6.46 6.46 0 002.59-.45"
                      opacity="0"
                      fill="none"
                      stroke="#282828"
                      strokeWidth="1.04"
                    />
                    <path
                      className="eye-left-2 eye"
                      d="M89.85 88a5.77 5.77 0 002.56.3 6.48 6.48 0 002.49-.87"
                      fill="none"
                      opacity="0"
                      stroke="#282828"
                      strokeWidth="1.04"
                    />
                  </g>
                  <path
                    className="dizzy dizzy-1"
                    opacity="0"
                    d="M113.61,87.6c.54-2.66,2.66-3.84,4.63-3.37A3.3,3.3,0,0,1,117,90.71a2.53,2.53,0,0,1-2-3,2.48,2.48,0,0,1,2.73-1.92A1.71,1.71,0,0,1,119.32,88a1.59,1.59,0,0,1-1.75,1.34c-.79-.1-1.41-.59-1-1.42s1-.72,1.22-.24"
                    fill="none"
                    stroke="#000"
                    strokeWidth="0.75"
                  />
                  <path
                    className="dizzy dizzy-2"
                    opacity="0"
                    d="M96.15,87.27c-.54-2.66-2.66-3.84-4.63-3.37s-2.89,1.9-2.46,4a3.11,3.11,0,0,0,3.68,2.45,2.53,2.53,0,0,0,2-3A2.49,2.49,0,0,0,92,85.49a1.71,1.71,0,0,0-1.57,2.13A1.57,1.57,0,0,0,92.19,89c.79-.11,1.41-.6,1-1.43s-1-.72-1.22-.23"
                    fill="none"
                    stroke="#000"
                    strokeWidth="0.75"
                  />
                  <path
                    id="septum"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M106.483 101.717C106.61 101.542 106.697 101.341 106.736 101.126C106.789 100.838 106.752 100.541 106.631 100.274C106.51 100.007 106.311 99.7838 106.06 99.6332C105.809 99.4827 105.518 99.4123 105.225 99.4314C104.933 99.4505 104.654 99.5583 104.424 99.7403C104.195 99.9224 104.027 100.17 103.942 100.45C103.856 100.73 103.859 101.03 103.948 101.309C103.997 101.461 104.071 101.603 104.165 101.729C104.221 101.718 104.279 101.712 104.339 101.712C104.824 101.712 105.217 102.105 105.217 102.59C105.217 103.075 104.824 103.468 104.339 103.468C103.854 103.468 103.461 103.075 103.461 102.59C103.461 102.548 103.464 102.508 103.47 102.468C103.353 102.333 103.252 102.186 103.167 102.03C103.096 101.898 103.037 101.76 102.991 101.616C102.839 101.143 102.835 100.634 102.979 100.158C103.124 99.6824 103.41 99.2619 103.799 98.9527C104.189 98.6436 104.663 98.4606 105.16 98.4281C105.656 98.3956 106.15 98.5151 106.577 98.7708C107.003 99.0265 107.342 99.4061 107.547 99.8591C107.752 100.312 107.814 100.817 107.725 101.306C107.698 101.455 107.658 101.6 107.605 101.739C107.542 101.903 107.462 102.06 107.366 102.207C107.422 102.323 107.453 102.453 107.453 102.59C107.453 103.075 107.06 103.468 106.576 103.468C106.091 103.468 105.698 103.075 105.698 102.59C105.698 102.137 106.042 101.763 106.483 101.717Z"
                    fill="#C5C5C5"
                  />
                  <path
                    className="nose"
                    d="M102.39 98.13s3.09 1.55 5.78 0"
                    fill="none"
                    stroke="#e0d5c1"
                  />
                  <path
                    className="blush-left eye"
                    d="M89.9 98.17a2.66 2.66 0 01-1.55-.93 3.73 3.73 0 01-.76-3.12 3 3 0 011-1.56 2 2 0 011.4-.42 3 3 0 012.5 2.72.76.76 0 010 .21 3.19 3.19 0 01.11.91 2.1 2.1 0 01-1.77 2.21 2.07 2.07 0 01-.93-.02zM89.34 96v-.05s-.04.05 0 .05z"
                    fill="#efceb9"
                    fillRule="evenodd"
                  />
                  <path
                    className="blush-right eye"
                    d="M118.93 98.19a2.09 2.09 0 01-1.77-2.19 3.58 3.58 0 01.1-.91v-.21a3 3 0 012.51-2.72 2 2 0 011.4.42 3 3 0 011 1.56 3.73 3.73 0 01-.76 3.12 2.66 2.66 0 01-1.55.93 2.08 2.08 0 01-.93 0zm1.53-2.2v.05c0 .05.05-.04 0-.04z"
                    fill="#efceb9"
                    fillRule="evenodd"
                  />
                </g>
                <path
                  className="hair-front"
                  d="M86.4758 69.9829C86.4758 69.9829 84.1468 74.1241 80.612 74.8402C68.3767 77.3189 65.567 57.2237 73.0893 45.1678C80.6117 33.1119 130.672 25.2067 137.655 51.8655C138.886 56.5644 138.069 72.4305 133.852 74.8402C129.454 77.3531 123.015 74.8402 121.166 71.5411C119.18 67.9987 121.166 61.7383 121.166 61.7383C121.166 61.7383 118.536 66.4755 113.977 65.3084C110.139 64.3259 108.867 56.129 108.561 53.5615C108.741 55.7581 108.875 61.9989 104.736 63.1941C101.052 64.2579 99.7451 60.4905 99.7451 60.4905C99.7451 60.4905 101.417 69.2193 94.7539 72.1367C88.5793 74.8402 86.4758 69.9829 86.4758 69.9829Z"
                  fill="url(#hairFront)"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};
