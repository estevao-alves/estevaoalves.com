import styled from "styled-components"

import LogoGoldenRatio from "@/app/assets/logo-golden-ratio.svg"
import { Container } from "../styles/layout";
import LogoCozyDragon from "@/app/assets/logo-cozy-dragon.svg";

const Wrapper = styled.div`
  --height: 220px;
  background-color: var(--blue);
  
  .content {
    position: relative;
    display: flex;
    justify-content: space-between;

    .wireframeLogo {
      svg {
        height: var(--height);
        padding: 30px;
      }
    }

    .mainLogo {
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 160px;
      width: 160px;
      z-index: 10;
    }

    img {
      position: absolute;
      right: 0;
      bottom: 0;
      max-width: 400px;
      aspect-ratio: 16 / 9;
    }
  }

  @media (max-width: 768px) {
    .content {
      .wireframeLogo {
        svg {
          padding-left: 0;
        }
      }

      img {
        right: -20px;
        max-width: 350px;
      }
    }
  }

  @media (max-width: 576px) {
    .content {
      .wireframeLogo {
        margin: 0 auto;
      }

      img {
        display: none;
      }
    }
  }
`;
  
export default function Banner() {
  return <Wrapper>
    <Container>
      <div className="content">
        <div className="wireframeLogo">
          <LogoGoldenRatio />
        </div>
        <div className="mainLogo">
          <LogoCozyDragon />
        </div>
        <img src="banner-image.png" alt="profile-image" />
      </div>
    </Container>
  </Wrapper>
}