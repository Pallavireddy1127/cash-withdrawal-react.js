// Write your code here
import './index.css'

const DenominationItem = props => {
  const {amount, btn} = props
  const {value} = amount
  const getAmount = () => {
    btn(value)
  }
  return (
    <li className="amount-container">
      <button className="button" type="button" onClick={getAmount}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
