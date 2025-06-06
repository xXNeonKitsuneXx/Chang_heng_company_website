import {
  FaFacebookSquare,
  FaInstagram,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-black flex text-center justify-center text-white p-[rem3]">
      <div className="my-6">
        <h3 className="font-bold text-2xl md:text-3xl">
          CHANG HENG COMPANY LIMITED
        </h3>
        {/* <h3 className="font-bold text-2xl md:text-3xl">CHANG HENG CO., LTD.</h3> */}
        <div className="flex justify-center my-3 font-bold text-2xl"></div>
        <ul className="grid grid-cols-2 items-center">
          <li className="hover:text-purple-500 hover:scale-125 hover:-translate-y-2 duration-500 flex justify-center">
            <a
              href="https://www.facebook.com/xXNekoLordXx/"
              target="_blank"
              className="text-4xl"
            >
              <FaFacebookSquare />
            </a>
          </li>
          <li className="hover:text-purple-500 hover:scale-125 hover:-translate-y-2 duration-500 flex justify-center">
            <a
              href="https://www.instagram.com/kitsune_ne_cs/"
              target="_blank"
              className="text-4xl"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
        <p className="mt-6">
          © Copyright all rights reserved - บริษัท ช่างเฮง จำกัด
        </p>
      </div>
    </footer>
  );
};
