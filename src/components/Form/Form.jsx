import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DropDown from '../DropDown/DropDown';
import classes from '../../styles/style.module.css';
import { Button } from '../DevNafButton/Button';
import InputField from '../InputField/InputField';
import { letters } from './data';
export const Form = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState('');
  const [partnerName, setPartnerName] = useState('');
  const [yourName, setYourName] = useState('');
  const [feeling, setFeeling] = useState('');
  const [relationship, setRelationship] = useState('');
  const [errors, setErrors] = useState({
    partnerName: '',
    yourName: '',
    feeling: false,
    relationship: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIndex('');
    if (!partnerName) {
      setErrors((prev) => ({ ...prev, partnerName: true }));
      return;
    }
    if (!yourName) {
      setErrors((prev) => ({ ...prev, yourName: true }));
      return;
    }
    if (!feeling) {
      setErrors((prev) => ({ ...prev, feeling: true }));
      return;
    }
    if (!relationship) {
      setErrors((prev) => ({ ...prev, relationship: true }));
      return;
    }
    if (relationship === 'Wife' && feeling == 'Romantic') setIndex(0);
    if (relationship === 'Wife' && feeling == 'Playful') setIndex(1);
    if (relationship === 'Wife' && feeling == 'Regretful') setIndex(2);
    if (relationship === 'Husband' && feeling == 'Apologetic') setIndex(3);
    if (relationship === 'Husband' && feeling == 'Romantic') setIndex(4);
    if (
      relationship === 'Husband' &&
      (feeling == 'Cheerful' || feeling == 'Playful')
    )
      setIndex(5);
    if (relationship === 'Husband' && feeling == 'Regretful') setIndex(6);
    if (relationship === 'Boyfriend' && feeling == 'Apologetic') setIndex(7);
    if (relationship === 'Boyfriend' && feeling == 'Romantic') setIndex(8);
    if (
      relationship === 'Boyfriend' &&
      (feeling == 'Cheerful' || feeling == 'Playful')
    )
      setIndex(9);
    if (relationship === 'Boyfriend' && feeling == 'Regretful') setIndex(10);
    if (relationship === 'Boyfriend' && feeling == 'Crushing') setIndex(11);
    if (relationship === 'Girlfriend' && feeling == 'Apologetic') setIndex(12);
    if (relationship === 'Girlfriend' && feeling == 'Romantic') setIndex(13);
    if (
      relationship === 'Girlfriend' &&
      (feeling == 'Cheerful' || feeling == 'Playful')
    )
      setIndex(14);
    if (relationship === 'Girlfriend' && feeling == 'Regretful') setIndex(15);
    if (relationship === 'Girlfriend' && feeling == 'Crushing') setIndex(16);
    if (relationship === 'Friend' && feeling == 'Apologetic') setIndex(17);
    if (relationship === 'Friend' && feeling == 'Romantic') setIndex(18);
    if (
      relationship === 'Friend' &&
      (feeling == 'Cheerful' || feeling == 'Playful')
    )
      setIndex(19);
    if (relationship === 'Friend' && feeling == 'Regretful') setIndex(20);
    if (relationship === 'Friend' && feeling == 'Crushing') setIndex(21);
    else setIndex(Math.floor(Math.random() * letters.length) + 1);
  };
  useEffect(() => {
    index && navigate('/previewletter', { state: { id: index } });
  }, [index]);

  return (
    <>
      <div className="sm:mt-0">
        <div className={`md:grid md:gap-6 ${classes.flexed_form_container}`}>
          <div
            className={`m-auto mt-5 md:col-span-2 md:mt-0 ${classes.boxedShadowed}`}
          >
            <form action="#" method="POST" onSubmit={(e) => handleSubmit(e)}>
              <div className="overflow-hidden sm:rounded-md">
                <div
                  className={`bg-white px-4 py-5 sm:p-6 max-w-lg ${classes.survey_form}`}
                >
                  <h2 className="text-3xl py-4 text-center my-6 font-bold">
                    Tell me about your partner
                  </h2>
                  <div className="">
                    <div className="my-2">
                      <InputField
                        name="partnerName"
                        labelText="Partner's name"
                        type="text"
                        placeholder=""
                        value={partnerName}
                        handleChange={(e) => setPartnerName(e.target.value)}
                        width={'100%'}
                        errors={errors['partnerName']}
                        color="#000"
                        touched={!partnerName}
                        errorText="Field cannot be empty"
                      />
                    </div>
                    <div className="my-2">
                      <InputField
                        name="yourName"
                        labelText="Your name"
                        type="text"
                        placeholder=""
                        value={yourName}
                        handleChange={(e) => setYourName(e.target.value)}
                        width={'100%'}
                        color="#000"
                        touched={!yourName}
                        errors={errors['yourName']}
                        errorText="Field cannot be empty"
                      />
                    </div>
                    <div className="my-4">
                      <DropDown
                        selectText={'Relationship'}
                        selectData={[
                          'Wife',
                          'Husband',
                          'Boyfriend',
                          'Girlfriend',
                          'Friend',
                        ]}
                        handleChange={(val) => setRelationship(val)}
                        errors={errors['relationship']}
                        value={relationship}
                      />
                    </div>
                    <div className="my-4">
                      <DropDown
                        selectText={'Feelings'}
                        selectData={[
                          'Apologetic',
                          'Romantic',
                          'Cheerful',
                          'Playful',
                          'Regretful',
                          'Crushing',
                        ]}
                        handleChange={(val) => setFeeling(val)}
                        errors={errors['feeling']}
                        value={feeling}
                      />
                    </div>
                  </div>
                  <div className="flex justify-center my-6">
                    <Button
                      width="200px"
                      height="50px"
                      buttonText="Generate"
                      onClick={(e) => handleSubmit(e)}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className={classes.hero_brand}>
            <p className={classes.hero_brand_name}>Love letter</p>

            {index && <p>{letters[index]}</p>}
            <p className={classes.hero_brand_border}></p>
          </div>
        </div>
      </div>
    </>
  );
};
