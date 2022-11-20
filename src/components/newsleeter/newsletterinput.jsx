import React from 'react';
import { Button } from './newsletterbtn';

export const NewsLetterInput = () => {
  return (
    <div className="flex md:gap-x-[12px]">
      <input
        className="rounded-l-[8px] md:rounded-[8px] border-0 outline-0 
                border-[#AFAFAF] grow-[2] md:grow p-[5.67px] md:p-[15px] placeholder-[#AFAFAF] border-[1px] border-[#AFAFAF]"
        placeholder="eg.johndoe@email.com"
      />
      <Button name="Subscribe" width="207px" />
    </div>
  );
};
