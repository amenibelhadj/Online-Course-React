import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
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
const kindergartenOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const Home1Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[100px] items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <EduviCoursesDetailsHeader className="flex flex-col gap-2 h-[74px] md:h-auto items-center justify-between px-20 md:px-5 py-[22px] w-full" />
          <div className="flex flex-col items-start justify-start md:px-10 px-20 sm:px-5 py-[60px] w-full">
            <div className="flex md:flex-col flex-row gap-[42px] items-center justify-start max-w-7xl mx-auto w-full">
              <div className="flex flex-1 flex-col gap-[30px] items-start justify-start w-full">
                <Button className="bg-white-A700 cursor-pointer font-medium leading-[normal] min-w-[236px] py-2.5 rounded-[10px] text-center text-deep_orange-400 text-xl">
                  Never Stop Learning
                </Button>
                <div className="flex flex-col gap-[30px] items-start justify-start w-full">
                  <Text
                    className="leading-[75.00px] md:text-5xl text-[65px] text-gray-900"
                    size="txtInterBold65"
                  >
                    <>
                      Grow up your skills
                      <br />
                      by online courses
                      <br />
                      with Educatsy
                    </>
                  </Text>
                  <Text
                    className="leading-[30.00px] max-w-[619px] md:max-w-full text-base text-gray-700"
                    size="txtInterRegular16"
                  >
                    Educatsy is a Global training provider based across the UK
                    that specializes in accredited and bespoke training courses.
                    We crush the barriers to getting a degree.
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-col items-start justify-start pl-4 pr-2 py-2 rounded-[10px] w-full">
                  <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-full">
                    <div className="flex flex-1 flex-row gap-5 items-center justify-start w-full">
                      <SelectBox
                        className="sm:flex-1 font-medium leading-[normal] text-base text-gray-700_99 text-right w-[30%] sm:w-full"
                        placeholderClassName="text-gray-700_99"
                        indicator={
                          <Img
                            className="h-6 w-6"
                            src="images/img_arrowdown_red_300.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="frame7870"
                        options={kindergartenOptionsList}
                        isSearchable={false}
                        placeholder="Kindergarten"
                      />
                      <Line className="bg-bluegray-100 h-[30px] w-px" />
                      <Text
                        className="text-base text-gray-700_99 w-auto"
                        size="txtInterMedium16Gray70099"
                      >
                        Class/Course
                      </Text>
                    </div>
                    <Button
                      className="bg-red-300 cursor-pointer flex items-center justify-center min-w-[143px] px-[30px] py-[13px] rounded-[10px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-[5px]"
                          src="images/img_search_white_a700.svg"
                          alt="search"
                        />
                      }
                    >
                      <div className="font-medium sm:px-5 text-base text-center text-white-A700">
                        Search
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
              <Img
                className="flex-1 md:flex-none h-[699px] sm:h-auto max-h-[699px] object-cover sm:w-[] md:w-[]"
                src="images/img_image_699x619.png"
                alt="image"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:px-10 px-20 sm:px-5 w-full">
          <div className="flex flex-col gap-10 items-center justify-start max-w-7xl mx-auto w-full">
            <div className="flex flex-col gap-5 items-center justify-start max-w-[840px] w-full">
              <Text
                className="leading-[55.00px] sm:text-[35px] md:text-[41px] text-[45px] text-center text-gray-900"
                size="txtMetropolisBold45"
              >
                <>
                  High quality video, audio
                  <br />& live classes
                </>
              </Text>
              <Text
                className="leading-[30.00px] text-base text-center text-gray-700"
                size="txtInterRegular16"
              >
                <>
                  High-definition video is video of higher resolution and
                  quality than standard-definition. While there is no
                  standardized meaning for high-definition, generally any video
                  image with considerably more than
                  <br />
                  480 vertical scan lines or 576 vertical lines is considered
                  high-definition.
                </>
              </Text>
            </div>
            <Button className="bg-red-300 cursor-pointer font-medium min-w-[162px] py-5 rounded-[10px] text-base text-center text-white-A700">
              Visit Courses
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:px-10 px-20 sm:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center max-w-7xl mx-auto md:px-10 sm:px-5 w-full">
            <div className="h-[540px] relative w-full">
              <Img
                className="h-[540px] m-auto object-cover rounded-[16px] w-full"
                src="images/img_rectangle2868.png"
                alt="rectangle2868"
              />
              <div className="absolute bottom-[6%] flex flex-row sm:gap-10 inset-x-[0] items-end justify-between max-w-[1009px] mx-auto w-full">
                <Img
                  className="h-[215px] md:h-auto object-cover rounded-[16px] w-[210px]"
                  src="images/img_portraitlittlegirlcoloring.png"
                  alt="portraitlittleg"
                />
                <Button className="bg-deep_orange-400 flex h-[60px] items-center justify-center p-[13px] rounded-[50%] w-[60px]">
                  <Img
                    className="h-[33px]"
                    src="images/img_alarm.svg"
                    alt="alarm"
                  />
                </Button>
                <Button className="bg-red-300 flex h-[60px] items-center justify-center p-[18px] rounded-[50%] w-[60px]">
                  <Img
                    className="h-6"
                    src="images/img_arrowup.svg"
                    alt="arrowup"
                  />
                </Button>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start p-[15px] rounded-[10px] w-full">
                <div className="flex flex-row gap-5 items-center justify-start w-full">
                  <div className="bg-red-51 flex flex-col items-start justify-start p-5 rounded-[10px] w-[70px]">
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_volume.svg"
                      alt="volume"
                    />
                  </div>
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900 w-auto"
                    size="txtInterSemiBold25Gray900"
                  >
                    Audio Classes
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start p-[15px] rounded-[10px] w-full">
                <div className="flex flex-row gap-5 items-center justify-start w-full">
                  <div className="bg-gray-50 flex flex-col items-start justify-start p-5 rounded-[10px] w-[70px]">
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_user_red_300.svg"
                      alt="user"
                    />
                  </div>
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900 w-auto"
                    size="txtInterSemiBold25Gray900"
                  >
                    Live Classes
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start p-[15px] rounded-[10px] w-full">
                <div className="flex flex-row gap-5 items-center justify-start w-full">
                  <div className="bg-cyan-50 flex flex-col items-start justify-start p-5 rounded-[10px] w-[70px]">
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_play_green_a700.svg"
                      alt="play"
                    />
                  </div>
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900 w-auto"
                    size="txtInterSemiBold25Gray900"
                  >
                    Recorded Class
                  </Text>
                </div>
              </div>
            </List>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center max-w-7xl mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[52px] items-center justify-start w-full">
            <div className="flex flex-col gap-5 items-center justify-start w-full">
              <Text
                className="sm:text-[35px] md:text-[41px] text-[45px] text-center text-gray-900 w-full"
                size="txtMetropolisBold45"
              >
                Qualified lessons for students
              </Text>
              <Text
                className="leading-[30.00px] text-base text-center text-gray-700"
                size="txtInterRegular16"
              >
                <>
                  A lesson or class is a structured period of time where
                  learning is intended to occur. <br />
                  It involves one or more students being taught by a teacher or
                  instructor.
                </>
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-[25px] items-center justify-center w-full">
              <Button className="bg-gray-201 cursor-pointer font-medium min-w-[151px] py-5 rounded-[10px] text-base text-center text-gray-900">
                Kindergarten
              </Button>
              <Button className="bg-orange-200 cursor-pointer font-medium min-w-[152px] py-5 rounded-[10px] text-base text-center text-gray-900">
                High School
              </Button>
              <Button className="bg-gray-201 cursor-pointer font-medium min-w-[151px] py-5 rounded-[10px] text-base text-center text-gray-900">
                College
              </Button>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="gap-10 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col gap-[25px] items-center justify-start px-[15px] py-[30px] rounded-[15px] hover:shadow-bs1 hover:w-full w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-full">
                    <Img
                      className="h-[50px] w-[50px]"
                      src="images/img_download.svg"
                      alt="download"
                    />
                    <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-900 w-full"
                        size="txtInterSemiBold25Gray900"
                      >
                        Standard One
                      </Text>
                      <Text
                        className="leading-[30.00px] max-w-[260px] md:max-w-full text-base text-center text-gray-700"
                        size="txtInterRegular16"
                      >
                        Standard 1 is a foundation Standard that reflects 7
                        important concepts...
                      </Text>
                    </div>
                  </div>
                  <Button className="border border-red-300 border-solid cursor-pointer font-medium min-w-[161px] py-3 rounded-[5px] text-base text-center text-red-300">
                    Class Details
                  </Button>
                </div>
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col gap-[25px] items-center justify-start px-[15px] py-[30px] rounded-[15px] hover:shadow-bs1 hover:w-full w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-full">
                    <Img
                      className="h-[50px] w-[50px]"
                      src="images/img_download_gray_800.svg"
                      alt="download"
                    />
                    <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-900 w-full"
                        size="txtInterSemiBold25Gray900"
                      >
                        Standard Two
                      </Text>
                      <Text
                        className="leading-[30.00px] max-w-[260px] md:max-w-full text-base text-center text-gray-700"
                        size="txtInterRegular16"
                      >
                        Standard 2 builds on the foundations of Standard 1 and
                        includes requirements...
                      </Text>
                    </div>
                  </div>
                  <Button className="border border-red-300 border-solid cursor-pointer font-medium min-w-[161px] py-3 rounded-[5px] text-base text-center text-red-300">
                    Class Details
                  </Button>
                </div>
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col gap-[25px] items-center justify-start px-[15px] py-[30px] rounded-[15px] hover:shadow-bs1 shadow-bs1 hover:w-full w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-full">
                    <Img
                      className="h-[50px] w-[50px]"
                      src="images/img_whatsapp.svg"
                      alt="whatsapp"
                    />
                    <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-900 w-full"
                        size="txtInterSemiBold25Gray900"
                      >
                        Standard Three
                      </Text>
                      <Text
                        className="leading-[30.00px] max-w-[260px] md:max-w-full text-base text-center text-gray-700"
                        size="txtInterRegular16"
                      >
                        Standard 3 of the Aged Care Quality Standards applies to
                        all services delivering personal...
                      </Text>
                    </div>
                  </div>
                  <Button className="bg-red-300 cursor-pointer font-medium min-w-[161px] py-3 rounded-[5px] text-base text-center text-white-A700">
                    Class Details
                  </Button>
                </div>
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col gap-[25px] items-center justify-start px-[15px] py-[30px] rounded-[15px] hover:shadow-bs1 hover:w-full w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-full">
                    <Img
                      className="h-[50px] w-[50px]"
                      src="images/img_rewind.svg"
                      alt="rewind"
                    />
                    <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-900 w-full"
                        size="txtInterSemiBold25Gray900"
                      >
                        Standard Four
                      </Text>
                      <Text
                        className="leading-[30.00px] max-w-[260px] md:max-w-full text-base text-center text-gray-700"
                        size="txtInterRegular16"
                      >
                        Standard 4 of the Aged Care Quality Standards focuses on
                        services and supports...
                      </Text>
                    </div>
                  </div>
                  <Button className="border border-red-300 border-solid cursor-pointer font-medium min-w-[161px] py-3 rounded-[5px] text-base text-center text-red-300">
                    Class Details
                  </Button>
                </div>
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col gap-[25px] items-center justify-start px-[15px] py-[30px] rounded-[15px] hover:shadow-bs1 hover:w-full w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-full">
                    <Img
                      className="h-[50px] w-[50px]"
                      src="images/img_music.svg"
                      alt="music"
                    />
                    <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-900 w-full"
                        size="txtInterSemiBold25Gray900"
                      >
                        Standard Five
                      </Text>
                      <Text
                        className="leading-[30.00px] max-w-[260px] md:max-w-full text-base text-center text-gray-700"
                        size="txtInterRegular16"
                      >
                        Standard 5 Learning Resources. Learning Resources ensure
                        that the school has the...
                      </Text>
                    </div>
                  </div>
                  <Button className="border border-red-300 border-solid cursor-pointer font-medium min-w-[161px] py-3 rounded-[5px] text-base text-center text-red-300">
                    Class Details
                  </Button>
                </div>
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col gap-[25px] items-center justify-start px-[15px] py-[30px] rounded-[15px] hover:shadow-bs1 hover:w-full w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-full">
                    <Img
                      className="h-[50px] w-[50px]"
                      src="images/img_volume_deep_orange_500.svg"
                      alt="volume"
                    />
                    <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-900 w-full"
                        size="txtInterSemiBold25Gray900"
                      >
                        Standard Six
                      </Text>
                      <Text
                        className="leading-[30.00px] max-w-[260px] md:max-w-full text-base text-center text-gray-700"
                        size="txtInterRegular16"
                      >
                        Standard 6 requires an organisation to have a system to
                        resolve complaints...
                      </Text>
                    </div>
                  </div>
                  <Button className="border border-red-300 border-solid cursor-pointer font-medium min-w-[161px] py-3 rounded-[5px] text-base text-center text-red-300">
                    Class Details
                  </Button>
                </div>
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col gap-[25px] items-center justify-start px-[15px] py-[30px] rounded-[15px] hover:shadow-bs1 hover:w-full w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-full">
                    <Img
                      className="h-[50px] w-[50px]"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown"
                    />
                    <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-900 w-full"
                        size="txtInterSemiBold25Gray900"
                      >
                        Standard Seven
                      </Text>
                      <Text
                        className="leading-[30.00px] max-w-[260px] md:max-w-full text-base text-center text-gray-700"
                        size="txtInterRegular16"
                      >
                        Standard 7 Blood Management mandates that leaders of
                        health service organizations...
                      </Text>
                    </div>
                  </div>
                  <Button className="border border-red-300 border-solid cursor-pointer font-medium min-w-[161px] py-3 rounded-[5px] text-base text-center text-red-300">
                    Class Details
                  </Button>
                </div>
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col gap-[25px] items-center justify-start px-[15px] py-[30px] rounded-[15px] hover:shadow-bs1 hover:w-full w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-full">
                    <Img
                      className="h-[50px] w-[50px]"
                      src="images/img_info.svg"
                      alt="info"
                    />
                    <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-900 w-full"
                        size="txtInterSemiBold25Gray900"
                      >
                        Standard Eight
                      </Text>
                      <Text
                        className="leading-[30.00px] max-w-[260px] md:max-w-full text-base text-center text-gray-700"
                        size="txtInterRegular16"
                      >
                        Standard 8 Course from NCERT Solutions help students to
                        understand...
                      </Text>
                    </div>
                  </div>
                  <Button className="border border-red-300 border-solid cursor-pointer font-medium min-w-[161px] py-3 rounded-[5px] text-base text-center text-red-300">
                    Class Details
                  </Button>
                </div>
              </div>
            </div>
            <Button
              className="common-pointer bg-red-300 cursor-pointer font-medium min-w-[202px] py-5 rounded-[10px] text-base text-center text-white-A700"
              onClick={() => navigate("/eduvicourses")}
            >
              Visit More Classes
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:px-10 px-20 sm:px-5 w-full">
          <div className="bg-red-52 flex flex-col items-start justify-end max-w-7xl mx-auto md:px-5 py-[38px] rounded-[20px] w-full">
            <div className="flex md:flex-col flex-row gap-[21px] items-center justify-start md:pl-10 sm:pl-5 pl-[70px] w-full">
              <div className="flex flex-1 flex-col gap-[30px] items-start justify-start w-full">
                <Button className="bg-black-900 cursor-pointer font-medium leading-[normal] min-w-[169px] py-2.5 rounded-[10px] text-center text-white-A700 text-xl">
                  College Level
                </Button>
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <Text
                    className="leading-[55.00px] sm:text-[35px] md:text-[41px] text-[45px] text-gray-900"
                    size="txtMetropolisBold45"
                  >
                    <>
                      Don’t waste time in
                      <br />
                      COVID-19 pandemic.
                      <br />
                      Develop your skills.
                    </>
                  </Text>
                  <Text
                    className="leading-[30.00px] text-base text-gray-700"
                    size="txtInterRegular16"
                  >
                    <>
                      High-definition video is video of higher resolution and
                      quality than standard-definition. While there is no
                      standardized
                      <br />
                      meaning for high-definition, generally any video.
                    </>
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <Button className="bg-red-300 cursor-pointer font-medium min-w-[185px] py-5 rounded-[10px] text-base text-center text-white-A700">
                    Register Now
                  </Button>
                </div>
              </div>
              <Img
                className="h-[591px] sm:h-auto max-h-[591px] object-cover sm:w-[] md:w-[]"
                src="images/img_group7647.png"
                alt="group7647"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:px-10 px-20 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-center justify-center max-w-7xl mx-auto w-full">
            <Img
              className="h-[521px] sm:h-auto max-h-[521px] object-cover sm:w-[] md:w-[]"
              src="images/img_image_521x510.png"
              alt="image_Four"
            />
            <div className="flex flex-1 flex-col gap-10 items-start justify-start w-full">
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="leading-[55.00px] sm:text-[35px] md:text-[41px] text-[45px] text-gray-900"
                  size="txtMetropolisBold45"
                >
                  <>
                    Want to share your
                    <br />
                    knowledge? Join us
                    <br />a Mentor
                  </>
                </Text>
                <Text
                  className="leading-[30.00px] max-w-[690px] md:max-w-full text-base text-gray-700"
                  size="txtInterRegular16"
                >
                  High-definition video is video of higher resolution and
                  quality than standard-definition. While there is no
                  standardized meaning for high-definition, generally any video.
                </Text>
              </div>
              <Button
                className="common-pointer bg-red-300 cursor-pointer font-medium min-w-[204px] py-5 rounded-[10px] text-base text-center text-white-A700"
                onClick={() => navigate("/eduvijoinasteacher")}
              >
                Career Information
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

export default Home1Page;
