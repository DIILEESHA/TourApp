// SingleHotelPage.js
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./single.css";
import hotelsData from "../seller/hotels/hotels.json"; // Import your hotel data
import { CiHeart } from "react-icons/ci";
import { GrMapLocation } from "react-icons/gr";
import { FaStar, FaWalking, FaWifi } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import { GiModernCity } from "react-icons/gi";
import {
  PiAirplaneInFlightLight,
  PiTelevisionSimpleDuotone,
} from "react-icons/pi";
import { IoFastFoodOutline } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";
import Subscribe from "../subscribe/Subscribe";
import {
  MdArrowRight,
  MdOutlineBathroom,
  MdOutlineBedroomChild,
  MdOutlineCleanHands,
  MdOutlineSecurity,
  MdOutlineSmokeFree,
} from "react-icons/md";
import { LuParkingCircle } from "react-icons/lu";
import { MdOutlineArrowOutward } from "react-icons/md";
import LazyLoad from "react-lazy-load-image-component";
import { MdOutlineChevronRight } from "react-icons/md";
import Select from "react-select";
import { BiDrink } from "react-icons/bi";
import { SiDwavesystems } from "react-icons/si";
import { RiServiceLine } from "react-icons/ri";

import {
  FaHelmetSafety,
  FaHouseCircleCheck,
  FaKitchenSet,
  FaPerson,
} from "react-icons/fa6";

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Hotels from "../seller/hotels/Hotels";
import Scroller from "../scroll/Scroller";

