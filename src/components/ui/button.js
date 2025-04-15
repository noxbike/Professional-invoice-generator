export default function Button({text, tailwind, onClick}) {
  return (
    <div>
        <button className={tailwind} onClick={onClick}>
            {text}
        </button>
    </div>
  )
}
