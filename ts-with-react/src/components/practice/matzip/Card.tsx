import MatzipForm from "../../../utils/commonlnterface";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 240px;
  height: 300px;
  background-color: whitesmoke;
  margin: 1rem;
  box-shadow: 0px 0px 10px rgba(17, 17, 17, 0.4);
  text-align: center;
  border-radius: 10px;
  @media screen and (max-width: 840px) {
    width: 200px;
    height: 280px;
  }

  @media screen and (max-width: 720px) {
    width: 180px;
    height: 225px;
  }
`;
interface ImgProps {
  src: string;
}
const ImgDiv = styled.div<ImgProps>`
  width: 80%;
  height: 150px;
  border: 1px solid #777;
  margin: 1rem auto;
  background-image: url(${(props: ImgProps) => `${props.src}`});
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 840px) {
    height: 140px;
  }

  @media screen and (max-width: 720px) {
    height: 100px;
  }
`;
const DescP = styled.p`
  font-size: 14px;
  margin-top: 0.5rem;
  overflow: hidden;
  /* text 자르기 & 말줄임표 처리 */
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;
export default function Card({ imgSrc, title, desc }: MatzipForm) {
  return (
    <CardContainer>
      <ImgDiv src={imgSrc}></ImgDiv>
      <h3 style={{ textAlign: "center", margin: "0" }}>{title}</h3>
      <DescP>{desc}</DescP>
    </CardContainer>
  );
}
