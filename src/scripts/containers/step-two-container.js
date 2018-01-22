import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TextInput from '../components/text-input';
import DropDown from '../components/dropdown';

 class StepTwoContainer extends Component {
   constructor(props) {
     super(props)
     this.state = {
       addressData: []
     }
   }

   componentWillReceiveProps(nextProps, prevState) {
    this.setState((prevState) => Object.assign({}, prevState, { addressData: nextProps.data }));
   }

   getFullElement() {
    const element =  this.state.addressData.map(data => {
      const newElement = data.split(',');
      return {
        firstLine: newElement[0],
        secondLine: newElement[1],
        town: newElement[4],
        county: newElement[6]
      }

    })
    return element;
   }


   render() {
       const sectionProps = this.state.addressData  && this.state.addressData.length ? this.getFullElement() : null ;
       console.log(this.state.addressData.active)
       return (
       <div>
        <form>
          <TextInput data={sectionProps} />
        </form>
        </div>


     )
   }
 }

export default StepTwoContainer;
