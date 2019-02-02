import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import StepOne from './stepOne';
import StepTwo from './stepTwo';
import StepThree from './stepThree';
import './Wizard.css';

class Wizard extends Component {
    render () {
        return (
           <div>
               <Route path='/wizard/step1' component={StepOne}/>
               <Route path='/wizard/step2' component={StepTwo}/>
               <Route path='/wizard/step3' component={StepThree}/>
            </div>
        )
    }
}

export default Wizard;

