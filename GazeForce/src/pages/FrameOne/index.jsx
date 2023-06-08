import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

const FrameOnePage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="h-[823px] sm:h-[837px] md:px-5 relative w-full">
              <Img
                src="images/img_securityguard.png"
                className="h-[823px] m-auto object-cover w-full"
                alt="securityguard"
              />
              <div className="absolute h-[823px] sm:h-[837px] inset-[0] justify-center m-auto w-full">
                <div className="h-[823px] m-auto w-full">
                  <Img
                    src="images/img_securityguard.png"
                    className="h-[823px] m-auto object-cover w-full"
                    alt="maskgroup"
                  />
                  <Text
                    className="absolute font-bold left-[10%] text-white_A700 top-[5%]"
                    variant="body2"
                  >
                    GAZE
                  </Text>
                </div>
                <div className="absolute flex flex-col inset-x-[0] justify-start mx-auto top-[6%] w-[79%]">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                    <Text
                      className="font-bold sm:mt-0 mt-5 text-white_A700"
                      variant="body2"
                    >
                      FORCE
                    </Text>
                    <Text
                      className="font-bold sm:ml-[0] ml-[308px] sm:mt-0 mt-[11px] text-white_A700"
                      variant="body2"
                    >
                      Home
                    </Text>
                    <Text
                      className="font-bold sm:ml-[0] ml-[111px] sm:mt-0 mt-[11px] text-white_A700"
                      variant="body2"
                    >
                      About
                    </Text>
                    <Text
                      className="font-bold sm:ml-[0] ml-[74px] sm:mt-0 mt-[7px] text-white_A700"
                      variant="body2"
                    >
                      Services
                    </Text>
                    <Button
                      className="cursor-pointer font-bold leading-[normal] min-w-[190px] sm:ml-[0] ml-[403px] text-base text-black_900 text-center"
                      shape="RoundedBorder10"
                      size="sm"
                      variant="FillYellowA400"
                    >
                      GET STARTED
                    </Button>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[301px] mt-[182px] text-white_A700"
                    as="h6"
                    variant="h6"
                  >
                    We Are Always on Guard For Your Family and Business
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[327px] mt-[7px] text-center text-white_A700"
                    as="h1"
                    variant="h1"
                  >
                    <>
                      Security Service for Your <br />
                      Personal Safety
                    </>
                  </Text>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[260px] md:ml-[0] ml-[679px] mr-[480px] mt-[47px] text-base text-black_900 text-center"
                    shape="RoundedBorder10"
                    size="sm"
                    variant="FillYellowA400"
                  >
                    MORE INFORMATION
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-yellow_A400 flex md:flex-col flex-row md:gap-5 items-center justify-end p-[66px] md:px-10 sm:px-5 w-full">
              <Text
                className="font-bold md:mt-0 mt-[25px] text-black_900"
                as="h5"
                variant="h5"
              >
                <span className="md:text-[38px] sm:text-4xl text-black_900 text-[40px] font-poppins text-left font-light">
                  We Offer Fast,{" "}
                </span>
                <span className="md:text-[38px] sm:text-4xl text-black_900 text-[40px] font-poppins text-left">
                  <>
                    Professional and
                    <br />
                    Exceptional Service
                  </>
                </span>
              </Text>
              <Button
                className="cursor-pointer font-bold leading-[normal] mb-[47px] min-w-[260px] md:ml-[0] ml-[260px] md:mt-0 mt-10 text-base text-center text-white_A700"
                shape="RoundedBorder10"
                size="sm"
                variant="FillBlack900"
              >
                MAKE AN APPOINTMENT
              </Button>
              <Text
                className="bg-yellow_A400 border-2 border-black_900 border-solid font-medium h-[58px] justify-center mb-[49px] md:ml-[0] ml-[11px] mr-[65px] md:mt-0 mt-[38px] sm:px-5 px-[35px] py-4 rounded-lg text-black_900 w-[260px]"
                variant="body6"
              >
                CONTACT US ONLIINE
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1422px] mt-[117px] mx-auto md:px-5 w-full">
              <Img
                src="images/img_home01copyright.png"
                className="h-[835px] md:h-auto object-cover"
                alt="home01copyright"
              />
              <div className="flex flex-col items-start justify-start md:mt-0 mt-[137px]">
                <Text className="font-bold text-black_900_70" variant="body2">
                  WHAT WE DO
                </Text>
                <Text
                  className="font-medium mt-[47px] text-black_900"
                  as="h3"
                  variant="h3"
                >
                  <span className="md:text-[46px] sm:text-[40px] text-black_900 text-[50px] font-poppins text-left font-light leading-[undefined%]">
                    <>
                      We Provide Services for <br />
                      Multiple{" "}
                    </>
                  </span>
                  <span className="md:text-[46px] sm:text-[40px] text-black_900 text-[50px] font-poppins text-left font-bold leading-[undefined%]">
                    <>
                      Customers in <br />
                      Various Industries <br />
                      Worldwide
                    </>
                  </span>
                </Text>
                <Text
                  className="font-medium mt-[57px] text-gray_900_c9"
                  variant="body4"
                >
                  <>
                    Dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                    voluptas sit <br />
                    aspernatur aut odit aut fugit.
                  </>
                </Text>
                <Button
                  className="cursor-pointer font-bold leading-[normal] min-w-[260px] mt-[99px] text-base text-black_900 text-center"
                  shape="RoundedBorder10"
                  size="sm"
                  variant="FillYellowA400"
                >
                  ABOUT OUR COMPANY
                </Button>
              </div>
            </div>
            <div className="bg-gray_300_56 flex flex-col items-end justify-start mt-[168px] p-[130px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col gap-[54px] items-center justify-start mb-7 mt-3 w-[93%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="font-bold md:ml-[0] ml-[5px] text-gray_500"
                      variant="body6"
                    >
                      PREMIUM SERVICES
                    </Text>
                    <Text
                      className="font-bold mt-[52px] text-black_900"
                      as="h3"
                      variant="h3"
                    >
                      <span className="md:text-[46px] sm:text-[40px] text-black_900 text-[50px] font-poppins text-left font-normal">
                        Our Services
                      </span>
                      <span className="md:text-[46px] sm:text-[40px] text-black_900 text-[50px] font-poppins text-left">
                        <>
                          {" "}
                          Make Your <br />
                          Business Secure
                        </>
                      </span>
                    </Text>
                    <Text
                      className="font-bold md:ml-[0] ml-[5px] mt-[49px] text-black_900"
                      variant="body5"
                    >
                      <span className="text-gray_500 text-lg font-poppins text-left font-normal">
                        <>
                          Dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                          voluptas sit <br />
                          aspernatur aut odit aut fugit
                        </>
                      </span>
                      <span className="text-black_900 text-lg font-poppins text-left font-normal">
                        .
                      </span>
                    </Text>
                  </div>
                  <div className="bg-white_A700 flex md:flex-1 flex-col items-start justify-end md:ml-[0] ml-[94px] p-[26px] sm:px-5 w-[24%] md:w-full">
                    <Img
                      src="images/img_home.svg"
                      className="h-[77px] mt-6"
                      alt="home_One"
                    />
                    <Text
                      className="font-bold mt-[106px] text-black_900"
                      variant="body2"
                    >
                      <>
                        Housing <br />
                        Protection
                      </>
                    </Text>
                    <Text
                      className="font-normal my-[11px] text-gray_500"
                      variant="body5"
                    >
                      Dicta sunt explicabo.
                    </Text>
                  </div>
                  <div className="bg-white_A700 flex md:flex-1 flex-col items-start justify-end ml-5 md:ml-[0] p-8 sm:px-5 w-[24%] md:w-full">
                    <Img
                      src="images/img_verifieduser.svg"
                      className="h-20 mt-7"
                      alt="verifieduser"
                    />
                    <Text
                      className="font-bold mt-24 text-black_900"
                      variant="body2"
                    >
                      <>
                        Remote
                        <br />
                        Guarding
                      </>
                    </Text>
                    <Text
                      className="font-normal mb-1 mt-3 text-gray_500"
                      variant="body5"
                    >
                      Dicta sunt explicabo.
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-[19px] items-center justify-between w-full">
                  <div className="bg-white_A700 flex md:flex-1 flex-col items-start justify-start p-8 sm:px-5 w-[24%] md:w-full">
                    <Img
                      src="images/img_visibility.svg"
                      className="h-20 mt-[19px]"
                      alt="visibility"
                    />
                    <Text
                      className="font-bold mt-[93px] text-black_900"
                      variant="body2"
                    >
                      <>
                        Video
                        <br />
                        Surveillance
                      </>
                    </Text>
                    <Text
                      className="font-normal mb-4 mt-3 text-gray_500"
                      variant="body5"
                    >
                      Dicta sunt explicabo.
                    </Text>
                  </div>
                  <List
                    className="md:flex-1 sm:flex-col flex-row gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-3/4 md:w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-white_A700 flex flex-col md:gap-10 gap-[87px] justify-center sm:ml-[0] p-[23px] sm:px-5 w-full">
                      <Img
                        src="images/img_lockclock.svg"
                        className="h-20 mr-[229px] mt-[30px]"
                        alt="lockclock"
                      />
                      <div className="flex flex-col gap-3 items-start justify-start mb-[29px] md:ml-[0] ml-[9px] mr-[97px]">
                        <Text
                          className="font-bold text-black_900"
                          variant="body2"
                        >
                          <>
                            Security
                            <br />
                            Doors
                          </>
                        </Text>
                        <Text
                          className="font-normal text-gray_500"
                          variant="body5"
                        >
                          Dicta sunt explicabo.
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-col md:gap-10 gap-[89px] justify-center sm:ml-[0] p-[23px] sm:px-5 w-full">
                      <Img
                        src="images/img_work.svg"
                        className="h-20 mr-[229px] mt-7"
                        alt="work"
                      />
                      <div className="flex flex-col gap-3 items-start justify-start mb-[29px] ml-1.5 md:ml-[0] mr-[100px]">
                        <Text
                          className="font-bold text-black_900"
                          variant="body2"
                        >
                          <>
                            Valuables <br />
                            Protection
                          </>
                        </Text>
                        <Text
                          className="font-normal text-gray_500"
                          variant="body5"
                        >
                          Dicta sunt explicabo.
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-col items-start justify-center sm:ml-[0] p-[25px] sm:px-5 w-full">
                      <Img
                        src="images/img_info.svg"
                        className="h-20 ml-0.5 md:ml-[0] mt-[27px]"
                        alt="info"
                      />
                      <Text
                        className="font-bold mt-[88px] text-black_900"
                        variant="body2"
                      >
                        <>
                          Video
                          <br />
                          Cameras
                        </>
                      </Text>
                      <Text
                        className="font-normal mb-[27px] ml-1 md:ml-[0] mt-3 text-gray_500"
                        variant="body5"
                      >
                        Dicta sunt explicabo.
                      </Text>
                    </div>
                  </List>
                </div>
              </div>
            </div>
            <div className="h-[798px] md:px-5 relative w-full">
              <Img
                src="images/img_post24copyright.png"
                className="h-[798px] m-auto object-cover w-full"
                alt="post24copyright"
              />
              <div className="absolute h-[174px] inset-[0] justify-center m-auto w-[10%]">
                <div className="border-[3px] border-solid border-white_A700 h-[174px] m-auto rounded-[87px] w-full"></div>
                <Text
                  className="absolute bottom-[37%] font-bold right-[28%] text-white_A700"
                  variant="body2"
                >
                  PLAY
                </Text>
              </div>
            </div>
            <Text
              className="font-bold md:ml-[0] ml-[248px] mt-[130px] text-gray_500"
              variant="body4"
            >
              LOCKSMITHING SERVICES
            </Text>
            <Text
              className="md:ml-[0] ml-[250px] mt-[38px] text-black_900"
              as="h4"
              variant="h4"
            >
              <>
                Our Technicians are Equipped with the Latest <br />
                Modern Technology and are Available 24/7 <br />
                at Your Request
              </>
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-end mt-[39px] md:px-10 sm:px-5 px-[130px] w-full">
          <div className="md:h-[656px] h-[796px] relative w-[93%] md:w-full">
            <Text
              className="font-normal ml-auto mr-[3px] mt-[86px] text-gray_900 text-justify"
              variant="body4"
            >
              <>
                Adipiscing elit, sed do eiusmod tempor ut <br />
                labore et dolore magna aliqua. Ut enim ad <br />
                minim veniam, quis nostrud.
                <br />
                Wiusmod tempor incididunt ut labore et dolore <br />
                magna aliqua. Ut enim ad minim dipiscing elit, <br />
                sed do eiusmod tempor incididunt ut labore et <br />
                dolore magna liqua. Ut enim ad minim veniam, <br />
                quis nostrud.
              </>
            </Text>
            <div className="absolute md:h-[656px] h-[796px] inset-[0] justify-center m-auto w-full">
              <Img
                src="images/img_img01copyright.png"
                className="absolute h-[656px] left-[0] object-cover top-[0] w-3/5"
                alt="img01copyright"
              />
              <div className="absolute bg-yellow_A400 bottom-[0] flex flex-col items-center justify-center p-[62px] md:px-10 sm:px-5 right-[0] w-[51%]">
                <List
                  className="flex-col gap-3 grid items-center mb-[22px] mt-[18px] w-[99%]"
                  orientation="vertical"
                >
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[95%] md:w-full">
                    <Img
                      src="images/img_check.svg"
                      className="h-5 w-5"
                      alt="check"
                    />
                    <Text
                      className="font-normal sm:ml-[0] ml-[7px] text-black_900 text-justify"
                      variant="body5"
                    >
                      Master key systems
                    </Text>
                    <Img
                      src="images/img_check.svg"
                      className="h-5 sm:ml-[0] ml-[104px] w-5"
                      alt="check_One"
                    />
                    <Text
                      className="font-normal sm:ml-[0] ml-[7px] sm:mt-0 mt-0.5 text-black_900 text-justify"
                      variant="body5"
                    >
                      Digital security cameras
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[94%] md:w-full">
                    <Img
                      src="images/img_check.svg"
                      className="h-5 w-5"
                      alt="check"
                    />
                    <Text
                      className="font-normal sm:ml-[0] ml-[7px] text-black_900 text-justify"
                      variant="body5"
                    >
                      High security cylinders
                    </Text>
                    <Img
                      src="images/img_check.svg"
                      className="h-5 sm:ml-[0] ml-[79px] w-5"
                      alt="check_One"
                    />
                    <Text
                      className="font-normal sm:ml-[0] ml-[7px] sm:mt-0 mt-0.5 text-black_900 text-justify"
                      variant="body5"
                    >
                      Large database storage
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                    <Img
                      src="images/img_check.svg"
                      className="h-5 w-5"
                      alt="check"
                    />
                    <Text
                      className="font-normal text-black_900 text-justify"
                      variant="body5"
                    >
                      Changing and rekeying locks
                    </Text>
                    <Img
                      src="images/img_check.svg"
                      className="h-5 w-5"
                      alt="check_One"
                    />
                    <Text
                      className="font-normal sm:mt-0 mt-0.5 text-black_900 text-justify"
                      variant="body5"
                    >
                      Professional security guards
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[90%] md:w-full">
                    <Img
                      src="images/img_check.svg"
                      className="h-5 w-5"
                      alt="check"
                    />
                    <Text
                      className="font-normal sm:ml-[0] ml-[7px] text-black_900 text-justify"
                      variant="body5"
                    >
                      Keyless entry systems
                    </Text>
                    <Img
                      src="images/img_check.svg"
                      className="h-5 sm:ml-[0] ml-[84px] w-5"
                      alt="check_One"
                    />
                    <Text
                      className="font-normal ml-2 sm:ml-[0] text-black_900 text-justify"
                      variant="body5"
                    >
                      Flexible Privacy policy
                    </Text>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-[74px] w-full">
          <div className="flex flex-col md:gap-10 gap-[73px] justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-[292px] md:px-5 w-[72%] md:w-full">
              <div className="h-[300px] md:mt-0 mt-3 relative w-[21%] md:w-full">
                <Text
                  className="m-auto text-gray_200 tracking-[8.00px]"
                  variant="body3"
                >
                  98
                </Text>
                <Text
                  className="absolute bottom-[38%] font-semibold inset-x-[0] mx-auto text-black_900 w-max"
                  as="h5"
                  variant="h5"
                >
                  Projects
                </Text>
              </div>
              <Line className="bg-black_900_96 h-[92px] md:h-px mb-[95px] md:ml-[0] ml-[50px] md:mt-0 mt-[124px] md:w-full w-px" />
              <div className="h-[300px] md:h-[302px] mb-0.5 md:ml-[0] ml-[34px] md:mt-0 mt-[9px] relative w-[21%] md:w-full">
                <Text
                  className="m-auto text-gray_200 tracking-[8.00px]"
                  variant="body3"
                >
                  65
                </Text>
                <Text
                  className="absolute bottom-[38%] font-semibold left-[18%] text-black_900"
                  as="h5"
                  variant="h5"
                >
                  People
                </Text>
              </div>
              <Line className="bg-black_900_96 h-[92px] md:h-px mb-[100px] ml-14 md:ml-[0] md:mt-0 mt-[119px] md:w-full w-px" />
              <div className="h-[300px] md:h-[312px] mb-3 ml-11 md:ml-[0] relative w-[19%] md:w-full">
                <Text
                  className="absolute h-full inset-y-[0] left-[3%] my-auto text-gray_200 tracking-[8.00px]"
                  variant="body3"
                >
                  10
                </Text>
                <Text
                  className="absolute bottom-[37%] font-semibold inset-x-[0] mx-auto text-black_900 w-max"
                  as="h5"
                  variant="h5"
                >
                  Experiences
                </Text>
              </div>
              <Line className="bg-black_900_96 h-[90px] md:h-px mb-24 md:ml-[0] ml-[70px] md:mt-0 mt-[125px] md:w-full w-px" />
              <div className="h-[300px] md:h-[309px] mb-[9px] md:ml-[0] ml-[54px] md:mt-0 mt-0.5 relative w-[17%] md:w-full">
                <Text
                  className="m-auto text-gray_200 tracking-[8.00px]"
                  variant="body3"
                >
                  15
                </Text>
                <Text
                  className="absolute font-semibold h-max inset-[0] justify-center m-auto text-black_900 w-max"
                  as="h5"
                  variant="h5"
                >
                  Offices
                </Text>
              </div>
            </div>
            <div className="flex flex-col justify-start w-full">
              <div className="bg-blue_gray_100_5e flex flex-col items-end justify-start ml-0.5 md:ml-[0] overflow-auto md:pl-10 sm:pl-5 pl-[66px] py-[66px] w-full">
                <div className="flex flex-col items-center justify-start mb-[138px] mt-[73px] w-full">
                  <Text
                    className="font-bold text-gray_500 tracking-[0.96px]"
                    variant="body2"
                  >
                    TESTIMONIALS
                  </Text>
                  <Text
                    className="leading-[122.50%] mt-[30px] text-black_900 text-center tracking-[2.40px]"
                    as="h2"
                    variant="h2"
                  >
                    <>
                      We Provide Services for a Huge <br />
                      Number of Customers
                    </>
                  </Text>
                  <List
                    className="sm:flex-col flex-row md:gap-10 gap-[63px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-[54px] w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-white_A700 flex flex-1 flex-col items-start justify-end p-[25px] sm:px-5 w-full">
                      <Img
                        src="images/img_group6.svg"
                        className="h-[27px] ml-2.5 md:ml-[0] mt-14"
                        alt="groupSix"
                      />
                      <Text
                        className="font-medium leading-[180.00%] mt-[81px] text-gray_600 text-justify tracking-[0.64px] w-[91%] sm:w-full"
                        variant="body6"
                      >
                        <>
                          Lorem Ipsum has been the industry&#39;s standard dummy
                          text ever since the 1500s, when an unknown printer
                          took a galley of type and scrambled it to make a type
                          specimen book.
                        </>
                      </Text>
                      <div className="flex flex-col gap-[7px] items-start justify-start mb-8 md:ml-[0] ml-[7px] mt-[47px]">
                        <Text
                          className="font-bold text-black_900 text-justify tracking-[0.72px]"
                          variant="body5"
                        >
                          John Lewis
                        </Text>
                        <Text
                          className="font-normal text-gray_600_01 text-justify tracking-[0.72px]"
                          variant="body5"
                        >
                          Expert
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col items-start justify-end p-7 sm:px-5 w-full">
                      <Img
                        src="images/img_group6.svg"
                        className="h-[27px] ml-2.5 md:ml-[0] mt-[55px]"
                        alt="groupSeven"
                      />
                      <Text
                        className="font-medium leading-[180.00%] mt-[81px] text-gray_600 text-justify tracking-[0.64px] w-[93%] sm:w-full"
                        variant="body6"
                      >
                        <>
                          Lorem Ipsum has been the industry&#39;s standard dummy
                          text ever since the 1500s, when an unknown printer
                          took a galley of type and scrambled it to make a type
                          specimen book.
                        </>
                      </Text>
                      <div className="flex flex-col gap-1.5 items-start justify-start mb-7 md:ml-[0] ml-[7px] mt-[47px]">
                        <Text
                          className="font-bold text-black_900 text-justify tracking-[0.72px]"
                          variant="body5"
                        >
                          Andrew Morris
                        </Text>
                        <Text
                          className="font-normal text-gray_600_01 text-justify tracking-[0.72px]"
                          variant="body5"
                        >
                          PR Manager
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start p-[41px] md:px-10 sm:px-5 w-full">
                      <Img
                        src="images/img_group6.svg"
                        className="h-[27px] ml-2.5 md:ml-[0] mt-[23px]"
                        alt="groupEight"
                      />
                      <Text
                        className="font-medium leading-[180.00%] mt-[81px] text-gray_600 text-justify tracking-[0.64px] w-full"
                        variant="body6"
                      >
                        <>
                          Lorem Ipsum has been the industry&#39;s standard dummy
                          text ever since the 1500s, when an unknown printer
                          took a galley of type and scrambled it to make a type
                          specimen book.
                        </>
                      </Text>
                      <div className="flex flex-col gap-1.5 items-start justify-start mb-[34px] md:ml-[0] ml-[7px] mt-[47px]">
                        <Text
                          className="font-bold text-black_900 text-justify tracking-[0.72px]"
                          variant="body5"
                        >
                          Andrew Morris
                        </Text>
                        <Text
                          className="font-normal text-gray_600_01 text-justify tracking-[0.72px]"
                          variant="body5"
                        >
                          PR Manager
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col items-start justify-center p-[29px] sm:px-5 w-full">
                      <Img
                        src="images/img_group6.svg"
                        className="h-[27px] ml-2.5 md:ml-[0] mt-[30px]"
                        alt="groupNine"
                      />
                      <Text
                        className="font-medium leading-[180.00%] mt-[81px] text-gray_600 text-justify tracking-[0.64px] w-[93%] sm:w-full"
                        variant="body6"
                      >
                        <>
                          Lorem Ipsum has been the industry&#39;s standard dummy
                          text ever since the 1500s, when an unknown printer
                          took a galley of type and scrambled it to make a type
                          specimen book.
                        </>
                      </Text>
                      <div className="flex flex-col items-start justify-start mb-[29px] ml-3 md:ml-[0] mt-[74px]">
                        <Text
                          className="font-bold text-black_900 text-justify tracking-[0.72px]"
                          variant="body5"
                        >
                          Jason Bright
                        </Text>
                        <Text
                          className="font-normal text-gray_600_01 text-justify tracking-[0.72px]"
                          variant="body5"
                        >
                          Art Director
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
              <div className="h-[736px] ml-0.5 md:ml-[0] md:px-5 relative w-full">
                <Img
                  src="images/img_bg04copyright.png"
                  className="h-[736px] m-auto object-cover w-full"
                  alt="bg04copyright"
                />
                <div className="absolute bg-white_A700 flex flex-col h-max inset-y-[0] items-center justify-start my-auto p-10 sm:px-5 right-[3%] w-[44%]">
                  <div className="flex flex-col items-start justify-start mb-1 mt-[19px] w-[98%] md:w-full">
                    <a
                      href="javascript:"
                      className="font-bold ml-1 md:ml-[0] text-gray_400 text-justify tracking-[0.64px]"
                    >
                      <Text variant="body6">CONTACT US</Text>
                    </a>
                    <Text
                      className="font-medium leading-[123.00%] ml-1 md:ml-[0] mt-[29px] text-black_900 text-justify tracking-[2.00px]"
                      as="h3"
                      variant="h3"
                    >
                      <span className="md:text-[46px] sm:text-[40px] text-black_900 text-[50px] font-poppins font-light">
                        <>
                          Have Questions?
                          <br />
                        </>
                      </span>
                      <span className="md:text-[46px] sm:text-[40px] text-black_900 text-[50px] font-poppins font-bold">
                        Get in Touch!
                      </span>
                    </Text>
                    <div className="flex md:flex-col flex-row gap-7 items-start justify-between md:ml-[0] ml-[7px] mt-[45px] w-[98%] md:w-full">
                      <Input
                        wrapClassName="md:mt-0 mt-[5px] pr-[35px] md:w-full"
                        className="font-light p-0 placeholder:text-gray_400_01 sm:pr-5 text-gray_400_01 text-justify text-xl tracking-[0.80px] w-full"
                        type="text"
                        name="groupTwentySeven"
                        placeholder="Name"
                        size="sm"
                        variant="UnderLineGray40001"
                      ></Input>
                      <Input
                        wrapClassName="pl-[13px] pr-[35px] md:w-full"
                        className="font-light p-0 placeholder:text-gray_400_01 sm:pr-5 text-gray_400_01 text-justify text-xl tracking-[0.80px] w-full"
                        type="text"
                        name="groupTwentyNine"
                        placeholder="Last Name"
                        size="md"
                        variant="UnderLineGray40001"
                      ></Input>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-[41px] items-center justify-between md:ml-[0] ml-[7px] mt-14 w-[99%] md:w-full">
                      <Input
                        wrapClassName="pr-[35px] md:w-full"
                        className="font-light p-0 placeholder:text-gray_400_01 sm:pr-5 text-gray_400_01 text-justify text-xl tracking-[0.80px] w-full"
                        type="email"
                        name="language"
                        placeholder="Email "
                        size="md"
                        variant="UnderLineGray40001"
                      ></Input>
                      <Input
                        wrapClassName="pr-[35px] md:w-full"
                        className="font-light p-0 placeholder:text-gray_400_01 sm:pr-5 text-gray_400_01 text-justify text-xl tracking-[0.80px] w-full"
                        name="groupThirtyThree"
                        placeholder="Select Residence"
                        size="md"
                        variant="UnderLineGray40001"
                      ></Input>
                    </div>
                    <Button
                      className="cursor-pointer font-bold leading-[normal] min-w-[260px] mt-[66px] text-base text-black_900 text-center tracking-[2.24px]"
                      shape="RoundedBorder10"
                      size="sm"
                      variant="FillYellowA400"
                    >
                      GET IN TOUCH
                    </Button>
                  </div>
                </div>
              </div>
              <Text
                className="font-bold md:ml-[0] ml-[250px] mt-[123px] text-gray_400 text-justify tracking-[0.64px]"
                variant="body6"
              >
                OUR BLOG
              </Text>
              <Text
                className="font-bold md:ml-[0] ml-[250px] mt-2.5 text-black_900 text-justify tracking-[2.00px]"
                as="h3"
                variant="h3"
              >
                Latest Articles
              </Text>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end md:ml-[0] ml-[250px] mt-9 md:px-5 w-[79%] md:w-full">
                <Img
                  src="images/img_post21copyright.png"
                  className="h-[467px] sm:h-auto object-cover w-[33%] md:w-full"
                  alt="post21copyright"
                />
                <Img
                  src="images/img_project81.png"
                  className="h-[467px] sm:h-auto md:ml-[0] ml-[25px] object-cover w-[32%] md:w-full"
                  alt="projectEightyOne"
                />
                <Img
                  src="images/img_post19copyright890x664.png"
                  className="h-[464px] sm:h-auto md:ml-[0] ml-[34px] object-cover w-[32%] md:w-full"
                  alt="post19copyright"
                />
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[250px] mt-6 md:px-5 w-[57%] md:w-full">
                <Text
                  className="font-bold md:mt-0 mt-3 text-gray_500 text-justify tracking-[0.80px]"
                  variant="body4"
                >
                  NEWS
                </Text>
                <Text
                  className="font-bold mb-3 md:ml-[0] ml-[421px] text-gray_500 text-justify tracking-[0.80px]"
                  variant="body4"
                >
                  NEWS
                </Text>
                <Text
                  className="font-bold mb-3 md:ml-[0] ml-[418px] text-gray_500 text-justify tracking-[0.80px]"
                  variant="body4"
                >
                  NEWS
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-[247px] mt-2.5 md:px-5 w-[79%] md:w-full">
                <Text
                  className="font-semibold leading-[123.00%] md:mt-0 mt-3 text-black_900 text-justify tracking-[1.20px]"
                  variant="body1"
                >
                  <>
                    Why is Security Alarm Not <br />
                    Effective in 2022?
                  </>
                </Text>
                <Text
                  className="font-semibold leading-[123.00%] mb-3 md:ml-[0] ml-[52px] text-black_900 text-justify tracking-[1.20px]"
                  variant="body1"
                >
                  <>
                    Know Your Neighbours’
                    <br />
                    Behavior by Using Cameras
                  </>
                </Text>
                <Text
                  className="font-semibold leading-[123.00%] mb-3 md:ml-[0] ml-[27px] text-black_900 text-justify tracking-[1.20px]"
                  variant="body1"
                >
                  <>
                    Why Do We Love Protection
                    <br />
                    People So Much?
                  </>
                </Text>
              </div>
              <footer className="bg-black_900 border border-solid border-white_A700 flex items-center justify-center mt-[39px] md:px-5 w-full">
                <div className="flex flex-col items-center justify-center mb-[49px] ml-[250px] mr-[130px] mt-[124px] w-[79%]">
                  <div className="flex flex-col gap-[55px] items-center justify-center w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between ml-2 md:ml-[0] mr-[212px] w-[85%] md:w-full">
                      <div className="flex flex-col gap-[13px] items-start justify-start md:mt-0 mt-0.5 w-[47%] md:w-full">
                        <div className="flex flex-row items-start justify-between w-[71%] md:w-full">
                          <Text
                            className="font-bold mt-[5px] text-justify text-white_A700 tracking-[-0.40px]"
                            variant="body6"
                          >
                            Working Hours
                          </Text>
                          <Text
                            className="font-bold mb-[5px] text-justify text-white_A700 tracking-[0.64px]"
                            variant="body6"
                          >
                            Office
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                          <Text
                            className="font-medium leading-[305.50%] sm:mt-0 mt-1.5 text-justify text-white_A700 tracking-[0.64px]"
                            variant="body6"
                          >
                            <span className="text-white_A700 text-base font-poppins font-normal">
                              <>
                                Mon - Fri: 9 AM - 6 PM
                                <br />
                                Saturd
                              </>
                            </span>
                            <span className="text-white_A700 text-base tracking-[-5.12px] font-poppins font-normal">
                              a
                            </span>
                            <span className="text-white_A700 text-base font-poppins font-normal">
                              <>
                                y: 9 AM - 5 PM
                                <br />
                                Sunday: Closed
                              </>
                            </span>
                          </Text>
                          <Text
                            className="font-medium leading-[253.00%] text-justify text-white_A700 tracking-[0.64px]"
                            variant="body6"
                          >
                            <span className="text-white_A700 text-base font-poppins font-normal">
                              <>
                                Germany -<br />
                                785 13h Street, Office 478
                                <br />
                                Berlin De, 81556
                                <br />
                              </>
                            </span>
                            <span className="text-white_A700 text-base font-poppins font-normal">
                              <>
                                <br />
                                info@gmail.com
                                <br />
                              </>
                            </span>
                            <span className="text-white_A700 text-base font-poppins">
                              <>
                                <br />
                              </>
                            </span>
                            <span className="text-white_A700 text-base font-poppins font-extrabold">
                              +1 8009 234 65{" "}
                            </span>
                          </Text>
                        </div>
                      </div>
                      <ul className="flex flex-col items-start justify-start w-[38%] md:w-full common-column-list">
                        <li>
                          <a href="javascript:">
                            <div className="flex flex-row items-start justify-between">
                              <Text
                                className="font-bold mt-0.5 text-justify text-white_A700 tracking-[0.64px]"
                                variant="body6"
                              >
                                Links
                              </Text>
                              <Text
                                className="font-bold text-justify text-white_A700 tracking-[1.20px]"
                                variant="body1"
                              >
                                Get In Touch
                              </Text>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="font-normal mt-2 text-justify text-white_A700 tracking-[0.64px]"
                          >
                            <Text variant="body6">Home</Text>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-3">
                              <Text
                                className="font-normal text-justify text-white_A700 tracking-[0.64px]"
                                variant="body6"
                              >
                                About Us
                              </Text>
                              <Button
                                className="flex h-[60px] items-center justify-center sm:ml-[0] ml-[166px] rounded-[50%] w-[60px]"
                                size="smIcn"
                                variant="icbOutlineGray4007f"
                              >
                                <Img
                                  src="images/img_facebookf.svg"
                                  className="h-[30px]"
                                  alt="facebookf"
                                />
                              </Button>
                              <Button
                                className="flex h-[60px] items-center justify-center ml-2.5 sm:ml-[0] rounded-[50%] w-[60px]"
                                size="smIcn"
                                variant="icbOutlineGray4007f"
                              >
                                <Img
                                  src="images/img_twitter.svg"
                                  alt="twitter"
                                />
                              </Button>
                              <Button
                                className="flex h-[60px] items-center justify-center ml-2 sm:ml-[0] rounded-[50%] w-[60px]"
                                size="smIcn"
                                variant="icbOutlineGray4007f"
                              >
                                <Img
                                  src="images/img_instagram.svg"
                                  className="h-[27px]"
                                  alt="instagram"
                                />
                              </Button>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="font-normal mt-1 text-justify text-white_A700 tracking-[0.64px]"
                          >
                            <Text variant="body6">Service</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="font-normal mt-[29px] text-justify text-white_A700 tracking-[0.64px]"
                          >
                            <Text variant="body6">Shop</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="font-normal mt-[25px] text-justify text-white_A700 tracking-[0.64px]"
                          >
                            <Text variant="body6">Contact</Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Line className="bg-blue_gray_100_63 h-px w-full" />
                      <div className="flex sm:flex-col flex-row gap-[7px] items-end justify-start w-[37%] md:w-full">
                        <Text
                          className="font-medium mb-[5px] text-justify text-white_A700 tracking-[0.96px]"
                          variant="body2"
                        >
                          iDeviceCare
                        </Text>
                        <Img
                          src="images/img_copyright.svg"
                          className="h-[30px] mb-[3px] sm:mt-0 mt-2 w-[30px]"
                          alt="copyright"
                        />
                        <Text
                          className="font-medium sm:mt-0 mt-[5px] text-justify text-white_A700 tracking-[0.96px]"
                          variant="body2"
                        >
                          2023
                        </Text>
                        <Text
                          className="font-medium sm:mt-0 mt-[5px] text-justify text-white_A700 tracking-[0.96px]"
                          variant="body2"
                        >
                          All Rights Reserved
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameOnePage;
