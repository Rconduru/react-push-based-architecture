import styled from 'styled-components'

export const TagContent = styled.div`
  margin: 16px 0px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
`

export const Tag = styled.div`
  border: 2px solid #467ca3;
  background-color: white;
  padding: 8px 16px;
  text-align: left;
  border-radius: 5px;
  &:hover {
    background-color: #498dbe;
    color: white;
  }
`

export const Button = styled.button`
  background-color: ${(props: { colorType?: string }) =>
    props.colorType === 'primary' ? '#ec7000' : '#498dbe'};
  border: 1px solid
    ${(props) => (props.colorType === 'primary' ? '#e26600' : '#467ca3')};
  width: 100%;
  color: white;
  margin: 8px 0px;
  padding: 10px 16px;

  &:hover {
    cursor: pointer;
    background-color: ${(props: { colorType?: string }) =>
      props.colorType === 'primary' ? '#e26600' : '#467ca3'};
  }
`
