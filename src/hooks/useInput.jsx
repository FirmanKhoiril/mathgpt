import { useState, ChangeEvent } from 'react'
// import { useToast } from '@/components/ui/use-toast'


const useInputChange = () => {
  const [inputValues, setInputValues] = useState({})
//   const { toast } = useToast()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }

  const handleCustomChange = (e) => {
    setInputValues((prev) => ({
      ...prev,
      ...e,
    }))
  }

  const resetInputValues = () => {
    setInputValues({})
  }

  const preventPaste = (e) => {
    e.preventDefault()
    // toast({
    //   variant: 'orangeLight',
    //   title: 'Oops! 🙅‍♂️ Pasting not allowed here!',
    //   description:
    //     'Content not allowed for pasting. Please enter it manually or paste elsewhere.',
    // })
  }

  return {
    inputValues,
    handleInputChange,
    handleCustomChange,
    resetInputValues,
    preventPaste,
  }
}

export default useInputChange
