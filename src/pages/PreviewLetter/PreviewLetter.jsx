import React from 'react';
import '../../styles/PreviewLetter.css';
import FooterTwo from '../../components/FooterTwo';
import Navbar from '../../components/Navbar/Navbar';

export default function PreviewLetter() {
  return (
    <>
      <Navbar />
      <div className="previewletter--container">
        <div className="previewletter--header">Tell me about your partner</div>
      </div>
      <FooterTwo />
    </>
  );
}
