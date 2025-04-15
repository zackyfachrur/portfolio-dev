import Logo from "@/assets/web-logo.png";
import { Title, List } from "@/components/Text";
import Wave from "@/components/Wave";

export default function Footer() {
  return (
    <>
      <Wave />
      <footer className="flex justify-center flex-col items-center bg-green-900 h-[70vh] max-2xl:h-[50vh]">
        <div className="containers flex flex-col">
          <img src={Logo} alt="Logo Images" />
          <div className="flex gap-8 justify-between items-start">
            {/* List Wrapper */}
            <div>
              <Title>Feedback</Title>
              <ul>
                <List>Thank you for visiting this portfolio website</List>
                <List>Connect with me on LinkedIn, Github and Others</List>
              </ul>
            </div>
            {/* End List Wrapper */}

            {/* List Wrapper */}
            <div>
              <Title>Quick Links</Title>
              <ul className="cursor-pointer">
                <List>
                  <i className="ri-arrow-right-long-fill"></i> Home
                </List>
                <List>
                  <i className="ri-arrow-right-long-fill"></i> Project
                </List>
                <List>
                  <i className="ri-arrow-right-long-fill"></i> Resume
                </List>
                <List>
                  <i className="ri-arrow-right-long-fill"></i> Contact
                </List>
              </ul>
            </div>
            {/* End List Wrapper */}

            {/* List Wrapper */}
            <div>
              <Title>Let's Connect</Title>
              <ul>
                <List>
                  <i className="ri-mail-send-fill"></i> mochzackyfa@gmail.com
                </List>
                <List>
                  <i className="ri-whatsapp-fill"></i> +62-877-0357-7988
                </List>
                <List>
                  <i className="ri-github-fill"></i>{" "}
                  <a href="https://github.com/zackyfachrur" target="_blank">
                    github.com/zackyfachrur
                  </a>
                </List>
                <List>
                  <i className="ri-linkedin-box-fill"></i>{" "}
                  <a href="https://linkedin.com/in/mzackyfa" target="_blank">
                    linkedin.com/in/mzackyfa
                  </a>
                </List>
              </ul>
            </div>
          </div>
          {/* End List Wrapper */}
        </div>
      </footer>
    </>
  );
}
