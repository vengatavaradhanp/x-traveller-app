import React from "react";
import {
  List,
  Grid,
  Row,
  Col,
  Heading,
  Text,
  Stack,
  Panel,
  Button,
  ButtonGroup,
  Placeholder,
  IconButton,
  Drawer,
  RadioGroup,
  Radio,
  ButtonToolbar,
} from "rsuite";
import Image from "next/image";
import FlightIcon from "../assets/images/Flight.svg";
import FlightIconG from "../assets/images/FlightIconG.svg";
import HotelIcon from "../assets/images/Hotel.svg";
import HotelIconB from "../assets/images/HomeiconB.svg";
import CabsIconB from "../assets/images/Cabs.svg";
import CabsIcon from "../assets/images/CabIconB.svg";
import TrainIcon from "../assets/images/Train.svg";
import TrainIconB from "../assets/images/TrainiconB.svg";
import BusIcon from "../assets/images/Bus.svg";
import BusIconB from "../assets/images/BusiconB.svg";
import HolidayIcon from "../assets/images/Holidayicon.svg";
import HolidayIconB from "../assets/images/HolidayiconB.svg";
import { SelectPicker } from "rsuite";
import MemberIcon from "@rsuite/icons/Member";
import { AutoComplete } from "rsuite";
import { Input, InputGroup } from "rsuite";
import Twowayicon from "../assets/images/Twoway.svg";
import styles from "../assets/styles/AutoComplete.module.css";
import FlightCard from "./landing-page-card/Flights/FlightCard";
import Card from "../components/landing-page-card/Card";

const _nav = [
  {
    name: "Flight",
    values: ["Flight"],
    icon: FlightIcon,
    icons: FlightIconG,
  },
  {
    name: "Hotel",
    values: ["Hotel"],
    icon: HotelIconB,
    icons: HotelIcon,
  },
  {
    name: "Train",
    values: ["Train"],
    icon: TrainIconB,
    icons: TrainIcon,
  },
  {
    name: "Cabs",
    values: ["Cabs"],
    icon: CabsIcon,
    icons: CabsIconB,
  },
  {
    name: "Bus",
    values: ["Bus"],
    icon: BusIconB,
    icons: BusIcon,
  },
  {
    name: "Holiday",
    values: ["Holiday"],
    icon: HolidayIconB,
    icons: HolidayIcon,
  },
];

const HomeCard = () => {
  const [backdrop, setBackdrop] = React.useState("Flight");
  const [open, setOpen] = React.useState(false);
  const [from, setFrom] = React.useState(null);
  const [to, setTo] = React.useState(null);

  const handleBackdropChange = (value: string, event: React.SyntheticEvent) => {
    setBackdrop(value);
  };

  const renderCard = () => {
    switch (backdrop) {
      case "Flight":
        return <FlightCard backdrop={backdrop} />;
      case "Hotel":
        return <Card backdrop={backdrop} />;
      case "Train":
        return <Card backdrop={backdrop} />;
      case "Cabs":
        return <Card backdrop={backdrop} />;
      case "Bus":
        return <Card backdrop={backdrop} />;
      case "Holiday":
        return <Card backdrop={backdrop} />;
      default:
        return null;
    }
  };

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <Panel
        bordered
        header={
          <div
            style={{
              position: "relative",
              backgroundColor: "white",
              boxSizing: "border-box",
              display: "flex",
            }}
          >
            <RadioGroup
              name="radioList"
              appearance="picker"
              inline
              value={backdrop}
              onChange={(value, event) =>
                handleBackdropChange(value as string, event)
              }
              style={{
                display: "flex",
                flexWrap: "wrap",
                marginTop: "-55px",
                backgroundColor: "white",
              }}
            >
              {_nav.map((item) => (
                <Radio
                  key={item.name}
                  value={item.values[0]}
                  style={{ padding: "10px", height: "auto", margin: "5px" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      width: "45px",
                    }}
                  >
                    <Image
                      src={backdrop === item.values[0] ? item.icon : item.icons}
                      alt={`${item.name} Icon`}
                      width={30}
                      height={20}
                      style={{
                        // filter: backdrop === item.values[0] ? 'invert(0.4) sepia(1) saturate(4) hue-rotate(0deg)' : 'invert(53%) sepia(100%) saturate(600%) hue-rotate(180deg) brightness(85%) contrast(100%)',
                        transition: "filter 0.3s ease",
                      }}
                    />
                    <span style={{ marginTop: "5px" }}>{item.name}</span>
                  </div>
                </Radio>
              ))}
            </RadioGroup>
          </div>
        }
        style={{
          backgroundColor: "white",
          position: "relative",
          overflow: "visible",
          color: "lightgrey",
          padding: "0",
          height: backdrop === "Flight" ? "auto" : "301px",
        }}
      >
        {renderCard()}
      </Panel>
    </div>
  );
};

export default HomeCard;