const SingleHotelPage = ({ hotels }) => {
  const { hotelId } = useParams();
  const [hotelDetails, setHotelDetails] = useState(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const selectedHotel = hotelsData.find(
        (hotel) => hotel.id === parseInt(hotelId, 10)
      );
      setHotelDetails(selectedHotel);
      // setIsLoading(false); // Set loading to false once data is fetched
    }, 0);
  }, [hotelId]);

  // if (isLoading) {
  //   // Display loading spinner while data is being fetched
  //   return (
  //     <div className="spinner-container">
  //       <div className="spinner"></div>
  //     </div>
  //   );
  // }

  if (!hotelDetails) {
    return <div>Loading...</div>;
  }

  const images = [
    hotelDetails.img,
    "https://gotrip-appdir.vercel.app/img/gallery/1/2.png",
    "https://gotrip-appdir.vercel.app/img/gallery/1/4.png",
    "https://gotrip-appdir.vercel.app/img/gallery/1/3.png",
  ];

  const options = [
    { value: "1(US$ 3,000)", label: "1(US$ 3,000)" },
    { value: "2(US$ 3,000)", label: "2(US$ 3,000)" },
    { value: "3(US$ 3,000)", label: "3(US$ 3,000)" },
  ];

  const openLightbox = () => {
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const navigateGallery = (direction) => {
    setPhotoIndex((photoIndex + direction + images.length) % images.length);
  };

  return (
    <div className="single_container">
      <div className="single_hotel_toper">
        <div className="single_hotel_lefter">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <h3 className="hotel_detailer poo">home | </h3>
          </Link>
          <h3 className="hotel_detailer">london hotels | </h3>
          <h3 className="hotel_detailer um">
            Great Northern Hotel, a Tribute Portfolio Hotel, London
          </h3>
        </div>
        <div className="single_hotel_righter">
          <h3 className="hotel_detailer oc">All Hotel in London</h3>
        </div>
      </div>

      <div className="hotel_main_gallery">
        <div className="dddd">
          <div className="hotel_image_gallery bn">
            {/* <div className=""> */}
            {images.map((src, index) => (
              <div
                className="hotel_sub_image"
                onClick={() => {
                  setPhotoIndex(index);
                  openLightbox();
                }}
              >
                {index === 3 ? (
                  <>
                    <img src={src} alt="" loading="lazy" />
                    <div className="customer">
                      <button className="custom-btn" onClick={openLightbox}>
                        View All Photos
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <img src={src} alt="" loading="lazy" />
                    <div className="heart_img">
                      <CiHeart className="hearted" />
                    </div>
                  </>
                )}
              </div>
            ))}
            {/* </div> */}

            {/* <Subscribe/> */}
          </div>

          <div className="optioner">
            <div className="optioner_one">
              <div className="option_detail">
                <h2 className="option_hotel">The Montcalm At Brewery London</h2>
                <h3 className="option_desc">
                  <FiMapPin />
                  Westminster Borough, London
                </h3>
              </div>
              <div className="option_detail ttt">
                <h3 className="option_hotel_price">
                  From
                  <h2 className="pricer">{hotelDetails.price}</h2>
                </h3>
                <button className="hotel_option_btn">
                  select room <MdOutlineArrowOutward />
                </button>
              </div>
            </div>
            <div className="liner"></div>
            <div className="overviewer">
              <h2>overview</h2>
              <p>
                You can directly book the best price if your travel dates are
                available, all discounts are already included. In the following
                house description you will find all information about our
                listing.
                <br />
                <br /> 2-room terraced house on 2 levels. Comfortable and cosy
                furnishings: 1 room with 1 french bed and radio. Shower, sep.
                WC. Upper floor: (steep stair) living/dining room with 1 sofabed
                (110 cm, length 180 cm), TV. Exit to the balcony. Small kitchen
                (2 hot plates, oven,
              </p>
              <div className="liner"></div>
            </div>

            <div className="facilities">
              <h2>Most Popular Facilities</h2>
              <div className="facility_grid">
                <div className="facility_sub">
                  <MdOutlineSmokeFree />
                  <h2>Non-smoking rooms</h2>
                </div>
                <div className="facility_sub">
                  <LuParkingCircle />
                  <h2>Non-smoking rooms</h2>
                </div>
                <div className="facility_sub">
                  <FaHouseCircleCheck />
                  <h2>Non-smoking rooms</h2>
                </div>
                <div className="facility_sub">
                  <FaWifi />
                  <h2>Non-smoking rooms</h2>
                </div>
                <div className="facility_sub">
                  <FaKitchenSet />
                  <h2>Non-smoking rooms</h2>
                </div>
                <div className="facility_sub">
                  <FaHelmetSafety />
                  <h2>Non-smoking rooms</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hotel_image_gallery fn">
          <div className="map_card">
            <div className="map_img">
              <img
                src="https://gotrip-appdir.vercel.app/img/general/map.png"
                alt=""
              />
            </div>
            <div className="mapper">
              <GrMapLocation className="doom" />
              <h3>Exceptional location</h3>
            </div>
            <div className="mapper">
              <FaWalking className="doom" />
              <h3>Exceptional for walking</h3>
            </div>
            <div className="liner"></div>
            <h3 className="landmark">Popular landmarks</h3>
            <div className="landmark_detail">
              <h2>royal museum</h2>
              <h3>0.1km</h3>
            </div>
            <div className="landmark_detail">
              <h2>Harrogate Turkish Baths</h2>
              <h3>0.1km</h3>
            </div>
          </div>
          <div className="map_card">
            <div className="rater">
              <h3 className="rating_val">{hotelDetails.value}</h3>
              <div className="rater_detail">
                <h2>exceptional</h2>
                <h2>3467 reviews</h2>
              </div>
            </div>
            <div className="guest">
              <IoIosPeople className="doom" />
              <h3>Highly rated by guests – 86% would recommend</h3>
            </div>
            <div className="liner"></div>
            <div className="liker">
              <AiFillLike className="doom" />
              <h2>breakfast</h2>
              <h2 style={{ color: "#3554d1" }}>25</h2>
            </div>
          </div>
          <div className="map_card">
            <h3 className="landmark">Property highlights</h3>
            <div className="property">
              <GiModernCity className="doom" />
              <h2>In London City Centre</h2>
            </div>
            <div className="property">
              <PiAirplaneInFlightLight className="doom" />
              <h2>Airport transfer</h2>
            </div>
            <div className="property">
              <IoFastFoodOutline className="doom" />
              <h2>Front desk [24-hour]</h2>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() => navigateGallery(-1)}
          onMoveNextRequest={() => navigateGallery(1)}
        />
      )}

      <div className="demon">
        <div className="demand">
          <FaStar className="startt" />
          <div className="demand_ctrl">
            <h2>This property is in high demand!</h2>
            <h3>7 travelers have booked today.</h3>
          </div>
        </div>

        <div className="rooms">
          <h2 className="der">available rooms</h2>

          <div className="rooms_flex">
            <div className="rooms_left">
              <div className="rooms_img">
                <img
                  src="https://gotrip-appdir.vercel.app/_next/image?url=%2Fimg%2Fbackgrounds%2F1.png&w=256&q=75"
                  loading="lazy"
                  alt=""
                />
              </div>

              <h2 className="room_title">standard twin room</h2>

              <div className="facility_sub">
                <MdOutlineSmokeFree />
                <h2>Non-smoking rooms</h2>
              </div>
              <div className="facility_sub">
                <LuParkingCircle />
                <h2>Non-smoking rooms</h2>
              </div>
              <div className="facility_sub">
                <FaHouseCircleCheck />
                <h2>Non-smoking rooms</h2>
              </div>
              <div className="facility_sub">
                <FaWifi />
                <h2>Non-smoking rooms</h2>
              </div>
            </div>
            <div className="rooms_right">
              <div className="rooms_min_right">
                <div className="rooms_sub_min">
                  <div className="rom_sub_min">
                    <div className="sub_miner">
                      <h2>Your price includes:</h2>
                      <ul>
                        <li>
                          <MdOutlineChevronRight />
                          Pay at the hotel
                        </li>
                        <li>
                          <MdOutlineChevronRight />
                          Pay nothing until March 30, 2022
                        </li>
                        <li>
                          <MdOutlineChevronRight />
                          Free cancellation before April 1, 2022
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="rom_sub_min">
                    <div className="sub_miner opi">
                      <h2>Sleeps</h2>
                    </div>
                    <div className="faperson">
                      <FaPerson className="persona" />
                      <FaPerson className="persona" />
                    </div>
                  </div>
                  <div className="rom_sub_min">
                    <div className="sub_miner opi">
                      <h2>Select Rooms</h2>
                      <div className="bla">
                        <Select
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          options={options}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="rom_sub_min">
                    <div className="sub_miner opz">
                      <h2>3 rooms for </h2>
                      <h3>{hotelDetails.price}</h3>
                      <div className="lk">
                      <button className="hotel_option_btns">
                        select room <MdOutlineArrowOutward />
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rooms_min_right">
                <div className="rooms_sub_min">
                  <div className="rom_sub_min">
                    <div className="sub_miner">
                      <h2>Your price includes:</h2>
                      <ul>
                        <li>
                          <MdOutlineChevronRight />
                          Pay at the hotel
                        </li>
                        <li>
                          <MdOutlineChevronRight />
                          Pay nothing until March 30, 2022
                        </li>
                        <li>
                          <MdOutlineChevronRight />
                          Free cancellation before April 1, 2022
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="rom_sub_min">
                    <div className="sub_miner opi">
                      <h2>Sleeps</h2>
                    </div>
                    <div className="faperson">
                      <FaPerson className="persona" />
                      <FaPerson className="persona" />
                    </div>
                  </div>
                  <div className="rom_sub_min">
                    <div className="sub_miner opi">
                      <h2>Select Rooms</h2>
                      <div className="bla">
                        <Select
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          options={options}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="rom_sub_min">
                    <div className="sub_miner opz">
                      <h2>3 rooms for </h2>
                      <h3>{hotelDetails.price}</h3>
                      <button className="hotel_option_btns">
                        select room <MdOutlineArrowOutward />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rooms_min_right">
                <div className="rooms_sub_min">
                  <div className="rom_sub_min">
                    <div className="sub_miner">
                      <h2>Your price includes:</h2>
                      <ul>
                        <li>
                          <MdOutlineChevronRight />
                          Pay at the hotel
                        </li>
                        <li>
                          <MdOutlineChevronRight />
                          Pay nothing until March 30, 2022
                        </li>
                        <li>
                          <MdOutlineChevronRight />
                          Free cancellation before April 1, 2022
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="rom_sub_min">
                    <div className="sub_miner opi">
                      <h2>Sleeps</h2>
                    </div>
                    <div className="faperson">
                      <FaPerson className="persona" />
                      <FaPerson className="persona" />
                    </div>
                  </div>
                  <div className="rom_sub_min">
                    <div className="sub_miner opi">
                      <h2>Select Rooms</h2>
                      <div className="bla">
                        <Select
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          options={options}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="rom_sub_min">
                    <div className="sub_miner opz">
                      <h2>3 rooms for </h2>
                      <h3>{hotelDetails.price}</h3>
                      <button className="hotel_option_btns">
                        select room <MdOutlineArrowOutward />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fb">
          <h2 className="der">Facilities of this Hotel</h2>

          <div className="fb_grid">
            <div className="fb_sub_grid">
              <h2 className="sub_fb">
                <MdOutlineBathroom className="meow" />
                Bathroom
              </h2>
              <div className="nm">
                <ul>
                  <li>
                    <MdArrowRight />
                    Towels
                  </li>
                  <li>
                    <MdArrowRight />
                    Bath or shower
                  </li>
                  <li>
                    <MdArrowRight />
                    Private bathroom
                  </li>
                  <li>
                    <MdArrowRight />
                    Toilet
                  </li>
                  <li>
                    <MdArrowRight />
                    Free toiletries
                  </li>
                  <li>
                    <MdArrowRight />
                    Hairdryer
                  </li>
                  <li>
                    <MdArrowRight />
                    Bath
                  </li>
                </ul>
              </div>
            </div>
            <div className="fb_sub_grid">
              {" "}
              <h2 className="sub_fb">
                <PiTelevisionSimpleDuotone className="meow" />
                Media & Technology
              </h2>
              <div className="nm">
                <ul>
                  <li>
                    <MdArrowRight />
                    Flat-screen TV
                  </li>
                  <li>
                    <MdArrowRight />
                    Satellite channels
                  </li>
                  <li>
                    <MdArrowRight />
                    Radio
                  </li>
                  <li>
                    <MdArrowRight />
                    Telephone
                  </li>
                  <li>
                    <MdArrowRight />
                    TV
                  </li>
                </ul>
              </div>
            </div>
            <div className="fb_sub_grid">
              {" "}
              <h2 className="sub_fb">
                <MdOutlineSecurity className="meow" />
                Safety & security
              </h2>
              <div className="nm">
                <ul>
                  <li>
                    <MdArrowRight />
                    Fire extinguishers
                  </li>
                  <li>
                    <MdArrowRight />
                    CCTV in common areas
                  </li>
                  <li>
                    <MdArrowRight />
                    Smoke alarms
                  </li>
                  <li>
                    <MdArrowRight />
                    24-hour security
                  </li>
                </ul>
              </div>
            </div>
            <div className="fb_sub_grid">
              {" "}
              <h2 className="sub_fb">
                <MdOutlineBedroomChild className="meow" />
                Bedroom
              </h2>
              <div className="nm">
                <ul>
                  <li>
                    <MdArrowRight />
                    Linen
                  </li>
                  <li>
                    <MdArrowRight />
                    Wardrobe or closet
                  </li>
                </ul>
              </div>
            </div>
            <div className="fb_sub_grid">
              {" "}
              <h2 className="sub_fb">
                <BiDrink className="meow" />
                Food & Drink
              </h2>
              <div className="nm">
                <ul>
                  <li>
                    <MdArrowRight />
                    Kid meals
                  </li>
                  <li>
                    <MdArrowRight />
                    Special diet menus (on request)
                  </li>
                  <li>
                    <MdArrowRight />
                    Breakfast in the room
                  </li>
                  <li>
                    <MdArrowRight />
                    Bar
                  </li>
                  <li>
                    <MdArrowRight />
                    Restaurant
                  </li>
                  <li>
                    <MdArrowRight />
                    Tea/Coffee maker
                  </li>
                </ul>
              </div>
            </div>

            <div className="fb_sub_grid">
              {" "}
              <h2 className="sub_fb">
                <RiServiceLine className="meow" />
                Reception services
              </h2>
              <div className="nm">
                <ul>
                  <li>
                    <MdArrowRight />
                    Invoice provided
                  </li>
                  <li>
                    <MdArrowRight />
                    Private check-in/check-out
                  </li>
                  <li>
                    <MdArrowRight />
                    Luggage storage
                  </li>
                  <li>
                    <MdArrowRight />
                    24-hour front desk
                  </li>
                </ul>
              </div>
            </div>
           
           
          </div>
        </div>

        <Hotels hotels={hotelsData.slice(0, 4)} />
      </div>

      <Subscribe />
      {/* <Scroller/> */}
    </div>
    // </div>
  );
};

export default SingleHotelPage;
