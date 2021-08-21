import { VStack, Heading } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import {
    TitleStyle,
    PageContainerStyle,
    RootContainerStyle,
} from "../styles/home";

export default function Home() {
    return (
        <VStack {...RootContainerStyle}>
            <Head>
                <title>AgrowFund Admin</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <VStack {...PageContainerStyle}>
                <Heading {...TitleStyle}>
                    Welcome to
                    <Link href="/"> AgrowFund ADMIN App!</Link>
                </Heading>
            </VStack>
        </VStack>
    );
}
