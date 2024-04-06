import { Fragment } from "react";
import "./index.css";

export function SectionWhy() {
  return (
    <Fragment>
        <section className="whatwhy-container md:py-20 md:pt-12 pb-5 pt-1">
      <section className="md:grid md:gap-4 items-center md:grid-cols-2 md:flex-col gap-16 whyimg_container">
        <WhyImage />

        <div className="write gap-4 flex flex-col">
          <div className="writeUps1 border-b border-solid border-[#E9E9E9]">
            <div className="wtitle flex flex-row items-center gap-2">
              <div className="iconimg-div max-w-9">
                <img src="./Icon1.svg" className="iconimg max-w-full" alt="IconImage" />
              </div>
              <h2 className="writeUps__title font-semibold text-2xl text-[#333333]">Skip The Search</h2>
            </div>
            <div className="wtitle_p text-[#333333] text-sm py-2.5 max-w-[541px]">
              <p className="writeUps__text">
                No more scrolling through endless lists or clicking on multiple
                websites.
              </p>
              <p>
                CraftConnect streamlines the process, saving you time and
                effort.
              </p>
            </div>
          </div>
          <div className="writeUps2 writeUps1 border-b border-solid border-[#E9E9E9]">
            <div className="wtitle2 wtitle flex flex-row items-center gap-2">
              <div className="iconimg-div max-w-9">
                <img src="./Icon2.svg" className="iconimg max-w-full" alt="IconImage" />
              </div>
              <h2 className="writeUps__title font-semibold text-2xl text-[#333333]">Stress-Free Quotes</h2>
            </div>
            <div className="wtitle_p text-[#333333] text-sm py-2.5 max-w-[541px]">
              <p className="writeUps__text">
                Gone are the days of negotiating quotes. CraftConnect ensures
                transparent pricing every step of the way. Know exactly what
                you&apos;re paying for without the stress.
              </p>
            </div>
          </div>

          <div className="writeUps3 writeUps1 border-b border-solid border-[#E9E9E9]">
            <div className="wtitle3 wtitle flex flex-row items-center gap-2">
              <div className="iconimg-div max-w-9">
                <img src="./Icon3.svg" className="iconimg max-w-full" alt="IconImage" />
              </div>
              <h2 className="writeUps__title font-semibold text-2xl text-[#333333]">User-Friendly Platform</h2>
            </div>
            <div className="wtitle_p text-[#333333] text-sm py-2.5 max-w-[541px]">
              <p className="writeUps__text">
                Our platform is designed with you in mind. It&apos;s user-friendly,
                making it easy for you to navigate, explore, and connect with
                the perfect craftsmen for your project.
              </p>
            </div>
          </div>
          <div className="writeUps4">
            <div className="wtitle4 wtitle flex flex-row items-center gap-2">
              <div className="iconimg-div max-w-9">
                <img src="./Icon4.svg" className="iconimg max-w-full" alt="IconImage" />
              </div>
              <h2 className="writeUps__title font-semibold text-2xl text-[#333333]">Transparent Pricing</h2>
            </div>
            <div className="wtitle_p text-[#333333] text-sm py-2.5 max-w-[541px]">
              <p className="writeUps__text">
                CraftConnect believes in transparency. Know the pricing upfront,
                so you can make informed decisions without any surprises.
              </p>
            </div>
          </div>
        </div>
      </section>
      </section>
    </Fragment>
  );
}

function WhyImage() {
  return (
    <div to="/" className="whyimage w-full max-w-full pb-5">
      <img src="/why.svg" alt="why_chose_CraftConnect" className="max-w-full" />
    </div>
  );
}
