import React from 'react'
import { useTagsFacade, ActionEnum } from 'domains/tags/hooks/tags.hook'
import Input from 'components/InputText'
import * as s from './styles'

export default function App() {
  const [
    { tags, isLoading },
    tagEditor,
    setTagEditor,
    addTag,
    actionState,
  ] = useTagsFacade()

  return (
    <>
      <div className="panel">
        <h2>Tags</h2>
        <hr></hr>
        <s.TagContent>
          {tags?.map((tag) => (
            <s.Tag
              key={tag.id}
              onClick={() => {
                actionState.setState(ActionEnum.Editing)
                setTagEditor(tag)
              }}
            >
              {tag.text}
            </s.Tag>
          ))}
        </s.TagContent>
        <s.Button
          name="tagButton"
          type="button"
          colorType="primary"
          onClick={() => actionState.setState(ActionEnum.Inserting)}
        >
          <strong>ADICIONAR TAG</strong>
        </s.Button>
      </div>
      {actionState.state !== ActionEnum.None && (
        <div className="panel">
          <Input
            width="100%"
            label="Nova Tag"
            value={tagEditor.text}
            onChange={(event) =>
              setTagEditor((prevState: object) => {
                return { ...prevState, text: event.target.value }
              })
            }
          ></Input>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{ width: '50%' }}>
              <s.Button name="tagButton" type="button" onClick={() => addTag()}>
                <strong>CONFIRMAR</strong>
              </s.Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
