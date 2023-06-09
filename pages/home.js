// styles
import H from "../styles/Home.module.css";
// next Head
import Head from 'next/head'
// react
import React, { useEffect, useState } from "react";
// logo
const logo = "/icons/logo.png"
// Images
const bannerImg = "/images/bannerimg.jpg"
const thinkingThaught = "/images/img1.jpeg"
const register = "/images/img2.jpg"
const booth = "/images/img3.jpg"
// mui
import Button from '@mui/material/Button'
// components
import Detail from '../components/detail';
// next router
import { useRouter } from "next/router";
// next img
import img from 'next/image';



const eligibilityCriteria = [
  "Eligibility Criteria for Candidates:",

  "1. Under graduate students between the ages of 16 and 26 shall be eligible to contest elections. For Post Graduate Students the maximum age limit to legitimately contest for election shall be between the ages of 22-30 years.",

  "2. The candidate shall in no event have any academic arrears in the year of contesting the election.",

  "3. The candidate shall have attained the minimum percentage of attendance as prescribed by the university or 75% attendance, whichever is higher.",
  "4. The candidate shall have one opportunity to contest for the post of office bearer, and two opportunities to contest for the post of an executive member.",
  "5. The candidate shall not have a previous criminal record, that is to say he/she shall not have been tried and/or convicted of any criminal offence or misdemeanor. The candidate shall also not have been subjected to any disciplinary action by Medical College/Institution/University authorities.",
  "6. The candidate shall be a regular, full time student of the Medical College/Institution/University. That is to say that all eligible candidates shall be enrolled in a full time course.",
  "7. Candidates are often required to have an active involvement in campus activities, clubs, or organizations to demonstrate their commitment to the student community. This involvement showcases their awareness of student issues and their ability to represent their peers effectively.",
  "8. Generally, candidates must be in good academic standing, meaning they meet the minimum academic requirements set by the institution. This criterion ensures that the student representative is capable of managing their responsibilities while maintaining satisfactory academic progress.",
  "9. Depending on the institution, students may need to be nominated by their peers or self-nominate to be considered for the position. Nomination processes can vary, and it's common for candidates to require a minimum number of supporting signatures from fellow students.",
  "10. Universities may consider the candidate's disciplinary record and behavior to ensure that the student representative embodies the values and ethics of the institution. Any serious misconduct or violations may impact a candidate's eligibility.",
];

