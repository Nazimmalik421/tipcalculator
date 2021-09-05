import { useState } from 'react';
import logo from './assets/logo.svg'
import './App.css';

const tip5 = 5;
const tip10 = 10;
const tip15 = 15;
const tip25 = 25;
const tip50 = 50;

const App = () => {
  const [billAmount, setBillAmount] = useState('')
  const [tipValue, setTipValue] = useState('')
  const [totalTip, setTotalTip] = useState(0)
  const [customTip, setCustomTip] = useState('')
  const [numbOfPeople, setNumbOfPeople] = useState('')
  const [isPerson, setIsPerson] = useState(false)
  const [totalpp, setTotalpp] = useState(0)

  // const billAmountSubmitHandler = (e) => {
  //   e.preventDefault()

  // }

  const billChangeHandler = (e) => {
    setBillAmount(e.target.value)
    console.log(e.target.value)
  }

  const tipValueHandler = (e) => {
    console.log('I WAS CLICKED')
    setTipValue(e.target.value)

    showTotalTip()
  }

  const customTipHandler = (e) => {
    console.log(e.target.value)
    setCustomTip(e.target.value)
    setTotalTip(billAmount * (customTip / 100))
  }

  const peopleNumHandler = (e) => {
    setNumbOfPeople(e.target.value)
    if (!e.target.value === 0 && !e.target.value === '')
      setIsPerson(true)
  }

  const showTotalTip = () => {

    if (billAmount && tipValue && numbOfPeople) {
      setIsPerson(true);
      setTotalTip(billAmount * (tipValue / 100) / numbOfPeople);

      const totalBillPP = (billAmount / numbOfPeople);
      const totalBillPPIncTip = totalBillPP * (tipValue / 100);

      setTotalpp(totalBillPP + totalBillPPIncTip);
    } else {
      return setIsPerson(false)
    }
  }

  const valuesResetHandler = () => {
    setBillAmount('')
    setTipValue('')
    setTotalTip(0)
    setCustomTip('')
    setNumbOfPeople('')
    setIsPerson(false)
    setTotalpp(0)
  }

  return (
    <div className="container">
      <img className='logo' src={logo} alt="logo" />

      <div className='app__container'>

        <div className='ui__container'>

          <div className='bill__container'>
            {/* <form onSubmit={billAmountSubmitHandler} > */}
            <label htmlFor="bill">Bill</label>
            <input onChange={billChangeHandler} value={billAmount} placeholder='$' className='input__bill bill__amount' required id='bill' type="number" />
            {/* </form> */}
          </div>

          <div className='people__container'>
            <div className='people-heading__container'>
              <p className='people__number'>Number of people</p>
              {!isPerson && <p className='zero__msg warning'>Can't be zero</p>}
            </div>
            <input onChange={peopleNumHandler} value={numbOfPeople} placeholder='0' type="number" className='input__bill' required />
          </div>

          <div className="tip__Container">
            <p>Select Tip %</p>

            <div className='tip__btn-upper'>
              <button onClick={tipValueHandler} value={tip5} className='tip__btn btn'>5%</button>
              <button onClick={tipValueHandler} value={tip10} className='tip__btn btn'>10%</button>
              <button onClick={tipValueHandler} value={tip15} className='tip__btn btn'>15%</button>
            </div>

            <div className='tip__btn-lower'>
              <button onClick={tipValueHandler} value={tip25} className='tip__btn btn'>25%</button>
              <button onClick={tipValueHandler} value={tip50} className='tip__btn btn'>50%</button>
              {/* <form onSubmit={billAmountSubmitHandler} > */}
              <input onChange={customTipHandler} value={customTip} placeholder='Custom' className='tip__manual' type="number" step='any' />
              {/* </form> */}

            </div>

          </div>
        </div>

        <div className='total__container'>
          <div className='fixer'>

            <div className='tip-amount-person--container'>
              <p className='tip'>Tip Amount</p>
              <p className='tip__person'>/ person</p>
            </div>

            <div className="tip__amount">
              <h1 className='tip-amount__total'>{`$ ${totalTip.toFixed(2)}`}</h1>
            </div>

          </div>

          <div className='fixer'>
            <div className='tip-amount-person--container'>
              <p className='tip'>Total</p>
              <p className='tip__person'>/ person</p>
            </div>

            <div className="tip__amount">
              <h1 className='tip-amount__total'>{`$${totalpp.toFixed(2)}`}</h1>
            </div>
          </div>

          <button onClick={valuesResetHandler} className='btn__reset btn'>RESET</button>

        </div>

      </div>

    </div>
  );
}

export default App;
