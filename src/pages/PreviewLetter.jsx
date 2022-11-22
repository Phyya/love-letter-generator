import classes from '../styles/style.module.css';
export const LetterForm = () => {
  

  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className={`md:grid md:gap-6 ${classes.flexed_form_container}`}>
          <div
            className={`m-auto mt-5 md:col-span-2 md:mt-0 ${classes.boxedShadowed}`}
          >
              <div className={classes.hero_brand}>
            <p className={classes.hero_brand_name}>Tell Me About Your Partner</p>

           
            <p className={classes.hero_brand_border}></p>
          </div>
            contents goes here
          </div>
        
        </div>
      </div>
    </>
  );
};

export default LetterForm