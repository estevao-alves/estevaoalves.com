import styled from "styled-components"

import LogoGoldenRatio from "@/app/assets/logo-golden-ratio.svg"
import {Container} from "../styles/layout";
import LogoCozyDragon from "@/app/assets/icon-cozy-dragon.svg";

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
            img {
                --size: 160px;
                position: absolute;
                top: 100%;
                left: 50%;
                transform: translate(-50%, -50%);
                height: var(--size);
                width: var(--size);
                z-index: 10;
            }
        }

        .profileImage {
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

            .profileImage {
                right: -20px;
                max-width: 350px;
            }
        }
    }

    @media (max-width: 576px) {
        --height: 200px;

        .content {
            .wireframeLogo {
                margin: 0 auto;
            }

            .profileImage {
                display: none;
            }
        }
    }

    @media (max-width: 480px) {
        --height: 100px;

        .content {
            .wireframeLogo {
                margin: 0 auto;

                svg {
                    padding: 10px;
                }
            }

            .mainLogo {
                img {
                    --size: 100px;
                }
            }
        }
    }
`;

export default function Banner() {
    return <Wrapper>
        <Container>
            <div className="content">
                <div className="wireframeLogo">
                    <LogoGoldenRatio/>
                </div>

                <div className="mainLogo">
                    <img src="icon-cozy-dragon.png" alt="cozy-dragon-icon"/>
                </div>

                <img className="profileImage" src="banner-image.png" alt="profile-image"/>
            </div>
        </Container>
    </Wrapper>
}