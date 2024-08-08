import React, { useState } from "react";
import { Dropdown, Button, Col, Text } from "rsuite"; // Adjust import based on your library
import styles from "../../assets/styles/FlightCard.module.css";
import User from "../../../assets/images/User.svg";
import Image from "next/image";

interface PassengerCounts {
  adults: number;
  children: number;
  infants: number;
}

const buttonList: string[] = [
  "Economy",
  "Premium Economy",
  "Business",
  "First Class",
];

const FlightDropdown: React.FC = () => {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);
  const [counts, setCounts] = useState<PassengerCounts>({
    adults: 0,
    children: 0,
    infants: 0,
  });

  const [type, setType] = useState<string>("Economy");

  const handleIncrement = (type: keyof PassengerCounts) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [type]: prevCounts[type] + 1,
    }));
    setAccordionOpen(true);
  };

  const handleDecrement = (type: keyof PassengerCounts) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [type]: Math.max(prevCounts[type] - 1, 0),
    }));
    setAccordionOpen(true);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <Text style={{ marginBottom: "8px", color: "grey" }}>Passengers</Text>
      <Dropdown
        title={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              color: "black",
            }}
          >
            <Image
              src={User}
              alt="User"
              width={22}
              height={22}
              style={{ marginRight: 8 }}
            />
            Adults {counts.adults}, Children {counts.children}, Infants{" "}
            {counts.infants}, {type}
          </div>
        }
        open={accordionOpen}
        onClick={() => setAccordionOpen(!accordionOpen)}
        onSelect={() => setAccordionOpen(true)}
        style={{
          border: "1px solid lightgrey",
          lineHeight: "0px",
          width: "100%",
          backgroundColor: "white",
          borderRadius: "5px",
          display: "grid",
        }}
      >
        <Dropdown.Item
          style={{ backgroundColor: "white", width: "100%", height: "auto" }}
        >
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #d1d1d1",
                padding: "10px 0px 10px 7px",
                flexWrap: "wrap",
              }}
            >
              <div>
                <span>Adults</span>
                <div style={{ fontSize: "12px", color: "#666" }}>
                  (Aged 12+ yrs)
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingRight: "25px",
                }}
              >
                <Button onClick={() => handleDecrement("adults")}>-</Button>
                <span style={{ margin: "0 10px" }}>{counts.adults}</span>
                <Button onClick={() => handleIncrement("adults")}>+</Button>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #d1d1d1",
                padding: "10px 0px 10px 7px",
                flexWrap: "wrap",
              }}
            >
              <div>
                <span>Children</span>
                <div style={{ fontSize: "12px", color: "#666" }}>
                  (Aged 2-12 yrs)
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingRight: "25px",
                }}
              >
                <Button onClick={() => handleDecrement("children")}>-</Button>
                <span style={{ margin: "0 10px" }}>{counts.children}</span>
                <Button onClick={() => handleIncrement("children")}>+</Button>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #d1d1d1",
                padding: "10px 0px 10px 7px",
                flexWrap: "wrap",
              }}
            >
              <div>
                <span>Infants</span>
                <div style={{ fontSize: "12px", color: "#666" }}>
                  (Below 2 yrs)
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingRight: "25px",
                }}
              >
                <Button onClick={() => handleDecrement("infants")}>-</Button>
                <span style={{ margin: "0 10px" }}>{counts.infants}</span>
                <Button onClick={() => handleIncrement("infants")}>+</Button>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 0 5px",
                flexWrap: "wrap",
              }}
            >
              {buttonList.map((item: string, i: number) => (
                <Button
                  key={i}
                  onClick={() => setType(item)}
                  appearance="ghost"
                  style={{
                    background: type === item ? "#0770E31A" : "transparent",
                  }}
                >
                  {item}
                </Button>
              ))}
            </div>
          </>
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default FlightDropdown;
