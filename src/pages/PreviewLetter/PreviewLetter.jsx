import React from 'react';
import '../../styles/PreviewLetter.css';
import FooterTwo from '../../components/FooterTwo';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import ShareButton from '../../components/ShareButton/ShareButton';

export default function PreviewLetter() {
  const [letter, setLetter] = React.useState('Dummy text');
  const [share, setShare] = React.useState(false);
  const [dshare, setDShare] = React.useState(true);
  const [disable] = React.useState(true);
  const inputElement = React.useRef();

  function handleEditLetter(e) {
    setLetter(e.target.value);
  }
  //   Favour Lissa
  //   function focusInput(){
  //     setDisabled(false);
  //     setTimeout(()=>inputElement.current.focus(), 1000);
  //   };

  //   React.useEffect(() => {
  //     /* add fetch function here*/
  //   }, []);
  return (
    <>
      <Navbar />
      <div className="previewletter--container">
        <div className="previewletter--body">
          <div className="previewletter--header">
            Tell me about your partner
          </div>
          <div className="previewletter-mobilescreenlocation-button">
            <Link>
              <button>
                <img src="/arrow-left-solid.svg" />
                <span>Prev</span>
              </button>
            </Link>{' '}
            <Link></Link>
            <button>
              Next
              <img src="/arrow-right-solid.svg" />
            </button>
          </div>

          <div className="previewletter-form--container">
            <div className="previewletter-form--header">Love Letter</div>
            <div className="previewletter-functions">
              {/* <button onClick={() => focusInput()} className="prevbtn-edit">
                <img className="prev-edit" src="/pen-solid.svg" />
                <span>Edit</span>
              </button> */}
              <button className="prevbtn-schedule">
                <img className="prev-schedule" src="/schedule.svg" />
                <span>Schedule</span>
              </button>
            </div>
            <form>
              <textarea
                ref={inputElement}
                value={letter}
                onChange={(e) => handleEditLetter(e)}
                className="previewletter--input"
                name=""
                disabled={disable}
              />
              {dshare && (
                <div className="preview--sociallinks_clipdesktop">
                  <ShareButton name="whatsapp" size={36} text={letter} />
                  <ShareButton name="facebook" size={36} text={letter} />
                  <ShareButton name="twitter" size={36} text={letter} />
                  {/* <button>add clipboard here</button> */}
                </div>
              )}
            </form>
            <img src="/flower.svg" className="previewletter-flower" />
            <img src="/prev-love.svg" className="previewletter-love" />
          </div>
        </div>
        <div className="previewletter--share_downloadmobile">
          <button className="prevshare-btn" onClick={() => setShare(!share)}>
            <img src="/share.svg" />
            <span> Share</span>
          </button>
          <button className="prevdown-btn">
            <span> Download</span>
          </button>
        </div>

        {share && (
          <div className="preview--sociallinks_clip">
            <ShareButton name="whatsapp" size={26} text={letter} />
            <ShareButton name="facebook" size={26} text={letter} />
            <ShareButton name="twitter" size={26} text={letter} />
            {/* <button>add clipboard here</button> */}
          </div>
        )}
        <div className="previewletter--share_downloaddesktop">
          <button className="prevshare-btn" onClick={() => setDShare(!dshare)}>
            <img src="/share.svg" />
            <span> Share</span>
          </button>
          <button className="prevdown-btn">
            <span> Download</span>
          </button>
        </div>
      </div>
      <FooterTwo />
    </>
  );
}
