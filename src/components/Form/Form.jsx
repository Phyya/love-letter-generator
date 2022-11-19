import React, { useState } from 'react';
import DropDown from '../DropDown/DropDown';
import classes from '../../styles/style.module.css';
import { Button } from '../DevNafButton/Button';
import InputField from '../InputField/InputField';
export const Form = () => {
  const [partnerName, setPartnerName] = useState('');
  const [yourName, setYourName] = useState('');
  const [feeling, setFeeling] = useState('');
  const [relationship, setRelationship] = useState('');
  const [errors, setErrors] = useState({
    partnerName: false,
    yourName: false,
    feeling: false,
    relationship: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
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
  };
  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className={`md:grid md:gap-6 ${classes.flexed_form_container}`}>
          <div
            className={`m-auto mt-5 md:col-span-2 md:mt-0 ${classes.boxedShadowed}`}
          >
            <form action="#" method="POST" onSubmit={handleSubmit}>
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
                      onClick={() => handleSubmit()}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className={classes.hero_brand}>
            <p className={classes.hero_brand_name}>Love letter</p>
            <p className={classes.hero_brand_border}></p>
          </div>
        </div>
      </div>
    </>
  );
};
