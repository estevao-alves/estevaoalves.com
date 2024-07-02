import styled from "styled-components";
import { useEffect, useState } from "react"

import ArrowLeftSvg from "/public/arrow-left.svg";
import ArrowRightSvg from "/public/arrow-right.svg";

import ProjectItem from "@/app/components/ProjectItem";

const Wrapper = styled.div`
  section {
    --border-radius: 8px;
    overflow: hidden;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, black, transparent 10%, transparent 90%, black);
      border-radius: var(--border-radius);
      opacity: 0.1;
    }
    
    .images {
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      display: flex;
      overflow: hidden;
      
      .image {
        object-fit: cover;
        width: 100%;
        height: 100%;
        display: block;
        flex-shrink: 0;
        flex-grow: 0;
        transition: translate 300ms ease-in-out
      }
    }
    

    .slider-button {
      all: unset;
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      padding: 1.5rem;
      margin: auto 0;
      width: 20px;
      cursor: pointer;
      border-radius: var(--border-radius);
      z-index: 1;
      
      transition: background-color 100ms ease-in-out;
      
      svg {
        stroke-width: 10px;
        stroke: black;
      }

      &:hover, &:focus-visible {
        background-color: rgba(0, 0, 0, 0.2);
      }
      
      &:focus-visible {
        outline: black solid 2px;
      }
    }

    .slider-navigation {
      display: flex;
      position: absolute;
      bottom: 1.8rem;
      left: 50%;
      column-gap: 1rem;
      transform: translateX(-50%);
      z-index: 1;
      
      button {
        width: 1rem;
        height: 1rem;

        background-color: var(--white);
        border-radius: 50%;
        opacity: 0.6;
        box-shadow: 0 0 5px rgba(0, 0, 0, .5);

        transition: opacity ease 250ms;
        transition: scale ease-in-out 100ms;

        &:hover, &:focus-visible {
          scale: 1.1;
          opacity: 1;
        }
      }

      & .active {
        scale: 1.2;
        opacity: 1;
      }
    }
  }



  @media (max-width: 768px) {
    section {
      .slider-button {
        width: 10px;
        padding: 0.5rem 1rem;

        &:hover, &:focus-visible {
          background-color: transparent;
        }
      }

      .slider-navigation {
        button {
          width: 0.7rem;
          height: 0.7rem;
          margin-bottom: -6px;
        }
      }
    }
  }
`;

type ProjectSliderProps = {
  Icon: React.ReactNode
  Title: string
  Description: string
  Url: string
}

interface ComponentTypes {
  project: ProjectSliderProps[],
}

export function ImageSlider({ project }: ComponentTypes) {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [userClick, setUserClick] = useState<boolean>(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (!userClick) {
      intervalId = setInterval(() => {
        showNextImage();
      }, 10000);
    }

    return () => clearInterval(intervalId);
  }, [imageIndex, userClick]);
  
  function showNextImage() {
    setImageIndex(index => {
      if (index === project.length - 1) return 0
      return index + 1
    })
  }

  function showPreviousImage() {
    setImageIndex(index => {
      if (index === 0) return project.length - 1
      return index - 1
    })
  }

  const removeFocus = () => {
    const element = document.getElementById("nextImageButton");
    if (element) {
      element.blur();
    }
  };

  return <Wrapper>
    <section>
      <div className="images">
        {project.map(item => (
          <div className="image" style={{ translate: `${-100 * imageIndex}%`}}>
            <ProjectItem
              projectsList={project}
            />
          </div>
        ))}
      </div>

      <button
        className="slider-button"
        style={{ left: "0" }}
        onClick={(e) => {
          showPreviousImage();
          setUserClick(true);
        }}
        >
        <ArrowLeftSvg />
      </button>

      <button
        className="slider-button"
        id="nextImageButton"
        style={{ right: "0" }}
        onClick={(e) => {
          showNextImage();
          setUserClick(true);
          removeFocus();
        }}
        >
        <ArrowRightSvg />
      </button>

      <div className="slider-navigation">
        {project.map((_, index) => (
          <button
            key={index}
            className={`${index === imageIndex ? "active" : ""}`}
            onClick={(e) => {
              setImageIndex(index);
              setUserClick(true);
            }}
            >
          </button>
        ))}
      </div>
    </section>
  </Wrapper>
}