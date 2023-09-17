import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, SelectBox, Text } from "components";
import EduviCoursesDetailsFooterlogoOne from "components/EduviCoursesDetailsFooterlogoOne";
import EduviCoursesDetailsHeader from "components/EduviCoursesDetailsHeader";

import { CloseSVG } from "../../assets/images";

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
const sortbyOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const EduviCoursesPage = () => {
  const navigate = useNavigate();

  const [searchvalue, setSearchvalue] = React.useState("");

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
                  Home | Courses
                </Text>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <Text
                    className="leading-[50.00px] sm:text-[35px] md:text-[41px] text-[45px] text-gray-900"
                    size="txtInterSemiBold45"
                  >
                    <>
                      Educatsy Courses
                      <br />
                      For All Standards
                    </>
                  </Text>
                  <div className="font-airbnbcerealapp h-[210px] relative w-[32%] md:w-full">
                    <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                      <div className="flex flex-col md:gap-10 gap-[85px] justify-start w-full">
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[26px] w-[32%] md:w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row items-center justify-between w-full">
                              <List
                                className="sm:flex-col flex-row gap-[7px] grid grid-cols-2 w-[16%]"
                                orientation="horizontal"
                              >
                                <div className="flex flex-col sm:ml-[0] relative w-full">
                                  <Text
                                    className="mx-auto text-[12.61px] text-center text-deep_orange-400"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="mt-[-0.01px] mx-auto text-[12.61px] text-center text-deep_orange-400 z-[1]"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                </div>
                                <div className="flex flex-col sm:ml-[0] relative w-full">
                                  <Text
                                    className="mx-auto text-[12.61px] text-center text-deep_orange-400"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="mt-[-0.01px] mx-auto text-[12.61px] text-center text-deep_orange-400 z-[1]"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                </div>
                              </List>
                              <div className="md:h-[17px] h-[31px] relative w-[7%]">
                                <Text
                                  className="absolute right-[0] text-[12.61px] text-center text-deep_orange-400 top-[0]"
                                  size="txtAirbnbCerealAppMedium1261"
                                >
                                  +
                                </Text>
                                <Text
                                  className="absolute bottom-[0] left-[0] text-[12.61px] text-center text-deep_orange-400"
                                  size="txtAirbnbCerealAppMedium1261"
                                >
                                  +
                                </Text>
                              </div>
                              <div className="flex flex-col relative w-[5%]">
                                <Text
                                  className="mx-auto text-[12.61px] text-center text-deep_orange-400"
                                  size="txtAirbnbCerealAppMedium1261"
                                >
                                  +
                                </Text>
                                <Text
                                  className="mt-[-0.01px] mx-auto text-[12.61px] text-center text-deep_orange-400 z-[1]"
                                  size="txtAirbnbCerealAppMedium1261"
                                >
                                  +
                                </Text>
                              </div>
                              <div className="flex flex-col relative w-[5%]">
                                <Text
                                  className="mx-auto text-[12.61px] text-center text-deep_orange-400"
                                  size="txtAirbnbCerealAppMedium1261"
                                >
                                  +
                                </Text>
                                <Text
                                  className="mt-[-0.01px] mx-auto text-[12.61px] text-center text-deep_orange-400 z-[1]"
                                  size="txtAirbnbCerealAppMedium1261"
                                >
                                  +
                                </Text>
                              </div>
                              <List
                                className="sm:flex-col flex-row gap-[7px] grid grid-cols-5 w-[47%]"
                                orientation="horizontal"
                              >
                                <div className="flex flex-col sm:ml-[0] relative w-full">
                                  <Text
                                    className="mx-auto text-[12.61px] text-center text-deep_orange-400"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="mt-[-0.01px] mx-auto text-[12.61px] text-center text-deep_orange-400 z-[1]"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                </div>
                                <div className="flex flex-col sm:ml-[0] relative w-full">
                                  <Text
                                    className="mx-auto text-[12.61px] text-center text-deep_orange-400"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="mt-[-0.01px] mx-auto text-[12.61px] text-center text-deep_orange-400 z-[1]"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                </div>
                                <div className="flex flex-col sm:ml-[0] relative w-full">
                                  <Text
                                    className="mx-auto text-[12.61px] text-center text-deep_orange-400"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="mt-[-0.01px] mx-auto text-[12.61px] text-center text-deep_orange-400 z-[1]"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                </div>
                                <div className="flex flex-col sm:ml-[0] relative w-full">
                                  <Text
                                    className="mx-auto text-[12.61px] text-center text-deep_orange-400"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="mt-[-0.01px] mx-auto text-[12.61px] text-center text-deep_orange-400 z-[1]"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                </div>
                                <div className="flex flex-col sm:ml-[0] relative w-full">
                                  <Text
                                    className="mx-auto text-[12.61px] text-center text-deep_orange-400"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="mt-[-0.01px] mx-auto text-[12.61px] text-center text-deep_orange-400 z-[1]"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                </div>
                              </List>
                            </div>
                            <div className="flex flex-row items-center justify-between w-full">
                              <div className="flex flex-col items-center justify-start w-[16%]">
                                <div className="flex flex-row gap-2 items-center justify-between w-full">
                                  <Text
                                    className="text-[12.61px] text-center text-deep_orange-400"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-[12.61px] text-center text-deep_orange-400"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-2 items-center justify-between w-full">
                                  <Text
                                    className="text-[12.61px] text-center text-deep_orange-400"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-[12.61px] text-center text-deep_orange-400"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-2 items-center justify-between w-full">
                                  <Text
                                    className="text-[12.61px] text-center text-deep_orange-400"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-[12.61px] text-center text-deep_orange-400"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-2 items-center justify-between w-full">
                                  <Text
                                    className="text-[12.61px] text-center text-deep_orange-400"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-[12.61px] text-center text-deep_orange-400"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-start w-[5%]">
                                <div className="md:h-[15px] h-[30px] relative w-full">
                                  <Text
                                    className="absolute inset-x-[0] mx-auto text-[12.61px] text-center text-deep_orange-400 top-[0] w-max"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="absolute bottom-[0] inset-x-[0] mx-auto text-[12.61px] text-center text-deep_orange-400 w-max"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                </div>
                                <div className="md:h-[15px] h-[30px] relative w-full">
                                  <Text
                                    className="absolute inset-x-[0] mx-auto text-[12.61px] text-center text-deep_orange-400 top-[0] w-max"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="absolute bottom-[0] inset-x-[0] mx-auto text-[12.61px] text-center text-deep_orange-400 w-max"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                </div>
                              </div>
                              <List
                                className="flex flex-col gap-px w-[68%]"
                                orientation="vertical"
                              >
                                <div className="flex flex-row items-center justify-between my-0 w-full">
                                  <Text
                                    className="text-[12.61px] text-center text-deep_orange-400"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-[12.61px] text-center text-deep_orange-400"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-[12.61px] text-center text-deep_orange-400"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-[12.61px] text-center text-deep_orange-400"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-[12.61px] text-center text-deep_orange-400"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-[12.61px] text-center text-deep_orange-400"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-[12.61px] text-center text-deep_orange-400"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                </div>
                                <div className="flex flex-row items-center justify-between my-0 w-full">
                                  <Text
                                    className="text-[12.61px] text-center text-deep_orange-400"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-[12.61px] text-center text-deep_orange-400"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-[12.61px] text-center text-deep_orange-400"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-[12.61px] text-center text-deep_orange-400"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-[12.61px] text-center text-deep_orange-400"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-[12.61px] text-center text-deep_orange-400"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-[12.61px] text-center text-deep_orange-400"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                </div>
                                <div className="flex flex-row items-center justify-between my-0 w-full">
                                  <Text
                                    className="text-[12.61px] text-center text-deep_orange-400"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-[12.61px] text-center text-deep_orange-400"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-[12.61px] text-center text-deep_orange-400"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-[12.61px] text-center text-deep_orange-400"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-[12.61px] text-center text-deep_orange-400"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-[12.61px] text-center text-deep_orange-400"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-[12.61px] text-center text-deep_orange-400"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                </div>
                                <div className="flex flex-row items-center justify-between my-0 w-full">
                                  <Text
                                    className="text-[12.61px] text-center text-deep_orange-400"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-[12.61px] text-center text-deep_orange-400"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-[12.61px] text-center text-deep_orange-400"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-[12.61px] text-center text-deep_orange-400"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-[12.61px] text-center text-deep_orange-400"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-[12.61px] text-center text-deep_orange-400"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-[12.61px] text-center text-deep_orange-400"
                                    size="txtAirbnbCerealAppMedium1261"
                                  >
                                    +
                                  </Text>
                                </div>
                              </List>
                            </div>
                            <div className="flex flex-row items-center justify-between w-full">
                              <Text
                                className="text-[12.61px] text-center text-deep_orange-400"
                                size="txtAirbnbCerealAppMedium1261"
                              >
                                +
                              </Text>
                              <Text
                                className="text-[12.61px] text-center text-deep_orange-400"
                                size="txtAirbnbCerealAppMedium1261"
                              >
                                +
                              </Text>
                              <Text
                                className="text-[12.61px] text-center text-deep_orange-400"
                                size="txtAirbnbCerealAppMedium1261"
                              >
                                +
                              </Text>
                              <Text
                                className="text-[12.61px] text-center text-deep_orange-400"
                                size="txtAirbnbCerealAppMedium1261"
                              >
                                +
                              </Text>
                              <Text
                                className="text-[12.61px] text-center text-deep_orange-400"
                                size="txtAirbnbCerealAppMedium1261"
                              >
                                +
                              </Text>
                              <Text
                                className="text-[12.61px] text-center text-deep_orange-400"
                                size="txtAirbnbCerealAppMedium1261"
                              >
                                +
                              </Text>
                              <Text
                                className="text-[12.61px] text-center text-deep_orange-400"
                                size="txtAirbnbCerealAppMedium1261"
                              >
                                +
                              </Text>
                              <Text
                                className="text-[12.61px] text-center text-deep_orange-400"
                                size="txtAirbnbCerealAppMedium1261"
                              >
                                +
                              </Text>
                              <Text
                                className="text-[12.61px] text-center text-deep_orange-400"
                                size="txtAirbnbCerealAppMedium1261"
                              >
                                +
                              </Text>
                              <Text
                                className="text-[12.61px] text-center text-deep_orange-400"
                                size="txtAirbnbCerealAppMedium1261"
                              >
                                +
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="backdrop-opacity-[0.5] bg-black-900_cc blur-[81.00px] h-3.5 rounded-[194px] w-full"></div>
                      </div>
                    </div>
                    <Img
                      className="absolute h-[210px] inset-[0] justify-center m-auto object-cover w-[97%]"
                      src="images/img_image_210x374.png"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-12 items-center justify-start w-full">
          <div className="flex flex-col items-center justify-center md:px-10 px-20 sm:px-5 w-full">
            <div className="flex flex-row flex-wrap gap-5 items-center justify-center max-w-7xl mx-auto w-full">
              <Button className="bg-white-A700 cursor-pointer font-medium min-w-[148px] py-5 rounded-[10px] text-base text-center text-gray-900">
                All Courses
              </Button>
              <Button className="bg-white-A700 cursor-pointer font-medium min-w-[143px] py-5 rounded-[10px] text-base text-center text-gray-900">
                Kindergarten
              </Button>
              <Button className="bg-orange-200 cursor-pointer font-medium min-w-[152px] py-5 rounded-[10px] text-base text-center text-white-A700">
                High School
              </Button>
              <Button className="bg-white-A700 cursor-pointer font-medium min-w-[119px] py-5 rounded-[10px] text-base text-center text-gray-900">
                College
              </Button>
              <Button className="bg-white-A700 cursor-pointer font-medium min-w-[137px] py-5 rounded-[10px] text-base text-center text-gray-900">
                Computer
              </Button>
              <Button className="bg-white-A700 cursor-pointer font-medium min-w-[121px] py-5 rounded-[10px] text-base text-center text-gray-900">
                Science
              </Button>
              <Button className="bg-white-A700 cursor-pointer font-medium min-w-[151px] py-5 rounded-[10px] text-base text-center text-gray-900">
                Engineering
              </Button>
              <Button className="bg-white-A700 cursor-pointer font-medium min-w-[160px] py-5 rounded-[10px] text-base text-center text-deep_orange-400">
                More Courses
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start md:px-10 px-20 sm:px-5 w-full">
            <div
              className="common-pointer flex flex-col gap-6 items-center justify-start max-w-7xl mx-auto w-full"
              onClick={() => navigate("/")}
            >
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900 w-full"
                size="txtInterSemiBold30Gray900"
              >
                Standard Classes
              </Text>
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
                          Standard 3 of the Aged Care Quality Standards applies
                          to all services delivering personal...
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
                          Standard 4 of the Aged Care Quality Standards focuses
                          on services and supports...
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
                          Standard 5 Learning Resources. Learning Resources
                          ensure that the school has the...
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
                          Standard 6 requires an organisation to have a system
                          to resolve complaints...
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
                          Standard 8 Course from NCERT Solutions help students
                          to understand...
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
                        src="images/img_volume_red_500.svg"
                        alt="volume"
                      />
                      <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                        <Text
                          className="sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-900 w-full"
                          size="txtInterSemiBold25Gray900"
                        >
                          Standard Nine
                        </Text>
                        <Text
                          className="leading-[30.00px] max-w-[260px] md:max-w-full text-base text-center text-gray-700"
                          size="txtInterRegular16"
                        >
                          Standard 5 Learning Resources. Learning Resources
                          ensure that the school has the...
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
                        src="images/img_group.svg"
                        alt="group"
                      />
                      <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                        <Text
                          className="sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-900 w-full"
                          size="txtInterSemiBold25Gray900"
                        >
                          O- Level
                        </Text>
                        <Text
                          className="leading-[30.00px] max-w-[260px] md:max-w-full text-base text-center text-gray-700"
                          size="txtInterRegular16"
                        >
                          Standard 6 requires an organisation to have a system
                          to resolve complaints...
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
                        src="images/img_arrowup_deep_orange_500.svg"
                        alt="arrowup"
                      />
                      <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                        <Text
                          className="sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-900 w-full"
                          size="txtInterSemiBold25Gray900"
                        >
                          A- Level
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start md:px-10 px-20 sm:px-5 w-full">
          <div className="flex flex-col gap-[50px] items-center justify-start max-w-7xl mx-auto w-full">
            <div className="flex flex-col gap-10 items-start justify-start w-full">
              <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900 w-auto"
                  size="txtInterSemiBold30Gray900"
                >
                  Other Courses For High School
                </Text>
                <div className="flex sm:flex-col flex-row gap-[42px] items-start justify-start w-full">
                  <Input
                    name="search"
                    placeholder="Search Class, Course, Book Name"
                    value={searchvalue}
                    onChange={(e) => setSearchvalue(e)}
                    className="font-medium leading-[normal] p-0 placeholder:text-gray-700_99 text-base text-gray-700_99 text-left w-full"
                    wrapClassName="bg-white-A700 flex flex-1 max-w-[838px] px-[19px] py-[18px] rounded-[10px] w-full"
                    suffix={
                      searchvalue?.length > 0 ? (
                        <CloseSVG
                          className="cursor-pointer h-6 ml-[35px] my-auto"
                          onClick={() => setSearchvalue("")}
                          fillColor="#5d5a6f99"
                          height={24}
                          width={24}
                          viewBox="0 0 24 24"
                        />
                      ) : (
                        <Img
                          className="cursor-pointer h-6 ml-[35px] my-auto"
                          src="images/img_search.svg"
                          alt="search"
                        />
                      )
                    }
                  ></Input>
                  <SelectBox
                    className="bg-white-A700 flex-1 sm:flex-1 font-medium leading-[normal] px-[15px] py-[18px] rounded-[10px] text-base text-gray-700_99 text-left w-[32%] sm:w-full"
                    placeholderClassName="text-gray-700_99"
                    indicator={
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowdown_red_300.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="sortby"
                    options={sortbyOptionsList}
                    isSearchable={false}
                    placeholder="Sort by: Latest"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="gap-10 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
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
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[19px] items-center justify-center w-full">
              <Button className="bg-white-A700 flex h-11 items-center justify-center p-4 rounded-md w-11">
                <Img src="images/img_arrowleft.svg" alt="arrowleft" />
              </Button>
              <Text
                className="text-base text-gray-900 w-auto"
                size="txtInterMedium16Gray900"
              >
                Page
              </Text>
              <Button className="bg-white-A700 cursor-pointer font-medium leading-[normal] min-w-[42px] py-[9px] rounded-lg text-bluegray-800 text-center text-lg">
                5
              </Button>
              <Text
                className="text-base text-gray-900 w-auto"
                size="txtInterMedium16Gray900"
              >
                of 80
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
                  alt="ellipse170_One"
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

export default EduviCoursesPage;
