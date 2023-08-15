import { useState } from 'react'
import { Input } from './styles'
import useDebounce from '../../hook/useDebounce'

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
  placeholder: string
}

function SearchInput({ value, onChange, placeholder }: SearchInputProps) {
  const [displayValue, setDisplayValue] = useState(value)
  const debouncedChange = useDebounce(onChange, 500)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDisplayValue(event.target.value)
    debouncedChange(event.target.value)
  }
  return (
    <Input
      type="text"
      placeholder={placeholder}
      onChange={handleChange}
      value={displayValue}
    />
  )
}

export default SearchInput
