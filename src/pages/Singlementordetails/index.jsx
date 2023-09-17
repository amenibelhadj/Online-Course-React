import React from "react";

import { Button, Img, Input, SelectBox, Text } from "components";
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

const SinglementordetailsPage = () => {
  function handleNavigate() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate1() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col md:gap-10 gap-[150px] items-start justify-start w-full">
          <div className="flex flex-col gap-12 items-start justify-start max-w-[1440px] w-full">
            <EduviCoursesDetailsHeader className="flex flex-col gap-2 h-[74px] md:h-auto items-center justify-between px-20 md:px-5 py-[22px] w-full" />
            <div className="flex flex-col h-[260px] md:h-auto items-start justify-start md:px-10 px-20 sm:px-5 w-full">
              <div className="flex flex-col md:h-auto max-w-7xl mx-auto relative w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[171px] md:h-auto items-start justify-start mx-auto w-auto"
                  style={{ backgroundImage: "url('images/img_frame7848.svg')" }}
                >
                  <Text
                    className="text-base text-black-900 tracking-[0.48px] w-auto"
                    size="txtInterMedium16"
                  >
                    Home | Mentor | Kristin Watson
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start mt-[-81px] w-auto z-[1]">
                  <div className="flex sm:flex-col flex-row gap-5 items-end justify-start w-auto sm:w-full">
                    <Img
                      className="h-[170px] md:h-auto object-cover rounded-[10px] w-[170px]"
                      src="images/img_bg_170x170.png"
                      alt="bg"
                    />
                    <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900 w-auto"
                        size="txtInterMedium30"
                      >
                        Kritsin Watson
                      </Text>
                      <Text
                        className="text-gray-700 text-lg w-auto"
                        size="txtInterMedium18"
                      >
                        Founder & Mentor
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center md:px-10 px-20 sm:px-5 w-full">
            <div className="flex md:flex-col flex-row gap-10 items-start justify-start max-w-7xl mx-auto w-full">
              <div className="flex flex-1 flex-col gap-[30px] items-start justify-start w-full">
                <div className="flex md:flex-col flex-row gap-6 items-center justify-start w-full">
                  <div className="flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-full">
                    <Button className="bg-orange-200 cursor-pointer flex-1 font-medium py-5 rounded-[10px] text-base text-center text-white-A700 w-full">
                      About
                    </Button>
                    <Button className="bg-white-A700 cursor-pointer flex-1 font-medium py-5 rounded-[10px] text-base text-center text-gray-900 w-full">
                      Courses
                    </Button>
                    <Button className="bg-white-A700 cursor-pointer flex-1 font-medium py-5 rounded-[10px] text-base text-center text-gray-900 w-full">
                      Reviews
                    </Button>
                  </div>
                  <Button className="bg-red-300 cursor-pointer font-medium min-w-[173px] py-[19px] rounded-[10px] text-center text-lg text-white-A700">
                    Contact Now
                  </Button>
                </div>
                <div className="flex flex-col gap-[30px] items-start justify-start w-full">
                  <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900 w-full"
                      size="txtInterSemiBold30Gray900"
                    >
                      About Kritsin
                    </Text>
                    <Text
                      className="leading-[30.00px] text-base text-gray-700"
                      size="txtInterRegular16"
                    >
                      <>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan lacus vel
                        facilisis consectetur adipiscing elit.
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan lacus vel
                        facilisis consectetur adipiscing elit.
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900 w-full"
                      size="txtInterSemiBold30Gray900"
                    >
                      Certification
                    </Text>
                    <Text
                      className="leading-[30.00px] max-w-[840px] md:max-w-full text-base text-gray-700"
                      size="txtInterRegular16"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis
                      consectetur adipiscing elit.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex sm:flex-1 flex-col gap-[21px] items-start justify-start px-5 py-[30px] rounded-[10px] w-[400px] sm:w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="text-gray-700 text-xl w-auto"
                    size="txtInterSemiBold20"
                  >
                    Total Course
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-deep_orange-400 text-right sm:text-xl w-auto"
                    size="txtInterSemiBold24"
                  >
                    30
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <Text
                      className="text-gray-700 text-xl w-auto"
                      size="txtInterSemiBold20"
                    >
                      Ratings
                    </Text>
                    <Img
                      className="h-4 w-4"
                      src="images/img_star.svg"
                      alt="star"
                    />
                  </div>
                  <Text
                    className="text-gray-900 text-right text-xl w-auto"
                    size="txtInterSemiBold20Gray900"
                  >
                    4.9(153)
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="text-gray-700 text-xl w-auto"
                    size="txtInterSemiBold20"
                  >
                    Experiences
                  </Text>
                  <Text
                    className="text-gray-900 text-right text-xl w-auto"
                    size="txtInterSemiBold20Gray900"
                  >
                    10 Years
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="text-gray-700 text-xl w-auto"
                    size="txtInterSemiBold20"
                  >
                    Graduated
                  </Text>
                  <Text
                    className="text-gray-900 text-right text-xl w-auto"
                    size="txtInterSemiBold20Gray900"
                  >
                    Yes
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="text-gray-700 text-xl w-auto"
                    size="txtInterSemiBold20"
                  >
                    Language
                  </Text>
                  <Text
                    className="text-gray-900 text-right text-xl w-auto"
                    size="txtInterSemiBold20Gray900"
                  >
                    English, French
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="text-gray-700 text-xl w-auto"
                    size="txtInterSemiBold20"
                  >
                    Social
                  </Text>
                  <div className="flex flex-row gap-[15px] items-center justify-between w-[41%]">
                    <Img
                      className="common-pointer h-[22px] w-[22px]"
                      src="images/img_facebook_gray_900.svg"
                      alt="facebook"
                      onClick={handleNavigate1}
                    />
                    <Button className="bg-deep_orange-400 flex h-9 items-center justify-center p-[9px] rounded-[50%] w-9">
                      <Img
                        className="h-[18px]"
                        src="images/img_camera.svg"
                        alt="camera"
                      />
                    </Button>
                    <Img
                      className="common-pointer h-[17px]"
                      src="images/img_twitter_gray_900.svg"
                      alt="twitter"
                      onClick={handleNavigate}
                    />
                    <Img
                      className="h-[18px]"
                      src="images/img_linkedin_gray_900.svg"
                      alt="linkedin"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:px-10 px-20 sm:px-5 w-full">
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
        <EduviCoursesDetailsFooterlogoOne className="bg-gray-100 flex gap-2 items-center justify-center p-20 md:px-5 w-full" />
      </div>
    </>
  );
};

export default SinglementordetailsPage;
