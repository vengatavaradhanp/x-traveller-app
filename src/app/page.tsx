import Image from "next/image";
import styles from "./page.module.css";
import { Button, Heading, Stack } from "rsuite";
import Link from "next/link";
import RootLayout from './layout';



export default function Main() {
  return (
    <RootLayout>
    <main className={styles.main}>
      <Heading level={2} style={{ marginBottom: "30px" }}>Main Page</Heading>
      <Button appearance="ghost">
        {" "}
        <Link href="/home"><Heading level={6}>Get Started</Heading></Link>
      </Button>
    </main>
    </RootLayout>
  );
}
