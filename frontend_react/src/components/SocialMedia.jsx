import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai'

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/sumanpaul_1"><BsTwitter /></a>
    </div>
    <div>
      <a href="www.linkedin.com/in/suman-paul-237339223/"><AiFillLinkedin /></a>
    </div>
    <div>
      <a href="github.com/SumanPaul1"><AiFillGithub /></a>
    </div>
  </div>
);

export default SocialMedia;