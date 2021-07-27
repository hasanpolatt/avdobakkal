import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import React from 'react';

export default class App extends React.Component {
  submit = () => {
    confirmAlert({
      message: 'avdo: kart makinesi çalışmıyor',
      dialog: ["kart geçiyor mu diye sor", "kart nasıl geçmiyor diye sor", "geçer geçer"],
      buttons: [
        {
          label: 'geçer geçer',
          onClick: () => alert('avdo: dur bakayım, aa geçiyormuş')
        },
        {
          label: 'tamam al nakit',
          onClick: () => alert('avdo: eyvallah')
        }
      ]
    });
  };

  render() {
    return (
      <div className='container'>
        <button 
        dialog={["Kart geçiyor mu diye sor", "Kart nasıl geçmiyor diye sor", "Geçer geçer"]}
        className="sure-button" onClick={this.submit}>Kart geçiyor mu diye sor</button>
      </div>
    );
  }
}
