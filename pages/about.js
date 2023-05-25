// styles
import H from "../styles/Home.module.css";
// next Head
import Head from "next/head"
// react
import React, { useEffect, useState } from "react";
// Images
const bannerImg = "/images/bannerImage.jpeg"
const thinkingThaught = "/images/img1.jpeg"
const register = "/images/img2.jpg"
const booth = "/images/img3.jpg"
// mui
import Button from "@mui/material/Button"
// next router
import { useRouter } from "next/router";
// next img
import img from 'next/image';

// Home Function
const About = () => {
  const router = useRouter()
  return (
    <React.Fragment>
      <Head>
        <title>About | Pollify</title>
      </Head>
      <div className={H.screen} style={{ height: "100vh" }} >
        < div className={H.contentBox} style={{justifyContent:"space-between"}} >
          {/* navbar */}
          <div className={H.navbar} style={{ width: "75%",borderBottom:"1px solid #ccc" }} >
            <h3>Pollify</h3>
            <div className={H.navbarTitle}>
              <span onClick={() => { router.push("/home") }} >Home</span>
              {/* <span>Learn</span> */}
              <span style={{ color: "#2791d4" }} >About</span>
              <span onClick={() => { router.push("/vote") }}  >Vote</span>
              <span onClick={()=>{router.push("/result")}} >Result</span>
            </div>
          </div>
          {/* about */}
          <div className={H.aboutBox} >
            <h1>About:</h1>
            <span style={{fontFamily: "'Eczar', serif", color: "black", fontSize: "25px" }}>Our online voting website provides a secure and convenient platform for organizations to conduct elections and polls. Our platform is designed to be user-friendly and accessible, allowing voters to cast their ballots quickly and easily from any device with an internet connection. With our advanced security measures, including two-factor authentication and encryption, we ensure the integrity and privacy of the voting process. Our platform also offers customizable options for administrators to set up and manage elections, including voter eligibility, candidate nomination, and result tabulation. With the use of otp login access to the voters we can ensure the security as one voter will be just allowed to vote once. The OTP will just be valid for a certain duration of the time and as the name says it is a one time password which can only be used once. This makes our webpage better than the EVM machines used right now for the voting purposes ,With the help of our website we will be able to prevent any kind of voting frauds like there will be no fake votes ,every vote will be counted and saved with the votes information which the previously developed machine cannot do, which makes our website better and more advantageous than them. Whether you are running a small school election or a large-scale corporate poll, our online voting website provides a simple, efficient, and secure solution for all your election needs.
The current voting system is not secure. There have been cases of voter fraud, where people have voted multiple times or voted for someone else. This is a serious problem, as it undermines the democratic process. One way to improve the security of the voting system is to implement OTP authentication. OTP authentication is a security process that requires users to provide two pieces of information in order to access a system or service. The first piece of information is usually a username and password. The second piece of information is usually a code that is sent to the user's mobile phone. 

By requiring voters to provide an OTP in addition to their username and password, OTP authentication can help to prevent voter fraud. This is because it would be more difficult for someone to impersonate a voter if they also needed to have access to their mobile phone.

Functional Requirements: - 

The following are the functionalities of my voting website: 

1. Login: 

Voters must be able to login to their account on the voting website using a username and password. 

Voters must be able to authenticate their login with an OTP sent to their phone. 

Voters must be able to reset their password if they forget it. 

2. OTP authentication: 

Voters must be able to receive an OTP on their phone when they login to their account. 

Voters must be able to enter the OTP to authenticate their login. 

Voters must be able to request a new OTP if they do not receive it. 

3. Voting: 

Voters must be able to view a list of candidates in an election. 

Voters must be able to select the candidates they want to vote for. 

Voters must be able to submit their vote.

Voters must be able to view the results of an election. 

4. About page: 

The about page must provide information about the voting website, such as its purpose, how it works, and the security measures in place. 

The about page must also provide information about the election, such as the candidates, the issues, and the voting process. 

5. Voting knowledge: 

The voting knowledge section must provide information about voting, such as the rights and responsibilities of voters, the different types of elections, and how to register to vote. 

The voting knowledge section must also provide information about the voting process, such as how to find your polling place, how to cast a vote, and how to verify your vote.
</span>
          </div>
          <div className={H.footer} >
          <span style={{marginTop:"10px",marginBottom:"10px"}} >  Contact us : pg900051@gmail.com</span>
          </div>
        </div>
      </div>

    </React.Fragment >
  )
}

// default exporting Home 
export default About;