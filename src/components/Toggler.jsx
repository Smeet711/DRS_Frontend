import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle'
import React,{useState} from 'react'
import clsx from 'clsx';
import '../index.css'

const Toggler = () => {
    const [mode, setMode] = useState('dark');
  return (
    <>
     <div
      className={clsx('NavLinks', {
        dark: mode === 'dark'
      })}
    ></div>
        <DarkModeToggle

mode={mode}
      dark="Dark"
      size="sm"
      inactiveTrackColor="#e2e8f0"
      inactiveTrackColorOnHover="#f8fafc"
      inactiveTrackColorOnActive="#cbd5e1"
      activeTrackColor="#334155"
      activeTrackColorOnHover="#1e293b"
      activeTrackColorOnActive="#0f172a"
      inactiveThumbColor="#1e293b"
      activeThumbColor="#e2e8f0"
      onChange={(mode) => {
        setMode(mode);
      }}


        />
    </>
  )
}

export default Toggler