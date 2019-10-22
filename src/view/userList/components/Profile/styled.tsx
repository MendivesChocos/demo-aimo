import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 270px;
    background: #FFFFFF;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    padding: 30px 0 17px;
    text-align: center;
    position: relative;
    margin: 10px;
`;

export const Line = styled.div`
    position: absolute;
    width: 270px;
    height: 0px;
    border: .5px solid #C6C6C6;
    top: 90px;
    z-index: 1;
`;

export const Avatar = styled.img`
    border-radius: 50%;
    width: 128px;
    height: 128px;
    position: relative;
    z-index: 2;
`

export const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    color: #000000;
    font-weight: normal;
    height: 29px;
    margin: 0;
`;

export const Subtitle = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: normal;
    color: #4B4B4B;
    height: 17px;
    margin: 0;
`;

export const FotterButton = styled.div`
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
`;

export const ButtonIcon = styled.a`
    font-size: 18px;
    border: none;
    cursor: pointer;
`;

export const Follow = styled.span`
    position: absolute;
    height: 18px;
    right: 10px;
    top: 11px;
    border: none;
    background: #2874A6;
    border-radius: 3px;
    color: white;
    padding: 2px;
`;