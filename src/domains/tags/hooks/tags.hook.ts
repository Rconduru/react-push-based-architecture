import { useEffect, useState } from 'react'
import { ITag, ITagState } from '../state/tag.model'
import tagStore from 'domains/tags/state/tag.store'
import { getTags, postNewTag, putTag } from '../service/tag.service'

export enum ActionEnum {
  None,
  Editing,
  Inserting,
}

/**
 * Hook for Tag store management
 *
 * @export
 * @return {*}  {[
 *   ITagState,
 *   string,
 *   Function,
 *   Function,
 *   { state: ActionEnum; setState: Function }
 * ]}
 */
export function useTagsFacade(): [
  ITagState,
  ITag,
  Function,
  Function,
  { state: ActionEnum; setState: Function }
] {
  const [tagState, setTagState] = useState<ITagState>(tagStore.initialState)
  const [tagEditor, setTagEditor] = useState<ITag>({
    text: '',
    active: true,
  })
  const [actionState, setActionState] = useState<ActionEnum>(ActionEnum.None)

  const addTag = () => {
    if (actionState === ActionEnum.Inserting) {
      const newTag: ITag = { text: tagEditor.text, active: true }
      postNewTag(newTag)
      setTagEditor({ text: '', active: true })
      setActionState(ActionEnum.None)
    } else {
      putTag(tagEditor)
      setTagEditor({ text: '', active: true })
      setActionState(ActionEnum.None)
    }
  }

  useEffect(() => {
    tagStore.init()
    const tagSubscription = tagStore.subscribe((store) => setTagState(store))
    getTags()

    return () => tagSubscription.unsubscribe()
  }, [])

  return [
    tagState,
    tagEditor,
    setTagEditor,
    addTag,
    { state: actionState, setState: setActionState },
  ]
}
