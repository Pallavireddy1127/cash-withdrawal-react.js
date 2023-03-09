// Write your code here

import './index.css'

import {Component} from 'react'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  btn = bal => {
    this.setState(prevState => ({
      balance: prevState.balance - bal,
    }))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const surname = name.slice(0, 1)
    return (
      <div className="bg-container">
        <div className="cash-withdrawal-container">
          <div className="user-info-container">
            <div className="surname-container">
              <p className="description">{surname}</p>
            </div>
            <p className="details">{name}</p>
          </div>
          <div className="initial-balance-container">
            <p className="your-balance">Your Balance</p>
            <p className="balance">
              {balance}
              <br />
              <span className="style">In Rupees</span>
            </p>
          </div>

          <p className="withdrawal">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-list">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                amount={eachDenomination}
                btn={this.btn}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
