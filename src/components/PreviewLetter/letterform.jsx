import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { letters } from '../../components/Form/data';
import classes from '../../styles/style.module.css';

export const LetterForm = () => {
  const location = useLocation();
  useEffect(() => {}, [location.state.id]);
  return (
    <div className="mt-10 sm:mt-0">
      <div className={`md:grid md:gap-6 ${classes.flexed_form_container}`}>
        <div
          className={`m-auto mt-5 md:col-span-2 md:mt-0 ${classes.boxedShadowed}`}
        >
            {location.state ? (
            <p className="py-10">{location.state && letters[location.state.id]}</p>
          ) : (
            <p className={classes.empty_letter_generated}>
              {letters[1]}
            </p>
          )}
           
        </div>
      </div>
    </div>
  );
};