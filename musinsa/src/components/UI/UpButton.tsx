import React from 'react'
import styled from 'styled-components'
import topIcon from '../../img/topIcon.svg'

const Up = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: fixed;
    right: 16px;
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

const Top = styled.img`
    width: 36px;
    height: 36px;
`

function UpButton() {
    const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Up onClick={handleScrollTop}>
        <Top src={topIcon} />
    </Up>
  )
}

export default UpButton

