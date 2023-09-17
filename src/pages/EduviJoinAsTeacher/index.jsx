import React from "react";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import EduviCoursesDetailsFooterlogoOne from "components/EduviCoursesDetailsFooterlogoOne";
import EduviCoursesDetailsHeader from "components/EduviCoursesDetailsHeader";

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

const EduviJoinAsTeacherPage = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col gap-12 items-start justify-start w-full">
          <EduviCoursesDetailsHeader className="flex flex-col gap-2 h-[74px] md:h-auto items-center justify-between px-20 md:px-5 py-[22px] w-full" />
          <div className="flex flex-col items-start justify-start md:px-10 px-20 sm:px-5 w-full">
            <div className="bg-yellow-100 flex flex-col h-[270px] md:h-auto items-center justify-center max-w-7xl mx-auto md:px-5 px-[30px] py-5 rounded-[20px] w-full">
              <div className="flex flex-col gap-px items-start justify-center w-full">
                <Text
                  className="text-base text-black-900 tracking-[0.48px] w-auto"
                  size="txtInterMedium16"
                >
                  Home | Become An Instructor
                </Text>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <Text
                    className="leading-[50.00px] sm:text-[35px] md:text-[41px] text-[45px] text-gray-900"
                    size="txtInterSemiBold45"
                  >
                    <>
                      Join Educatsy as
                      <br />a Mentor
                    </>
                  </Text>
                  <Img
                    className="h-[210px] w-[306px]"
                    src="images/img_57907191.svg"
                    alt="46300601"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start md:px-10 px-20 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-28 items-center justify-between max-w-7xl mx-auto w-full">
            <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
              <Img
                className="h-[521px] md:h-auto object-cover w-[510px]"
                src="images/img_image_521x510.png"
                alt="image_One"
              />
            </div>
            <div className="flex flex-1 flex-col gap-[30px] items-start justify-start w-full">
              <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900 w-full"
                  size="txtInterSemiBold30Gray900"
                >
                  Apply As Instructor
                </Text>
                <Text
                  className="leading-[30.00px] max-w-[584px] md:max-w-full text-base text-gray-700"
                  size="txtInterRegular16"
                >
                  Teaching is a vital and admirable career. As such, it comes
                  with quite a bit of responsibility, both in practice and in
                  preparation with many skills required to be a teacher. The
                  following steps provide a general breakdown of the
                  requirements for teachers:
                </Text>
              </div>
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <div className="flex flex-row gap-[30px] items-start justify-start w-full">
                  <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                    <Text
                      className="text-base text-red-300 w-auto"
                      size="txtInterMedium16Red300"
                    >
                      Instructor Requirements
                    </Text>
                    <Line className="bg-red-300 h-px shadow-bs2 w-full" />
                  </div>
                  <Text
                    className="text-base text-gray-700 w-auto"
                    size="txtInterMedium16Gray700"
                  >
                    Instructor Rules
                  </Text>
                </div>
                <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                    <div className="bg-red-300 h-2.5 rounded-[50%] w-2.5"></div>
                    <Text
                      className="flex-1 text-base text-gray-900 w-auto"
                      size="txtInterRegular16Gray900"
                    >
                      An undergraduate degree
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                    <div className="bg-red-300 h-2.5 rounded-[50%] w-2.5"></div>
                    <Text
                      className="flex-1 text-base text-gray-900 w-auto"
                      size="txtInterRegular16Gray900"
                    >
                      Participate in supervised teaching
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                    <div className="bg-red-300 h-2.5 rounded-[50%] w-2.5"></div>
                    <Text
                      className="flex-1 text-base text-gray-900 w-auto"
                      size="txtInterRegular16Gray900"
                    >
                      State teaching license
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                    <div className="bg-red-300 h-2.5 rounded-[50%] w-2.5"></div>
                    <Text
                      className="flex-1 text-base text-gray-900 w-auto"
                      size="txtInterRegular16Gray900"
                    >
                      Pursue graduate studies
                    </Text>
                  </div>
                </div>
              </div>
              <Button className="bg-red-300 cursor-pointer font-medium min-w-[143px] py-[17px] rounded-[10px] text-base text-center text-white-A700">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-metropolis items-center justify-center md:px-10 px-20 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-center max-w-7xl mx-auto w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start max-w-[1060px] w-full">
              <Text
                className="sm:text-[35px] md:text-[41px] text-[45px] text-center text-gray-900 w-full"
                size="txtMetropolisBold45"
              >
                How to apply to join as instructor
              </Text>
              <div className="bg-white-A700 flex flex-col items-center justify-end p-2 rounded-[20px] shadow-bs3 w-full">
                <div className="flex flex-col items-center justify-start mt-[7px] w-full">
                  <div className="flex flex-col items-center justify-start w-auto md:w-full">
                    <Img
                      className="h-[577px] sm:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-[1042px] md:w-full"
                      src="images/img_bg.png"
                      alt="bg_One"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-inter items-center justify-center md:px-10 px-20 sm:px-5 w-full">
          <div className="bg-black-901 flex flex-col items-start justify-start max-w-7xl mx-auto md:px-5 px-[50px] py-[61px] rounded-[20px] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col justify-start w-[16%] md:w-full">
                <Img
                  className="h-[60px] md:h-auto mr-[127px] rounded-[50%] w-[60px]"
                  src="images/img_ellipse169.png"
                  alt="ellipse169"
                />
                <Img
                  className="h-[60px] md:h-auto md:ml-[0] ml-[127px] mt-[45px] rounded-[50%] w-[60px]"
                  src="images/img_ellipse170.png"
                  alt="ellipse170"
                />
                <Img
                  className="h-[60px] md:h-auto md:ml-[0] ml-[30px] mr-[97px] mt-[69px] rounded-[50%] w-[60px]"
                  src="images/img_ellipse171.png"
                  alt="ellipse171"
                />
              </div>
              <div className="flex sm:flex-1 flex-col gap-10 items-center justify-start w-[576px] sm:w-full">
                <div className="flex flex-col gap-5 items-center justify-start w-full">
                  <Text
                    className="leading-[55.00px] sm:text-[35px] md:text-[41px] text-[45px] text-center text-white-A700"
                    size="txtMetropolisBold45WhiteA700"
                  >
                    <>
                      Subscribe For Get Update
                      <br />
                      Every New Courses
                    </>
                  </Text>
                  <Text
                    className="text-base text-center text-white-A700_b2 w-full"
                    size="txtInterRegular16WhiteA700b2"
                  >
                    20k+ students daily learn with Educatsy. Subscribe for new
                    courses.
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-center w-full">
                  <Input
                    name="email"
                    placeholder="enter your email"
                    className="font-medium p-0 placeholder:text-white-A700 sm:pr-5 text-base text-left text-white-A700 w-full"
                    wrapClassName="bg-white-A700_33 flex-1 sm:flex-1 pb-[18px] pl-5 pr-[35px] pt-[21px] rounded-bl-[10px] rounded-tl-[10px] w-[76%] sm:w-full"
                    type="email"
                  ></Input>
                  <Button className="bg-red-300 cursor-pointer font-medium h-[60px] leading-[normal] min-w-[142px] py-5 rounded-br-[10px] rounded-tr-[10px] text-base text-center text-white-A700">
                    Subscribe
                  </Button>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col justify-start w-[16%] md:w-full">
                <Img
                  className="h-[60px] md:h-auto md:ml-[0] ml-[97px] mr-[30px] rounded-[50%] w-[60px]"
                  src="images/img_ellipse166.png"
                  alt="ellipse166"
                />
                <Img
                  className="h-[60px] md:h-auto mr-[127px] mt-[69px] rounded-[50%] w-[60px]"
                  src="images/img_ellipse167.png"
                  alt="ellipse167"
                />
                <Img
                  className="h-[60px] md:h-auto md:ml-[0] ml-[127px] mt-[45px] rounded-[50%] w-[60px]"
                  src="images/img_ellipse168.png"
                  alt="ellipse168"
                />
              </div>
            </div>
          </div>
        </div>
        <EduviCoursesDetailsFooterlogoOne className="bg-gray-100 flex font-inter gap-2 items-center justify-center p-20 md:px-5 w-full" />
      </div>
    </>
  );
};

export default EduviJoinAsTeacherPage;
