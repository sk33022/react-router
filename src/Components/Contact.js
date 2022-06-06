import React from 'react';
// import reactRouterDom from 'react-router-dom';
import { Link } from 'react-router-dom';
// import { Modal } from './Modal';
import { connect } from 'react-redux';

 const Contact = ({ cards}) => {
  //  console.log(props.cards)
  return <div>

    {
      cards.map(card => {
        return(
          <div className='ui raised very padded text container segment' style={{marginTop: '80px'}}
          key={card.id}
          >
            <Link to={`/${card.title}`} className='ui header'>{card.title}</Link>
            <p>{card.body}</p>
          </div>
        )
      })
    }
    {/* <Modal />  //we have used portal from index.html for viewing model 
            <div 
  className='ui raised very padded text container segment'
  style={{marginTop: '80px'}}
  >
      <Link to='/card/suneel' className='ui header'>Suneel</Link>
      <p>hi this is Contact page cooll auto ~~  Programmatic Redirects from navbar in 3 sec</p>
  </div>

  <div 
  className='ui raised very padded text container segment'
  style={{marginTop: '80px'}}
  >
      <Link to='/card/stha' className='ui header'>Stha</Link>
      <p>hi this is Contact page cooll auto ~~  Programmatic Redirects from navbar in 3 sec</p>


  </div> */}
  </div>;
}

const mapStateToProps = (state) =>{
  return{
    cards: state.cards
  }

}
export default connect(mapStateToProps)(Contact);
