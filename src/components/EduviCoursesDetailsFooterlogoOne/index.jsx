import React from "react";

import { Button, Img, Text } from "components";

const EduviCoursesDetailsFooterlogoOne = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
          <div className="flex flex-col gap-10 items-start justify-start w-[180px]">
            <div className="flex flex-col gap-[22px] items-center justify-start w-auto">
              <Img
                className="h-[30px] w-[173px]"
                src="images/img_logo.svg"
                alt="logo_One"
              />
              <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                <Img
                  className="h-[22px] w-[22px]"
                  src="images/img_facebook.svg"
                  alt="facebook"
                />
                <Button className="bg-deep_orange-400 flex h-9 items-center justify-center p-[9px] rounded-[50%] w-9">
                  <Img
                    className="h-[18px]"
                    src="images/img_camera.svg"
                    alt="camera"
                  />
                </Button>
                <Img
                  className="h-[17px] w-[22px]"
                  src="images/img_twitter.svg"
                  alt="twitter"
                />
                <Img
                  className="h-[18px] w-[22px]"
                  src="images/img_linkedin.svg"
                  alt="linkedin"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[18px] items-start justify-start w-full">
              <Text
                className="text-base text-gray-700"
                size="txtInterRegular16"
              >
                ©2021 Educatsy
              </Text>
              <Text
                className="text-base text-gray-700"
                size="txtInterRegular16"
              >
                Educatsy is a registered
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-start justify-start w-44">
            <Text
              className="text-[22px] text-gray-900 sm:text-lg md:text-xl w-full"
              size="txtInterSemiBold22"
            >
              Courses
            </Text>
            <div className="flex flex-col gap-[17px] items-start justify-start w-full">
              <Text
                className="text-base text-gray-700 w-full"
                size="txtInterRegular16"
              >
                Classroom courses
              </Text>
              <Text
                className="max-w-[176px] md:max-w-full text-base text-gray-700"
                size="txtInterRegular16"
              >
                Virtual classroom courses
              </Text>
              <Text
                className="text-base text-gray-700 w-full"
                size="txtInterRegular16"
              >
                E-learning courses
              </Text>
              <Text
                className="text-base text-gray-700 w-full"
                size="txtInterRegular16"
              >
                Video Courses
              </Text>
              <Text
                className="text-base text-gray-700 w-full"
                size="txtInterRegular16"
              >
                Offline Courses
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-start justify-start w-44">
            <Text
              className="text-[22px] text-gray-900 sm:text-lg md:text-xl w-full"
              size="txtInterSemiBold22"
            >
              Community
            </Text>
            <div className="flex flex-col gap-[17px] items-start justify-start w-full">
              <Text
                className="text-base text-gray-700 w-full"
                size="txtInterRegular16"
              >
                Learners
              </Text>
              <Text
                className="text-base text-gray-700 w-full"
                size="txtInterRegular16"
              >
                Partners
              </Text>
              <Text
                className="text-base text-gray-700 w-full"
                size="txtInterRegular16"
              >
                Developers
              </Text>
              <Text
                className="text-base text-gray-700 w-full"
                size="txtInterRegular16"
              >
                Transactions
              </Text>
              <Text
                className="text-base text-gray-700 w-full"
                size="txtInterRegular16"
              >
                Blog
              </Text>
              <Text
                className="text-base text-gray-700 w-full"
                size="txtInterRegular16"
              >
                Teaching Center
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-start justify-start w-44">
            <Text
              className="text-[22px] text-gray-900 sm:text-lg md:text-xl w-full"
              size="txtInterSemiBold22"
            >
              Quick links
            </Text>
            <div className="flex flex-col gap-[17px] items-start justify-start w-full">
              <Text
                className="text-base text-gray-700 w-full"
                size="txtInterRegular16"
              >
                Home
              </Text>
              <Text
                className="text-base text-gray-700 w-full"
                size="txtInterRegular16"
              >
                Professional Education
              </Text>
              <Text
                className="text-base text-gray-700 w-full"
                size="txtInterRegular16"
              >
                Courses
              </Text>
              <Text
                className="text-base text-gray-700 w-full"
                size="txtInterRegular16"
              >
                Admissions
              </Text>
              <Text
                className="text-base text-gray-700 w-full"
                size="txtInterRegular16"
              >
                Testimonial
              </Text>
              <Text
                className="text-base text-gray-700 w-full"
                size="txtInterRegular16"
              >
                Programs
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center justify-center w-44">
            <Text
              className="text-[22px] text-gray-900 sm:text-lg md:text-xl w-full"
              size="txtInterSemiBold22"
            >
              More
            </Text>
            <div className="flex flex-col gap-[17px] items-start justify-start w-full">
              <Text
                className="text-base text-gray-700 w-full"
                size="txtInterRegular16"
              >
                Press
              </Text>
              <Text
                className="text-base text-gray-700 w-full"
                size="txtInterRegular16"
              >
                Investors
              </Text>
              <Text
                className="text-base text-gray-700 w-full"
                size="txtInterRegular16"
              >
                Terms
              </Text>
              <Text
                className="text-base text-gray-700 w-full"
                size="txtInterRegular16"
              >
                Privacy
              </Text>
              <Text
                className="text-base text-gray-700 w-full"
                size="txtInterRegular16"
              >
                Help
              </Text>
              <Text
                className="text-base text-gray-700 w-full"
                size="txtInterRegular16"
              >
                Contact
              </Text>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

EduviCoursesDetailsFooterlogoOne.defaultProps = {};

export default EduviCoursesDetailsFooterlogoOne;
