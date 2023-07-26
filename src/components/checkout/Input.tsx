
interface Props {
  label: string,
  defaultVal: string,
  callback: (val: string) => void
}

const Input = ({label, defaultVal, callback}:Props) => {
  function handleSelect(event: React.ChangeEvent<HTMLInputElement>): void {
    callback(event.target.value);
  }

  return (
    <div className="flex flex-col gap-0.5 w-full">
      <label htmlFor="user_input" className="text-gray-600 font-medium text-xs uppercase font-poppins">{label}</label>
      <input name = "user_input" type="text" placeholder={defaultVal} onChange={handleSelect} autoComplete='off' required className="px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
    </div>
  )
}

export default Input
