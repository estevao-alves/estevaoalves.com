import styled from "styled-components"
import BackgroundGridSvg from "@/app/assets/background-grid.svg";
import Banner from "./Banner";

import ProjectItem from "../components/ProjectItem";
import InstallySvg from "../assets/project/instally.svg"
import StoreSvg from "../assets/project/3d-store.svg"

import SocialMedia from "../components/SocialMedia";
import InstagramSvg from "../assets/social/instagram.svg"
import LinkedInSvg from "../assets/social/linkedin.svg"
import YoutubeSvg from "../assets/social/youtube.svg"
import GitHubSvg from "../assets/social/github.svg"
import ArtstationSvg from "../assets/social/artstation.svg"
import {Container} from "../styles/layout";

import {useTypewriter, Cursor} from 'react-simple-typewriter';

const Wrapper = styled.section`
    background: linear-gradient(to top, #171435, #30016f);
    display: flex;
    flex-direction: column;
    height: 100vh;

    .section {
        overflow: hidden;
        width: 100%;
        display: flex;
        flex-grow: 1;
        position: relative;

        .content {
            margin: 0 auto;
            z-index: 10;

            h1 {
                text-align: center;
                margin-top: 140px;
                margin-bottom: 60px;
                font-weight: 300;
                font-size: 40px;
                color: white;

                span {
                    color: var(--purple);
                }
            }

            .project {
                display: flex;
                margin-bottom: 50px;
                max-width: 1000px;
            }

            .social {
                position: fixed;
                left: 50%;
                transform: translate(-50%, 0%);
                bottom: 0;
            }
        }

        .backgroundGrid {
            position: absolute;
            width: 100vw;
        }
    }

    @media (max-width: 2000px) {
        .section {
            overflow: hidden;

            .backgroundGrid {
                width: 2000px;
                left: 50%;
                transform: translate(-50%, 0%);
            }
        }
    }

    @media (max-width: 991px) {
        .section {
            .content {
                h1 {
                    font-size: 36px;
                }
            }
        }
    }

    @media (max-width: 768px) {
        height: auto;

        .section {
            .content {
                .project {
                    margin-bottom: 80px;
                }
            }
        }
    }

    @media (max-width: 576px) {
        .section {
            .content {
                h1 {
                    font-size: 30px;
                    margin-top: 110px;
                    margin-bottom: 40px;
                }
            }
        }
    }

    @media (max-width: 480px) {
        .section {
            .content {
                h1 {
                    margin-top: 90px;
                    margin-bottom: 40px;
                    font-size: 24px;
                }

                .project {
                    width: 100%;
                }
            }
        }
    }
`

export default function Section1() {
    const [text] = useTypewriter({
        words: ['Web Designing', '3D Animation', '3D Modeling', 'Motion Graphics', 'Illustration', 'Open Source'],
        loop: true,
    });

    const socialApps = [
        {Icon: <InstagramSvg />, Name: 'Instagram', Url: 'https://www.instagram.com/my.cozydragon' },
        {Icon: <LinkedInSvg />, Name: 'LinkedIn', Url: 'https://www.linkedin.com/in/estevao-alves'},
        {Icon: <YoutubeSvg />, Name: 'Youtube', Url: 'https://www.youtube.com/@MyCozyDragon'},
        {Icon: <GitHubSvg />, Name: 'GitHub', Url: 'https://github.com/estevao-alves'},
        /*{Icon: <ArtstationSvg/>, Name: 'Artstation', Url: 'https://www.artstation.com/estevaoalves'}*/
    ];

    const projects = [
        {
            Icon: <InstallySvg/>,
            Title: 'Instally',
            Description: 'App that allows you to install multiple apps with <strong>One Click<strong/>',
            Url: 'https://instally.app/'
        },
        {
            Icon: <StoreSvg/>,
            Title: '3D Shop',
            Description: 'Discover over 100+ unique 3D designs on T-shirts, mugs, stickers and <strong>more<strong/>',
            Url: 'https://www.cozydragon.shop/'
        }
    ];

    return <Wrapper>
        <Banner/>
        <div className="section">
            <div className="content">
                <h1>I Am Into <span>{text}</span><Cursor/></h1>

                <Container>
                    {/*<ImageSlider project={projects}  />*/}

                    <div className="project">
                        <ProjectItem projectsList={projects}/>
                    </div>

                    {/*
            <div className="project">
              <ProjectItem projectsList={projects} />
            </div>
          */}
                </Container>

                <div className="social">
                    <SocialMedia socialAppsList={socialApps}/>
                </div>
            </div>

            <div className="backgroundGrid">
                <BackgroundGridSvg/>
            </div>
        </div>
    </Wrapper>
}