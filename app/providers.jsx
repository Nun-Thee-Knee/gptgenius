'use client'
import { Toaster } from "react-hot-toast";

const providers = ({children}) => {
  return (
    <>
    <Toaster position='top-center'/>
    {children}
    </>
  )
}

export default providers