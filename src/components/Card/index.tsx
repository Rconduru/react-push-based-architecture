import React from 'react'
import { useCardFacade } from 'domains/card/hooks/card.hook'

export default function Card() {
  const [{ card }] = useCardFacade()

  return (
    <>
      <div className="panel">
        <h2>Tags</h2>
        <hr></hr>
        {card?.number}
        {card?.emitter}
        {card?.validator}
        {card?.way}
      </div>
    </>
  )
}
