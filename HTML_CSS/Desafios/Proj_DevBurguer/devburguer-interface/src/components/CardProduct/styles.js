import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  cursor: grab;
  box-shadow: rgba(0,0,0,0.35) 0px 5px 15px;
  position: relative;
  

  div {
    width: 100%;
    height: 80px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    

    p {
        font-size: 17px;
        color: #ff8c05;
        line-height: 20px;
        font-weight: 600;
        margin-top: 30px;
        margin-bottom: 0px;
        /* white-space: nowrap; */
        
    }

    strong {
        font-size: 22px;
        color: #363636;
        font-weight: 800;
        line-height: 20px;
        margin-top: 5px;
        
    }
  }

`;


export const CardImage = styled.img`
    height: 100px;
    position: absolute;
    top: -50px;
    transform: rotate(-5.31deg);

    


`