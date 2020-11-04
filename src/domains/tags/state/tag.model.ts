export type ITag = {
  id?: number
  text: string
  active: boolean
}

export interface ITagState {
  tags: ITag[]
  isLoading: boolean
}
