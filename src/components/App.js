import React from 'react';
import {TimelineMax, TweenLite, TweenMax} from "gsap/TweenMax";
import {Elastic, Back, Power1, Power2, Bounce} from "gsap/all";
import $ from 'jquery';
import './styles.css';

var number = 0;
var lower = 0;
var upper = 0;
var special = 0;
var total = 0;

class App extends React.Component{
  state = {password: null, number: false, upper: false, lower: false, special: false}

  componentDidMount(){


    $('.input-box').keyup(function(event) {
      const eye = $('.eye');
      const inputBox = $('.input-box');
      const inputW = parseInt(inputBox.width());

      const measureBox = $('.measure-box');
      measureBox.text(inputBox.val());
      const offset = inputBox.offset();

      const remainder = parseInt(measureBox.width()) % parseInt(inputBox.width());
      const lineCount = Math.floor(parseInt(measureBox.width()) / parseInt(inputBox.width()));

      const pos = event.target.selectionStart + offset.left + (lineCount > 0 ? inputW : remainder);
      const rad = Math.atan2(pos, offset.top * -1);
      const angle = (rad * (180 / Math.PI)) + 180;

      eye.css({
          '-webkit-transform': 'rotate(' + angle + 'deg)',
          '-moz-transform': 'rotate(' + angle + 'deg)',
          '-ms-transform': 'rotate(' + angle + 'deg)',
         'transform': 'rotate(' + angle + 'deg)'
      });
    });
  }

  onInputChange = event => {
    this.setState({password: event.target.value});
    if(this.state.password){
      var array = this.state.password.split("");
      var upperCase = false;
      var lowerCase = false;

      array.forEach(function(e) {
        if(e == e.toUpperCase()){
          upperCase = true;
          return;
        }
      });
      array.forEach(function(e) {
        if(e == e.toLowerCase()){
          lowerCase = true;
          return;
        }
      });

      if(/\d/.test(this.state.password)){
        if(!this.state.number){
          this.setState({number: true})
        }
      }
      if(upperCase){
        if(!this.state.upper){
          this.setState({upper: true})
        }
      }
      if(lowerCase){
        if(!this.state.lower){
          this.setState({lower: true})
        }
      }
      if(!(!/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(this.state.password))){
        if(!this.state.special){
          this.setState({special: true})
        }
      }
    }



    if(this.state.number && number == 0){
      var tl = new TimelineMax();
      tl.add( TweenMax.to('#number', .2, { opacity: 1 , ease:Power1.easeInOut}) );
      tl.add(TweenMax.to('#numberWrapper', 1.5, {y:225, ease:Bounce.easeOut, delay:0 }));
      number ++;
    }
    if(this.state.lower && lower === 0){
      console.log(lower)
      var tl = new TimelineMax();
      tl.add( TweenMax.to('#lower', .2, { opacity: 1 , ease:Power1.easeInOut}) );
      tl.add(TweenMax.to('#lowerWrapper', 1.5, {y:175, ease:Bounce.easeOut, delay:0 }));
      lower++;
      console.log(lower)
    }
    if(this.state.upper && upper == 0){
      var tl = new TimelineMax();
      tl.add( TweenMax.to('#upper', .2, { opacity: 1 , ease:Power1.easeInOut}) );
      tl.add(TweenMax.to('#upperWrapper', 1.5, {y:175, ease:Bounce.easeOut, delay:0 }));
      upper++;
    }
    if(this.state.special && special == 0){
      var tl = new TimelineMax();
      tl.add( TweenMax.to('#special', .2, { opacity: 1 , ease:Power1.easeInOut}) );
      tl.add(TweenMax.to('#specialWrapper', 1.5, {y:225, ease:Bounce.easeOut, delay:0 }));
      special++;
    }

    if(this.state.special && this.state.lower && this.state.upper && this.state.number && total == 0){
      setTimeout(function(){
        var tl = new TimelineMax();
        tl.add( TweenMax.to('#wrapper', 1, { opacity: 0 , ease:Power1.easeInOut}) );
        tl.add(TweenMax.to('#bigWrapper', 1, { opacity: 1 , ease:Power1.easeInOut}) , '-=1');
      }, 2000);
      total++;
    }

  };

