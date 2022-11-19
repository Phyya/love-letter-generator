import React from 'react';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { Link } from 'react-router-dom';

const PositionDetails = () => {
  return (
    <>
      <div className="max-w-6xl m-auto p-5">
        <h1 className="h-20 py-5">Header</h1>
      </div>
      <section className="bg-sec-1 text-white w-full py-4">
        <div className="max-w-6xl m-auto">
          <Link to="/career" className="flex gap-4 items-center">
            <MdOutlineKeyboardArrowLeft className="h-6 w-6" />
            See all positions
          </Link>
        </div>
      </section>
      <section className="max-w-6xl m-auto p-5">
        <h1 className="text-3xl text-sec-1 mt-10 mb-2">
          Customer Insights Associate (Full-time) (Remote)
        </h1>
        <div className="flex gap-5 mt-3">
          <p className="bg-white flex items-center gap-3 px-3 py-1">fulltime</p>
          <p className="bg-white flex items-center gap-3 px-3 py-1">remote</p>
        </div>
        <h1 className="text-3xl text-sec-1 my-6">
          We are interested in meeting you
        </h1>
        <p>
          We appreciate you showing interest in LoveMe. Please complete the
          short form below. Please email us at jobs@loveme.com if you experience
          any problems uploading your data.
        </p>

        <div className="p-5 mt-10">
          <p className="mb-1">To achieve this, you&apos;ll be expected to: </p>
          <ol className="list-disc text-[#464646]">
            <li>Conduct research surveys via phone, SMS, or other platforms</li>
            <li>
              Facilitate focus groups and other field research with customers,
              agents, or prospective customers on key questions and drive
              insights on these questions
            </li>
            <li>
              Add clarity to problem statements and research questions and
              identify pain points by gathering customer and agent stories,
              feedback, and sentiments to help the business better understand
              and empathize with our customers
            </li>
            <li>
              Capture customer data and sentiments accurately and precisely, and
              communicate them clearly via various mediums, including survey
              tools, spreadsheets, word documents, PowerPoint, photos, and
              videos
            </li>
            <li>
              Support in the development of solutions for these pain points
            </li>
            <li>
              Support in the testing and release of new products, especially
              through observing our customers in the field
            </li>
            <li>
              Support field visit logistics for customer and agent shadowing
              activities
            </li>
          </ol>
        </div>

        <div className="p-5 mt-8">
          <p className="mb-1">You Might Be A Good Fit If You: </p>
          <ol className="list-disc text-[#464646]">
            <li>
              Are passionate about our mission of making everyday essentials
              accessible to everyone
            </li>
            <li>
              Are excited to be a champion for our customers in everything you
              do
            </li>
            <li>
              Have experience conducting quantitative or qualitative surveys or
              other roles that require frequent customer communication
            </li>
            <li>
              Have experience with photography, videography, or other mediums
              for capturing and telling customer stories
            </li>
            <li>
              Are excited to conduct field research and embed yourself in
              operational processes to drive problem identification and solution
              development
            </li>
            <li>
              Willing to work tirelessly to understand the root causes of
              problems and are more comfortable in the field than they are
              sitting at a desk
            </li>
            <li>Are comfortable with survey tools and spreadsheets</li>
            <li>Are a great listener and a clear and precise communicator</li>
            <li>
              Love fast-moving environments with a sense of urgency to get the
              job done
            </li>
            <li>
              Have emerging markets experience (particularly in East or West
              Africa)
            </li>
            <li>Have a bachelor&apos;s degree or equivalent experience</li>
          </ol>
        </div>

        <div className="mt-10 p-5">
          <p>We: </p>
          <ol className="list-disc">
            <li>
              Are a collaborative team of smart and ambitious people who are
              dedicated to serving our customers and agents
            </li>
            <li>
              Make magic happen to help the business solve hard problems and
              always come with solutions when challenges arise
            </li>
            <li>
              Are considerate listeners and take the time to deeply understand
              and seek out ideas from the people around us
            </li>
            <li>
              Offer a dynamic environment that fosters talent, collaboration,
              and growth
            </li>
            <li>
              Back up our talk with a competitive compensation and benefits
              package
            </li>
          </ol>
        </div>
      </section>
      <Link to="/role-application">
        <button
          type="submit"
          className="bg-main-1 text-white flex justify-center m-auto px-6 py-3 rounded-lg mt-24 mb-16"
        >
          Apply for the Position
        </button>
      </Link>
    </>
  );
};

export default PositionDetails;
