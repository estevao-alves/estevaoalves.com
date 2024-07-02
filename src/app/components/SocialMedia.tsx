import Link from "next/link";
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  margin: 10px 0;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(transparent 2%, black);
    opacity: .5;
  }
  

  .item {
    z-index: 2;

    .link {
      padding: 6px 8px;
      display: flex;
    } 
    
    &:not(:last-child) {
      margin-right: 35px;
    }
    
    svg {
      --size: 30px;
      height: var(--size);
    }
    
    span {
      margin: auto;
      margin-left: 14px;
      font-weight: 300;
    }

    transition: 200ms ease-in-out;
    
    &:hover {
      outline: gray solid 2px;
      border-radius: 10px;
    }
  }

  @media (max-width: 768px) {
    .item {
      span {
        display: none;
        font-size: 14px;
      }
    }
  }

  @media (max-width: 576px) {
    .item {
      span {
        display: hidden;
      }
    }
  }

  @media (max-width: 576px) {
    .item {
      svg {
        --size: 24px;
      }
    }
  }
`;

export type SocialApp = {
  Icon: React.ReactNode,
  Name: string,
  Url: string
}

interface ComponentTypes {
  socialAppsList: SocialApp[],
}

export default function SocialMedia({ socialAppsList }: ComponentTypes) {
  return <Wrapper>
    {socialAppsList.map((item, i: number) => {
      return <div key={i} className="item">
        <Link href={item.Url} target="_blank" className="link">
          {item.Icon}
          <span>{item.Name}</span>
        </Link>
      </div>
    })}
  </Wrapper>
}