const voteContent = [
  "Code of conduct for Candidates and Election Administrators:",

  "1. No candidate shall indulge in, nor shall abet, any activity, which may aggravate existing differences or create mutual hatred or cause tension between different castes and communities, religious or linguistic, or between any group(s) of students ",
  "  ",
  "2. Criticism of other candidates, when made, shall be confined to their policies and programmes, past record and work. Candidates shall refrain from criticism of all aspects of private life, not connected with the public activities of the other candidates or supporters of such other candidates. Criticism of other candidates, or their supporters based on unverified allegations or distortion shall be avoided.",
  " ",
  "3. There shall be no appeal to caste or communal feeling for securing votes. Places of worship, within or without the campus, shall not be used for election propaganda.",
  "4. All candidates shall be prohibited from indulging or abetting, all activities which are considered to be “corrupt practices” and offences, such as bribing of voters, intimidation of voters, impersonation of voters, canvassing or the use of propaganda within 100 meters of polling stations, holding public meetings during the period of 24 hours ending with the hour fixed for the close of the poll and the transport and conveyance of voters to and from polling station.",
  "5. No candidate shall be permitted to make use of printed posters, printed pamphlets, or any other printed material for the purpose of canvassing. Candidate may only utilize hand-made posters for the purpose of canvassing, provided that such hand-made posters are procured within theexpenditure limit set out herein above.",
  "6. Candidates may only utilize hand-made posters at certain places in the campus, which shall be notified in advance by the university authority.",
  "7. No candidate shall be permitted to carry out processions or public meetings, or in any way canvass or distribute propaganda outside the university campus."
  ,
  "8. No candidate shall, or shall his/her supporters, deface or cause any destruction to any property of the university campus, for any purpose whatsoever, without the prior written permission of the university authorities. All candidates shal1 be held jointly and severally liable for any destruction/defacing of any university property.",

  "9. During the election period the candidates may hold processions and/or public meetings, provided that such processions and/or public meetings do not, in any manner, disturb the classes and other academic and co-curricular activities of the university. Further, such procession/public meeting may not be held without the prior written permission of the university authority.",

  "10. The use of loudspeakers, vehicles and animals for the purpose of canvassing shall be prohibited.",
  "11. On the day of polling student organization and candidates shall: (i) co-operate with the officers on election duty to ensure peaceful and orderly polling and  complete freedom to the voters to exercise their franchise without being subjected to any  annoyance or obstruction; (ii) not serve or distribute any eatable, or other solid and liquid consumables, except water on polling day;  (iii) not hand out any propaganda on the polling day.",

  "12. Excepting the voters, no one without a valid pass/letters of authority from the election commission or from the university authorities shall enter the polling booths.",
  "13. The university authorities shall appoint impartial observers. If the candidates have any specific complaint or problem regarding the conduct of the elections they may bring the same to the notice of the observer.",
  "14. All candidates shall be jointly responsible for ensuring the cleaning up of the polling area within 48 hours of the conclusion of polling.",

  "15. Any contravention of any of the above recommendations may make the candidate liable to be stripped of his/her candidature, or his/her elected post, as the case may be. The university authorities may also take appropriate disciplinary action against such a violator.",
  "16. In addition to the above mentioned code of conduct, certain provisions of the Indian Penal Code, 1860 (Section 153-A and Chapter IX-A. “Offences Relating to Election”), may also be made applicable to student elections, if decided by the university authority."
];

const votingFor = [
  "-> Understanding who you are voting for requires careful research and evaluation of the candidates running for office. Here are some steps you can take to better understand the candidates and make an informed decision:",
  "-> Research the candidates: Look up the candidates running for office and read about their backgrounds, experience, and their views on important issues. You can find this information on their campaign websites, social media accounts, or news articles.",
  "-> Check their track record: If the candidate is an incumbent, check their voting record or their accomplishments while in office. This can give you an idea of their priorities and their effectiveness in representing their constituents.",
  "-> Attend candidate debates or town hall meetings: These events are a great way to see the candidates in action and hear their responses to tough questions. You can also ask them questions directly to get a better understanding of their views.",
  "-> Talk to others: Talk to people in your community, especially those who may have more knowledge about the candidates or the issues at hand. Their perspectives can help you form a more well-rounded opinion.",
  "-> Consider their values: Think about the values that are important to you, such as honesty, integrity, transparency, or inclusivity. Do the candidates share these values? Do they demonstrate them in their actions and words?",
  "-> Ultimately, it's important to approach the decision of who to vote for with an open mind and a willingness to learn. By doing your research, evaluating the candidates' qualifications and values, and engaging with others, you can make a more informed and confident decision at the ballot box.",
  "-> Do your research. Learn about the candidates and their positions on the issues that are important to you.",
  "-> Talk to your friends and classmates. Get their input on who they are planning to vote for.",
 "-> Make sure you are registered to vote. The deadline to register to vote may be different from the deadline to vote in the general election.",
 "-> Vote early. If you can, vote early so you don't have to worry about long lines on Election Day.",
 "-> Make your voice heard. Voting is one of the most important ways to make your voice heard in your community. Make sure you exercise your right to vote in every election."
];


