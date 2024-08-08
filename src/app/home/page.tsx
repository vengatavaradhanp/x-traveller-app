/* eslint-disable @next/next/no-async-client-component */
"use client";

import React from "react";
import styles from "../page.module.css";
import { List, Grid, Row, Col, Heading, Text, Stack } from "rsuite";
import Image from "next/image";
import GearIcon from "@rsuite/icons/Gear";
import Link from "next/link";
import { User, UsersResponse } from "@/src/models/users.model";
import AppHeader from "@/src/components/AppHeader";
import AppBanner from "@/src/components/AppBanner";
import AppFooter from "@/src/components/AppFooter";

async function fetchData() {
  const res = await fetch(`${process.env.API_URL}/api/users?page=1`);
  const data: UsersResponse = await res.json();
  return data.data;
}

export default async function Home() {
  const data: User[] = await fetchData();

  return (
    <div >
      <AppHeader/>
      <AppBanner/>
      <div className={styles.appFooter}>
      <AppFooter/>
      </div>
      
    {/* <div className={styles.main}> */}
      
      {/* <Stack style={{ margin: "20px" }}>
        <Heading level={3}>Top Employees</Heading>
      </Stack> */}
      {/* <List
        style={{ boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)", padding: "20px" }}
      >
        {data.map((item: User) => (
          <List.Item key={item.id}>
            <Grid>
              <Row
                className="show-grid"
                style={{ alignItems: "center", display: "flex" }}
              >
                <Col xs={3}>
                  <Image
                    src={item.avatar}
                    alt={`${item.first_name} ${item.last_name}`}
                    width={100}
                    height={100}
                  />
                </Col>
                <Col xs={18}>
                  <Heading level={5}>
                    {item.first_name + " " + item.last_name}
                  </Heading>
                  <Text>{item.email}</Text>
                </Col>
                <Col xs={3}>
                  <Link href={`/home/${item.id}`}>
                    <GearIcon
                      spin
                      style={{ fontSize: "2em", cursor: "pointer" }}
                    />
                  </Link>
                </Col>
              </Row>
            </Grid>
          </List.Item>
        ))}
      </List> */}
    {/* </div> */}
    </div>
  );
}
