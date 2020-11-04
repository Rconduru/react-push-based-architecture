import { BehaviorSubject } from 'rxjs'
import { map } from 'rxjs/operators'
import { ITag, ITagState } from './tag.model'

const initialState: ITagState = {
  tags: [],
  isLoading: false,
}

const subject = new BehaviorSubject<ITagState>(initialState)

let state = initialState

const tagStore = {
  init: () => subject.next(state),
  subscribe: (setState: (value: ITagState) => void) =>
    subject.subscribe(setState, console.error),
  addTag: (newTag: ITag) => {
    state = {
      ...state,
      tags: [...state.tags, newTag],
    }
    console.log(state.tags)

    subject.next(state)
  },
  setTag: (newTag: ITag) => {
    const newTags = state.tags.map((element) => {
      if (newTag.id === element.id) {
        return newTag
      }

      return element
    })
    state = {
      ...state,
      tags: newTags,
    }
    subject.next(state)
  },
  setTags: (tagList: ITag[]) => {
    state = {
      tags: tagList,
      isLoading: false,
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

export default tagStore
