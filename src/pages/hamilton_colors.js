import React from "react"
import Link from 'gatsby-link'
 import { TweenLite, TimelineLite, SteppedEase } from 'gsap';
 import ScrollMagic from './ScrollMagic';

class Hamilton_colors extends React.Component {

  componentDidMount() {
    var controller = new ScrollMagic.Controller();

    var item = '.transition';
    var tl = new TimelineLite();
    tl.add(TweenLite.to('.container', .8, { backgroundColor: 'black' }));
    tl.add(TweenLite.to('.container', .8, { backgroundColor: '#cc0000' }));
    tl.add(TweenLite.to('.para-text', 0.5, { opacity: 1, x: 20 }));
    tl.add(TweenLite.to('.heading', 0.5, { opacity: 1, x: 20 }));
    tl.add(TweenLite.to('.para-text-2', 0.5, { backgroundColor: '#cc0000' }));
    tl.add(TweenLite.to('.para-text-3', 0.5, { backgroundColor: '#blue' }));

    var scene1 = new ScrollMagic.Scene({ triggerElement: item })
      .setTween(tl)
      .addTo(controller);
  }

  render() {
    return (
      <div className="container">
        <div className="transition">(Sai image)</div>
        <div className="heading">
          <p className="para-text">
            Lorem morbi nec iaculis leo, quis lobortis neque. Ut hendrerit,
            risus in dapibus euismod, nibh leo volutpat elit, vel pharetra odio
            dolor sed tellus. Aliquam erat volutpat. Nulla facilisi. Donec
            dictum nibh a magna dignissim maximus. Suspendisse massa sem,
            blandit at ullamcorper vel, faucibus sed nunc. Etiam interdum sem
            sit amet posuere varius. Aliquam convallis lacus ac risus suscipit
            sodales. In libero ante, euismod eu sollicitudin in, porttitor nec
            mi.
          </p>
          <p className="para-text-2">
            Lorem morbi nec iaculis leo, quis lobortis neque. Ut hendrerit,
            risus in dapibus euismod, nibh leo volutpat elit, vel pharetra odio
            dolor sed tellus. Aliquam erat volutpat. Nulla facilisi. Donec
            dictum nibh a magna dignissim maximus. Suspendisse massa sem,
            blandit at ullamcorper vel, faucibus sed nunc. Etiam interdum sem
            sit amet posuere varius. Aliquam convallis lacus ac risus suscipit
            sodales. In libero ante, euismod eu sollicitudin in, porttitor nec
            mi.
          </p>
          <p className="para-text-3">
            Lorem morbi nec iaculis leo, quis lobortis neque. Ut hendrerit,
            risus in dapibus euismod, nibh leo volutpat elit, vel pharetra odio
            dolor sed tellus. Aliquam erat volutpat. Nulla facilisi. Donec
            dictum nibh a magna dignissim maximus. Suspendisse massa sem,
            blandit at ullamcorper vel, faucibus sed nunc. Etiam interdum sem
            sit amet posuere varius. Aliquam convallis lacus ac risus suscipit
            sodales. In libero ante, euismod eu sollicitudin in, porttitor nec
            mi.
          </p>
        </div>
      </div>
    );
  }
}

export default Hamilton_colors
