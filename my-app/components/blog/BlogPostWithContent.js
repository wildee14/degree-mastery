import React from 'react';
import { connect } from 'react-redux';
import BlogPostSnippet from './BlogPostSnippet';

export class BlogPostWithContent extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col s1"></div>
            <div className="col s10 post">
              <div className='row'>
                <div className='col s12'>
                  <h2 className='center post'>HOW I DID EARLY GRADUATION</h2>
                  <img src="{this.props.image1}" alt=""/>
                  <p>My plan when I started college was just to put in extra hours in order to be able
                     go easy in my later years of college. I knew that later most seniors want to 
                     only have 12 credit hours so that they have time to do fun stuff. I am someone that
                     always took the hardest courses in high school and knew that I could apply the same
                     level of concentration to the college coursework.<br />
                     The transition of a couple more hours per semester into an entirely new frame of mind
                     occured pretty quickly once I started thinking about the <i><strong>possibiilities</strong></i>.
                     If I ramp up my courses, I can graduate in half the time as everyone else. I started thinking
                     about what I would do if I had freed up two extra years of my life and my mind went wild.
                     I started listening to podcasts where people spoke about traveling the world and living
                     life on their own terms without concern for mortages/taxes/office living. I knew that I 
                     wanted this immediately. The only problem was that I had 100 credit hours left and no clue about
                     how to actually achieve my goal of getting out of college ASAP. I knew that my desire to do the 
                     things I wanted would mean that I would miss out on other experiences like more college friendships,
                     intern positions, and all of the things that come with college. But I knew that I wanted to reach
                     my goal so I started digging into my courses left to see what I could do.</p>

                  <h4>There Is So Much Red Tape</h4>
                  <p>In researching the process of graduating early, I realized that there is almost nothing set in stone
                     that requires a student to need to take the full four years. I thought I was misssing something. 
                     I spoke to the dean of engineering to see if I needed any extra steps and the only thing was approval
                     if I wanted to take more than 21 credit hours. That was it. So as long as I meet the requirements
                     of the degree then I can have it essentially whenver I want. There are typically restrictions
                     around the number of transfer credits but that is about it as far as limits on courses.
                     So that means that if I just add 2 courses to every semester and add a couple more my last
                     semester, then I can graduate in 2 years and get started traveling.
                  </p>
                  <h4>Motivation Is Everything</h4>
                  <p>This lit a fire in me like nothing else. I knew that I wanted to start working but once I realized
                     that I could realistically catalyze my life into a nomadic career, I was a motivated machine.
                     This is something that is <i>KEY</i> in order to replicate my results. You need a <b>defined reason to 
                     want to work hard</b>. And this can is the only way you can consistently turn down parties, netflix,
                     slack, and all the typical things that college kids resort to. I was out and about all day everyday 
                     for essentially the rest of my college career. I started getting more involved in clubs and being 
                     more social. I knew that my time is a lot shorter than those around me and I wouldn't let that go to
                     waste.
                  </p>

                  <h4>Hard Work Is No Joke</h4>
                  <p>I worked consistently 4-8 hours a day everyday on homework, studying, and research. This is no easy task.
                     But I knew what I was working for and so nothing would stop me. The lifestyle I lived had to be 
                     reconstructed to make sure that free time is a luxury and the rest is spent on school, friends, or
                     clubs. I didn't allow myself to slack because that would mean that I would lose time with a get together
                     or vital studying for a test that I didn't know about until a couple days prior.
                  </p>
                  <h4>Things Are Easier Now</h4>
                  <p>I worked alot but there were many tools that I didn't know about or that didn't fully exist.
                     <a href='https://clep.collegeboard.org/school-policy-search'>Clep Exams</a>
                     are the biggest thing that I should have done. They allow you to test out of many intro level courses.
                     This may not sound super beneficial but in a game of inches, a couple credits here and there will
                     dramatically increase the likelihood that you will graduate on your desired timeframe.
                  </p>
                  <h4>Count The Numbers</h4>
                  <p>Let's say that you have a degree that requires 120 credit hours. You take the minimum 12 credit hours
                     per semester. You take 6 credit hours every summer. That will allow you to reach the four year graduation.
                     So let's add more realistic conditions along with Clep help. You have 15 credits from high school, 
                     so that would be 105 credits left. You work really hard during the summers and do 2 Clep exams per summer
                     and one per school year. Let's assume clep is 6 credits. So 6 Clep exams will total to 36 credits.
                     So you are already at 70 credits without even attending the university. You buckle down from the start
                     and do an average of 18 credits per semester and 6 credits per summer. You will be done at the two year
                     mark without even having to do any ridiculous 25 credit semesters <i>(while working)</i>like me. 
                     But an important disclaimer is that all universities are different and not all places allow certain Cleps
                     and transfer credits. So I truly cannot overstate the value in checking the university's policy on everything
                     if you plan on going down this route.
                  </p>
                </div>
              </div>
            </div>
            <div className="col s1"></div>
        </div>
      </div>
    )
  }
}

export default connect()(BlogPostWithContent);
