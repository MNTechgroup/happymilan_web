import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";

function Slider() {
    const [renderKey, setRenderKey] = useState(0);

    useEffect(() => {
        setRenderKey(prevKey => prevKey + 1);
    }, []);

    const row2 = [
        "/heroSec/slider/upi-logo.svg",
        "/heroSec/slider/phonepe-logo.svg",
        "/heroSec/slider/visa-logo.svg",
        "/heroSec/slider/g-pay-logo.svg",
        "/heroSec/slider/master-card-logo.svg",
    ];

    return (
        <AppContainer key={renderKey}>
            <Wrapper>
                <Marquee>
                    <MarqueeGroup2>
                        {row2.map((el, index) => (
                            <ImageGroup key={index}>
                                <Image src={el} />
                            </ImageGroup>
                        ))}
                    </MarqueeGroup2>
                    <MarqueeGroup2>
                        {row2.map((el, index) => (
                            <ImageGroup key={index}>
                                <Image src={el} />
                            </ImageGroup>
                        ))}
                    </MarqueeGroup2>
                </Marquee>
            </Wrapper>
        </AppContainer>
    );
}

export default Slider;

const AppContainer = styled.div`
  color: #000000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Marquee = styled.div`
  display: flex;
  width: 100vw;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  aspect-ratio: 16/9;
`;
