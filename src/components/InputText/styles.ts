import styled from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: ${(props: { width: string }) => `${props.width}`};
  background-color: white;

  input {
    border: none;
    border-bottom: 2px solid #126fb0;
    height: 40px;
    padding: 0px 8px;
    position: relative;
    width: 100%;
    z-index: 1;
  }

  label {
    text-align: left;
    font-size: 13px;
    margin: 8px 8px 0px;
    color: #126fb0;
  }
`
