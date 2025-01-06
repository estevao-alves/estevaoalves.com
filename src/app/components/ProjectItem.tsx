import Link from "next/link";
import styled from "styled-components"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  gap: 80px;
  
  .item {
    outline: var(--purple-light) solid 1px;
    border-radius: 10px;
    text-align: center;
    
    h2 {
      font-size: 30px;
      font-weight: 500;
      margin: 10px 0;
    }
    
    p {
      color: var(--purple-light);
    }
    
    .link {
      padding: 20px 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    svg {
      --size: 60px;
      width: var(--size);
    }

    transition: 200ms ease-in-out;
    
    &:hover {
      border-radius: 20px;
      transform: scale(1.04);
      background-color: #FFFFFF05;
      box-shadow: inset 0 0 60px rgba(255, 255, 255, .08);
      outline-color: var(--purple);
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
    
    .item {
      h2 {
        font-size: 26px;
      }

      p {
        font-size: 14px;
      }
    }
  }
`;

export type ProjectItem = {
    Icon: React.ReactNode,
    Title: string,
    Description: string,
    Url: string
}

interface ComponentTypes {
    projectsList: ProjectItem[],
}

export default function ProjectItem({projectsList}: ComponentTypes) {
    return <Wrapper>
        {projectsList.map((item, i: number) => {
            return <div key={i} className="item">
                <Link href={item.Url} target="_blank" className="link">
                    {item.Icon}
                    <h2>{item.Title}</h2>
                    <p dangerouslySetInnerHTML={{__html: item.Description}}/>
                </Link>
            </div>
        })}
    </Wrapper>
}