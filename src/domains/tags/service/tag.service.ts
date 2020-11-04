import { get, post, put } from 'integrationServices/api'
import { ITag } from '../state/tag.model'
import InternalServerErrorException from 'integrationServices/exceptions/InternalServerErrorException'
import NotFoundException from 'integrationServices/exceptions/NotFoundException'
import tagStore from '../state/tag.store'

/**
 * GET HTTP Request for Tags (get all tags)
 */
async function getTags() {
  try {
    tagStore.setLoading(true)
    const response = await get('/tags')
    tagStore.setTags(response.data)
  } catch (error) {
    treatException(error)
  }
}

/**
 * POST HTTP Request for Tags (Insert one tag)
 * @param  {ITag} newTag - tag that will be insert
 */
async function postNewTag(newTag: ITag) {
  try {
    tagStore.setLoading(true)
    const response = await post('/tags', newTag)
    if (response.data) {
      tagStore.addTag(response.data)
    }
  } catch (error) {
    treatException(error)
  }
}

/**
 * PUT HTTP Request for Tags (Update one tag)
 * @param  {ITag} newTag - tag that will be insert
 */
async function putTag(newTag: ITag) {
  try {
    tagStore.setLoading(true)
    const response = await put(`/tags/${newTag.id}`, newTag)
    if (response.data) {
      tagStore.setTag(response.data)
    }
  } catch (error) {
    treatException(error)
  }
}

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
    // console.error('Erro não identificado no serviço de tags')
  }
}

export { getTags, postNewTag, putTag }
