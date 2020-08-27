import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import fanOff from './images/fanOff.jpg';
import fanOn from './images/fanOn.jpg';
import bulbOff from './images/bulbOff.jpg';
import bulbOn from './images/bulbOn.jpg';

class Switches extends React.PureComponent{
    constructor(props){
        super(props)

        this.state = {'fan':0,'bulb':0,'fanOld' : 0,'bulbOld':0};
        this.handleSwitchFan = this.handleSwitchFan.bind(this);
        this.handleSwitchBulb = this.handleSwitchBulb.bind(this);
        
        
        
    }
     
    componentDidMount(){
        var host = window.location.origin;
        console.log(host);
            axios.get(host + '/data').then((response)=>{
             
            console.log(response.data);
            //console.log(response.data.fan); 
            //console.log(response.data.bulb);
            //console.log(response.data.tv); 
            this.setState({
                'fan' : response.data.fan,
                'bulb' : response.data.bulb,
                
                'fanOld' : response.data.fan,
                'bulbOld' : response.data.bulb,
               
                
            });
     
        }).catch(error=>{
            console.log(error);
        }).finally(res=>{
            //console.log("!!!State Set");
            
            
        })
    }
    componentDidUpdate(){
        //send request only if any of the switch state changes
        if((this.state.fan != this.state.fanOld) || 
        (this.state.bulb != this.state.bulbOld) )
        {
                //console.log('One Device as been updated');
                const content ={    
                    'fan' : this.state.fan ,
                    'bulb' : this.state.bulb
                    
                };
        
                var host = window.location.origin;
                console.log(host);
                
                axios.post(host + '/api/status/update',content).then(response=>{
                    console.log(response.data);
                })
                .catch(error=>{
                    console.log(error);
                })
                    //update Old with New value
                this.setState({
                    'fanOld' : this.state.fan,
                    'bulbOld' : this.state.bulb
                    
                })
        }

           //listeneing
           window.Echo.channel('softworkiot')
           .listen('.status-updated',(e)=>{
               window.location.reload();
           });
    }
   
    handleSwitchFan(){  
        this.setState({
            'fan' : !this.state.fan 
        });
    }
    handleSwitchBulb(){
        this.setState({
            'bulb' : !this.state.bulb      
        });
        
    }

  

    render(){
        return(
            
            <div>
                <h3 className="alert-success">Iot Switches</h3>
                <Fan Status={this.state.fan} onClick={this.handleSwitchFan}/>
                Fan Status: <button onClick={this.handleSwitchFan}>{this.state.fan?'ON':'OFF'}</button><br/>
                <Bulb Status={this.state.bulb} onClick={this.handleSwitchBulb}/>
                BulbStatus: <button onClick={this.handleSwitchBulb}>{this.state.bulb?'ON':'OFF'}</button><br/>
                
                
            </div>

        )
    }
}


function Bulb(props){
    var style ={
        height : '100px',
        width : '100px', 
    }
    return(
        <img src={props.Status ? bulbOn : bulbOff} 
        onClick={props.onClick} alt="Bulb" style={style}/>
    )
}
function Fan(props){
    var style ={
        height : '100px',
        width : '100px'
    }
    return(
        <img src={props.Status ? fanOn : fanOff}
        onClick={props.onClick} alt="Fan" style={style}/>
    )
}



    export default Switches;
    if (document.getElementById('switches')) {
    ReactDOM.render(<Switches/>,document.getElementById('switches'));
    }
