import React from 'react'
import styled from 'styled-components'
import sharebutton from '../../img/share.svg'

const Share = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: fixed;
    left: 16px;
    bottom: 16px;
    border: solid 1px lightgray;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
`

const BtnImg = styled.img`
    width: 28px;
    height: 28px;
`

function ShareButton() {
  return (
    <Share>
        <BtnImg src={sharebutton} />
    </Share>
  )
}

export default ShareButton