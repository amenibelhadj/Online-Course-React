import React from "react";
import { default as ModalProvider } from "react-modal";

import { useNavigate } from "react-router-dom";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  PagerIndicator,
  Slider,
  Text,
} from "components";

const LogInModal = (props) => {
  const navigate = useNavigate();

  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[74%]"
      overlayClassName="bg-black-900_b2 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="h-[799px] max-w-[1052px] mx-auto md:px-5 relative w-full">
          <Slider
            autoPlay
            autoPlayInterval={2000}
            activeIndex={sliderState}
            responsive={{
              0: { items: 1 },
              550: { items: 1 },
              1050: { items: 1 },
            }}
            onSlideChanged={(e) => {
              setsliderState(e?.item);
            }}
            ref={sliderRef}
            className="m-auto w-full"
            items={[...Array(3)].map(() => (
              <React.Fragment key={Math.random()}>
                <div className="bg-white-A700 flex flex-col items-start justify-start mx-2.5 p-[71px] md:px-10 sm:px-5 rounded-[15px]">
                  <div className="flex flex-col items-start justify-start p-2 w-auto md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 gap-[84px] items-center justify-start w-auto md:w-full">
                      <div className="flex flex-col items-center justify-start w-auto">
                        <div className="flex flex-col gap-[25px] items-start justify-start w-auto">
                          <Img
                            className="h-[22px] w-[132px]"
                            src="images/img_logo.svg"
                            alt="frame7624"
                          />
                          <Text
                            className="leading-[50.00px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                            size="txtMetropolisBold40"
                          >
                            <>
                              Welcome to
                              <br />
                              Educatsy Online
                              <br />
                              Learning Platform
                            </>
                          </Text>
                          <Img
                            className="h-[336px] w-[332px]"
                            src="images/img_57907191.svg"
                            alt="57907191"
                          />
                        </div>
                      </div>
                      <Line className="bg-gradient  h-[641px] md:h-px md:w-full w-px" />
                      <div className="flex flex-col font-inter gap-6 items-center justify-start w-auto">
                        <div className="flex flex-col gap-5 items-center justify-start w-auto">
                          <Button
                            className="bg-white-A700 border border-gray-300 border-solid cursor-pointer flex items-center justify-center min-w-[331px] px-[34px] py-[13px] rounded-[10px]"
                            leftIcon={
                              <Img
                                className="h-6 mr-[23px]"
                                src="images/img_google.svg"
                                alt="google"
                              />
                            }
                          >
                            <div className="sm:px-5 text-base text-center text-gray-700">
                              Sign in with google
                            </div>
                          </Button>
                          <div className="flex flex-row gap-[11px] items-center justify-start w-auto">
                            <div className="bg-gray-700 h-px w-[8%]"></div>
                            <Text
                              className="text-base text-center text-gray-700 w-auto"
                              size="txtInterRegular16"
                            >
                              Or sign in with your email
                            </Text>
                            <div className="bg-gray-700 h-px w-[8%]"></div>
                          </div>
                          <div className="flex flex-col gap-[30px] items-start justify-start w-auto">
                            <div className="flex flex-col gap-5 items-start justify-start w-auto">
                              <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                                <Text
                                  className="text-base text-gray-900 w-auto"
                                  size="txtInterMedium16Gray900"
                                >
                                  Email
                                </Text>
                                <div className="flex flex-col items-center justify-start w-full">
                                  <Input
                                    name="frame7857"
                                    placeholder="user@example.com"
                                    className="p-0 placeholder:text-gray-700 sm:pr-5 text-base text-gray-700 text-left w-full"
                                    wrapClassName="bg-white-A700 border border-gray-300 border-solid flex pb-[13px] pl-[18px] pr-[35px] pt-4 rounded-[10px] w-full"
                                    prefix={
                                      <Img
                                        className="mt-auto mb-0.5 h-[18px] mr-[15px]"
                                        src="images/img_message_24_outline.svg"
                                        alt="message / 24 / Outline"
                                      />
                                    }
                                  ></Input>
                                </div>
                              </div>
                              <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                                <Text
                                  className="text-base text-gray-900 w-auto"
                                  size="txtInterMedium16Gray900"
                                >
                                  Password
                                </Text>
                                <Input
                                  name="frame7860"
                                  placeholder="*************"
                                  className="p-0 placeholder:text-gray-700 text-base text-gray-700 text-left w-full"
                                  wrapClassName="bg-white-A700 border border-gray-300 border-solid flex px-[18px] py-3.5 rounded-[10px] w-full"
                                  prefix={
                                    <Img
                                      className="h-[18px] mr-[15px] my-px"
                                      src="images/img_lock_gray_700.svg"
                                      alt="lock"
                                    />
                                  }
                                  suffix={
                                    <Img
                                      className="h-[18px] ml-[35px] my-px"
                                      src="images/img_eye.svg"
                                      alt="eye"
                                    />
                                  }
                                ></Input>
                              </div>
                            </div>
                            <Button
                              className="common-pointer bg-red-300 cursor-pointer font-medium min-w-[368px] py-[15px] rounded-[10px] text-base text-center text-white-A700"
                              onClick={() => navigate("/home1")}
                            >
                              Sign In
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[58px] items-start justify-start w-auto">
                          <div className="flex flex-col items-center justify-start w-[48%] sm:w-full">
                            <CheckBox
                              className="text-base text-gray-700 text-left"
                              inputClassName="mr-[5px]"
                              name="keepmesignedin"
                              id="keepmesignedin2"
                              label="Keep me signed in"
                            ></CheckBox>
                          </div>
                          <Text
                            className="text-base text-gray-700 w-auto"
                            size="txtInterRegular16Gray700"
                          >
                            Forgot Password?
                          </Text>
                        </div>
                        <div className="flex flex-row gap-1 items-start justify-start w-auto">
                          <Text
                            className="text-base text-gray-700 w-auto"
                            size="txtInterMedium16Gray700"
                          >
                            Don’t have an account?
                          </Text>
                          <Text
                            className="text-base text-red-300 w-auto"
                            size="txtInterMedium16Red300"
                          >
                            Sign Up
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
            renderDotsItem={({ isActive }) => {
              if (isActive) {
                return (
                  <div className="inline-block cursor-pointer rounded-[50%] h-2.5 border-red-300 border border-solid bg-white-A700 w-2.5 relative" />
                );
              }
              return (
                <div
                  className="inline-block cursor-pointer rounded-[50%] h-2 bg-deep_orange-400_7f w-2 relative"
                  role="button"
                  tabIndex={0}
                />
              );
            }}
          />
          <PagerIndicator
            className="absolute bottom-[13%] flex h-2.5 left-[23%] w-9"
            count={3}
            activeCss="inline-block cursor-pointer rounded-[50%] h-2.5 border-red-300 border border-solid bg-white-A700 w-2.5 relative"
            activeIndex={sliderState}
            inactiveCss="inline-block cursor-pointer rounded-[50%] h-2 bg-deep_orange-400_7f w-2 relative"
            sliderRef={sliderRef}
            selectedWrapperCss="inline-block mx-[2.50px]"
            unselectedWrapperCss="inline-block mx-[2.50px]"
          />
        </div>
      </div>
    </ModalProvider>
  );
};

export default LogInModal;
