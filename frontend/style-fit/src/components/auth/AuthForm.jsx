import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SocialIcon from './SocialIcon';

const socialIcons = [
  { name: 'Google', provider: 'google', href: '#' },
  { name: 'Facebook', provider: 'facebook', href: '#' },
  { name: 'LinkedIn', provider: 'linkedin', href: '#' },
];

const panelHeadingClass = "text-3xl font-extrabold mb-2 text-white tracking-tight";
const panelSubtextClass = "mb-8 text-center max-w-xs text-white text-lg";
const inputClass = "w-full px-3 py-2 border border-[#bda28d] rounded focus:outline-none focus:ring-2 focus:ring-[#769898] bg-white text-[#2D2D2D] placeholder-[#bda28d] shadow-sm";

const AuthForm = ({ type }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === 'login') {
      // Navigate to main page after successful login
      navigate('/main');
    } else {
      alert('Registration successful! (test message only)');
    }
  };

  const isLogin = type === 'login';

  // Right panel content
  const rightPanel = isLogin
    ? {
        heading: 'Welcome to Vesture!',
        subtext: 'Let’s dress things up. Log in to get started.',
        button: 'SIGN UP',
        buttonAction: () => navigate('/register'),
      }
    : {
        heading: 'Let’s get you styled.',
        subtext: 'Sign up to start mixing looks.',
        button: 'SIGN IN',
        buttonAction: () => navigate('/login'),
      };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F1E9]">
      <div className="w-full max-w-4xl h-[540px] flex shadow-2xl rounded-3xl overflow-hidden border border-[#bda28d] bg-white/0">
        {/* Left Panel: Form */}
        <div className="flex-1 flex flex-col justify-center items-center px-12 py-12 bg-[#f9e8ce] rounded-l-3xl">
          <h2 className="text-4xl font-extrabold mb-2 text-[#2D2D2D] tracking-tight">{isLogin ? 'Sign in' : 'Create Account'}</h2>
          <div className="flex space-x-4 mb-6 mt-4">
            {socialIcons.map((s) => (
              <a
                key={s.name}
                href={s.href}
                className="w-11 h-11 flex items-center justify-center rounded-full border border-[#bda28d] bg-white shadow-sm hover:bg-[#d9dbe7] transition text-xl text-[#769898]"
                title={`Sign in with ${s.name}`}
              >
                <SocialIcon provider={s.provider} />
              </a>
            ))}
          </div>
          <span className="text-[#2D2D2D] text-sm mb-6">or use your account</span>
          <form className="w-full max-w-xs space-y-3" onSubmit={handleSubmit}>
            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={inputClass}
            />
            <input
              name="password"
              type="password"
              required
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className={inputClass}
            />
            <div className="flex items-center justify-between mt-1"></div>
            <button
              type="submit"
              className="w-full py-2 mt-2 rounded-lg bg-[#d49f91] text-white font-semibold shadow-md hover:bg-[#769898] hover:text-white transition"
            >
              {isLogin ? 'SIGN IN' : 'SIGN UP'}
            </button>
          </form>
        </div>

        {/* Divider */}
        <div className="w-[2px] h-full bg-[#e5d3c0] shadow-inner"></div>

        {/* Right Panel: Welcome / Toggle */}
        <div className="flex-1 flex flex-col justify-center items-center px-12 py-12 bg-[#bda28d] rounded-r-3xl">
          <h2 className={panelHeadingClass}>{rightPanel.heading}</h2>
          <p className={panelSubtextClass}>{rightPanel.subtext}</p>
          <button
            onClick={rightPanel.buttonAction}
            className="px-8 py-2 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-[#769898] transition shadow-sm"
          >
            {rightPanel.button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;