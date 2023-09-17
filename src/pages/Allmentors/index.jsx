import React from "react";

import { useNavigate } from "react-router-dom";

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

const AllmentorsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col gap-12 items-start justify-start w-full">
          <EduviCoursesDetailsHeader className="flex flex-col gap-2 h-[74px] md:h-auto items-center justify-between px-20 md:px-5 py-[22px] w-full" />
          <div className="flex flex-col items-start justify-start md:px-10 px-20 sm:px-5 w-full">
            <div className="bg-red-53 flex flex-col h-[270px] md:h-auto items-center justify-center max-w-7xl mx-auto md:px-5 px-[30px] py-5 rounded-[20px] w-full">
              <div className="flex flex-col gap-px items-start justify-center w-full">
                <Text
                  className="text-base text-black-900 tracking-[0.48px] w-auto"
                  size="txtInterMedium16"
                >
                  Home | Our Mentors
                </Text>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <Text
                    className="leading-[50.00px] sm:text-[35px] md:text-[41px] text-[45px] text-gray-900"
                    size="txtInterSemiBold45"
                  >
                    <>
                      Educatsy has the
                      <br />
                      qualified mentor
                    </>
                  </Text>
                  <Img
                    className="h-[210px] w-[425px]"
                    src="images/img_49063311.svg"
                    alt="49063311"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start md:px-10 px-20 sm:px-5 w-full">
          <div className="flex flex-col gap-[51px] items-center justify-start max-w-7xl mx-auto w-full">
            <div className="flex flex-row flex-wrap gap-5 items-start justify-start max-w-[1272px] w-full">
              <Button className="bg-white-A700 cursor-pointer font-medium min-w-[147px] py-5 rounded-[10px] text-base text-black-900 text-center">
                All Mentors
              </Button>
              <Button className="bg-white-A700 cursor-pointer font-medium min-w-[190px] py-5 rounded-[10px] text-base text-black-900 text-center">
                For Kindergarten
              </Button>
              <Button className="bg-orange-200 cursor-pointer font-medium min-w-[177px] py-5 rounded-[10px] text-base text-center text-white-A700">
                For high school
              </Button>
              <Button className="bg-white-A700 cursor-pointer font-medium min-w-[145px] py-5 rounded-[10px] text-base text-black-900 text-center">
                For college
              </Button>
              <Button className="bg-white-A700 cursor-pointer font-medium min-w-[178px] py-5 rounded-[10px] text-base text-black-900 text-center">
                For Technology
              </Button>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="gap-10 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                <div
                  className="common-pointer flex flex-1 flex-col gap-2.5 items-start justify-start w-full"
                  onClick={() => navigate("/singlementordetails")}
                >
                  <Img
                    className="h-[290px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_bg_290x290.png"
                    alt="bg"
                  />
                  <div className="flex flex-row gap-6 items-start justify-between w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-[242px]">
                      <Text
                        className="text-base text-black-900 w-full"
                        size="txtInterMedium16"
                      >
                        Kristin Watson
                      </Text>
                      <Text
                        className="text-gray-700 text-sm w-auto"
                        size="txtInterMedium14Gray700"
                      >
                        Founder & Mentor
                      </Text>
                    </div>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown_black_900.svg"
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                  <Img
                    className="h-[290px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_bg_1.png"
                    alt="bg"
                  />
                  <div className="flex flex-row gap-6 items-start justify-between w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-[142px]">
                      <Text
                        className="text-base text-black-900 w-auto"
                        size="txtInterMedium16"
                      >
                        Brooklyn Simmons
                      </Text>
                      <Text
                        className="text-gray-700 text-sm w-full"
                        size="txtInterMedium14Gray700"
                      >
                        Founder & Mentor
                      </Text>
                    </div>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown_black_900.svg"
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                  <Img
                    className="h-[290px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_bg_2.png"
                    alt="bg"
                  />
                  <div className="flex flex-row gap-6 items-start justify-between w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-[120px]">
                      <Text
                        className="text-base text-black-900 w-full"
                        size="txtInterMedium16"
                      >
                        Robert Fox
                      </Text>
                      <Text
                        className="text-gray-700 text-sm w-auto"
                        size="txtInterMedium14Gray700"
                      >
                        Founder & Mentor
                      </Text>
                    </div>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown_black_900.svg"
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                  <Img
                    className="h-[290px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_bg_3.png"
                    alt="bg"
                  />
                  <div className="flex flex-row gap-6 items-start justify-between w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-[120px]">
                      <Text
                        className="text-base text-black-900 w-full"
                        size="txtInterMedium16"
                      >
                        Wade Warren
                      </Text>
                      <Text
                        className="text-gray-700 text-sm w-auto"
                        size="txtInterMedium14Gray700"
                      >
                        Founder & Mentor
                      </Text>
                    </div>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown_black_900.svg"
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                  <Img
                    className="h-[290px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_bg_4.png"
                    alt="bg"
                  />
                  <div className="flex flex-row gap-6 items-start justify-between w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-[120px]">
                      <Text
                        className="text-base text-black-900 w-full"
                        size="txtInterMedium16"
                      >
                        Bessie Cooper
                      </Text>
                      <Text
                        className="text-gray-700 text-sm w-auto"
                        size="txtInterMedium14Gray700"
                      >
                        Founder & Mentor
                      </Text>
                    </div>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown_black_900.svg"
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                  <Img
                    className="h-[290px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_bg_5.png"
                    alt="bg"
                  />
                  <div className="flex flex-row gap-6 items-start justify-between w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-[124px]">
                      <Text
                        className="text-base text-black-900 w-auto"
                        size="txtInterMedium16"
                      >
                        Ronald Richards
                      </Text>
                      <Text
                        className="text-gray-700 text-sm w-full"
                        size="txtInterMedium14Gray700"
                      >
                        Founder & Mentor
                      </Text>
                    </div>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown_black_900.svg"
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                  <Img
                    className="h-[290px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_bg_6.png"
                    alt="bg"
                  />
                  <div className="flex flex-row gap-6 items-start justify-between w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-[120px]">
                      <Text
                        className="text-base text-black-900 w-full"
                        size="txtInterMedium16"
                      >
                        Guy Hawkins
                      </Text>
                      <Text
                        className="text-gray-700 text-sm w-auto"
                        size="txtInterMedium14Gray700"
                      >
                        Founder & Mentor
                      </Text>
                    </div>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown_black_900.svg"
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                  <Img
                    className="h-[290px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_bg_7.png"
                    alt="bg"
                  />
                  <div className="flex flex-row gap-6 items-start justify-between w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-[120px]">
                      <Text
                        className="text-base text-black-900 w-full"
                        size="txtInterMedium16"
                      >
                        Floyd Miles
                      </Text>
                      <Text
                        className="text-gray-700 text-sm w-auto"
                        size="txtInterMedium14Gray700"
                      >
                        Founder & Mentor
                      </Text>
                    </div>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown_black_900.svg"
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                  <Img
                    className="h-[290px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_bg_8.png"
                    alt="bg"
                  />
                  <div className="flex flex-row gap-6 items-start justify-between w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-[120px]">
                      <Text
                        className="text-base text-black-900 w-full"
                        size="txtInterMedium16"
                      >
                        Theresa Webb
                      </Text>
                      <Text
                        className="text-gray-700 text-sm w-auto"
                        size="txtInterMedium14Gray700"
                      >
                        Founder & Mentor
                      </Text>
                    </div>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown_black_900.svg"
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                  <Img
                    className="h-[290px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_bg_9.png"
                    alt="bg"
                  />
                  <div className="flex flex-row gap-6 items-start justify-between w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-[120px]">
                      <Text
                        className="text-base text-black-900 w-full"
                        size="txtInterMedium16"
                      >
                        Cody Fisher
                      </Text>
                      <Text
                        className="text-gray-700 text-sm w-auto"
                        size="txtInterMedium14Gray700"
                      >
                        Founder & Mentor
                      </Text>
                    </div>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown_black_900.svg"
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                  <Img
                    className="h-[290px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_bg_10.png"
                    alt="bg"
                  />
                  <div className="flex flex-row gap-6 items-start justify-between w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-[122px]">
                      <Text
                        className="text-base text-black-900 w-auto"
                        size="txtInterMedium16"
                      >
                        Courtney Henry
                      </Text>
                      <Text
                        className="text-gray-700 text-sm w-full"
                        size="txtInterMedium14Gray700"
                      >
                        Founder & Mentor
                      </Text>
                    </div>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown_black_900.svg"
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                  <Img
                    className="h-[290px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_bg_11.png"
                    alt="bg"
                  />
                  <div className="flex flex-row gap-6 items-start justify-between w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-[120px]">
                      <Text
                        className="text-base text-black-900 w-full"
                        size="txtInterMedium16"
                      >
                        Jerome Bell
                      </Text>
                      <Text
                        className="text-gray-700 text-sm w-auto"
                        size="txtInterMedium14Gray700"
                      >
                        Founder & Mentor
                      </Text>
                    </div>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown_black_900.svg"
                      alt="arrowdown"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[19px] items-center justify-start w-auto">
              <Button className="bg-white-A700 flex h-11 items-center justify-center p-4 rounded-md w-11">
                <Img src="images/img_arrowleft.svg" alt="arrowleft" />
              </Button>
              <Text
                className="text-base text-gray-900 w-auto"
                size="txtInterMedium16Gray900"
              >
                Page
              </Text>
              <Button className="bg-white-A700 cursor-pointer font-medium leading-[normal] py-[9px] rounded-lg text-bluegray-800 text-center text-lg w-[39px]">
                1
              </Button>
              <Text
                className="text-base text-gray-900 w-auto"
                size="txtInterMedium16Gray900"
              >
                of 03
              </Text>
              <Button className="bg-red-300 flex h-11 items-center justify-center p-4 rounded-md w-11">
                <Img src="images/img_arrowright.svg" alt="arrowright" />
              </Button>
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

export default AllmentorsPage;
