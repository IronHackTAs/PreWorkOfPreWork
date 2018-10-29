import React, {
  Component
} from 'react'

export default class ProgressBar extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    var elem = document.getElementsByClassName('box');
    var body = document.body,
      html = document.documentElement;
    var doc = Math.max(body.scrollHeight, body.offsetHeight,
      html.clientHeight, html.scrollHeight, html.offsetHeight)
    console.log(doc)
    window.onscroll = function () {
      elem[0].style.width = `${(window.scrollY / this.props.scrollHeight)*80}%`;
      console.log(this.props.scrollHeight, window.scrollY)
    }.bind(this);
  }

  render() {
    return ( 
      <div class = "box" ></div>
    )
  }
}