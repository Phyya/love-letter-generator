import React, { useState } from 'react';
import { NewsLetterModal } from '../components/newsleeter/newslettermodal';
import { ModalContent } from '../components/newsleeter/newslettercontent';

const PreviewLetter = () => {
  const [open, isOpen] = useState(true);

  return (
    <>
      <NewsLetterModal isOpen={isOpen} open={open}>
        <ModalContent isOpen={isOpen} open={open} />
      </NewsLetterModal>
      <div>PreviewLetter</div>
    </>
  );
};

export default PreviewLetter;
