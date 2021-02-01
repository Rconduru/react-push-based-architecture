import { useEffect, useState } from 'react'
import { CardStateInterface } from '../state/card.model'
import cardStore from 'domains/card/state/card.store'

/**
 * Hook for Tag store management
 *
 * @export
 * @return {*}  {[
 *   CardStateInterface,
 * ]}
 */
export function useCardFacade(): [CardStateInterface] {
  const [cardState, setCardState] = useState<CardStateInterface>(
    cardStore.initialState
  )

  useEffect(() => {
    const cardSubscription = cardStore.subscribe((store) => setCardState(store))

    return () => cardSubscription.unsubscribe()
  }, [])

  return [cardState]
}
