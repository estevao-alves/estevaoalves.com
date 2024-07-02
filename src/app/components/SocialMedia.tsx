import Link from "next/link";
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  
  .item {
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
`;

export type SocialApp = {
  Image: React.ReactNode,
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
          {item.Image}
          <span>{item.Name}</span>
        </Link>
      </div>
    })}
  </Wrapper>
}