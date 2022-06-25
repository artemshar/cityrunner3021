import Alert from '../components/alert'
import Footer from '../components/footer'
import Header from '../components/header'
import Meta from '../components/meta'
import Runner from './runner'
import { useEffect, useState } from 'react'
import CadenceControls from './cadence-controls'

export default function Layout({ preview, children }) {
  const [manCadence, setManCadence] = useState(165);

  const updateCadence = (value) => {
    setManCadence(value);
  }

  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        <Header/>
        <Runner bpm={manCadence}/>
        <CadenceControls cadence={manCadence} updateCadence={updateCadence}/>
        <br/>
        <br/>
        {/* <main>{children}</main> */}
      </div>
      {/* <Footer /> */}
    </>
  )
}
