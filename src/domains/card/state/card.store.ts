import { BehaviorSubject } from 'rxjs'
// import { map } from 'rxjs/operators'
import { getCard } from '../service/card.service'
import { CardType, CardStateInterface } from './card.model'

const initialState: CardStateInterface = {
  card: null,
  isLoading: false,
  initiated: false,
}

const subject = new BehaviorSubject<CardStateInterface>(initialState)

let state = initialState

const cardStore = {
  reload: () => getCard(),
  subscribe: (setState: (value: CardStateInterface) => void) => {
    if (!state.initiated) {
      state = {
        ...state,
        initiated: true,
      }
      getCard()
      subject.next(state)
    }
    return subject.subscribe(setState, console.error)
  },
  setCard: (newCard: CardType) => {
    state = {
      ...state,
      card: newCard,
    }
    subject.next(state)
  },
  setLoading: (loadingState: boolean) => {
    state = {
      ...state,
      isLoading: loadingState,
    }

    subject.next(state)
  },
  initialState,
}

export default cardStore
