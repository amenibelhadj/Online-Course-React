import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, SelectBox, Text } from "components";
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

const EduviCoursesDetailsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col gap-12 items-start justify-start w-full">
          <EduviCoursesDetailsHeader className="flex flex-col gap-2 h-[74px] md:h-auto items-center justify-between px-20 md:px-5 py-[22px] w-full" />
          <div className="flex flex-col items-start justify-start md:px-10 px-20 sm:px-5 w-full">
            <div className="bg-gray-200 flex flex-col items-start justify-start max-w-7xl mx-auto md:px-5 px-[30px] py-[25px] rounded-[20px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[68px] items-start justify-start w-full">
                <div className="flex flex-1 flex-col gap-[30px] items-start justify-start w-full">
                  <Text
                    className="text-base text-black-900 tracking-[0.48px] w-full"
                    size="txtInterMedium16"
                  >
                    Home | Courses | Course Details
                  </Text>
                  <div className="flex flex-col gap-[30px] items-start justify-start w-full">
                    <div className="h-[455px] relative w-full">
                      <Img
                        className="h-[455px] m-auto object-cover rounded-[20px] w-full"
                        src="images/img_pexelsvanessagarcia6325959.png"
                        alt="pexelsvanessaga"
                      />
                      <Button className="absolute bg-red-300 flex h-[60px] inset-[0] items-center justify-center m-auto p-[22px] sm:px-5 rounded-[50%] w-[60px]">
                        <Img
                          className="h-4"
                          src="images/img_play.svg"
                          alt="play"
                        />
                      </Button>
                    </div>
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-full"
                      size="txtInterSemiBold25"
                    >
                      Maths - for Standard 3 Students | Episode 2
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-1 flex-col gap-[15px] h-[545px] md:h-auto items-start justify-between w-[382px] sm:w-full">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                    size="txtInterSemiBold25"
                  >
                    Course Playlists
                  </Text>
                  <div className="flex flex-col items-start justify-start w-full">
                    <List
                      className="flex flex-col gap-4 items-start w-full"
                      orientation="vertical"
                    >
                      <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-start justify-start hover:my-0 my-0 p-2.5 rounded-[10px] hover:shadow-bs w-full">
                        <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                          <Img
                            className="h-[50px] md:h-auto object-cover rounded-[5px] w-20"
                            src="images/img_image.png"
                            alt="image"
                          />
                          <div className="flex flex-col gap-[3px] items-start justify-start w-auto">
                            <Text
                              className="text-black-900 text-lg w-auto"
                              size="txtInterSemiBold18"
                            >
                              Maths - Introduction
                            </Text>
                            <Text
                              className="text-deep_orange-400 text-sm w-auto"
                              size="txtInterMedium14"
                            >
                              1:57
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-start justify-start hover:my-0 my-0 p-2.5 rounded-[10px] hover:shadow-bs shadow-bs w-full">
                        <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                          <Img
                            className="h-[50px] md:h-auto object-cover rounded-[5px] w-20"
                            src="images/img_image.png"
                            alt="image"
                          />
                          <div className="flex flex-col gap-[3px] items-start justify-start w-auto">
                            <Text
                              className="text-black-900 text-lg w-auto"
                              size="txtInterSemiBold18"
                            >
                              Maths - for Standard 3 St..
                            </Text>
                            <Text
                              className="text-deep_orange-400 text-sm w-auto"
                              size="txtInterMedium14"
                            >
                              5:43
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-start justify-start hover:my-0 my-0 p-2.5 rounded-[10px] hover:shadow-bs w-full">
                        <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                          <div className="h-[50px] relative w-20">
                            <Img
                              className="h-[50px] m-auto object-cover rounded-[5px] w-20 sm:w-full"
                              src="images/img_image_50x80.png"
                              alt="image"
                            />
                            <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-1 rounded-[50%] w-[18px]">
                              <Img
                                className="h-2.5 w-2.5"
                                src="images/img_lock.svg"
                                alt="lock"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col gap-[3px] items-start justify-start w-auto">
                            <Text
                              className="text-black-900_87 text-lg w-auto"
                              size="txtInterSemiBold18Black90087"
                            >
                              Maths - for Standard 3 St..
                            </Text>
                            <Text
                              className="text-deep_orange-400_87 text-sm w-auto"
                              size="txtInterMedium14Deeporange40087"
                            >
                              8:11
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="hover:cursor-pointer flex flex-1 flex-col items-center justify-start hover:my-0 my-0 hover:shadow-bs w-full">
                        <div className="bg-white-A700_87 flex flex-col items-start justify-start p-2.5 rounded-[10px] w-[382px] sm:w-full">
                          <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                            <div className="h-[50px] relative w-20">
                              <Img
                                className="h-[50px] m-auto object-cover rounded-[5px] w-20 sm:w-full"
                                src="images/img_image_50x80.png"
                                alt="image"
                              />
                              <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-1 rounded-[50%] w-[18px]">
                                <Img
                                  className="h-2.5 w-2.5"
                                  src="images/img_lock.svg"
                                  alt="lock"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col gap-[3px] items-start justify-start w-auto">
                              <Text
                                className="text-black-900_87 text-lg w-auto"
                                size="txtInterSemiBold18Black90087"
                              >
                                Maths - for Standard 3 St..
                              </Text>
                              <Text
                                className="text-deep_orange-400_87 text-sm w-auto"
                                size="txtInterMedium14Deeporange40087"
                              >
                                6:10
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hover:cursor-pointer flex flex-1 flex-col items-center justify-start hover:my-0 my-0 hover:shadow-bs w-full">
                        <div className="bg-white-A700_87 flex flex-col items-start justify-start p-2.5 rounded-[10px] w-[382px] sm:w-full">
                          <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                            <div className="h-[50px] relative w-20">
                              <Img
                                className="h-[50px] m-auto object-cover rounded-[5px] w-20 sm:w-full"
                                src="images/img_image_50x80.png"
                                alt="image"
                              />
                              <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-1 rounded-[50%] w-[18px]">
                                <Img
                                  className="h-2.5 w-2.5"
                                  src="images/img_lock.svg"
                                  alt="lock"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col gap-[3px] items-start justify-start w-auto">
                              <Text
                                className="text-black-900_87 text-lg w-auto"
                                size="txtInterSemiBold18Black90087"
                              >
                                Maths - for Standard 3 St..
                              </Text>
                              <Text
                                className="text-deep_orange-400_87 text-sm w-auto"
                                size="txtInterMedium14Deeporange40087"
                              >
                                10:00
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hover:cursor-pointer flex flex-1 flex-col items-center justify-start hover:my-0 my-0 hover:shadow-bs w-full">
                        <div className="bg-white-A700_87 flex flex-col items-start justify-start p-2.5 rounded-[10px] w-[382px] sm:w-full">
                          <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                            <div className="h-[50px] relative w-20">
                              <Img
                                className="h-[50px] m-auto object-cover rounded-[5px] w-20 sm:w-full"
                                src="images/img_image_50x80.png"
                                alt="image"
                              />
                              <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-1 rounded-[50%] w-[18px]">
                                <Img
                                  className="h-2.5 w-2.5"
                                  src="images/img_lock.svg"
                                  alt="lock"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col gap-[3px] items-start justify-start w-auto">
                              <Text
                                className="text-black-900_87 text-lg w-auto"
                                size="txtInterSemiBold18Black90087"
                              >
                                Maths - for Standard 3 St..
                              </Text>
                              <Text
                                className="text-deep_orange-400_87 text-sm w-auto"
                                size="txtInterMedium14Deeporange40087"
                              >
                                7:53
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start md:px-10 px-20 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-10 items-start justify-start max-w-7xl mx-auto w-full">
            <div className="flex flex-1 flex-col gap-[25px] items-start justify-start max-w-[840px] w-full">
              <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-full"
                  size="txtInterSemiBold30"
                >
                  Course Details
                </Text>
                <Text
                  className="leading-[30.00px] text-base text-gray-700"
                  size="txtInterRegular16"
                >
                  <>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis
                    consectetur adipiscing elit.
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis
                    consectetur adipiscing elit.
                  </>
                </Text>
              </div>
              <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-full"
                  size="txtInterSemiBold30"
                >
                  Certification
                </Text>
                <Text
                  className="leading-[30.00px] max-w-[840px] md:max-w-full text-base text-gray-700"
                  size="txtInterRegular16"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis consectetur adipiscing
                  elit.
                </Text>
              </div>
              <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-full"
                  size="txtInterSemiBold30"
                >
                  Who this course is for
                </Text>
                <Text
                  className="leading-[30.00px] max-w-[840px] md:max-w-full text-base text-gray-700"
                  size="txtInterRegular16"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis consectetur adipiscing
                  elit.
                </Text>
              </div>
              <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-full"
                  size="txtInterSemiBold30"
                >
                  <>What you&#39;ll learn in this course:</>
                </Text>
                <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start w-full">
                  <div className="bg-deep_orange-400 h-2.5 rounded-[50%] w-2.5"></div>
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtInterRegular16Black900"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start w-full">
                  <div className="bg-deep_orange-400 h-2.5 rounded-[50%] w-2.5"></div>
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtInterRegular16Black900"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start w-full">
                  <div className="bg-deep_orange-400 h-2.5 rounded-[50%] w-2.5"></div>
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtInterRegular16Black900"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start w-full">
                  <div className="bg-deep_orange-400 h-2.5 rounded-[50%] w-2.5"></div>
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtInterRegular16Black900"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start w-full">
                  <div className="bg-deep_orange-400 h-2.5 rounded-[50%] w-2.5"></div>
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtInterRegular16Black900"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[23px] items-start justify-start w-full">
              <div className="bg-white-A700 flex flex-col gap-[21px] items-start justify-start px-5 py-[26px] rounded-[10px] w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="text-gray-700 text-xl w-auto"
                    size="txtInterSemiBold20"
                  >
                    Price
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-deep_orange-400 text-right sm:text-xl w-auto"
                    size="txtInterSemiBold24"
                  >
                    $49.00
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="text-gray-700 text-xl w-auto"
                    size="txtInterSemiBold20"
                  >
                    Instructor
                  </Text>
                  <Text
                    className="text-black-900 text-right text-xl underline w-auto"
                    size="txtInterSemiBold20Black900"
                  >
                    Wade Warren
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="text-gray-700 text-xl w-auto"
                    size="txtInterSemiBold20"
                  >
                    Ratings
                  </Text>
                  <Img
                    className="h-4 w-[92px]"
                    src="images/img_mobile.svg"
                    alt="mobile"
                  />
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="text-gray-700 text-xl w-auto"
                    size="txtInterSemiBold20"
                  >
                    Durations
                  </Text>
                  <Text
                    className="text-black-900 text-right text-xl w-auto"
                    size="txtInterSemiBold20Black900"
                  >
                    10 Days
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="text-gray-700 text-xl w-auto"
                    size="txtInterSemiBold20"
                  >
                    Lessons
                  </Text>
                  <Text
                    className="text-black-900 text-right text-xl w-auto"
                    size="txtInterSemiBold20Black900"
                  >
                    30
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="text-gray-700 text-xl w-auto"
                    size="txtInterSemiBold20"
                  >
                    Quizzes
                  </Text>
                  <Text
                    className="text-black-900 text-right text-xl w-auto"
                    size="txtInterSemiBold20Black900"
                  >
                    5
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="text-gray-700 text-xl w-auto"
                    size="txtInterSemiBold20"
                  >
                    Certificate
                  </Text>
                  <Text
                    className="text-black-900 text-right text-xl w-auto"
                    size="txtInterSemiBold20Black900"
                  >
                    Yes
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="text-gray-700 text-xl w-auto"
                    size="txtInterSemiBold20"
                  >
                    Language
                  </Text>
                  <Text
                    className="text-black-900 text-right text-xl w-auto"
                    size="txtInterSemiBold20Black900"
                  >
                    English
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="text-gray-700 text-xl w-auto"
                    size="txtInterSemiBold20"
                  >
                    Access
                  </Text>
                  <Text
                    className="text-black-900 text-right text-xl w-auto"
                    size="txtInterSemiBold20Black900"
                  >
                    Lifetime
                  </Text>
                </div>
              </div>
              <Button
                className="common-pointer bg-red-300 cursor-pointer font-medium py-[19px] rounded-[5px] text-center text-lg text-white-A700 w-full"
                onClick={() => navigate("/eduvicoursespricing")}
              >
                Purchase Course
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-metropolis items-start justify-start md:px-10 px-20 sm:px-5 w-full">
          <div className="flex flex-col gap-10 items-start justify-start max-w-7xl mx-auto w-full">
            <Text
              className="sm:text-[35px] md:text-[41px] text-[45px] text-gray-900 w-full"
              size="txtMetropolisBold45"
            >
              Similar Courses
            </Text>
            <div className="flex flex-col font-inter items-start justify-start w-full">
              <div className="gap-10 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 sm:flex-col flex-row gap-6 items-end justify-start p-[15px] rounded-[10px] hover:shadow-bs1 shadow-bs1 hover:w-full w-full">
                  <div className="flex flex-1 sm:flex-col flex-row gap-[15px] items-center justify-start w-full">
                    <Img
                      className="h-[103px] md:h-auto max-h-[103px] object-cover rounded-[10px] sm:w-[]"
                      src="images/img_image_103x160.png"
                      alt="image"
                    />
                    <div className="flex flex-1 flex-col gap-[13px] items-start justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                        size="txtInterSemiBold24Gray900"
                      >
                        The Three Musketeers
                      </Text>
                      <Img
                        className="h-5 w-28"
                        src="images/img_star_amber_500.svg"
                        alt="star"
                      />
                      <Text
                        className="text-2xl md:text-[22px] text-deep_orange-400 sm:text-xl w-full"
                        size="txtInterSemiBold24"
                      >
                        $40.00
                      </Text>
                    </div>
                  </div>
                  <Button className="bg-red-300 flex h-11 items-center justify-center p-2.5 rounded-md w-11">
                    <Img
                      className="h-6"
                      src="images/img_lock_white_a700.svg"
                      alt="lock"
                    />
                  </Button>
                </div>
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 sm:flex-col flex-row gap-6 items-end justify-start p-[15px] rounded-[10px] hover:shadow-bs1 hover:w-full w-full">
                  <div className="flex flex-1 sm:flex-col flex-row gap-[15px] items-center justify-start w-full">
                    <Img
                      className="h-[103px] md:h-auto max-h-[103px] object-cover rounded-[10px] sm:w-[]"
                      src="images/img_image_1.png"
                      alt="image"
                    />
                    <div className="flex flex-1 flex-col gap-[13px] items-start justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                        size="txtInterSemiBold24Gray900"
                      >
                        The Three Musketeers
                      </Text>
                      <Img
                        className="h-5 w-28"
                        src="images/img_star_amber_500.svg"
                        alt="star"
                      />
                      <Text
                        className="text-2xl md:text-[22px] text-deep_orange-400 sm:text-xl w-full"
                        size="txtInterSemiBold24"
                      >
                        $40.00
                      </Text>
                    </div>
                  </div>
                  <Button className="bg-red-50 flex h-11 items-center justify-center p-2.5 rounded-md w-11">
                    <Img className="h-6" src="images/img_bag.svg" alt="bag" />
                  </Button>
                </div>
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 sm:flex-col flex-row gap-6 items-end justify-start p-[15px] rounded-[10px] hover:shadow-bs1 hover:w-full w-full">
                  <div className="flex flex-1 sm:flex-col flex-row gap-[15px] items-center justify-start w-full">
                    <Img
                      className="h-[103px] md:h-auto max-h-[103px] object-cover rounded-[10px] sm:w-[]"
                      src="images/img_image_2.png"
                      alt="image"
                    />
                    <div className="flex flex-1 flex-col gap-[13px] items-start justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                        size="txtInterSemiBold24Gray900"
                      >
                        The Three Musketeers
                      </Text>
                      <Img
                        className="h-5 w-28"
                        src="images/img_star_amber_500.svg"
                        alt="star"
                      />
                      <Text
                        className="text-2xl md:text-[22px] text-deep_orange-400 sm:text-xl w-full"
                        size="txtInterSemiBold24"
                      >
                        $40.00
                      </Text>
                    </div>
                  </div>
                  <Button className="bg-red-50 flex h-11 items-center justify-center p-2.5 rounded-md w-11">
                    <Img className="h-6" src="images/img_bag.svg" alt="bag" />
                  </Button>
                </div>
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 sm:flex-col flex-row gap-6 items-end justify-start p-[15px] rounded-[10px] hover:shadow-bs1 hover:w-full w-full">
                  <div className="flex flex-1 sm:flex-col flex-row gap-[15px] items-center justify-start w-full">
                    <Img
                      className="h-[103px] md:h-auto max-h-[103px] object-cover rounded-[10px] sm:w-[]"
                      src="images/img_image_3.png"
                      alt="image"
                    />
                    <div className="flex flex-1 flex-col gap-[13px] items-start justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                        size="txtInterSemiBold24Gray900"
                      >
                        The Three Musketeers
                      </Text>
                      <Img
                        className="h-5 w-28"
                        src="images/img_star_amber_500.svg"
                        alt="star"
                      />
                      <Text
                        className="text-2xl md:text-[22px] text-deep_orange-400 sm:text-xl w-full"
                        size="txtInterSemiBold24"
                      >
                        $40.00
                      </Text>
                    </div>
                  </div>
                  <Button className="bg-red-50 flex h-11 items-center justify-center p-2.5 rounded-md w-11">
                    <Img className="h-6" src="images/img_bag.svg" alt="bag" />
                  </Button>
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

export default EduviCoursesDetailsPage;
