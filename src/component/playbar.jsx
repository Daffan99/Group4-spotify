import "../css/spotify.css";
import fotosong from "../assets/mahalini-sial.jpg";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faLaptop,
  faRepeat,
  faBackwardStep,
  faCirclePlay,
  faForwardStep,
  faShuffle,
  faMicrophone,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { MdSpeakerGroup } from "react-icons/md";
import { HiSpeakerWave } from "react-icons/hi2";

export default function Playbar() {
  return (
    <div className="playbar1">
      <div className="pembungkus">
        <div className="pembungkusBungkus">
          <div className="kiri">
            <div className="gambar">
              <img src={fotosong} alt="" srcset="" />
            </div>
            <div className="judullagu">
              <div className="judullagu2">
                <p>Monokrom</p>
                <p>Tulus</p>
              </div>
              {/* logo */}
              <div className="logo">
                <FontAwesomeIcon icon={faHeart} style={{ color: "#ffffff" }} />
                <FontAwesomeIcon icon={faLaptop} style={{ color: "#ffffff" }} />
              </div>
            </div>
          </div>

          {/* tengah */}
          <div className="tengah">
            <div className="tombolAtas">
              <div className="ta">
                <div>
                  <FontAwesomeIcon
                    icon={faShuffle}
                    style={{ color: "#ffffff" }}
                  />
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faBackwardStep}
                    style={{ color: "#ffffff" }}
                  />
                </div>
                <div className="playButton">
                  <FontAwesomeIcon
                    icon={faCirclePlay}
                    style={{
                      "--fa-primary-color": "#000714",
                      "--fa-secondary-color": "#ffffff",
                    }}
                  />
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faForwardStep}
                    style={{ color: "#ffffff" }}
                  />
                </div>
                <div>
                  <FontAwesomeIcon icon={faRepeat} />
                </div>
              </div>
            </div>
            <div className="tombolBawah">
              <div className="slider">
                <p>01:23</p>

                <Slider aria-label="slider-ex-1" defaultValue={10} width={430}>
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
                <p>04:20</p>
              </div>
            </div>
          </div>
          {/* kanan */}
          <div className="kananSpot">
            <div className="isiKanan">
              <FontAwesomeIcon
                icon={faMicrophone}
                style={{ color: "#ffffff" }}
              />
              <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff" }} />
              <MdSpeakerGroup></MdSpeakerGroup>
              <HiSpeakerWave></HiSpeakerWave>

              <Slider aria-label="slider-ex-1" defaultValue={10} width={100}>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