// Home Function
const Home = () => {
  const router = useRouter()
  const [learnBox, setLearnBox] = useState(false);
  const [details, setDetails] = useState(eligibilityCriteria);
  const [topic, setTopic] = useState("Who are eligible to vote");

  return (
    <React.Fragment>
      <Head>
        <title>Home | Pollify</title>
      </Head>
      <div className={H.screen} >
        < div className={H.contentBox}>
          {/* navbar */}
          <div className={H.navbar}>
          <h3>Pollify</h3>

            <div className={H.navbarTitle}>
              <span style={{ color: "#2791d4" }}>Home</span>
              {/* <span>Learn</span> */}
              <span onClick={()=>{router.push("/about")}}>About</span>
              <span onClick={()=>{router.push("/vote")}} >Vote</span>
              <span onClick={()=>{router.push("/result")}} >Result</span>
            </div>
          </div>
          {/* banner img */}
          <div className={H.bannerImg} style={{ height: "700px", marginTop: "100px", position: "relative" }}>
            <img src={bannerImg} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
            <div className={H.bannerBox}>
              <span style={{ fontSize: "30px", fontWeight: "bold", marginTop: "30px",marginLeft: "40px",fontFamily: "'Eczar', serif" }}>
              Be a part of the change you wish to see. Vote for your student representative.
              </span>
              <Button variant="contained" sx={{ marginTop: "20px", marginBottom: "30px" }} onClick={()=>{router.push("/vote")}} >VOTE</Button>
            </div>
          </div>
          {/* tagline */}
          <div className={H.tagLine}>
            <span> Find the Power of Your Voice through Voting in the 2023 Election.
            </span>
          </div>
          {/* learn more block 1 */}
          <div className={H.learnBlock}>
            <div style={{ height: "100%", width: "50%", display: "flex", alignItems: "center", flexDirection: "column", backgroundColor: "#da1822" }} >
              <h2 style={{ marginTop: "15%",fontFamily: "'Eczar', serif" }}>Who is eligible to vote</h2>
              <Button variant="outlined" color="inherit" sx={{ marginTop: "5%", fontWeight: "bold" }} onClick={() => { setLearnBox(true); setDetails(eligibilityCriteria); setTopic("Who is eligible to vote") }} >Learn More</Button>
            </div>
            <img src={thinkingThaught} style={{ height: "100%", width: "50%", objectFit: "cover" }} alt="" />
          </div>
          {/* learn more block 2 */}
          <div className={H.learnBlock}>
            <img src={register} style={{ height: "100%", width: "50%", objectFit: "cover" }} alt=""/>
            <div style={{ height: "100%", width: "50%", display: "flex", alignItems: "center", flexDirection: "column", backgroundColor: "#359ada" }} >
              <h2 style={{ marginTop: "15%", fontFamily: "'Eczar', serif" }}>Voting Guidelines</h2>
              <Button variant="outlined" color="inherit" sx={{ marginTop: "5%", fontWeight: "bold" }} onClick={() => { setLearnBox(true); setDetails(voteContent); setTopic("Voting Guidelines") }} >Learn More</Button>
            </div>
          </div>
          {/* learn more block 3 */}
          <div className={H.learnBlock}>
            <div style={{ height: "100%", width: "50%", display: "flex", alignItems: "center", flexDirection: "column", backgroundColor: "#54ab5f" }} >
              <h2 style={{ marginTop: "15%", display: "flex", justifyContent: "center", fontFamily: "'Eczar', serif" }}>Understand who you are voting for</h2>
              <Button variant="outlined" color="inherit" sx={{ marginTop: "5%", fontWeight: "bold", fontFamily: "'Eczar', serif"}} onClick={() => { setLearnBox(true); setDetails(votingFor); setTopic("Understand Who you are Voting for") }}>Learn More</Button>
            </div>
            <img src={booth} style={{ height: "100%", width: "50%", objectFit: "cover" }} alt="" />
          </div>
          <div className={H.vote}>
            
            <Button variant="contained" sx={{ marginTop: "20px" }} onClick={()=>{router.push("/vote")}} >Vote Now</Button>
          </div>
          <div className={H.footer}>
            Contact us : pg900051@gmail.com
          </div>
        </div>
      </div>
      {learnBox && <Detail callback={() => { setLearnBox(false) }} topic={topic} details={details} />}
    </React.Fragment >
  )
}

// default exporting Home 
export default Home;