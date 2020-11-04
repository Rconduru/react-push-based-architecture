import { renderHook, act } from '@testing-library/react-hooks'
import { ActionEnum, useTagsFacade } from './tags.hook'
import { setupServer } from 'msw/node'
import { rest } from 'msw'

describe('HOOKs - useTagsFacade', () => {
  const server = setupServer(
    rest.post('http://teste.com/empreendedorismo/v1/tags', (req, res, ctx) => {
      return res(
        ctx.status(201),
        ctx.json({ id: 2, name: 'teste', active: true })
      )
    }),

    rest.get(
      'http://teste.com/empreendedorismo/v1/tags',
      async (req, res, ctx) => {
        ctx.status(200)
        return res(ctx.json([]))
      }
    )
  )

  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())
  test('should init tags', () => {
    const { result } = renderHook(() => useTagsFacade())
    const [{ tags }] = result.current

    expect(tags.length).toBe(0)
  })

  test('should set a new states', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useTagsFacade())

    await act(async () => {
      result.current[2]({ text: 'teste', active: true })
      result.current[4].setState(ActionEnum.Inserting)
      await waitForNextUpdate()
    })

    expect(result.current[4].state).toBe(2)
    expect(result.current[1].text).toBe('teste')
  })
  test('should add new tag', async () => {
    const { result, waitForNextUpdate, waitFor } = renderHook(() =>
      useTagsFacade()
    )

    await act(async () => {
      result.current[2]({ text: 'teste', active: true })
      result.current[4].setState(ActionEnum.Inserting)
      await waitForNextUpdate()
    })

    await act(async () => {
      await result.current[3]()
      await waitFor(() => result.current[0].tags.length > 0)
    })

    expect(result.current[0].tags.length).toBe(1)
  })
})
