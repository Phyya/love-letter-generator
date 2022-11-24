import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';
import PropTypes from 'prop-types';
import '../../styles/ShareButton.css';

export default function ShareButton(props) {
  return (
    <span>
      {props.name === 'facebook' && (
        <FacebookShareButton
          className="socials-sharebutton"
          url={'https://loveme.hng.tech'}
          quote={props.text}
        >
          <FacebookIcon size={props.size} round={true} />
        </FacebookShareButton>
      )}
      {props.name === 'twitter' && (
        <TwitterShareButton
          className="socials-sharebutton"
          url={'https://loveme.hng.tech'}
          quote={props.text}
        >
          <TwitterIcon size={props.size} round={true} />
        </TwitterShareButton>
      )}
      {props.name === 'whatsapp' && (
        <WhatsappShareButton
          className="socials-sharebutton"
          url={'https://loveme.hng.tech'}
          quote={props.text}
        >
          <WhatsappIcon size={props.size} round={true} />
        </WhatsappShareButton>
      )}
    </span>
  );
}

ShareButton.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};
