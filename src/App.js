import React from 'react';
import heading from './pic/heading.png';
import overview from './pic/overview.png';
import campaign from './pic/campaign.png';
import influencer from './pic/influencer.png';
import arrow from './pic/arrow.png';
import search from './pic/search.png';
import filter from './pic/filter.png';
import BYN from './pic/BYN.png';
import instagram from './pic/instagram.png';
import facebook from './pic/facebook.png';
import linkedin from './pic/linkedin.png';
import twitter from './pic/twitter.png';
import youtube from './pic/youtube.png';
import Rishab from './pic/Rishab.png';
import Bhuvan from './pic/Bhuvan.png';
import Monkey from './pic/Monkey.png';
import './App.css';

function App() {
  return (
    <div className="master">
    <div className="Navbar">
      <img src={heading} className="heading" alt="heading"/>
      <div className="subNav">
        <p className="overview"><img src={overview} alt="overview"/><t>OVERVIEW</t></p>
        <p className="campaign"><img src={campaign} alt="campaign"/><t>CAMPAIGN</t></p>
        <p className="influencer"><img src={influencer} alt="influencer"/><t>INFLUENCER</t></p>
        </div>
    </div>
    <div className="Header">
    <img src={arrow} className="arrow" alt="arrow"/>
    <img src={search} className="search" alt="search"/>
    <input type="text" className="searchbox" placeholder="Search Influencer"/>
    <button className="CSV">Import CSV</button>
    <button className="newInf">+ New Influencer</button>
    </div>
    <div className="Body">
      <p className="filter">Filters <img src={filter} className="filterImg"/></p>
      <div className="checkInfo">
      <input type="checkbox" className="check"/>
        <div className="infoBox">
          <img src={BYN} className="infoImg"/>
          <div className="basicInfo">
            <p>BYN - Be You Nick</p>
            <p className="smallBasicInfo">9678543234<br/>rishab@gypsycouple.com</p>
          </div>
          <div className="socialInfo">
          <img src={facebook} className="socialImg" alt="socialImg"/><t className="socialfigure">1.3M</t>
          <img src={instagram} className="socialImg" alt="socialImg"/><t className="socialfigure">2.5M</t>
          <img src={linkedin} className="socialImg" alt="socialImg"/><t className="socialfigure">900k</t>
          <img src={twitter} className="socialImg" alt="socialImg"/><t className="socialfigure">700k</t>
          <img src={youtube} className="socialImg" alt="socialImg"/><t className="socialfigure">10.3M</t>
          </div>
          <div className="tags">
            Couple
            <button className="tagbutton1">Travel</button>
            <button className="tagbutton2">Sports</button>
            <button className="tagbutton3">Travel</button>
          </div>
          <div className="footer">
            <t1>Updated by: </t1><t2> Sabista 13-09-2019</t2><t3>Added by: </t3><t2> Sabista 13-09-2019</t2>
            <button className="Delete">Delete</button>
            <button className="Edit">Edit</button>
            <button className="View">View</button>
          </div>
        </div>
      </div><br/>

      <div className="checkInfo">
      <input type="checkbox" className="check"/>
        <div className="infoBox">
          <img src={Rishab} className="infoImg"/>
          <div className="basicInfo">
            <p>Rishab Shah</p>
            <p className="smallBasicInfo">9678543234<br/>rishab@gypsycouple.com</p>
          </div>
          <div className="socialInfo">
          <img src={facebook} className="socialImg" alt="socialImg"/><t className="socialfigure">1.3M</t>
          <img src={instagram} className="socialImg" alt="socialImg"/><t className="socialfigure">2.5M</t>
          <img src={linkedin} className="socialImg" alt="socialImg"/><t className="socialfigure">900k</t>
          <img src={twitter} className="socialImg" alt="socialImg"/><t className="socialfigure">700k</t>
          <img src={youtube} className="socialImg" alt="socialImg"/><t className="socialfigure">10.3M</t>
          </div>
          <div className="tags">
            Male
            <button className="tagbutton1">Travel</button>
            <button className="tagbutton2">Sports</button>
            <button className="tagbutton3">Travel</button>
          </div>
          <div className="footer">
            <t1>Updated by: </t1><t2> Sabista 13-09-2019</t2><t3>Added by: </t3><t2> Sabista 13-09-2019</t2>
            <button className="Delete">Delete</button>
            <button className="Edit">Edit</button>
            <button className="View">View</button>
          </div>
        </div>
      </div><br/>

      <div className="checkInfo">
      <input type="checkbox" className="check"/>
        <div className="infoBox">
          <img src={Bhuvan} className="infoImg"/>
          <div className="basicInfo">
            <p>Bhuvan Bam</p>
            <p className="smallBasicInfo">9678543234<br/>rishab@gypsycouple.com</p>
          </div>
          <div className="socialInfo">
          <img src={facebook} className="socialImg" alt="socialImg"/><t className="socialfigure">1.3M</t>
          <img src={instagram} className="socialImg" alt="socialImg"/><t className="socialfigure">2.5M</t>
          <img src={linkedin} className="socialImg" alt="socialImg"/><t className="socialfigure">900k</t>
          <img src={twitter} className="socialImg" alt="socialImg"/><t className="socialfigure">700k</t>
          <img src={youtube} className="socialImg" alt="socialImg"/><t className="socialfigure">10.3M</t>
          </div>
          <div className="tags">
            Male
            <button className="tagbutton1">Travel</button>
            <button className="tagbutton2">Sports</button>
            <button className="tagbutton3">Travel</button>
          </div>
          <div className="footer">
            <t1>Updated by: </t1><t2> Sabista 13-09-2019</t2><t3>Added by: </t3><t2> Sabista 13-09-2019</t2>
            <button className="Delete">Delete</button>
            <button className="Edit">Edit</button>
            <button className="View">View</button>
          </div>
        </div>
      </div><br/>

      <div className="checkInfo">
      <input type="checkbox" className="check"/>
        <div className="infoBox">
          <img src={Monkey} className="infoImg"/>
          <div className="basicInfo">
            <p>Rishab Shah</p>
            <p className="smallBasicInfo">9678543234<br/>rishab@gypsycouple.com</p>
          </div>
          <div className="socialInfo">
          <img src={facebook} className="socialImg" alt="socialImg"/><t className="socialfigure">1.3M</t>
          <img src={instagram} className="socialImg" alt="socialImg"/><t className="socialfigure">2.5M</t>
          <img src={linkedin} className="socialImg" alt="socialImg"/><t className="socialfigure">900k</t>
          <img src={twitter} className="socialImg" alt="socialImg"/><t className="socialfigure">700k</t>
          <img src={youtube} className="socialImg" alt="socialImg"/><t className="socialfigure">10.3M</t>
          </div>
          <div className="tags">
            Male
            <button className="tagbutton1">Travel</button>
            <button className="tagbutton2">Sports</button>
            <button className="tagbutton3">Travel</button>
          </div>
          <div className="footer">
            <t1>Updated by: </t1><t2> Sabista 13-09-2019</t2><t3>Added by: </t3><t2> Sabista 13-09-2019</t2>
            <button className="Delete">Delete</button>
            <button className="Edit">Edit</button>
            <button className="View">View</button>
          </div>
        </div>
      </div><br/>

      <div className="checkInfo">
      <input type="checkbox" className="check"/>
        <div className="infoBox">
          <img src={BYN} className="infoImg"/>
          <div className="basicInfo">
            <p>Rishab Shah</p>
            <p className="smallBasicInfo">9678543234<br/>rishab@gypsycouple.com</p>
          </div>
          <div className="socialInfo">
          <img src={facebook} className="socialImg" alt="socialImg"/><t className="socialfigure">1.3M</t>
          <img src={instagram} className="socialImg" alt="socialImg"/><t className="socialfigure">2.5M</t>
          <img src={linkedin} className="socialImg" alt="socialImg"/><t className="socialfigure">900k</t>
          <img src={twitter} className="socialImg" alt="socialImg"/><t className="socialfigure">700k</t>
          <img src={youtube} className="socialImg" alt="socialImg"/><t className="socialfigure">10.3M</t>
          </div>
          <div className="tags">
            Male
            <button className="tagbutton1">Travel</button>
            <button className="tagbutton2">Sports</button>
            <button className="tagbutton3">Travel</button>
          </div>
          <div className="footer">
            <t1>Updated by: </t1><t2> Sabista 13-09-2019</t2><t3>Added by: </t3><t2> Sabista 13-09-2019</t2>
            <button className="Delete">Delete</button>
            <button className="Edit">Edit</button>
            <button className="View">View</button>
          </div>
        </div>
      </div><br/>

    </div>
    </div>
  );
}

export default App;
