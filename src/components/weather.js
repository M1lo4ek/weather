import React from 'react';


class Weather extends React.Component {
    render(){
        return(
            <div className="weth">
           <div className="stroka"> Country: {this.props.country}</div>
           <div className="stroka"> City: {this.props.city}  </div>
           <div className="stroka"> Temperature: {this.props.temp}° </div>
           <div className="stroka"> Humidity:{this.props.humidity} </div>
           <div className="stroka"> Wind:{this.props.wind} </div>
            </div>
        )
    }

}


export default Weather;