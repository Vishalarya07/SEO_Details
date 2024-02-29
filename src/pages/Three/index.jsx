import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading, Button } from "../../components";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";
import Chart from "components/Chart";
import axios from "axios"

export default function ThreePage() {

  const [topcurrency, settopcurrency] = useState();
  const [secondcurrency, setsecondcurrency] = useState();
  const [thirdcurrency, setthirdcurrency] = useState();
  const [trendingCurrencies, setTrendingCurrencies] = useState([]);
  const [topcurrencypercent, settopcurrencypercent] = useState();
  const [secondcurrencypercent, setsecondcurrencypercent] = useState();
  const [thirdcurrencypercent, setthirdcurrencypercent] = useState();
  const [inrPrice, setInrPrice] = useState();
  const [usdPrice, setUsdPrice] = useState();

  useEffect(() => {
    setInterval(() => {
      axios.get("https://api.coingecko.com/api/v3/simple/price", {
        params: {
          ids: "bitcoin",
          vs_currencies: "usd,inr",
          include_24hr_change: "true"
        }
      }).then((response) => {
        setInrPrice(response.data.bitcoin.inr);
        setUsdPrice(response.data.bitcoin.usd);
      }).catch((err) => {
        console.log(err);
      })
    }, 1000);


    setInterval(() => {
      axios.get("https://api.coingecko.com/api/v3/search/trending")
        .then((res) => {
          settopcurrency(res.data.coins[0].item.name)
          setsecondcurrency(res.data.coins[1].item.name)
          setthirdcurrency(res.data.coins[2].item.name)
          setTrendingCurrencies(res.data.coins);
          settopcurrencypercent(res.data.coins[0].item.data.price_change_percentage_24h.usd)
          setsecondcurrencypercent(res.data.coins[1].item.data.price_change_percentage_24h.usd)
          setthirdcurrencypercent(res.data.coins[2].item.data.price_change_percentage_24h.usd)

          console.log('res', res.data.coins)
        }).catch((err) => {
          console.log("there is an error", err)
        })
    }, 1000);


  }, [])


  return (
    <>
      <Helmet>
        <title>SEO Details</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[17px] bg-blue_gray-50_02">
        <header className="flex justify-center items-center w-full border-b border-solid border-gray-300 bg-white shadow-xs">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex flex-row sm:flex-row justify-between items-center py-4 md:py-6 w-full">
              <div className="flex justify-center w-full sm:w-auto mb-4 sm:mb-0 gap-1">
                {/* Adjust the logo size for mobile using Tailwind's width (w) and height (h) utilities */}
                <Img src="images/img_1_koinx_logo.png" alt="1koinxlogo_one" className="w-24 sm:w-50 lg:w-48 h-auto" />
              </div>
              <div className="flex flex-row sm:flex-row justify-center sm:justify-start items-center w-full sm:w-auto gap-4 lg:gap-8 sm:pl-2">
                <div className="flex flex-row sm:flex-row justify-center sm:justify-start items-center sm:gap-2 gap-4">
                  <Heading size="xs" as="h6" className="flex justify-center items-center sm:h-[70px] py-[25px] tracking-[-0.16px] bg-white text-center sm:text-left">
                    Free Tools
                  </Heading>
                  <Heading size="xs" as="h6" className="flex justify-center items-center sm:h-[70px] py-[25px] tracking-[-0.16px] bg-white text-center sm:text-left">
                    Resource Center
                  </Heading>
                </div>
                <Button size="md" variant="gradient" color="blue_A400_indigo_A700" className="tracking-[-0.16px] font-semibold min-w-[102px] rounded-lg px-1">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </header>



        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full gap-[109px]">
            <div className="flex flex-row sm:flex-col justify-start items-start w-full gap-5 max-w-[1328px]">
              <div className="flex flex-col items-start justify-start sm:w-[100%] w-[67%] gap-[17px]">
                <div className="flex flex-row justify-start sm:w-[78%] md:w-[42%] lg:w-[40%]">
                  <div className="flex flex-row justify-start items-center w-3/4 gap-[9px]">
                    <Text size="lg" as="p" className="!text-blue_gray-700_01 !font-normal">
                      Cryptocurrencies
                    </Text>
                    <Img src="images/img_icon.svg" alt="icon_one" className="h-2.5 w-2.5 mr-1" />
                  </div>
                  <div className="flex flex-row sm:w-[78%] lg:w-[100%]">
                    <Text size="lg" as="p" className="!text-gray-900">
                      Bitcoin
                    </Text>
                  </div>
                </div>
                <Tabs
                  className="tabsde flex flex-col items-start justify-start h-[103vh] w-full pl-[23px] py-[23px] bg-white-A700 rounded-lg"
                  selectedTabClassName="!text-blue-800 bg-blue-50 rounded-[10px]"
                  selectedTabPanelClassName="mt-[39px] mb-[9px] relative tab-panel--selected"
                >
                  <div className="flex flex-row justify-start items-center w-full gap-[8rem]">
                    <div className="flex flex-row justify-start w-[19%]">
                      <div className="flex flex-row justify-start w-full">
                        <div className="flex flex-row justify-start items-center w-full">
                          <Img src="images/img_image_160.png" alt="image160_one" className="w-9 object-cover" />
                          <div className="flex flex-row justify-end w-[79%]">
                            <div className="flex flex-row justify-start items-start w-[94%] gap-2">
                              <div className="flex flex-row justify-center sm:w-[170%] w-[67%]">
                                <Heading as="h1" className="!text-gray-900_03">
                                  Bitcoin
                                </Heading>
                              </div>
                              <Heading size="xs" as="h2" className="mt-[3px] !text-blue_gray-600">
                                BTC
                              </Heading>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      color="blue_gray_400_01"
                      size="md"
                      className="font-medium border-blue_gray-400 border border-solid min-w-[80px] rounded-lg"
                    >
                      Rank #1
                    </Button>
                  </div>
                  <div className="flex flex-row justify-between items-start w-[67%] mt-10">
                    <div className="flex flex-col items-start justify-start gap-1.5 py-0.5">
                      <Heading size="md" as="h3" className="!text-gray-900_03">
                        $ {usdPrice}
                      </Heading>
                      <Text as="p" className="!font-medium">
                        ₹ {inrPrice}
                      </Text>
                    </div>
                    <div className="flex flex-row justify-center w-[67%]">
                      <div className="flex flex-row justify-start w-full pb-0.5">
                        <div className="flex flex-row justify-start w-[36%]">
                          <div className="flex flex-row justify-start items-start w-full gap-3 py-[3px]">
                            <Button
                              leftIcon={<Img src="images/img_polygon_2.svg" alt="Polygon 2" />}
                              className="mb-0.5 gap-2 font-medium min-w-[84px]"
                            >
                              2.51%
                            </Button>
                            <Text size="lg" as="p" className="mt-1 !text-blue_gray-400_01">
                              (24H)
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-px w-[97%] mt-6 bg-gray-300_02" />
                  <div className="flex flex-row justify-between w-[96%] mt-[22px]">
                    <Heading size="xs" as="h4" className="mt-px !text-gray-900_03">
                      Bitcoin Price Chart (USD)
                    </Heading>
                  </div>
                  <Chart />
                </Tabs>
              </div>
              <div className="flex flex-col items-center justify-start w-[33%] sm:w-[100%] gap-5">
                <div className="flex flex-col items-center justify-start w-full gap-[19px] p-[31px] bg-blue-A700 rounded-[16px]">
                  <div className="flex flex-col items-center justify-start w-[90%] pb-4 gap-3.5">
                    <Heading as="h5" className="w-[82%] !text-white-A700 text-center !font-bold !leading-10">
                      Get Started with KoinX for FREE
                    </Heading>
                    <Text size="lg" as="p" className="!text-gray-100_01 text-center leading-6">
                      With our range of features that you can equip for free,
                      <br />
                      KoinX allows you to be more educated and aware of your tax reports.
                    </Text>
                  </div>
                  <Img src="images/img_frame.svg" alt="image_two" className="h-[166px]" />
                  <Button
                    color="white_A700"
                    size="lg"
                    rightIcon={<Img src="images/img_iconly_light_arrow_right.svg" alt="Iconly/Light/Arrow - Right" />}
                    className="mb-[18px] gap-2.5 font-semibold min-w-[237px] rounded-lg"
                  >
                    Get Started for FREE
                    <br />
                  </Button>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-[23px] p-6 bg-white-A700 rounded-lg">
                  <div className="flex flex-row justify-start w-full">
                    <Heading as="h6">Trending Coins (24h)</Heading>
                  </div>
                  <div className="flex flex-col w-full gap-5">
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="flex flex-row justify-start items-center gap-1.5">
                        {/* <Button color="indigo_400" size="xs" shape="circle" className="w-6"> */}
                        {/* <Img src={trendingCurrencies[0].item.small} /> */}
                        {/* </Button> */}
                        <Text as="p" className="!text-gray-900 !font-medium">
                          {topcurrency}
                        </Text>
                      </div>
                      <Button
                        // leftIcon={<Img src="images/img_polygon_2.svg" alt="Polygon 2" />}
                        className={`gap-2 font-medium min-w-[84px] ${topcurrencypercent >= 0
                          ? "!text-teal-400 bg-teal-500_0f" 
                          : "!text-red-400 bg-red-500_0f"
                        }`}
                      >
                        {`${topcurrencypercent}`.substring(0, 5)}%
                      </Button>
                    </div>
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="flex flex-row justify-start items-center gap-1.5">
                        {/* <Img src={trendingCurrencies[1].item.small} alt="image160_one" className="w-6 object-cover" /> */}
                        <Text as="p" className="!text-gray-900 !font-medium">
                          {secondcurrency}
                        </Text>
                      </div>
                      <Button
                        // leftIcon={<Img src="images/img_polygon_2.svg" alt="Polygon 2" />}
                        className={`gap-2 font-medium min-w-[84px] ${secondcurrencypercent >= 0
                          ? "!text-teal-400 bg-teal-500_0f" 
                          : "!text-red-400 bg-red-500_0f"
                        }`}
                      >
                        {`${secondcurrencypercent}`.substring(0, 5)}%
                      </Button>
                    </div>
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="flex flex-row justify-start items-center w-[42%] gap-1.5">
                        {/* <Img src={trendingCurrencies[2].item.small} alt="image163_one" className="h-6 w-6 rounded-[50%]" /> */}
                        <Text as="p" className="!text-gray-900 !font-medium">
                          {thirdcurrency}
                        </Text>
                      </div>
                      <Button
                        // leftIcon={<Img src="images/img_polygon_2.svg" alt="Polygon 2" />}
                        className={`gap-2 font-medium min-w-[84px] ${thirdcurrencypercent >= 0
                          ? "!text-teal-400 bg-teal-500_0f" 
                          : "!text-red-400 bg-red-500_0f"
                        }`}
                      >
                       {`${thirdcurrencypercent}`.substring(0, 5)}%
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center w-full p-[52px] bg-white-A700">
              <div className="flex flex-col w-full mt-[25px] mb-[5px] ml-1 gap-px max-w-[1330px]">
                <div className="flex flex-col items-center justify-start w-full pb-[30px] gap-5">
                  <div className="flex flex-row justify-start w-[98%]">
                    <Heading as="h4" className="mt-1 !text-gray-900_01">
                      You May Also Like
                    </Heading>
                  </div>
                  <div className="flex flex-row justify-center w-full">
                    <div className="flex flex-row justify-center items-center w-full">
                      <Img src="images/img_button_previous.svg" alt="bnb_one" className="h-11 z-[1] opacity-0.35" />

                      <div className="flex flex-row justify-center w-[99%] ml-[-8px]">
                        <div className="flex flex-row justify-center items-center w-full">
                          <div className="flex flex-row overflow-x-scroll w-full gap-2.5">
                            {trendingCurrencies.map((currency, index) => (
                              <div className="flex flex-row flex-wrap justify-center">
                                <div className="flex flex-row justify-center w-full p-4 border-gray-300_03 border border-solid rounded-[10px]">
                                  <div className="flex flex-row justify-center w-full">
                                    <div className="flex flex-col items-start justify-around w-full h-full ">
                                      <div className="flex flex-col items-start justify-start w-max gap-[11px]">
                                        <div className="flex flex-row justify-center w-full">
                                          <div className="flex flex-row justify-start items-center w-full">
                                            <div className="flex flex-row justify-start items-center w-[57%]">

                                              <Img
                                                src={currency.item.small}
                                                alt="you_may_also"
                                                className="w-[30%] object-cover"
                                              />
                                              <div className="flex flex-row justify-start w-1/2">
                                                <Text as="p" className="!text-gray-900_01">
                                                  {currency.item.name}
                                                </Text>
                                              </div>
                                            </div>
                                            <div className="flex flex-row justify-start w-[44%]">
                                              <Text
                                                size="s"
                                                as="p"
                                                className={`flex justify-center items-center w-[50px] h-5 p-[3px] rounded-sm ${currency.item.data.price_change_percentage_24h.usd >= 0
                                                    ? "!text-teal-400 bg-teal-500_0f" 
                                                    : "!text-red-400 bg-red-400_0f"
                                                  }`}
                                              >
                                                {`${currency.item.data.price_change_percentage_24h.usd}`.substring(0, 5)}%
                                              </Text>

                                            </div>
                                          </div>
                                        </div>
                                        <div className="flex flex-row justify-start">
                                          <Text size="2xl" as="p" className="!text-gray-900_02">
                                            {currency.item.data.price}
                                          </Text>
                                        </div>
                                      </div>
                                      <Img src={currency.item.data.sparkline} alt="bnb_two" className="h-[60px] self-center" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                          <Img src="images/img_button_next_slide.svg" alt="bnb_three" className="h-11 ml-[-15px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full pb-[30px] gap-5">
                  <div className="flex flex-row justify-start w-[98%]">
                    <Heading as="h4" className="mt-1 !text-gray-900_01">
                      Trending Coins
                    </Heading>
                  </div>
                  <div className="flex flex-row justify-center w-full">
                    <div className="flex flex-row justify-center items-center w-full">
                      <Img
                        src="images/img_button_previous.svg"
                        alt="buttonprevious"
                        className="h-11 z-[1] opacity-0.35"
                      />
                      <div className="flex flex-row justify-center w-[99%] ml-[-8px]">
                        <div className="flex flex-row justify-center items-center w-full">
                        <div className="flex flex-row overflow-x-scroll w-full gap-2.5">
                            {trendingCurrencies.map((currency, index) => (
                              <div className="flex flex-row flex-wrap justify-center">
                                <div className="flex flex-row justify-center w-full p-4 border-gray-300_03 border border-solid rounded-[10px]">
                                  <div className="flex flex-row justify-center w-full">
                                    <div className="flex flex-col items-start justify-around w-full h-full ">
                                      <div className="flex flex-col items-start justify-start w-max gap-[11px]">
                                        <div className="flex flex-row justify-center w-full">
                                          <div className="flex flex-row justify-start items-center w-full">
                                            <div className="flex flex-row justify-start items-center w-[57%]">

                                              <Img
                                                src={currency.item.small}
                                                alt="you_may_also"
                                                className="w-[30%] object-cover"
                                              />
                                              <div className="flex flex-row justify-start w-1/2">
                                                <Text as="p" className="!text-gray-900_01">
                                                  {currency.item.name}
                                                </Text>


                                              </div>
                                            </div>
                                            <div className="flex flex-row justify-start w-[44%]">
                                              <Text
                                                size="s"
                                                as="p"
                                                className={`flex justify-center items-center w-[50px] h-5 p-[3px] rounded-sm ${currency.item.data.price_change_percentage_24h.usd >= 0
                                                    ? "!text-teal-400 bg-teal-500_0f" // Positive change: teal background
                                                    : "!text-red-400 bg-red-500_0f" // Negative change: red background
                                                  }`}
                                              >
                                                {`${currency.item.data.price_change_percentage_24h.usd}`.substring(0, 5)}%
                                              </Text>

                                            </div>
                                          </div>
                                        </div>
                                        <div className="flex flex-row justify-start">
                                          <Text size="2xl" as="p" className="!text-gray-900_02">
                                            {currency.item.data.price}
                                          </Text>
                                        </div>
                                      </div>
                                      <Img src={currency.item.data.sparkline} alt="bnb_two" className="h-[60px] self-center" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                          <Img
                            src="images/img_button_next_slide.svg"
                            alt="buttonnext_one"
                            className="h-11 ml-[-15px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
