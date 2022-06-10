import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'
import Runner from './runner'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        <Runner bpm={170}/>
        <main>{children}</main>
      </div>
      {/* <Footer /> */}
    </>
  )
}