  onClick(){
    var tl = new TimelineMax();
    tl.add( TweenMax.to(['#dragon, #password'], 1, { x: -500 , ease:Power1.easeOut}) );
    tl.add(TweenMax.to('#button', 2, { x: 1000 , ease:Power1.easeOut}) , '-=1');
    tl.add( TweenMax.to('#Welcome', 1, { opacity: 1 , ease:Power1.easeInOut}), '.1' );
  }

  render(){
    return(
    <div className="body">
      <svg height="512pt" viewBox="0 0 511 512" width="512pt" xmlns="http://www.w3.org/2000/svg">
        <g id="dragon"><g transform="scale(.5,.5)"><path d="m390.722656 235.269531h-268.445312c0 82.542969-39.574219 276.730469-39.574219 276.730469h347.59375s-39.574219-194.1875-39.574219-276.730469zm0 0" fill="#e83826"/><path d="m327.800781 235.269531h-142.601562c0 82.542969-21.023438 276.730469-21.023438 276.730469h184.648438s-21.023438-194.1875-21.023438-276.730469zm0 0" fill="#ff9a5c"/><path d="m185.199219 235.269531c0 82.542969-21.023438 276.730469-21.023438 276.730469h41.207031s21.023438-194.1875 21.023438-276.730469zm0 0" fill="#ff8c42"/><path d="m154.550781 0c-6.554687 0-11.683593 5.640625-11.066406 12.160156l8.75 92.402344h50.789063l-38.125-97.496094c-1.664063-4.261718-5.773438-7.066406-10.347657-7.066406zm0 0" fill="#495560"/><path d="m358.449219 0c6.554687 0 11.683593 5.640625 11.066406 12.160156l-8.75 92.402344h-50.789063l38.125-97.496094c1.664063-4.261718 5.773438-7.066406 10.347657-7.066406zm0 0" fill="#495560"/><path d="m354.582031 112.503906 133.671875-109.15625c2.648438-2.164062 5.964844-3.347656 9.386719-3.347656 10.75 0 17.933594 11.070312 13.554687 20.890625l-30.425781 68.210937c-1.515625 3.390626-1.703125 7.230469-.519531 10.753907l29.761719 88.945312c4.066406 12.152344-8.140625 23.398438-19.917969 18.355469l-8.054688-3.453125c-6.578124-2.816406-14.230468-.539063-18.195312 5.414063l-42.226562 63.367187-70.921876-141.84375c-3.105468-6.210937-1.488281-13.746094 3.886719-18.136719zm0 0" fill="#f54432"/><path d="m158.417969 112.503906-133.667969-109.15625c-2.652344-2.164062-5.96875-3.347656-9.390625-3.347656-10.75 0-17.933594 11.070312-13.554687 20.890625l30.425781 68.210937c1.515625 3.390626 1.699219 7.230469.519531 10.753907l-29.761719 88.945312c-4.066406 12.152344 8.140625 23.398438 19.917969 18.355469l8.054688-3.453125c6.578124-2.816406 14.230468-.539063 18.195312 5.414063l42.226562 63.367187 70.921876-141.84375c3.105468-6.210937 1.492187-13.746094-3.886719-18.136719zm0 0" fill="#f54432"/><path d="m435.109375 235.269531c0 98.640625-79.964844 137.402344-178.609375 137.402344s-178.609375-38.757813-178.609375-137.402344 79.964844-219.816406 178.609375-219.816406 178.609375 121.171875 178.609375 219.816406zm0 0" fill="#fb695b"/><path d="m119.097656 235.269531c0-91.671875 69.070313-202.785156 158.007813-218.03125-6.761719-1.160156-13.636719-1.785156-20.605469-1.785156-98.644531 0-178.609375 121.171875-178.609375 219.816406s79.964844 137.402344 178.609375 137.402344c6.96875 0 13.84375-.203125 20.605469-.597656-88.9375-5.1875-158.007813-45.132813-158.007813-136.804688zm0 0" fill="#f85647"/><path d="m301.554688 277.410156c0-22.5-20.171876-40.738281-45.054688-40.738281s-45.054688 18.238281-45.054688 40.738281c0 22.503906 20.171876 40.742188 45.054688 40.742188s45.054688-18.238282 45.054688-40.742188zm0 0" fill="#495560"/><path d="m301.554688 331.203125c10.851562 0 25.273437-65.65625 25.273437-65.65625s-19.636719-12.140625-25.273437-12.140625c-5.636719 0-25.273438 12.140625-25.273438 12.140625s14.421875 65.65625 25.273438 65.65625zm0 0" fill="#f4f4f4"/><path d="m211.445312 331.203125c10.851563 0 25.273438-65.65625 25.273438-65.65625s-19.636719-12.140625-25.273438-12.140625c-5.636718 0-25.273437 12.140625-25.273437 12.140625s14.421875 65.65625 25.273437 65.65625zm0 0" fill="#f4f4f4"/><path d="m256.5 180.101562c-59.230469 0-134.71875 37.589844-107.242188 85.390626 27.472657 47.800781 69.917969 9.078124 107.242188 9.078124s79.769531 38.722657 107.246094-9.078124c27.472656-47.800782-48.015625-85.390626-107.246094-85.390626zm0 0" fill="#f85647"/><path d="m190.464844 265.492188c-24.363282-42.378907 32.214844-76.730469 86.640625-83.976563-6.960938-.925781-13.886719-1.414063-20.605469-1.414063-59.230469 0-134.71875 37.589844-107.242188 85.390626 16.285157 28.332031 37.828126 26.265624 60.445313 19.886718-6.953125-3.554687-13.433594-9.78125-19.238281-19.886718zm0 0" fill="#f54432"/><g fill="#333941"><path d="m322.109375 178.695312c-4.140625 0-7.5-3.355468-7.5-7.5v-11.699218c0-4.140625 3.359375-7.5 7.5-7.5 4.144531 0 7.5 3.359375 7.5 7.5v11.699218c0 4.144532-3.355469 7.5-7.5 7.5zm0 0"/><path d="m190.890625 178.695312c-4.144531 0-7.5-3.355468-7.5-7.5v-11.699218c0-4.140625 3.355469-7.5 7.5-7.5 4.140625 0 7.5 3.359375 7.5 7.5v11.699218c0 4.144532-3.359375 7.5-7.5 7.5zm0 0"/></g></g>

        <foreignObject width="200px" height="200px" x="75" y="50">
          <div class="eye"></div>
        </foreignObject>
        <foreignObject width="200px" height="200px" x="145" y="50">
          <div class="eye"></div>
        </foreignObject></g>

        <g id="password"><foreignObject width="200px" height="15px" x="170" y="255">
          <div className="pass">Password</div>
        </foreignObject>
        <foreignObject width="200px" height="10px" x="30" y="265">
          <hr />
        </foreignObject>
        <foreignObject width="200px" height="10px" x="30" y="290">
          <hr />
        </foreignObject>
        <foreignObject width="200px" height="200px" y="174" x="40">
          <div class="text-wrapper">
            <input class="input-box" type="text" onChange={this.onInputChange}/>
            <div class="measure-box"></div>
          </div>
        </foreignObject></g>

        <g id="wrapper"><g id="numberWrapper"><foreignObject width="50px" height="50px" x="275" y="0" >
          <div className="brick" id="number"><div >#</div></div>
        </foreignObject></g>
        <g id="specialWrapper"><foreignObject width="50px" height="50px" x="324" y="0">
          <div id="special" className="brick"><div>!</div></div>
        </foreignObject></g>
        <g id="lowerWrapper"><foreignObject width="50px" height="50px" x="275" y="0" >
          <div className="brick" id="lower">a</div>
        </foreignObject></g>
        <g id="upperWrapper"><foreignObject width="50px" height="50px" x="324" y="0">
          <div className="brick" id="upper"><div>A</div></div>
        </foreignObject></g></g>

        <g onClick={this.onClick} id="button"><foreignObject width="100px" height="100px" x="275" y="175">
          <div id="bigWrapper" className="brickBig"><div className="passText">You may pass!</div></div>
        </foreignObject></g>

        <g ><foreignObject width="200px" height="100px" x="135" y="150">
          <div className="brickBig" style={{backgroundColor: "inherit"}} id="Welcome">Welcome!</div>
        </foreignObject></g>

      </svg>

    </div>
    );
  }

}

export default App
