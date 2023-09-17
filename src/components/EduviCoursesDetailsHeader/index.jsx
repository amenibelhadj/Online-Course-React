import React from "react";

import { Img, SelectBox, Text } from "components";

const forkindergartenOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const forhighschoolOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const forcollegeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const coursesOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const EduviCoursesDetailsHeader = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-[54px] items-center justify-between w-full">
          <div className="header-row ">
            <Img
              className="h-[30px] w-[173px]"
              src="images/img_logo.svg"
              alt="logo"
            />
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="flex flex-1 sm:flex-col flex-row gap-6 sm:hidden items-center justify-center max-w-[730px] w-full">
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtInterMedium16Gray900"
            >
              Shop
            </Text>
            <SelectBox
              className="sm:flex-1 font-inter font-medium leading-[normal] text-base text-gray-900 text-right w-[22%] sm:w-full"
              placeholderClassName="text-gray-900"
              indicator={
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown_gray_900.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="forkindergarten"
              options={forkindergartenOptionsList}
              isSearchable={false}
              placeholder="For Kindergarten"
            />
            <SelectBox
              className="sm:flex-1 font-inter font-medium leading-[normal] text-base text-gray-900 text-right w-[21%] sm:w-full"
              placeholderClassName="text-gray-900"
              indicator={
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown_gray_900.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="forhighschool"
              options={forhighschoolOptionsList}
              isSearchable={false}
              placeholder="For High School"
            />
            <SelectBox
              className="sm:flex-1 font-inter font-medium leading-[normal] text-base text-gray-900 text-right w-[16%] sm:w-full"
              placeholderClassName="text-gray-900"
              indicator={
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown_gray_900.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="forcollege"
              options={forcollegeOptionsList}
              isSearchable={false}
              placeholder="For College"
            />
            <SelectBox
              className="sm:flex-1 font-inter font-medium leading-[normal] text-base text-gray-900 text-right w-[13%] sm:w-full"
              placeholderClassName="text-gray-900"
              indicator={
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown_gray_900.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="courses"
              options={coursesOptionsList}
              isSearchable={false}
              placeholder="Courses"
            />
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtInterMedium16Gray900"
            >
              Mentors
            </Text>
          </div>
          <div className="flex flex-row gap-8 sm:hidden items-start justify-start w-[268px]">
            <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
              <Text
                className="text-base text-gray-900 text-right w-auto"
                size="txtInterMedium16Gray900"
              >
                Cart (0)
              </Text>
              <Img
                className="h-[30px] w-[30px]"
                src="images/img_bag.svg"
                alt="bag"
              />
            </div>
            <div className="flex flex-row gap-2.5 items-center justify-start w-full">
              <Text
                className="text-base text-gray-900 text-right w-auto"
                size="txtInterMedium16Gray900"
              >
                My Account
              </Text>
              <Img
                className="h-[30px] w-[30px]"
                src="images/img_user.svg"
                alt="user"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

EduviCoursesDetailsHeader.defaultProps = {};

export default EduviCoursesDetailsHeader;
