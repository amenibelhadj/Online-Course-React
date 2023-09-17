import React from "react";

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

const EduviShopPage = () => {
  const [searchvalue, setSearchvalue] = React.useState("");

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
                  Home | Shop
                </Text>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <Text
                    className="leading-[50.00px] sm:text-[35px] md:text-[41px] text-[45px] text-gray-900"
                    size="txtInterSemiBold45"
                  >
                    <>
                      Educatsy Online
                      <br />
                      Book Shop
                    </>
                  </Text>
                  <Img
                    className="md:flex-1 h-[210px] sm:h-auto object-cover w-[374px] md:w-full"
                    src="images/img_kisspngbookcas.png"
                    alt="kisspngbookcas"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-10 items-start justify-center md:px-10 px-20 sm:px-5 w-full">
          <List
            className="flex flex-col gap-10 items-start w-auto"
            orientation="vertical"
          >
            <div className="flex flex-col gap-[17px] items-start justify-start my-0 w-[400px] sm:w-full">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-full"
                size="txtInterSemiBold30"
              >
                Popular Books
              </Text>
              <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                <div className="bg-white-A700 flex flex-col items-start justify-start sm:px-5 px-[25px] py-[22px] rounded-[10px] w-full">
                  <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                    <Img
                      className="h-[90px] md:h-auto max-h-[90px] object-cover rounded-[5px]"
                      src="images/img_image14.png"
                      alt="imageFourteen"
                    />
                    <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                      <Img
                        className="h-4 w-[92px]"
                        src="images/img_mobile.svg"
                        alt="mobile"
                      />
                      <Text
                        className="leading-[20.00px] text-black-900 text-lg"
                        size="txtInterSemiBold18"
                      >
                        <>
                          The Three Musketeers, by
                          <br />
                          Alexandre Dumas
                        </>
                      </Text>
                      <Text
                        className="text-lg text-red-300 w-full"
                        size="txtInterSemiBold18Red300"
                      >
                        $39.00
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col items-start justify-start sm:px-5 px-[25px] py-[22px] rounded-[10px] w-full">
                  <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                    <Img
                      className="h-[90px] md:h-auto max-h-[90px] object-cover rounded-[5px]"
                      src="images/img_image_90x75.png"
                      alt="image"
                    />
                    <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                      <Img
                        className="h-4 w-[92px]"
                        src="images/img_mobile.svg"
                        alt="mobile_One"
                      />
                      <Text
                        className="leading-[20.00px] text-black-900 text-lg"
                        size="txtInterSemiBold18"
                      >
                        <>
                          The Three Musketeers, by
                          <br />
                          Alexandre Dumas
                        </>
                      </Text>
                      <Text
                        className="text-lg text-red-300 w-full"
                        size="txtInterSemiBold18Red300"
                      >
                        $39.00
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col items-start justify-start sm:px-5 px-[25px] py-[22px] rounded-[10px] w-full">
                  <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                    <Img
                      className="h-[90px] md:h-auto max-h-[90px] object-cover rounded-[5px]"
                      src="images/img_image_4.png"
                      alt="image_One"
                    />
                    <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                      <Img
                        className="h-4 w-[92px]"
                        src="images/img_mobile.svg"
                        alt="mobile_Two"
                      />
                      <Text
                        className="leading-[20.00px] text-black-900 text-lg"
                        size="txtInterSemiBold18"
                      >
                        <>
                          The Three Musketeers, by
                          <br />
                          Alexandre Dumas
                        </>
                      </Text>
                      <Text
                        className="text-lg text-red-300 w-full"
                        size="txtInterSemiBold18Red300"
                      >
                        $39.00
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Text
                className="text-red-300 text-xl w-auto"
                size="txtInterMedium20"
              >
                See More
              </Text>
            </div>
            <div className="flex flex-col gap-[17px] items-start justify-start my-0 w-[400px] sm:w-full">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-full"
                size="txtInterSemiBold30"
              >
                New Arrivals
              </Text>
              <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                <div className="bg-white-A700 flex flex-col items-start justify-start sm:px-5 px-[25px] py-[22px] rounded-[10px] w-full">
                  <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                    <Img
                      className="h-[90px] md:h-auto max-h-[90px] object-cover rounded-[5px]"
                      src="images/img_image14.png"
                      alt="imageFourteen"
                    />
                    <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                      <Img
                        className="h-4 w-[92px]"
                        src="images/img_mobile.svg"
                        alt="mobile"
                      />
                      <Text
                        className="leading-[20.00px] text-black-900 text-lg"
                        size="txtInterSemiBold18"
                      >
                        <>
                          The Three Musketeers, by
                          <br />
                          Alexandre Dumas
                        </>
                      </Text>
                      <Text
                        className="text-lg text-red-300 w-full"
                        size="txtInterSemiBold18Red300"
                      >
                        $39.00
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col items-start justify-start sm:px-5 px-[25px] py-[22px] rounded-[10px] w-full">
                  <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                    <Img
                      className="h-[90px] md:h-auto max-h-[90px] object-cover rounded-[5px]"
                      src="images/img_image_90x75.png"
                      alt="image"
                    />
                    <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                      <Img
                        className="h-4 w-[92px]"
                        src="images/img_mobile.svg"
                        alt="mobile_One"
                      />
                      <Text
                        className="leading-[20.00px] text-black-900 text-lg"
                        size="txtInterSemiBold18"
                      >
                        <>
                          The Three Musketeers, by
                          <br />
                          Alexandre Dumas
                        </>
                      </Text>
                      <Text
                        className="text-lg text-red-300 w-full"
                        size="txtInterSemiBold18Red300"
                      >
                        $39.00
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col items-start justify-start sm:px-5 px-[25px] py-[22px] rounded-[10px] w-full">
                  <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                    <Img
                      className="h-[90px] md:h-auto max-h-[90px] object-cover rounded-[5px]"
                      src="images/img_image_4.png"
                      alt="image_One"
                    />
                    <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                      <Img
                        className="h-4 w-[92px]"
                        src="images/img_mobile.svg"
                        alt="mobile_Two"
                      />
                      <Text
                        className="leading-[20.00px] text-black-900 text-lg"
                        size="txtInterSemiBold18"
                      >
                        <>
                          The Three Musketeers, by
                          <br />
                          Alexandre Dumas
                        </>
                      </Text>
                      <Text
                        className="text-lg text-red-300 w-full"
                        size="txtInterSemiBold18Red300"
                      >
                        $39.00
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Text
                className="text-red-300 text-xl w-auto"
                size="txtInterMedium20"
              >
                See More
              </Text>
            </div>
          </List>
          <div className="flex flex-1 flex-col gap-10 items-center justify-start w-full">
            <div className="flex flex-col gap-[30px] items-start justify-start w-full">
              <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start w-full">
                <Button className="bg-orange-200 cursor-pointer flex-1 font-medium py-5 rounded-[10px] text-base text-center text-white-A700 w-full">
                  All Books
                </Button>
                <Button className="bg-white-A700 cursor-pointer flex-1 font-medium py-5 rounded-[10px] text-base text-center text-gray-900 w-full">
                  Kindergarten
                </Button>
                <Button className="bg-white-A700 cursor-pointer flex-1 font-medium py-5 rounded-[10px] text-base text-center text-gray-900 w-full">
                  High School
                </Button>
                <Button className="bg-white-A700 cursor-pointer flex-1 font-medium py-5 rounded-[10px] text-base text-center text-gray-900 w-full">
                  College
                </Button>
              </div>
              <div className="flex md:flex-col flex-row gap-[15px] items-start justify-start w-full">
                <Input
                  name="search"
                  placeholder="Search Class, Course, Book Name"
                  value={searchvalue}
                  onChange={(e) => setSearchvalue(e)}
                  className="font-medium leading-[normal] p-0 placeholder:text-gray-700_99 text-base text-gray-700_99 text-left w-full"
                  wrapClassName="bg-white-A700 flex md:flex-1 px-[19px] py-[18px] rounded-[10px] w-[555px] md:w-full"
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
                  className="bg-white-A700 md:flex-1 font-medium leading-[normal] px-[15px] py-[18px] rounded-[10px] text-base text-gray-700_99 text-left w-[33%] md:w-full"
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
              <div className="flex flex-col items-start justify-start w-full">
                <div className="md:gap-5 gap-[15px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                    <div className="bg-white-A700 flex flex-col h-[280px] md:h-auto items-start justify-start p-5 rounded-[10px] w-full">
                      <Img
                        className="md:h-auto h-full object-cover rounded-[10px] w-full"
                        src="images/img_image_240x230.png"
                        alt="image"
                      />
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        className="text-gray-900 text-lg w-full"
                        size="txtInterSemiBold18Gray900"
                      >
                        The Three Musketeers
                      </Text>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="flex-1 text-lg text-red-300 w-auto"
                          size="txtInterSemiBold18Red300"
                        >
                          $40.00
                        </Text>
                        <Img
                          className="h-4 w-[92px]"
                          src="images/img_mobile.svg"
                          alt="mobile"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                    <div className="bg-white-A700 flex flex-col h-[280px] md:h-auto items-start justify-start p-5 rounded-[10px] w-full">
                      <Img
                        className="md:h-auto h-full object-cover rounded-[10px] w-full"
                        src="images/img_image_5.png"
                        alt="image"
                      />
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        className="text-gray-900 text-lg w-full"
                        size="txtInterSemiBold18Gray900"
                      >
                        The Three Musketeers
                      </Text>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="flex-1 text-lg text-red-300 w-auto"
                          size="txtInterSemiBold18Red300"
                        >
                          $40.00
                        </Text>
                        <Img
                          className="h-4 w-[92px]"
                          src="images/img_mobile.svg"
                          alt="mobile"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                    <div className="bg-white-A700 flex flex-col h-[280px] md:h-auto items-start justify-start p-5 rounded-[10px] w-full">
                      <Img
                        className="md:h-auto h-full object-cover rounded-[10px] w-full"
                        src="images/img_image_6.png"
                        alt="image"
                      />
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        className="text-gray-900 text-lg w-full"
                        size="txtInterSemiBold18Gray900"
                      >
                        The Three Musketeers
                      </Text>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="flex-1 text-lg text-red-300 w-auto"
                          size="txtInterSemiBold18Red300"
                        >
                          $40.00
                        </Text>
                        <Img
                          className="h-4 w-[92px]"
                          src="images/img_mobile.svg"
                          alt="mobile"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                    <div className="bg-white-A700 flex flex-col h-[280px] md:h-auto items-start justify-start p-5 rounded-[10px] w-full">
                      <Img
                        className="md:h-auto h-full object-cover rounded-[10px] w-full"
                        src="images/img_image_7.png"
                        alt="image"
                      />
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        className="text-gray-900 text-lg w-full"
                        size="txtInterSemiBold18Gray900"
                      >
                        The Three Musketeers
                      </Text>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="flex-1 text-lg text-red-300 w-auto"
                          size="txtInterSemiBold18Red300"
                        >
                          $40.00
                        </Text>
                        <Img
                          className="h-4 w-[92px]"
                          src="images/img_mobile.svg"
                          alt="mobile"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                    <div className="bg-white-A700 flex flex-col h-[280px] md:h-auto items-start justify-start p-5 rounded-[10px] w-full">
                      <Img
                        className="md:h-auto h-full object-cover rounded-[10px] w-full"
                        src="images/img_image_8.png"
                        alt="image"
                      />
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        className="text-gray-900 text-lg w-full"
                        size="txtInterSemiBold18Gray900"
                      >
                        The Three Musketeers
                      </Text>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="flex-1 text-lg text-red-300 w-auto"
                          size="txtInterSemiBold18Red300"
                        >
                          $40.00
                        </Text>
                        <Img
                          className="h-4 w-[92px]"
                          src="images/img_mobile.svg"
                          alt="mobile"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                    <div className="bg-white-A700 flex flex-col h-[280px] md:h-auto items-start justify-start p-5 rounded-[10px] w-full">
                      <Img
                        className="md:h-auto h-full object-cover rounded-[10px] w-full"
                        src="images/img_image_9.png"
                        alt="image"
                      />
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        className="text-gray-900 text-lg w-full"
                        size="txtInterSemiBold18Gray900"
                      >
                        The Three Musketeers
                      </Text>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="flex-1 text-lg text-red-300 w-auto"
                          size="txtInterSemiBold18Red300"
                        >
                          $40.00
                        </Text>
                        <Img
                          className="h-4 w-[92px]"
                          src="images/img_mobile.svg"
                          alt="mobile"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                    <div className="bg-white-A700 flex flex-col h-[280px] md:h-auto items-start justify-start p-5 rounded-[10px] w-full">
                      <Img
                        className="md:h-auto h-full object-cover rounded-[10px] w-full"
                        src="images/img_image_5.png"
                        alt="image"
                      />
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        className="text-gray-900 text-lg w-full"
                        size="txtInterSemiBold18Gray900"
                      >
                        The Three Musketeers
                      </Text>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="flex-1 text-lg text-red-300 w-auto"
                          size="txtInterSemiBold18Red300"
                        >
                          $40.00
                        </Text>
                        <Img
                          className="h-4 w-[92px]"
                          src="images/img_mobile.svg"
                          alt="mobile"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                    <div className="bg-white-A700 flex flex-col h-[280px] md:h-auto items-start justify-start p-5 rounded-[10px] w-full">
                      <Img
                        className="md:h-auto h-full object-cover rounded-[10px] w-full"
                        src="images/img_image_240x230.png"
                        alt="image"
                      />
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        className="text-gray-900 text-lg w-full"
                        size="txtInterSemiBold18Gray900"
                      >
                        The Three Musketeers
                      </Text>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="flex-1 text-lg text-red-300 w-auto"
                          size="txtInterSemiBold18Red300"
                        >
                          $40.00
                        </Text>
                        <Img
                          className="h-4 w-[92px]"
                          src="images/img_mobile.svg"
                          alt="mobile"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                    <div className="bg-white-A700 flex flex-col h-[280px] md:h-auto items-start justify-start p-5 rounded-[10px] w-full">
                      <Img
                        className="md:h-auto h-full object-cover rounded-[10px] w-full"
                        src="images/img_image_8.png"
                        alt="image"
                      />
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        className="text-gray-900 text-lg w-full"
                        size="txtInterSemiBold18Gray900"
                      >
                        The Three Musketeers
                      </Text>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="flex-1 text-lg text-red-300 w-auto"
                          size="txtInterSemiBold18Red300"
                        >
                          $40.00
                        </Text>
                        <Img
                          className="h-4 w-[92px]"
                          src="images/img_mobile.svg"
                          alt="mobile"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[19px] items-center justify-start w-[286px]">
              <Button className="bg-white-A700 flex items-center justify-center p-4 rounded-md w-[15%]">
                <Img src="images/img_arrowleft.svg" alt="arrowleft" />
              </Button>
              <Text
                className="flex-1 text-base text-gray-900 w-auto"
                size="txtInterMedium16Gray900"
              >
                Page
              </Text>
              <Button className="bg-white-A700 cursor-pointer font-medium leading-[normal] py-[9px] rounded-lg text-bluegray-800 text-center text-lg w-full">
                5
              </Button>
              <Text
                className="flex-1 text-base text-gray-900 w-auto"
                size="txtInterMedium16Gray900"
              >
                of 80
              </Text>
              <Button className="bg-red-300 flex items-center justify-center p-4 rounded-md w-[15%]">
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

export default EduviShopPage;
