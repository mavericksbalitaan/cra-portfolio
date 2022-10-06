import React from 'react';
import '../stylesheets/contact.scss';
import { Button, TextField } from '@mui/material';
import { Send } from '@mui/icons-material';
// import ThreeScene from './ThreeScene';
import Clock from '../components/Clock';
import '../stylesheets/animation.scss';
import '../stylesheets/loader.scss';
import Loader from '../utils/Loader';
import Map from '../components/Map';

function Contact() {
  Loader();

  return (
    <>
      <div className="loader-container">
        <div className="loader" />
      </div>
      <section className="container">
        <div className="content transition">
          <h2>
            I&apos;m always interested in hearing about new projects, so if
            you&apos;d like to chat please get in touch.
          </h2>
          <Map />
        </div>
        <form
          action="https://formspree.io/f/xwkyqzow"
          method="POST"
          className="transition"
        >
          <TextField
            id="filled-basic"
            label="Name"
            name="Name"
            variant="filled"
            autoFocus
            type="text"
            placeholder="Mavericks Balitaan"
            required
            sx={{
              width: '80%',
            }}
          />
          <TextField
            id="filled-basic"
            label="Email"
            name="Email"
            variant="filled"
            type="email"
            placeholder="balitaanmavericks@gmail.com"
            required
            sx={{
              width: '80%',
            }}
          />
          <TextField
            id="filled-basic"
            label="Message"
            name="Message"
            variant="filled"
            type="text"
            placeholder="Your message here..."
            required
            multiline
            rows={6}
            sx={{
              width: '80%',
            }}
          />
          <Button variant="contained" color="blue" type="submit">
            Send Message &nbsp;
            <Send />
          </Button>
        </form>
      </section>
      <Clock />
      {/* <ThreeScene /> */}
    </>
  );
}

export default Contact;
