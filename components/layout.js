import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'
import Runner from './runner'
import { useEffect, useState } from 'react'
import CadenceControls from './cadence-controls'

export default function Layout({ preview, children }) {
  const [manCadence, setManCadence] = useState(170);

  const updateCadence = (value) => {
    setManCadence(value);
  }

  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        <Runner bpm={manCadence}/>
        <CadenceControls cadence={manCadence} updateCadence={updateCadence}/>
        {/* <main>{children}</main> */}
      </div>
      {/* <Footer /> */}
    </>
  )
}
