import React, { useState } from 'react'
import I5 from "../images/I5.png";
import I10 from "../images/I10.png";
import I20 from "../images/I20.jpg";
import I50 from "../images/I50.jpg";
import I100 from "../images/I100.jpg";
import I200 from "../images/I200.jpg";
import I500 from "../images/I500.jpg";
import I1000 from "../images/I1000.jpg";
import I2000 from "../images/I2000.jpg";
import Navbar from './Navbar';
function Home() {
    const [five, setfive] = useState(0);
    const [ten, setten] = useState(0);
    const [fifty, setfifty] = useState(0);
    const [fifteen, setfifteen] = useState(0);
    const [OneHandred, setOndeHandred] = useState(0);
    const [twoHandred, setTwoHandred] = useState(0);
    const [fiveHundred, setFiveHundred] = useState(0);
    const [oneThosend, setOneThousend] = useState(0);
    const [twoThousend, setTwoThousend] = useState(0);
    const [oldAmount, setOldAmount] = useState(0);
    const [deductions, setdeductions] = useState(0);

    function change5(eve) {
        setfive(eve.value);
    }

    function change10(eve) {
        setten(eve.value);
    }

    function change20(eve) {
        setfifty(eve.value);
    }

    function change50(eve) {
        setfifteen(eve.value);
    }

    function change100(eve) {
        setOndeHandred(eve.value);
    }

    function change200(eve) {
        setTwoHandred(eve.value);
    }

    function change500(eve) {
        setFiveHundred(eve.value);
    }

    function change1000(eve) {
        setOneThousend(eve.value);
    }

    function change2000(eve) {
        setTwoThousend(eve.value);
    }

    function changeDeductions(eve) {
        setdeductions(eve.value);
    }

    function changeOldAmount(eve) {
        setOldAmount(eve.value);
    }
  return (
    <div>
        <Navbar />
        <div className='accounting-container'>
            <form className='coins-form'>
                <div className='coins-container'>
                    <div className='coin coin-1'>
                        <img className='coin-img' src={I5}/>
                        <input type='number' value={five} onChange={(eve)=> change5(eve.target)} placeholder='5 DA'/>
                    </div>
                    <div className='coin coin-2'>
                        <img className='coin-img' src={I10}/>
                        <input type='number' value={ten} onChange={(eve)=> change10(eve.target)} placeholder='10 DA'/>
                    </div>
                    <div  className='coin coin-3'>
                        <img className='coin-img' src={I20}/>
                        <input type='number' value={fifty} onChange={(eve)=> change20(eve.target)} placeholder='20 DA'/>
                    </div>
                    <div className='coin coin-4'>
                        <img className='coin-img' src={I50}/>
                        <input type='number' value={fifteen} onChange={(eve)=> change50(eve.target)} placeholder='50 DA'/>
                    </div>
                    <div className='coin coin-5'>
                        <img className='coin-img' src={I100}/>
                        <input type='number' value={OneHandred} onChange={(eve)=> change100(eve.target)} placeholder='100 DA'/>
                    </div>
                    <div className='coin coin-6'>
                        <img className='coin-img' src={I200}/>
                        <input type='number' value={twoHandred} onChange={(eve)=> change200(eve.target)} placeholder='200 DA'/>
                    </div>
                    <div className='coin coin-7'>
                        <img className='coin-img' src={I500}/>
                        <input type='number' value={fiveHundred} onChange={(eve)=> change500(eve.target)} placeholder='500 DA'/>
                    </div>
                    <div className='coin coin-8'>
                        <img className='coin-img' src={I1000}/>
                        <input type='number' value={oneThosend} onChange={(eve)=> change1000(eve.target)} placeholder='1000 DA'/>
                    </div>
                    <div className='coin coin-9'>
                        <img className='coin-img' src={I2000}/>
                        <input type='number' value={twoThousend} onChange={(eve)=> change2000(eve.target)} placeholder='2000 DA'/>
                    </div>
                </div>
                
               
            </form>
            <h2>{(five * 5) + (ten * 10) + (fifty * 20) + (fifteen * 50) + (OneHandred * 100) + (twoHandred * 200) + (fiveHundred * 500) + (oneThosend * 1000) + (twoThousend * 2000)} DA</h2>
            <form>
                <label>Old Amount: </label>
                <input type='number' value={oldAmount} onChange={(eve)=> changeOldAmount(eve.target)} placeholder='Old Amount'/>  
                <label>Deducations: </label>
                <input type='number' value={deductions} onChange={(eve)=> changeDeductions(eve.target)} placeholder='Deducations'/>  
            </form>
            <h2>After deductions: {((five * 5) + (ten * 10) + (fifty * 20) + (fifteen * 50) + (OneHandred * 100) + (twoHandred * 200) + (fiveHundred * 500) + (oneThosend * 1000) + (twoThousend * 2000)) - oldAmount - deductions}</h2>
            <h2>Nacer: {(((five * 5) + (ten * 10) + (fifty * 20) + (fifteen * 50) + (OneHandred * 100) + (twoHandred * 200) + (fiveHundred * 500) + (oneThosend * 1000) + (twoThousend * 2000)) - oldAmount - deductions) / 3} DA</h2>
        </div>
    </div>
  )
}

export default Home;