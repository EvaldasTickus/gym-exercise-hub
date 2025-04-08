import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  setIsContactVisible: (isVisible: boolean) => void;
}

const ContactUs = ({ setIsContactVisible }: Props) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    setIsContactVisible(inView);
  }, [inView, setIsContactVisible]);

  return (
    <section ref={ref} id="contact" className="bg-zinc-950">
      <div className="grid md:grid-cols-2 h-auto items-center justify-items-center px-4 py-10 text-center">
        <div>
          <div className="flex flex-col gap-4 font-bold text-2xl md:text-4xl">
            <p className="contact-text">Phone: +37055555559</p>
            <p className="contact-text">
              Adress:{" "}
              <span className="text-white">Kauboju 13, Kaunas, Lithuania</span>
            </p>
            <p className="contact-text">Fitness Hub</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-40 md:mt-0">
          <h1 className="contact-header mb-5 text-4xl font-bold">Contact Us</h1>
          <form className="h-auto w-auto my-border px-4 py-8 text-center bg-gradient-to-r rounded-xl border-2 from-[#b76cf5] to-[#290348] text-white">
            <div className="p-2 md:p-5">
              <label
                className="block text-xl pb-4 font-semibold whitespace-nowrap"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                className="w-full p-2 text-lg focus:outline-0 border-b-2 font-bold text-center"
                type="text"
              />
            </div>
            <div className="p-2 md:p-5">
              <label
                className="block text-xl pb-4 font-semibold whitespace-nowrap"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full p-2 text-lg focus:outline-0 border-b-2 font-bold text-center"
                type="text"
              />
            </div>
            <div className="p-2 md:p-5">
              <label
                className="block text-xl pb-4 font-semibold whitespace-nowrap"
                htmlFor="message"
              >
                Your Message
              </label>
              <textarea
                className="w-full p-2 text-sm font-semibold focus:outline-0 border-b-2"
                placeholder="Type here..."
                rows={4}
                cols={50}
              />
            </div>
            <div>
              <button className="w-11/12 rounded-xl border-2 border-white cursor-pointer mt-2 py-2 text-lg font-semibold bg-gradient-to-t from-[#5927ef] to-[#48097b] hover:from-[#6a3cf7] hover:to-[#5406a3]">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
