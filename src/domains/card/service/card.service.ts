import { get } from 'integrationServices/api'
// import { CardType } from '../state/card.model'
import InternalServerErrorException from 'integrationServices/exceptions/InternalServerErrorException'
import NotFoundException from 'integrationServices/exceptions/NotFoundException'
import cardStore from '../state/card.store'

/**
 * GET HTTP Request for Card (get active card from client)
 */
async function getCard() {
  try {
    cardStore.setLoading(true)
    const response = await get('/card')
    cardStore.setCard(response.data)
  } catch (error) {
    cardStore.setLoading(false)
    treatException(error)
  }
}

/**
 * POST HTTP Request for Card (Insert one card)
 * @param {CardType} newCard - card that will be insert
 */
// async function postNewCard(newCard: CardType) {
//   try {
//     cardStore.setLoading(true)
//     const response = await post('/card', newCard)
//     if (response.data) {
//       cardStore.setCard(response.data)
//     }
//   } catch (error) {
//     treatException(error)
//   }
// }

/**
 * Generic treatment exception for HTTP Requests
 * @param  {Error} error - Incoming error
 */
function treatException(error: Error) {
  switch (error.constructor) {
    case InternalServerErrorException:
      // TODO
      // Deve-se avaliar com o UX/UI como os erros serão exibidos ao usuário
      console.error(error.message)
      break
    case NotFoundException:
      // TODO
      // Deve-se avaliar com o UX/UI como os erros serão exibidos ao usuário
      console.error(error.message)
      break
    default:
      console.error(error)
    // console.error('Erro não identificado no serviço de cards')
  }
}

export { getCard }
