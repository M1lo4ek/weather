import React from 'react';


class Form extends React.Component {
    render(){
        return(
            <form onSubmit={this.props.toWeather}>
              <input className="inp" type="text" name="city" placeholder="Enter your city"/>
              <br/> 
              <br/>
              <button className="button">Get weather</button>  <br/> <br/>
            </form>
        )
    }

}

export default Form;