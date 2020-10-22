import { render, waitFor } from '../test-utils'
import '@testing-library/jest-dom/extend-expect'
import preloadAll from 'jest-next-dynamic'

import HomePage from '@/pages/index'

describe('Home Page', () => {
  it('should render Most Popular', async () => {
    await preloadAll()
    const { getByText } = render(<HomePage />)

    const lazyContent = await waitFor(() => getByText(/MOST POPULAR/))
    expect(lazyContent).toBeInTheDocument()
  })

  it('should render RECENT NEWS', async () => {
    await preloadAll()
    const { getByText } = render(<HomePage />)

    const lazyContent = await waitFor(() => getByText(/RECENT NEWS/))
    expect(lazyContent).toBeInTheDocument()
  })

  it('should render TOP GAMES', async () => {
    await preloadAll()
    const { getByText } = render(<HomePage />)

    const lazyContent = await waitFor(() => getByText(/TOP GAMES/))
    expect(lazyContent).toBeInTheDocument()
  })

  it('should render TRAVEL', async () => {
    await preloadAll()
    const { getByText } = render(<HomePage />)

    const lazyContent = await waitFor(() => getByText(/TRAVEL/))
    expect(lazyContent).toBeInTheDocument()
  })

  it('should render RETIREMENT', async () => {
    await preloadAll()
    const { getByText } = render(<HomePage />)

    const lazyContent = await waitFor(() => getByText(/RETIREMENT/))
    expect(lazyContent).toBeInTheDocument()
  })

  it('should render RECIPES', async () => {
    await preloadAll()
    const { getByText } = render(<HomePage />)

    const lazyContent = await waitFor(() => getByText(/RECIPES/))
    expect(lazyContent).toBeInTheDocument()
  })

  it('should render HEALTH', async () => {
    await preloadAll()
    const { getByText } = render(<HomePage />)

    const lazyContent = await waitFor(() => getByText(/HEALTH/))
    expect(lazyContent).toBeInTheDocument()
  })

  it('should render AGE PENSION', async () => {
    await preloadAll()
    const { getByText } = render(<HomePage />)

    const lazyContent = await waitFor(() => getByText(/PENSION/))
    expect(lazyContent).toBeInTheDocument()
  })

  it('should render LIFE', async () => {
    await preloadAll()
    const { getByText } = render(<HomePage />)

    const lazyContent = await waitFor(() => getByText(/LIFE/))
    expect(lazyContent).toBeInTheDocument()
  })
})
