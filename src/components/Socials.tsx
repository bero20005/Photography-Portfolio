import {
  ImFacebook,
  ImInstagram,
  ImYoutube
} from 'react-icons/im'


const Socials = () => {
  return <div className="hidden xl:flex ml-24 text-white">
    <ul className='flex gap-x-4'>
      <li>
        <a href="http://www.facebook.com" target='_blank'>
        <ImFacebook className='text-blue-800' />
        </a>
      </li>
      <li>
        <a href="http://www.instagram.com" target='_blank'>
        <ImInstagram  className='text-orange-500'/>
        </a>
      </li>
      <li>
        <a href="http://www.youtube.com" target='_blank'>
        <ImYoutube  className='text-red-500'/>
        </a>
      </li>
    </ul>
  </div>;
};

export default Socials;