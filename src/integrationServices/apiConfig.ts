import { AxiosError, AxiosResponse } from 'axios'
import BadRequestException from './exceptions/BadRequestException'
import InternalServerErrorException from './exceptions/InternalServerErrorException'
import NotFoundException from './exceptions/NotFoundException'
import UnauthorizedException from './exceptions/UnauthorizedException'

const baseURL = `${process.env.REACT_APP_BASE_URL || 'http://teste.com'}/api/v1`

const errorMessages: { [key: number]: string } = {
  400: 'Algo deu errado. Tente novamente mais tarde.',
  401: 'Não autorizado a acessar este recurso.',
  404: 'Recurso não encontrado.',
  500: 'Erro de comunicação interna. Tente novamente mais tarde.',
  0: 'Erro genérico, exception não tratada.',
}

const responseInterceptor = (response: AxiosResponse) => response

/**
 * Intereptor to catch error caming from axios requests
 *
 * @param {AxiosError} error
 */
const responseErrorInterceptor = (error: AxiosError) => {
  const HTTPStatusCode = error.response ? error.response?.status : 0
  // TODO 1
  // Quando voltar alguma regra de negócio do back pelo Status code 400
  // será necessário tratá-la
  // const errorData = error.response?.data
  const msg = JSON.stringify({ msg: errorMessages[HTTPStatusCode] })

  switch (true) {
    case HTTPStatusCode === 400:
      //TODO 2
      // Como dito acima, deverá ser alinhado com o backend
      // as mensagem que serão lançadas quando houver regrade negócio
      // Caso não haja, retirar esse comentário horrível daqui
      throw new BadRequestException(msg)
    case HTTPStatusCode === 401:
      throw new UnauthorizedException(msg)
    case HTTPStatusCode === 404:
      throw new NotFoundException(msg)
    case HTTPStatusCode >= 500:
      throw new InternalServerErrorException(msg)
    default:
      console.error(error)
      throw new Error(
        JSON.stringify({
          msg: `HTTP status code: ${HTTPStatusCode} - ${errorMessages[0]}`,
        })
      )
  }

  //return Promise.reject(error.response)
}

// TODO
// Quando houver a definição do JWT, coloca-lo aqui
//const requestInterceptor = request => {
//  request.headers.Authorization = `Bearer ${TOKEN}`
//  return request
//}

export { baseURL, responseInterceptor, responseErrorInterceptor }
