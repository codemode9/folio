import React from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./About.css";

const About = props => (
<div className="container">
    <div className="card" style={{width: '18rem'}}>
        <img className="card-img-top" src=".../100px180/" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">About</h5>
          <p className="card-text">Bacon ipsum dolor amet cow turducken ground round sausage boudin meatball salami pork loin frankfurter tri-tip ball tip. Beef ribs prosciutto buffalo, sirloin cupim ribeye ground round burgdoggen. Corned beef short loin strip steak tri-tip, tail rump ham hock cupim kielbasa sausage tongue fatback capicola. Bacon pancetta alcatra, flank andouille filet mignon turkey salami jerky kevin capicola cow rump leberkas. Shankle ball tip hamburger spare ribs burgdoggen jowl rump ribeye frankfurter t-bone prosciutto meatloaf. Leberkas burgdoggen t-bone strip steak tri-tip meatloaf. Rump ribeye filet mignon meatball.

Meatloaf pork chop strip steak andouille pork loin buffalo frankfurter. Swine brisket picanha ham rump short loin capicola salami. Pancetta beef jowl shoulder alcatra sausage corned beef salami. Meatloaf sausage andouille meatball venison beef t-bone kielbasa. Flank brisket pork chop strip steak pancetta pork loin jowl fatback ribeye tenderloin bresaola salami leberkas. Bresaola turkey frankfurter t-bone turducken.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
</div>
);

export default About;