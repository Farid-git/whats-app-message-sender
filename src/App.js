import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [phoneNumber, setPhoneNumber] = useState("3");
  const [isCorrect, setIsCorrect] = useState(false);

  return (
    <div className="App">
      <div class="wrapper-main">
        <p>
          Отправка сообщения по WhatsApp
        </p>

        <input type="tel" onChange={(e) => {
          let phoneNumber = e.target.value
          e.target.value = phoneNumber.replace(/[^[^0-9++]/g, '')
          setPhoneNumber(e.currentTarget.value)
        }}></input>

        <button style={{
          backgroundColor: phoneNumber.length >= 11 ? '#33b249' : '',
          borderColor: phoneNumber.length >= 11 ? '#5dbea3' : '',
          color: phoneNumber.length >= 11 ? 'white' : '',
        }}
          onClick={
            (e) => {
              if (phoneNumber.length >= 11) {
                window.open('https://web.whatsapp.com/send/?phone=' + phoneNumber, '_blank')
              }
            }}> {phoneNumber.length >= 11 ? "Отправить" : "Номер введен неверно"} </button>

        <p class="error-message">
          {phoneNumber.length == 11 & (phoneNumber[0] != "8") ? "НЕПРАВИЛЬНЫЙ НОМЕР" : ""
          // & phoneNumber.substring(0,2) != "+7")
          }
        </p>

      </div>
    </div>
  );
}

//{phone_number == '22' ? <p>Hello World</p> : <p>Fail</p>}

export default App;
