import React ,{Component} from 'react'

const  WithLoading = (Comp) => {
  return class WithLoading extends Component {
render () {
  return this.props.filteredMovie === null ? <span>spinner</span>: <Comp {...this.props} />
  // movie return is not array .length doesn't work ! the return value is always <Comp {...this.props} />
         }
    }
  }
    export default  WithLoading