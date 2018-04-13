import React from 'react'

import Wrapper from './Wrapper'

function CardWhite (props) {
  return (
    <Wrapper className={props.classChild}>
      {props.children}
    </Wrapper>
  )
}

export default CardWhite
