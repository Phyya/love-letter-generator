import styled from 'styled-components';

export const PatnershipWrapper = styled.div`
  margin-top: 100px;
  padding: 0px 20px;
`;

export const HeroSection = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: '0px 30px';
  margin: 0px auto;
  max-width: 1400px;
  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 900px;
    width: 100%;
  }
  .hero__header {
    font-size: 23px;
    text-align: center;
    font-style: normal;
    font-weight: 600;
    color: #04172a;
    margin-bottom: 20px;
  }
  .hero__description {
    text-align: center;
  }
  .button__container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const WhyJoinSection = styled.section`
  margin: 50px auto;
  max-width: 1400px;
  @media (min-width: 1028px) {
    padding: 0px 100px;
  }
  padding: 0px 20px;
  .why__join__header {
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 50px;
    @media (min-width: 786px) {
      text-align: left;
    }
  }
  .grid {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(1fr);
    column-gap: 30px;
    row-gap: 40px;
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1028px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  .why__join {
    text-align: center;
  }
  .how__to__join {
    text-align: left;
  }
  .why__join__card {
    @media (min-width: 786px) {
      max-width: 250px;
      text-align: left;
    }
  }
  .article__header {
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 15px;
    line-height: 25px;
  }
  .article__description {
    font-size: 16px;
  }
  .divider {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 53px;
    span {
      height: 1px;
      width: 100%;
      display: flex;
      align-items: center;
      background: #455a64;
    }
    @media (min-width: 786px) {
      span {
        width: 90%;
      }
    }
  }
  .how__to__join__grid {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(1fr);
    gap: 30px;
    text-align: center;
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1028px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
