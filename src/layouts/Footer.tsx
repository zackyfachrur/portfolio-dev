import Logo from "@/assets/web-logo.png";
import { Title, List } from "@/components/Text";
import Wave from "@/components/Wave";

export default function Footer() {
  return (
    <>
      <div className="h-full">
        <Wave />
      </div>
      <footer className="flex justify-center flex-col items-center bg-green-900 h-[70vh] max-lg:h-full max-lg:py-24 max-2xl:h-[50vh] max-sm:mt-52">
        <div className="containers flex flex-col">
          <img src={Logo} alt="Logo Images" />
          <div className="grid grid-cols-3 gap-8 justify-between items-start max-xl:grid-cols-2 max-lg:grid-cols-1">
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
