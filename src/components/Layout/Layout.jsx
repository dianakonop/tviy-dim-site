import Header from '../Header/Header'
import ScrollButton from '../ScrollButton/ScrollButton'

function Layout({ children }) {
  return (
    <div className="site-shell">
      <Header />

      <main className="site-main">
        {children}
      </main>

      <ScrollButton />
    </div>
  )
}

export default Layout