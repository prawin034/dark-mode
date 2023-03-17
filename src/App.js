import Wrapper from './components/Wrapper';
import { FcGoogle } from 'react-icons/fc';
import useLocalStorage from 'use-local-storage';
import {
  BsFacebook,
  BsLinkedin,
  BsTwitter,
  BsApple,
  BsToggleOn,
  BsToggleOff,
} from 'react-icons/bs';
import { useState } from 'react';

function App() {
  const [toggle, settoggle] = useState(false);
  const [theme, settheme] = useLocalStorage(toggle ? 'dark' : 'light');

  return (
    <div className="App" data-theme={theme}>
      <h1 className="heading">LOGIN</h1>
      <Wrapper>
        <div className="section">
          <div className="section_box">
            <FcGoogle size={20} />
            <BsFacebook size={20} />
            <BsLinkedin size={20} />
            <BsTwitter size={20} />
            <BsApple size={20} />
          </div>
          <div className="section_or">
            <div className="underline"></div>
            <div className="section_or_text">or</div>
            <div className="underline"></div>
          </div>

          <form className="section_form">
            <div className="section_form_box">
              <label htmlFor="email" className="section_form_box_label">
                E-MAIL
              </label>
              <input
                type="email"
                className="section_form_box_input"
                placeholder="enter your email"
                required
              />
            </div>
            <div className="section_form_box">
              <label htmlFor="password" className="section_form_box_label">
                PASSWORD
              </label>
              <input
                type="password"
                className="section_form_box_input"
                placeholder="enter your password"
                required
              />
            </div>
            <p className="section_form_p">
              <input type="checkbox" />
              REMEMBER ME
            </p>
            <button className="section_form_btn">LOGIN</button>

            <div className="section_form_theme">
              {toggle ? <div>DARK </div> : <div>LIGHT</div>}
              {toggle ? (
                <BsToggleOn
                  onClick={() => {
                    settoggle(false);
                    const newTheme = theme === 'light' ? 'dark' : 'light';
                    settheme(newTheme);
                  }}
                  size={40}
                  className="section_form_theme_mode"
                  cursor="pointer"
                />
              ) : (
                <BsToggleOff
                  onClick={() => {
                    settoggle(true);

                    settheme('light');

                    const newTheme = theme === 'dark' ? 'light' : 'dark';
                    settheme(newTheme);
                  }}
                  size={40}
                  className="section_form_theme_mode"
                  cursor="pointer"
                />
              )}
            </div>
          </form>
        </div>
      </Wrapper>
    </div>
  );
}

export default App;
