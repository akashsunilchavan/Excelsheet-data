import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Alert from "@/components/Alert";
const OnePageWebsite = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append(" message", formData.message);

    fetch("https://avivasasset.com/api/send-email.php", {
      method: "POST",
      body: data,
    })
      .then((response) => response.text())
      .then(() => {
        setAlertMessage(
          "Thank you for submitting the form. We will get back to you shortly!"
        );
        setShowAlert(true);

        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      })
      .catch(() => {
        setAlertMessage("Something went wrong. Please try again later.");
        setShowAlert(true);
      });
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [activeSection, setActiveSection] = useState("");
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  let lastScrollTop = 0;

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const sections = document.querySelectorAll("section");
    let scrollPosition = scrollY + 150;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");
      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        setActiveSection(sectionId);
      }
    });

    if (scrollY > lastScrollTop) {
      setIsScrollingDown(true); // Scrolling down
    } else {
      setIsScrollingDown(false); // Scrolling up
    }
    lastScrollTop = scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70,
        behavior: "smooth",
      });
    }
  };

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const images = [
    {
      src: "/Assessment-of-Value-Report.jpg",
      content: (
        <div>
          <h1 className="xl:text-6xl lg:text-6xl text-2xl mt-14 xl:mt-0 lg:mt-0 font-bold font-arimo">
            {" "}
            Assessment of Value Report
          </h1>
          <p className="xl:text-xl lg:text-xl font-semibold font-inter mt-2 mb-4">
            We evaluate fund performance, costs and service quality to ensure
            you receive the best value for your investments.
          </p>
          <a className="bg-[#3601CF] py-2 px-4 rounded-2xl">Lern More</a>
        </div>
      ),
    },
    {
      src: "/Our-Funds.jpg",
      content: (
        <div>
          <h1 className="xl:text-6xl lg:text-6xl text-2xl mt-14 xl:mt-0 lg:mt-0 font-bold font-arimo">
            Long-Term Performance Excellence
          </h1>
          <p className="xl:text-xl lg:text-xl font-semibold font-inter mt-2 mb-4">
            Our strategic, long-term investment approach balances risk and
            reward for sustainable growth and consistent returns.
          </p>
          <a className="bg-[#3601CF] py-2 px-4 rounded-2xl">Lern More</a>
        </div>
      ),
    },
    {
      src: "/Responsible-Investing.jpg",
      content: (
        <div>
          <h1 className="xl:text-6xl lg:text-6xl text-2xl mt-14 xl:mt-0 lg:mt-0 font-bold font-arimo">
            {" "}
            Responsible Investing & Stewardship
          </h1>
          <p className="xl:text-xl lg:text-xl font-semibold font-inter mt-2 mb-4">
            We integrate ESG principles into our investments, ensuring ethical,
            responsible and sustainable financial growth.
          </p>
          <a className="bg-[#3601CF] py-2 px-4 rounded-2xl">Lern More</a>
        </div>
      ),
    },
    {
      src: "/ESG-Integration.jpg",
      content: (
        <div>
          <h1 className="xl:text-6xl lg:text-6xl text-2xl mt-14 xl:mt-0 lg:mt-0 font-bold font-arimo">
            {" "}
            Company Engagement & ESG Integration
          </h1>
          <p className="xl:text-xl lg:text-xl font-semibold font-inter mt-2 mb-4">
            We actively engage with companies to promote corporate
            responsibility and drive positive, sustainable change.
          </p>
          <a className="bg-[#3601CF] py-2 px-4 rounded-2xl">Lern More</a>
        </div>
      ),
    },
    {
      src: "Maximizing-Client.jpg",
      content: (
        <div>
          <h1 className="xl:text-6xl lg:text-6xl text-2xl mt-14 xl:mt-0 lg:mt-0   font-bold font-arimo">
            Maximizing Client Value
          </h1>
          <p className="xl:text-xl lg:text-xl font-semibold font-inter mt-2 mb-4">
            Through expert fund management and cost efficiency, we deliver
            investment solutions aligned with your long-term goals.
          </p>
          <a className="bg-[#3601CF] py-2 px-4 rounded-2xl">Lern More</a>
        </div>
      ),
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-transform duration-300 ${
          isScrollingDown ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="flex overflow-x-auto justify-between items-center p-4 px-6 max-w-7xl mx-auto">
          <a href="/">
            <div className="w-28">
              <img src="/Avivasasset-Logo.jpeg" alt="Logo" />
            </div>
          </a>
          <nav>
            <ul className="flex space-x-4 px-10  font-inter font-semibold">
              {["home", "about", "services", "contact"].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className={`capitalize font-medium px-3 py-2 ${
                      activeSection === section
                        ? "text-[#421853] border-b-2 border-blue-500"
                        : "text-black "
                    }`}
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="text-center">
          <div className="relative w-full xl:h-screen lg:h-screen h-96 flex items-center justify-center bg-gray-900 overflow-hidden">
            <div className="w-full h-full flex justify-center items-center relative">
              {images.map((item, index) => (
                <div
                  key={index}
                  className={`absolute w-full h-full transition-all duration-1000 transform ${
                    index === activeIndex
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                >
                  <img
                    src={item.src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover opacity-40"
                  />

                  <div className="absolute top-1/2  xl:w-[800px] lg:w-[800px]   transform -translate-y-1/2 text-start text-white  p-6 rounded-lg">
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="about">
          <div className="py-16 xl:px-16 lg:px-16 px-4">
            <div className="xl:flex lg:flex xl:space-x-10  lg:space-x-10">
              <img src="/About-Avivasasset.jpg" className="xl:h-96 lg:h-96" />
              <div className="flex flex-col xl:space-y-6 lg:space-y-6">
                <h1 className="xl:text-3xl lg:text-3xl text-2xl font-semibold font-arimo mt-4 xl:mt-0 lg:mt-0">
                  About Avivas Asset
                </h1>

                <p className="font-inter">
                  At Avivas Asset, we take a distinct approach to investment
                  management. As one of the UK’s emerging fund management firms,
                  we are dedicated to delivering long-term value for our clients
                  while balancing risk and return with precision.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="services">
          <div>
            <div className="xl:flex lg:flex xl:flex-col lg:flex-col text-center xl:px-20 lg:px-20 px-4 space-y-6">
              <h1 className="xl:text-4xl lg:text-4xl text-2xl font-arimo text-black">
                Welcome to Avivas Asset Our{" "}
                <strong className="text-[#480055]">Services</strong>{" "}
              </h1>
              <p className="font-inter">
                Avivas Asset is a leading investment management firm dedicated
                to helping clients achieve their financial goals. As an
                independent and forward-thinking company, we are committed to
                managing assets responsibly, ensuring long-term value for our
                clients.
              </p>
              <h1 className="xl:text-3xl lg:text-2xl text-2xl font-bold  font-arimo  border p-2 border-[#480055] rounded-2xl">
                {" "}
                <strong className="text-[#3601CA]"> UK Individual </strong>
                -Investors
              </h1>
            </div>

            <div className="xl:flex lg:flex xl:space-x-10 space-y-4  xl:space-y-0 lg:space-y-0  lg:space-x-10 xl:px-20 px-4 lg:px-20 py-10">
              <div className=" xl:w-1/2 lg:w-1/2 space-y-4 border-2 p-4 border-[#480055] rounded-2xl">
                <img src="/Stewardship-Responsible.jpg" />
                <h1 className="xl:text-2xl lg:text-2xl text-xl font-semibold font-arimo">
                  Stewardship and Responsible Investing
                </h1>
                <p className="font-inter">
                  At Avivas Asset, we prioritize responsible investing aligning
                  financial growth with sustainability. Our commitment goes
                  beyond expectations; it’s about making a lasting impact.
                </p>
              </div>

              <div className=" xl:w-1/2 lg:w-1/2 space-y-4 border-2 p-4 border-[#480055] rounded-2xl">
                <img src="/Climate-Action.jpg" />
                <h1 className="xl:text-2xl lg:text-2xl text-xl font-semibold font-arimo">
                  Commitment to Climate Action
                </h1>
                <p className="font-inter">
                  Climate change is a critical challenge. Without action,
                  temperatures could rise by 3+ degrees by 2100, threatening
                  global stability. We invest sustainably to drive a
                  lower-carbon future.
                </p>
              </div>
            </div>
            <div className="xl:px-10 lg:px-10 px-4 py-4">
              <div className="border py-4 space-y-2 border-[#480055] rounded-2xl text-center xl:px-10 lg:px-10">
                <h1 className="xl:text-4xl lg:text-4xl text-2xl font-bold  font-arimo  ">
                  {" "}
                  <strong className="text-[#480055]"> Scam Alert </strong>–
                  Impersonation Fraud
                </h1>
                <p className="text-xl ">
                  Fraudsters are posing as Avivas Asset using fake websites and
                  documents to steal personal information and money. Stay
                  vigilant and verify all communications.
                </p>
              </div>
            </div>
            <div className="px-10">
              <hr className="border-[#480055] my-6 border-2" />{" "}
            </div>
            <div className="py-10">
              <div className="px-20 text-center ">
                <h1 className="text-3xl font-bold  font-arimo  border p-2 border-[#480055] rounded-2xl">
                  {" "}
                  <strong className="text-[#3601CA]"> International </strong>
                </h1>
              </div>

              <div className="xl:flex lg:flex xl:space-x-10 px-4 space-y-4 xl:space-y-0  lg:space-y-0 lg:space-x-10 xl:px-20 lg:px-20 py-10">
                <div className=" xl:w-1/2 lg:w-1/2 space-y-4 border-2 p-4 border-[#480055] rounded-2xl">
                  <img src="/Responsible-Investment.jpg" />
                  <h1 className="text-2xl font-semibold font-arimo">
                    Responsible Investment
                  </h1>
                  <p className="font-inter">
                    At Avivas Assett, responsible investing is at the core of
                    our values shaping both our history and our future.
                  </p>
                </div>

                <div className=" xl:w-1/2 lg:w-1/2 space-y-4 border-2 p-4 border-[#480055] rounded-2xl">
                  <img src="/Our-Funds.jpg" />
                  <h1 className="text-2xl font-semibold font-arimo">
                    Our Funds
                  </h1>
                  <p className="font-inter">
                    Explore Avivas Asset diverse fund range, including fact
                    sheets, prices, performance insights and investment
                    literature.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact">
          <div className="text-center space-y-10 xl:px-20 lg:px-20 px-4 mb-20">
            <h2 className="xl:text-4xl lg:text-4xl text-2xl font-semibold font-arimo">
              If any query{" "}
              <strong className="text-[#480055]">Contact us</strong>
            </h2>

            <form
              onSubmit={handleSubmit}
              className="border-2 p-2 border-black rounded-2xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name*"
                    className="mt-1 p-2 w-full  text-white bg-[#480055] border-white border-2 rounded-md peer"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email*"
                    className="mt-1 p-2 w-full  text-white bg-[#480055] border-white border-2 rounded-md peer"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mt-4 relative">
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="phone."
                  className="mt-1 p-2 w-full text-white bg-[#480055] border-white border-2 rounded-md peer"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mt-4 relative">
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  className="mt-1 p-2 w-full  text-white bg-[#480055] border-white border-2 rounded-md peer"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                />
              </div>

              <div className="py-4">
                <button
                  type="submit"
                  className="bg-[#7c228b] text-white px-4 py-2 rounded hover:bg-[#480055]"
                >
                  Send Message
                </button>
                {showAlert && (
                  <Alert message={alertMessage} onClose={closeAlert} />
                )}
              </div>
            </form>
          </div>

          <div className="bg-gradient-to-r from-[#480055] to-black text-white  flex flex-col justify-center items-center  px-6">
            <div className="xl:flex lg:flex justify-between w-full max-w-3xl p-4">
              <div className="flex flex-col ">
                <a href="/terms-and-conditions" className="hover:underline">
                  Terms and Conditions
                </a>
                <a href="/privacy-policy" className="hover:underline mt-2">
                  Privacy Policy
                </a>
              </div>

              <div className="flex flex-col xl:pt-0 lg:pt-0 pt-4 ">
                <p className="text-white font-inter">
                  <strong>AVIVAS ASSET MANAGEMENT LIMITED</strong> <br />
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=167-169+Great+Portland+Street,+London,+W1W+5PF"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-gray-300"
                  >
                    167-169 GREAT PORTLAND STREET, 5TH FLOOR <br />
                    LONDON, ENGLAND W1W 5PF
                  </a>
                  <br />
                  Email:
                  <a
                    href="mailto:info@avivasasset.com"
                    className="underline hover:text-gray-300"
                  >
                    <strong className="text-blue-500">
                      {" "}
                      info@avivasasset.com{" "}
                    </strong>
                  </a>
                </p>
              </div>
            </div>

            <hr className="w-full border-gray-700 my-4 " />
            <div className="text-sm mb-4">
              © {new Date().getFullYear()}. All Rights Reserved by AVIVAS ASSET
              MANAGEMENT LIMITED
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default OnePageWebsite;
